AFRAME.registerComponent('scene-manager', {
  init: function() {
    let { data, el } = this;

    // I'm not sure if binding 'this' is actually necessary here,
    // if I'm not using arrow functions, but it doens't hurt to be safe.
    this.changeScene = this.changeScene.bind(this);
    this.getScenes = this.getScenes.bind(this);

    // get all scenes
    this.scenes = this.getScenes();
  },

  update: function() {
    let { data, el, scenes } = this;
    console.log('Scenes: ', scenes);

    el.addEventListener('change-scene', { detail } => {
      for (let i = 0; i < scenes.length; i++) {
        let scene = scenes[i];

        let { components: { scene: { data: { src: sceneSrc } } } } = scene;
        scene.setAttribute('visible', sceneSrc == detail.nextScene);
      }
    });
  },

  changeScene: function() {},

  getScenes: function() {
    console.log('getScenes');
    return document.querySelectorAll('.scene');
  }
});
