const formatPrice = (price: number): string => {
  if (isNaN(price)) return "$0";

  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);

  return formatted;
};

export default formatPrice;
