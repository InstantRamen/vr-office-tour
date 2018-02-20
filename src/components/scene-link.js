AFRAME.registerComponent('scene-link', {
  schema: {
    goto: { type: 'selector' }
  },
  init: function() {
    let { data, el } = this;

    // add animations to each scene-link
    this.createAnimations();
  },

  update: function() {
    let { data, el } = this;

    el.addEventListener('click', () => {
      // if scene is visible and the link is clicked, emit a change-scene event
      if (el.parentElement.getAttribute('visible')) {
        el.emit('change-scene', { nextScene: data.goto });
      }
    });
  },

  createAnimations: function() {
    // mouse enter animation
    let mEnter = document.createElement('a-animation');
    mEnter.setAttribute('attribute', 'scale');
    mEnter.setAttribute('dur', 50);
    mEnter.setAttribute('to', '1.2 1.2 1.2');
    mEnter.setAttribute('begin', 'mouseenter');

    // mouse leave animation
    let mLeave = document.createElement('a-animation');
    mLeave.setAttribute('attribute', 'scale');
    mLeave.setAttribute('dur', 50);
    mLeave.setAttribute('to', '1 1 1');
    mLeave.setAttribute('begin', 'mouseleave');

    this.el.appendChild(mEnter);
    this.el.appendChild(mLeave);
  }
});
