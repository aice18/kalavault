# Local Artwork Images

Place your artwork images in this directory with the following filenames:

- `gaze-of-silence.jpg`
- `urban-tectonic.jpg`
- `monsoon-whispers.jpg`
- `celestial-flow.jpg`
- `heritage-rhythms.jpg`
- `zen-garden.jpg`

These images will be:
1. **Private** - served locally from your frontend, not publicly exposed
2. **Watermarked** - automatically get "© KALAVAULT" watermark added on display
3. **Cached as Canvas Data URLs** - watermarked version is stored in memory after first load

All images are processed on the client-side using the Canvas API, so watermarking is applied without server-side processing.
