import scrollToElement from 'scroll-to-element';

export const handleScroll = (el) => {
  scrollToElement(el, { duration: 500 });
};
