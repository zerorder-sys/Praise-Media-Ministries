export async function GET() {
  try {
    const res = await fetch("https://www.youtube.com/@praisemediaproductions7545/streams", {
      cache: "no-store",
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.9"
      }
    });
    const text = await res.text();

    // Extract video IDs
    const videoIds = [...text.matchAll(/"videoId":"([a-zA-Z0-9_-]{11})"/g)].map(m => m[1]);
    const uniqueIds = [...new Set(videoIds)].slice(0, 6);

    // Extract titles paired with videoIds using a broader match
    const videos = [];
    const videoRenderer = [...text.matchAll(/"videoId":"([a-zA-Z0-9_-]{11})"[^}]*?"text":"([^"]{5,120})"/g)];
    
    const seen = new Set();
    for (const match of videoRenderer) {
      const [, id, title] = match;
      if (!seen.has(id) && !title.includes('\\u') && title.length > 5) {
        seen.add(id);
        videos.push({ id, title });
        if (videos.length >= 6) break;
      }
    }

    // Fallback: just use IDs with generic titles
    if (videos.length === 0) {
      for (const id of uniqueIds) {
        videos.push({ id, title: 'Live Stream' });
      }
    }

    return Response.json({ status: 'success', videos });
  } catch (err) {
    console.error('Portfolio API error:', err);
    return Response.json({ status: 'error', videos: [] });
  }
}
