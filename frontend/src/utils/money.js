function formatMoney(amountCents) {
  return `₹ ${((amountCents * 51) / 100).toFixed(2)}`;
}

export default formatMoney;
