function getStreams(tmdbId, mediaType, season, episode) {
  return [
    // Contains no link, so should not crash the app.
    {
      name: '[test] Empty link',
      title: 'Contains no links',
    },
  ];
}

module.exports = {
  getStreams,
};
