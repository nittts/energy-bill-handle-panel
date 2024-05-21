import { Bill } from "@/@types/bill";
import { FormattersUtils } from "@/utils/formatters";
import { TableProps } from "antd";

const getColumns = (): TableProps<Bill>["columns"] => {
  return [
    {
      title: "Número do Cliente",
      dataIndex: "clientNumber",
      key: "clientNumber",
    },
    {
      title: "Mês de Referência",
      dataIndex: "referenceMonth",
      key: "referenceMonth",
      render: (referenceMonth) => FormattersUtils.formatDate(referenceMonth),
    },
    {
      title: "Consumo de Energia Elétrica",
      dataIndex: "energyConsumption",
      key: "energyConsumption",
      render: (energyConsumption) => FormattersUtils.formatNumber(energyConsumption),
    },
    {
      title: "Energia Compensada",
      dataIndex: "energyReimbursed",
      key: "energyReimbursed",
      render: (energyReimbursed) => FormattersUtils.formatNumber(energyReimbursed),
    },
    {
      title: "Valor total sem GD",
      dataIndex: "gdTotal",
      key: "gdTotal",
      render: (gdTotal) => FormattersUtils.formatCurrency(gdTotal),
    },
    {
      title: "Economia GD",
      dataIndex: "gdEconomy",
      key: "gdEconomy",
      render: (gdEconomy) => FormattersUtils.formatCurrency(gdEconomy),
    },
  ];
};

export default getColumns;
