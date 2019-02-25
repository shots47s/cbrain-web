/*
=============================================================
 | ANIMATIONS
=============================================================
*/


const isElementInView = (el) => {
  const boundsEl = el.getBoundingClientRect();
  return (
    boundsEl.top >= 0
    && boundsEl.left >= 0
    && boundsEl.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    && boundsEl.right <= (window.innerWidth || document.documentElement.clientHeight)
  );
};

const startAnimation = (el) => {
  el.dataset.animate = "true";
  import(/* webpackChunkName:"lottie" */ "./lottie")
    .then(lottie => lottie.play(el.id))
    .catch(err => console.log(err));
};

const stopAnimation = (el) => {
  el.dataset.animate = "false";
  import(/* webpackChunkName:"lottie" */ "./lottie")
    .then(lottie => lottie.stop(el.id))
    .catch(err => console.log(err));
};

export const handleAnimations = elements => elements.map((el) => {
  const is_animate = JSON.parse(el.dataset.animate);
  const is_visible = isElementInView(el);
  if (is_animate === is_visible) {
    return null;
  }
  return is_visible ? startAnimation(el) : stopAnimation(el);
});

export const loadAnimations = (elements, loop = false) => {
  require.context("./assets/animations", true, /\.json$/);
  import(/* webpackChunkName:"lottie" */ "./lottie")
    .then(lottie => elements.map(el => lottie.loadAnimation({
      container: el,
      renderer: "svg",
      path: `./assets/animations/${el.id}.json`,
      autoplay: false,
      loop,
      name: `${el.id}`,
    })))
    .catch(err => console.log(err));
  handleAnimations(elements);
};
