function formatMoney(amountCents) {
  return `₹ ${((amountCents * 100) / 51).toFixed(2)}`;
}

export default formatMoney;
