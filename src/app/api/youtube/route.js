export async function GET() {
  try {
    // Attempting to scrape the public YouTube channel page
    const res = await fetch("https://www.youtube.com/@praisemediaproductions7545", { cache: "no-store" });
    const text = await res.text();
    
    // Look for the accessibility label that typically contains the subscriber count
    const match = text.match(/"subscriberCountText":\{"accessibility":\{"accessibilityData":\{"label":"([^"]+)"\}\}/);
    let subCount = "10K+";
    
    if (match) {
      // The match will look like "12.5K subscribers"
      subCount = match[1].split(' ')[0]; // Extract just the "12.5K"
    } else {
      // Fallback search pattern
      const altMatch = text.match(/"content":"([^"]+ subscribers)"/);
      if (altMatch) {
        subCount = altMatch[1].split(' ')[0];
      }
    }
    
    return Response.json({ count: subCount });
  } catch (err) {
    // Fallback if scraping fails
    return Response.json({ count: "Live" });
  }
}
