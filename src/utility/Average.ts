export default function getAverage(price: number, quantity: number, precision: number = 100): number {
    if (quantity === 0) return 0;
    return Math.round((price/quantity) * precision)/precision;
}
  