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


export default (elements) => {
  import(/* webpackChunkName:"lottie" */ "./lottie")
    .then((lottieData) => {
      const { default: lottie } = lottieData;

      const startAnimation = (el) => {
        el.dataset.animate = "true";
        return lottie.play(el.id);
      };

      const stopAnimation = (el) => {
        el.dataset.animate = "false";
        return lottie.stop(el.id);
      };


      const loadAnimation = (el) => {
        lottie.loadAnimation({
          container: el,
          renderer: "svg",
          path: `./assets/animations/${el.id}.json`,
          autoplay: false,
          name: `${el.id}`,
        });
        el.dataset.loaded = "true";
        return startAnimation(el);
      };

      return elements.map((el) => {
        const is_animate = JSON.parse(el.dataset.animate);
        const is_visible = isElementInView(el);
        if (is_visible === is_animate) {
          return null;
        }
        if (is_visible) {
          return (el.dataset.loaded !== "true" ? loadAnimation(el) : startAnimation(el));
        }
        return stopAnimation(el);
      });
    })
    .catch(err => err);
};
