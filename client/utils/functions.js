import scrollToElement from 'scroll-to-element';

export const handleScroll = (el) => {
  console.log(el);
  scrollToElement(el, { duration: 500 });
};
