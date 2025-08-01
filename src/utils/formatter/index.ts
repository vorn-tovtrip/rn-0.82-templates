// utils/dateFormatter.ts

/**
 * Format a Date object to a readable string.
 * Defaults to medium date + short time.
 * You can pass options like locale and format options.
 */

export const today = Date.now();
export function formatDate(
  date: Date | string | number,
  options?: Intl.DateTimeFormatOptions,
  locale: string = 'en-US',
): string {
  try {
    const dt =
      typeof date === 'string' || typeof date === 'number'
        ? new Date(date)
        : date;
    return new Intl.DateTimeFormat(locale, options).format(dt);
  } catch {
    return String(date);
  }
}

/**
 * Returns relative time string from given date to now.
 * e.g. "5 minutes ago", "in 3 days"
 * Uses Intl.RelativeTimeFormat if available.
 */
export function timeFromNow(
  date: Date | string | number,
  locale = 'en-US',
): string {
  const dt =
    typeof date === 'string' || typeof date === 'number'
      ? new Date(date)
      : date;
  const now = new Date();
  const secondsDiff = Math.floor((dt.getTime() - now.getTime()) / 1000);

  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });

  const divisions: [number, Intl.RelativeTimeFormatUnit][] = [
    [60, 'seconds'],
    [60, 'minutes'],
    [24, 'hours'],
    [7, 'days'],
    [4.34524, 'weeks'],
    [12, 'months'],
    [Number.POSITIVE_INFINITY, 'years'],
  ];

  let duration = secondsDiff;
  for (let i = 0; i < divisions.length; i++) {
    if (Math.abs(duration) < divisions[i][0]) {
      return rtf.format(Math.round(duration), divisions[i][1]);
    }
    duration /= divisions[i][0];
  }
  return '';
}

/**
 * Example usage for common formats:
 * formatDate(new Date(), { dateStyle: 'medium', timeStyle: 'short' })
 * timeFromNow('2024-07-30T10:00:00Z')
 */
