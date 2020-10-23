export function formatValue(year: number, month: number): string {
  return year + '-' + (('0' + month).substr(-2))
}
