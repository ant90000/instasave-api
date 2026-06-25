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
          "x-rapidapi-key": "03fcb53786msh1bdb6426ce29668p13bed1jsn4fa27e80521f"
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
