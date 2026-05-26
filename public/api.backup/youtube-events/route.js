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
    
    let event = null;
    const match = text.match(/var ytInitialData = (\{.*?\});<\/script>/);
    
    if (match) {
      const data = JSON.parse(match[1]);
      
      function search(obj) {
        if (event) return;
        if (typeof obj !== 'object' || obj === null) return;
        
        // Check if this object represents a scheduled live stream video
        if (obj.upcomingEventData && obj.title && obj.title.runs && obj.title.runs.length > 0) {
          event = {
            title: obj.title.runs[0].text,
            startTime: obj.upcomingEventData.startTime
          };
          return;
        }
        
        for (const key in obj) {
          search(obj[key]);
        }
      }
      
      search(data);
    }
    
    if (event) {
      return Response.json({ status: "success", event });
    } else {
      return Response.json({ status: "success", event: null });
    }
    
  } catch (err) {
    console.error("YouTube Events API Error:", err);
    return Response.json({ status: "error", event: null });
  }
}
