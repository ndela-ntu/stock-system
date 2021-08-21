export default function getAverage(price, quantity, precision = 100){
    if (quantity === 0) return 0;
    return Math.round((price/quantity) * precision)/precision;
}
  