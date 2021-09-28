const formatter = Intl.NumberFormat('nl-NL', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 2,
})
export const presentPrice = (price: number): string => formatter.format(price)
