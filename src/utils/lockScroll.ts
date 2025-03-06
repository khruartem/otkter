export const lockScroll = () => {
  window.scrollBy({
    top: 0,
    behavior: "instant",
  });
};
