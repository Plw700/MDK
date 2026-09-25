function getDiscount(user, amount) {
  if (amount >= 10000) return amount * 0.15;
  if (amount >= 5000) return amount * 0.10;
  return amount * 0.05;
}
