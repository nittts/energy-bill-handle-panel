export class FormattersUtils {
  public static formatDate(date: Date | number) {
    const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
      month: "numeric",
      year: "2-digit",
      hour12: false,
    });

    return dateFormatter.format(date);
  }

  public static formatCurrency(currency: number | bigint) {
    const amountFormater = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return amountFormater.format(currency);
  }

  public static formatNumber(number: number | bigint, suffix?: string) {
    const numberFormatter = new Intl.NumberFormat("pt-BR", {
      style: "decimal",
    });

    return `${numberFormatter.format(number)} ${suffix ?? ""}`;
  }
}
