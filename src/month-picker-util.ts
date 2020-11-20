export interface YearMonth {
  year: number,
  month: number
}

export function formatValue({year, month}: YearMonth): string {
  return year + '-' + (('0' + month).substr(-2))
}

export function parseValue(value: string): YearMonth | null {
  if (value && value.length) {
    const parts = value.split('-');
    return {
      year: parseInt(parts[0]),
      month: parseInt(parts[1])
    }
  }
  return null;
}

export function clickOnKey(event: KeyboardEvent, ...keys: string[]) {
  if (keys.includes(event.key) && event.target instanceof HTMLElement) {
    event.preventDefault();
    event.target.click();
  }
}
