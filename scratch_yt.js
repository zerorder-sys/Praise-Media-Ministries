async function test() {
  const res = await fetch("https://www.youtube.com/@praisemediaproductions7545/streams", { 
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
      "Accept-Language": "en-US,en;q=0.9"
    }
  });
  const text = await res.text();

  // Try extracting video IDs directly from raw HTML
  const videoIds = [...text.matchAll(/"videoId":"([a-zA-Z0-9_-]{11})"/g)].map(m => m[1]);
  const titles = [...text.matchAll(/"text":"([^"]{10,80})"/g)].map(m => m[1]).filter(t => !t.startsWith('http') && !t.includes('\\'));

  // Deduplicate
  const uniqueIds = [...new Set(videoIds)].slice(0, 6);
  console.log("Video IDs found:", uniqueIds);
  console.log("Sample titles:", titles.slice(0, 10));
}
test();

