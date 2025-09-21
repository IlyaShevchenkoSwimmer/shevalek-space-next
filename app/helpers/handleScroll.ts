export function handleScrollImage(
  imageSection: HTMLElement,
  onScrollImage: HTMLElement
) {
  const windowHeight = window.innerHeight;
  const {
    top: imageSectionTop,
    bottom: imageSectionBottom,
    height: imageSectionHeight,
  } = imageSection.getBoundingClientRect();

  if (
    imageSectionTop < windowHeight / 2 &&
    imageSectionBottom > windowHeight / 2
  ) {
    const neededTopPosition: number = Math.floor(
      ((windowHeight / 2 - imageSectionTop) / imageSectionHeight) * 100
    );
    onScrollImage.style.objectPosition = `50% ${neededTopPosition}%`;
  }
}
