import { DateTime } from "luxon";

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

export const calculateTotalAmount = (items: { name: string; item_amount: number; quantity: number }[]) => {
  return items.reduce((total, item) => total + item.item_amount * item.quantity, 0);
};

export const formatDate = (date: string) => {
  return DateTime.fromISO(date).toFormat("dd.MM.yyyy");
}

export const formatCurrency = (amount: number, currency: string = "UZS"): string => {
  return amount
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    .concat(` ${currency}`);
};

export const trimTrailingZeros = (value: string) => {
  if (value.includes('.')) {
    return value.replace(/(\.\d*?[1-9])0+$/g, '$1').replace(/\.0+$/, '');
  }
  
  return value;
}