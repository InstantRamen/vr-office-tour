AFRAME.registerComponent('hide-once-playing', {
  schema: { type: 'selector' },
  init: function() {
    const { el, data } = this;

    this.onPlaying = this.onPlaying.bind(this);
    this.onPause = this.onPause.bind(this);

    data.addEventListener('videoToggle', ({ detail }) => {
      console.log('video toggle', detail.playing);
      detail.playing ? this.onPlaying() : this.onPause();
    });
  },
  onPlaying: function(evt) {
    console.log('playing');
    this.el.setAttribute('visible', false);
  },
  onPause: function(evt) {
    console.log('paused');
    this.el.setAttribute('visible', true);
  }
});
