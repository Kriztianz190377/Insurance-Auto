export function getYearDifferences(year) {
  return new Date().getFullYear() - year;
}

export function brandCalcul(brand) {
  let increase;
  switch (brand) {
    case '1':
      increase = 1.3;
      break;
    case '2':
      increase = 1.15;
      break;
    case '3':
      increase = 1.05;
      break;

    default:
      break;
  }
  return increase;
}

export function planCalcul(plan) {
    return plan === "1" ? 1.2 : 1.5;
}
export function formatMoney(result) {
  return result.toLocaleString('en-Us', {
    style: 'currency',
    currency: 'USD',
  });
}
