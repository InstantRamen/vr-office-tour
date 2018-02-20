AFRAME.registerComponent('scene', {
  schema: {
    src: { type: 'selector' },
    active: { type: 'boolean', default: false }
  },
  init: function() {
    let { data, el } = this;

    // add 'scene' class to element
    el.classList.add('scene');

    // set visibility attribute based on 'active'
    el.setAttribute('visible', data.active);
  },

  update: function() {
    let { data, el } = this;
  }
});
