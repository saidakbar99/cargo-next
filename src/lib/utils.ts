export const scrollToSection = (id: string, offset: number = 0) => {
  const element = document.getElementById(id);

  if (element) {
    const elementPosition = element.offsetTop;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

export const languages = ["Ру", "Уз", "O'z", "En"]