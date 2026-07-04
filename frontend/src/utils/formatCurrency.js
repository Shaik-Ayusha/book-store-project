// Simple currency formatter: converts USD to INR and formats
const USD_TO_INR = 82; // adjust as needed

export function formatINR(amount) {
  if (amount === undefined || amount === null || isNaN(Number(amount))) return 'N/A';
  const inr = Number(amount) * USD_TO_INR;
  return inr.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
}

export default formatINR;
