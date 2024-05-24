import { BillHistory } from "@/@types/bill";
import { FormattersUtils } from "@/utils/formatters";
import { TableProps } from "antd";

const getColumns = (): TableProps<BillHistory>["columns"] => {
  return [
    {
      title: "kWh Médio",
      key: "averageDayKwh",
      dataIndex: "averageDayKwh",
      render: (averageDayKwh: number) => FormattersUtils.formatNumber(averageDayKwh, "kWh"),
    },
    {
      title: "consumo (kWh)",
      key: "consumption",
      dataIndex: "consumption",
      render: (consumption: number) => FormattersUtils.formatNumber(consumption, "kWh"),
    },
    { title: "Dias", key: "days", dataIndex: "days", render: (days: number) => `${days} dias` },
    {
      title: "mês/ano",
      key: "monthYear",
      dataIndex: "monthYear",
      render: (monthYear: string) => FormattersUtils.formatDateMonth(monthYear),
    },
  ];
};

export default getColumns;
