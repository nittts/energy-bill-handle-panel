export class FormattersUtils {
  public static formatDate(date: Date | number | string) {
    const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
      month: "numeric",
      year: "2-digit",
      hour12: false,
    });

    return dateFormatter.format(new Date(date));
  }

  public static formatDateLong(date: Date | number | string) {
    const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour12: false,
    });

    return dateFormatter.format(new Date(date));
  }

  public static formatDateMonth(date: Date | number | string) {
    const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
      month: "long",
      year: "numeric",
      hour12: false,
    });

    return dateFormatter.format(new Date(date));
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

  public static formatCnpjCpf(value: string) {
    const cnpjCpf = value.replace(/[^*0-9]/g, "");

    if (cnpjCpf.length === 11) {
      return cnpjCpf.replace(/([\d*]{3})([\d*]{3})([\d*]{3})([\d*]{2})/g, "$1.$2.$3-$4");
    }

    return cnpjCpf.replace(/([\d*]{2})([\d*]{3})([\d*]{3})([\d*]{4})([\d*]{2})/g, "$1.$2.$3/$4-$5");
  }
}
