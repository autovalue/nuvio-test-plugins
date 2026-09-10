var BASE_URL = 'https://videojs-http-streaming.netlify.app';
var USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0 Safari/537.36';
var HEADERS = {
  'User-Agent': USER_AGENT,
  // Add other common headers like 'Referer' if needed
  Accept: 'application/json, text/javascript, */*; q=0.01',
  'Accept-Language': 'en-US,en;q=0.9',
  Referer: BASE_URL,
  Origin: BASE_URL
};

// https://kodi.wiki/view/Samples#Library_samples
function getStreams(tmdbId, mediaType, season, episode) {
  var audioTracks = [
    {
      // See https://freesound.org/people/CAT-FOX_ALEX/sounds/869017/
      name: '[test-wav] Freesounds.org - Rain (30:35)',
      language: 'en',
      url: 'https://cdn.freesound.org/previews/869/869017_17675683-lq.mp3',
      // Include audio headers.
      headers: {
        Referer: 'https://freesound.org/people/CAT-FOX_ALEX/sounds/869017/',
        'User-Agent': USER_AGENT,
        Accept: 'audio/webm,audio/ogg,audio/wav,audio/*;q=0.9,application/ogg;q=0.7,video/*;q=0.6,*/*;q=0.5',
      }
    },
    // See https://freesound.org/people/TRP/sounds/616985/
    {
      name: '[test-mp3] Freesounds.org - Rain (01:26:40)',
      language: 'en',
      url: 'https://cdn.freesound.org/previews/616/616985_97550-lq.mp3',
      // No audio headers.
      //headers: HEADERS
    },
    {
      // See https://freemusicarchive.org/music/fabio-keiner/3-etudes/etude-iiimp3/
      name: '[test-mp3] freemusicarchive.org - etude III (00:18:29)',
      language: 'en',
      url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/R3WoXQVmV34pWNhmajaB5U915d7LAeuBzzZgPTxQ.mp3',
      // No audio headers.
      //headers: HEADERS
    },
    {
      // Having this audio track could potentially break the player if not handled properly.
      name: '[test-m3u8] VideoJS (02:45)',
      language: 'en',
      url: 'https://d2zihajmogu5jn.cloudfront.net/audio-only/out.m3u8',
      //headers: HEADERS
    },
  ];
  var subtitles = [
    {
      name: '[test-vtt] Elephants Dream (00:30)',
      language: 'en',
      url: 'https://thepaciellogroup.github.io/AT-browser-tests/video/subtitles-en.vtt',
    },
    {
      name: '[test-srt] example gist (00:40)',
      language: 'en',
      url: 'https://gist.githubusercontent.com/matibzurovski/d690d5c14acbaa399e7f0829f9d6888e/raw/63578ca30e7430be1fa4942d4d8dd599f78151c7/example.srt',
    },
    {
      name: '[test-vtt] cowboy django (41:43)',
      language: 'en',
      url: 'https://static.simonwillison.net/static/2010/24_cowboy-development-with-django.vtt',
    },
    {
      name: '[test-srt] Hour long (01:00:14)',
      language: 'en',
      url: 'https://www.capsubservices.com/assets/downloads/subtitle/01hour/SubRip%2001%20Hour.srt',
    },
    {
      name: '[test-vtt] French (00:07:35)',
      language: 'fr',
      url: 'https://raw.githubusercontent.com/labriqueinternet/labriqueinter.net/refs/heads/master/caption/fr.vtt',
    },
    {
      name: '[test-vtt] Elephants Dream - French (00:09:23)',
      language: 'fr',
      url: 'https://github.com/vet-estandards/E-standards-Accessible-HTML5-Media-Player/raw/4da9fffd106d1e9a6dcdcffe1fdbd97127cc9721/video/subs/elephants_dream_fr.vtt',
    },
    {
      name: '[test-srt] Portuguese (01:34:24)',
      language: 'pt-br',
      url: 'https://github.com/raphaelquintao/QPlayer/raw/8f7215f5b482e4da3182a4026202ce0379eaffc6/media/pt-br.srt',
    },
    {
      name: '[test-vtt] Portuguese (01:34:24)',
      language: 'pt-br',
      url: 'https://github.com/raphaelquintao/QPlayer/raw/8f7215f5b482e4da3182a4026202ce0379eaffc6/media/pt-br.vtt',
    },
  ];
  return [
    /*{
      // https://home.tdarr.io/samples/?v=h264
      title: 'with audio (00:30)',
      name: '[test-mp4] tdarr - 1080p',
      url: 'https://samples.tdarr.io/api/v1/samples/sample__1080__libx264__aac__30s__video.mp4',
      audioTracks: audioTracks,
      subtitles: subtitles,
      quality: '1080p',
      subtitles: subtitles,
    },
    {
      // https://thepaciellogroup.github.io/AT-browser-tests/test-files/video.html
      title: 'own audio (00:37)',
      name: '[test-mp4] Elephants Dream',
      url: 'https://thepaciellogroup.github.io/AT-browser-tests/video/ElephantsDream.mp4',
      audioTracks: audioTracks,
      quality: '720p',
      subtitles: subtitles,
      headers: HEADERS,
    },*/
    /*{
      // See: https://videojs-http-streaming.netlify.app
      title: 'no audio and no subs (02:45)',
      name: '[test-m3u8] VideoJS - 720p',
      url: 'https://d2zihajmogu5jn.cloudfront.net/video-only/out.m3u8?mode=no-audio-no-subs',
      audioTracks: [],
      quality: '720p',
      subtitles: [],
    },
    {
      // See: https://videojs-http-streaming.netlify.app
      title: 'no audio, with subs (02:45)',
      name: '[test-m3u8] VideoJS - 720p',
      url: 'https://d2zihajmogu5jn.cloudfront.net/video-only/out.m3u8?mode=no-audio-with-subs',
      audioTracks: [],
      quality: '720p',
      subtitles: subtitles,
    },
    {
      // See: https://videojs-http-streaming.netlify.app
      title: 'external audio and no subs (02:45)',
      name: '[test-m3u8] VideoJS - 720p',
      url: 'https://d2zihajmogu5jn.cloudfront.net/video-only/out.m3u8?mode=ext-audio-no-subs',
      audioTracks: audioTracks,
      quality: '720p',
      subtitles: [],
    },*/
    {
      // See: https://videojs-http-streaming.netlify.app
      name: '[test-m3u8] VideoJS - 720p [a+s]',
      title: 'external audio (02:45)',
      url: 'https://d2zihajmogu5jn.cloudfront.net/video-only/out.m3u8?mode=audio-and-subs',
      audioTracks: audioTracks,
      quality: '720p',
      subtitles: subtitles,
      headers: HEADERS,
    },
    {
      // https://repo.jellyfin.org/test-videos/
      name: '[test-mp4] Jellyfin [a+s]',
      title: 'external audio (00:30)',
      url: 'https://repo.jellyfin.org/test-videos/SDR/AVC/Test%20Jellyfin%201080p%20AVC%203M.mp4',
      audioTracks: audioTracks,
      quality: '1080p',
      subtitles: subtitles,
    },
    {
      // https://cdn.media.ccc.de/congress/2019/h264-hd/
      name: '[test-mp4] media.ccc [oa+a+s]',
      title: "own audio (58:22)\nexternal audio + external subs",
      url: 'https://cdn.media.ccc.de/congress/2019/h264-hd/36c3-11235-eng-deu-fra-36C3_Infrastructure_Review_hd.mp4',
      audioTracks: audioTracks,
      quality: '1080p',
      subtitles: subtitles,
    },
    {
      // https://cdn.media.ccc.de/congress/2019/h264-hd/
      name: '[test-mp4] media.ccc [oa]',
      title: 'own audio only (58:22)',
      url: 'https://cdn.media.ccc.de/congress/2019/h264-hd/36c3-11235-eng-deu-fra-36C3_Infrastructure_Review_hd.mp4',
      quality: '1080p',
    },
    {
      // https://reference.dashif.org/dash.js/v4.4.0/samples/multi-audio/multi-audio.html
      name: '[test-mp4] dash.js [ma+a+s]',
      title: 'multiple audio + external subs+audio (12:14)',
      url: 'https://media.axprod.net/TestVectors/v7-Clear/Manifest_1080p.mpd',
      audioTracks: audioTracks,
      quality: '1080p',
      subtitles: subtitles,
    },
    {
      // https://reference.dashif.org/dash.js/v4.4.0/samples/multi-audio/multi-audio.html
      name: '[test-mp4] dash.js [ma+a]',
      title: 'multiple audio - external audio (12:14)',
      url: 'https://media.axprod.net/TestVectors/v7-Clear/Manifest_1080p.mpd',
      audioTracks: audioTracks,
      quality: '1080p',
    },
    // These two don't work, but included for completeness-sake.
    {
      name: '[test-youtube] Street Fighter',
      title: 'Street Fighter - Youtube link',
      ytId: 'U6sbm1OaJb8',
      quality: '1080p',
    },
    {
      name: '[test-youtube] Street Fighter (External)',
      title: 'Street Fighter - External Youtube link',
      externalUrl: 'https://www.youtube.com/watch?v=U6sbm1OaJb8',
      quality: '1080p',
    },
  ];
}

module.exports = { getStreams };
