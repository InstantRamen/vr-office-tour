AFRAME.registerComponent('play-on-mobile', {
  init: function() {
    const { el } = this;
    // grab the video from the a-videosphere element
    let video = el.components.material.material.map.image;

    // toggle video playback on click
    window.addEventListener('click', event => {
      // if video exists, return a warning and do nothing else
      if (!video) {
        console.warn(`Oops, it looks like the video doesn't exist`);
        return;
      }

      // toggle video playback
      video.paused ? video.play() : video.pause();

      // emit videoToggle event to be used in the on-screen text
      el.emit('videoToggle', { playing: !video.paused });
    });

    // wait until end of tick and emit videoToggle
    // this ensures the 'click to play' text is hidden if the video autoplays
    setTimeout(() => el.emit('videoToggle', { playing: !video.paused }));
  }
});
