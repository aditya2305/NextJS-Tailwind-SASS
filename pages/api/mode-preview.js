export default function (req, res) {
  res.setPreviewData({}); // SET SOME COOKIES TO ENABLE PREVIEW MODE
  res.status(402);
  res.json({ previewMode: "enabled" });
}
