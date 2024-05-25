import { Bill } from "@/@types/bill";
import { FormattersUtils } from "@/utils/formatters";
import { Flex, TableProps, Typography } from "antd";
import ColumnActions from "./Table.bills.columns.actions";

const { Text } = Typography;

const getColumns = (): TableProps<Bill>["columns"] => {
  return [
    {
      title: "Número do Cliente",
      dataIndex: "clientNumber",
      key: "clientNumber",
      responsive: ["sm"],
    },
    {
      title: "Mês de Referência",
      dataIndex: "referenceMonth",
      key: "referenceMonth",
      render: (referenceMonth) => FormattersUtils.formatDate(referenceMonth),
      responsive: ["sm"],
    },
    {
      title: "Consumo de Energia Elétrica",
      dataIndex: "energyConsumption",
      key: "energyConsumption",
      render: (energyConsumption) => FormattersUtils.formatNumber(energyConsumption, "kWh"),
      responsive: ["sm"],
    },
    {
      title: "Energia Compensada",
      dataIndex: "energyReimbursed",
      key: "energyReimbursed",
      render: (energyReimbursed) => FormattersUtils.formatNumber(energyReimbursed, "kWh"),
      responsive: ["sm"],
    },
    {
      title: "Valor total sem GD",
      dataIndex: "gdTotal",
      key: "gdTotal",
      render: (gdTotal) => FormattersUtils.formatCurrency(gdTotal),
      responsive: ["sm"],
    },
    {
      title: "Economia GD",
      dataIndex: "gdEconomy",
      key: "gdEconomy",
      render: (gdEconomy) => FormattersUtils.formatCurrency(gdEconomy),
      responsive: ["sm"],
    },
    {
      title: "Ações",
      dataIndex: "id",
      render: (id) => <ColumnActions id={id} />,
      key: "actions",
      responsive: ["sm"],
    },
    {
      title: (
        <Flex vertical gap={2}>
          <Text>Número do Cliente</Text>
          <Text>Mês de Referência</Text>
          <Text>Consumo de Energia Elétrica</Text>
          <Text>Energia Compensada</Text>
          <Text>Valor total sem GD</Text>
          <Text>Economia GD</Text>
          <Text>Ações</Text>
        </Flex>
      ),
      render: (_, record) => (
        <Flex vertical gap={2}>
          <Text>{`Número do Cliente: ${record.clientNumber}`}</Text>
          <Text>{`Mês de Referência: ${FormattersUtils.formatDate(record.referenceMonth)}`}</Text>
          <Text>{`Consumo de Energia Elétrica: ${FormattersUtils.formatNumber(record.energyConsumption, "KwH")}`}</Text>
          <Text>{`Energia Compensada: ${FormattersUtils.formatNumber(record.energyReimbursed, "KwH")}`}</Text>
          <Text>{`Valor total sem GD: ${FormattersUtils.formatCurrency(record.gdTotal)}`}</Text>
          <Text>{`Economia GD: ${FormattersUtils.formatCurrency(record.gdEconomy)}`}</Text>
          <Text>
            <ColumnActions id={record.id} />
          </Text>
        </Flex>
      ),
      responsive: ["xs"],
    },
  ];
};

export default getColumns;
