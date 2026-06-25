export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: "URL missing" });
  }

  try {
    const response = await fetch(
      "https://instagram-downloader-download-instagram-stories-videos4.p.rapidapi.com/convert?url=" + encodeURIComponent(url),
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "instagram-downloader-download-instagram-stories-videos4.p.rapidapi.com",
          "x-rapidapi-key": "PASTE_YOUR_API_KEY_HERE"
        }
      }
    );

    const data = await response.json();
    return res.status(200).json(data);

  } catch (error) {
    return res.status(500).json({
      error: "Server error",
      details: error.message
    });
  }
}
