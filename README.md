# Nuvio Test Plugins

This repository contains a minimal test plugin for Nuvio. It exists to validate how Nuvio handles external audio tracks, subtitles, and alternate media sources without relying on a production scraper.

## Using in Nuvio App

1. Open **Nuvio** > **Settings** > **Plugins**
2. Add this repository URL:
   ```
   https://github.com/autovalue/nuvio-test-plugins/raw/refs/heads/main/manifest.json
   ```
3. Refresh and enable the providers you want

## What this repo includes

- `manifest.json` — the plugin registry for Nuvio
- `providers/external-audio.js` — a test scraper that returns sample media streams
- A lightweight plugin layout designed for experimentation and debugging

## Purpose

The primary test provider in this repo, `test-external-audio`, is meant to exercise edge cases such as:

- external audio streams
- multiple subtitle tracks
- HLS-based media
- media using custom headers
- similar video source, but with different subtitles / audio tracks
- mixed audio/subtitle combinations

## Provider behavior

The test provider returns several sample stream objects, including:

- HLS video sources with external audio
- MP4 test videos
- sample subtitle files in VTT and SRT formats
- multiple audio track options
- YouTube-based example entries for coverage checks

The scraper is intentionally broad in scope so it can help diagnose player behavior across a range of media types and track combinations.

## How to use it in Nuvio

1. Host this repository or expose the manifest.json file through a local web server.
2. Open Nuvio.
3. Go to Settings > Plugins.
4. Add the plugin source URL.
5. Refresh and enable the test provider.

If you are testing locally, point the plugin loader at your local server URL rather than a remote GitHub-hosted file.

Example:

```text
http://localhost:3000/manifest.json
```

## Recommended use cases

Use this repo to:

- validate audio track handling
- verify subtitle selection and language mapping
- confirm HLS playback behavior
- debug plugin loading and manifest registration
- test player behavior with mixed content sources

## Notes

This is a sandbox/debugging plugin, not a production provider.

## License

This repository follows the licensing terms of the enclosing Nuvio project context in which it is used. If you are packaging or redistributing this plugin independently, confirm the applicable project licensing before publishing.
