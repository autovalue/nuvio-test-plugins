function getStreams(tmdbId, mediaType, season, episode) {
  return [
    // These two might not work on older Nuvio instances, but good for testing integration.
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

module.exports = {
  getStreams,
};
