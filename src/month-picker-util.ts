export function formatValue(year: number, month: number): string {
  return year + '-' + (('0' + month).substr(-2))
}

export function clickOnKey(event: KeyboardEvent, ...keys: string[]) {
  if (keys.includes(event.key) && event.target instanceof HTMLElement) {
    event.preventDefault();
    event.target.click();
  }
}
