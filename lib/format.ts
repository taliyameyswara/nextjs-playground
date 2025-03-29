export interface FormatRupiahOptions {
  withPrefix?: boolean;
  decimalPlaces?: number;
}

export function formatRupiah(
  amount: number,
  options?: FormatRupiahOptions
): string {
  if (isNaN(amount)) return "Invalid Number";

  const { withPrefix = true, decimalPlaces = 0 } = options || {};

  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  })
    .format(amount)
    .replace(withPrefix ? "" : "Rp", "")
    .trim();
}
