import { useUploadBills } from "@/hooks/bills";
import { FeedbackUtils } from "@/utils/feedback";
import { Upload, Typography, Flex, Button, GetProp } from "antd";
import { RcFile, UploadFile, UploadProps } from "antd/es/upload";
import { useState } from "react";
import { IoMdThumbsUp } from "react-icons/io";
import { MdInbox } from "react-icons/md";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const { Dragger } = Upload;
const { Text, Title } = Typography;

const DraggerContent = ({ filesLen }: { filesLen: number }) => (
  <Flex align="center" justify="center" vertical style={{ height: "150px" }}>
    {filesLen ? (
      <>
        <IoMdThumbsUp size={40} color="#87d068" />
        <Text>{`${filesLen} Faturas selecionadas`}</Text>
      </>
    ) : (
      <>
        <MdInbox size={40} />
        <Text>Clique ou arraste as faturas aqui para enviar</Text>
        <Text type="secondary">Suporte para uma ou várias faturas.</Text>
      </>
    )}
  </Flex>
);

const progress = {
  strokeColor: { "0%": "#108ee9", "100%": "#87d068" },
  strokeWidth: 3,
  format: (percent: number | undefined) => percent && `${parseFloat(percent.toFixed(2))}%`,
};

function ExtractBillForm() {
  const [billList, setBillList] = useState<UploadFile[]>([]);

  const { uploadBills, uploadBillsError, uploadBillsStatus } = useUploadBills();

  const handleUpload = () => {
    const formData = new FormData();

    billList.forEach((file) => {
      formData.append("files[]", file as FileType);
    });

    uploadBills(formData)
      .then(() => {
        FeedbackUtils.notify({ variant: "success", message: `${billList.length} fatura(s) enviadas com sucesso!` });

        setBillList([]);
      })
      .catch(() => {
        FeedbackUtils.notify({ variant: "error", message: uploadBillsError?.message || "Erro ao realizar upload." });
      });
  };
  const beforeUpload = (_: RcFile, fileList: RcFile[]) => {
    setBillList(fileList);
    return false;
  };
  const onRemove = (file: UploadFile) => {
    const index = billList.indexOf(file);
    const newBillList = billList.slice();
    newBillList.splice(index, 1);
    setBillList(newBillList);
  };

  return (
    <Flex vertical gap={10}>
      <Flex align="center" justify="space-between" gap={6} wrap="wrap">
        <Title level={4} style={{ margin: 0 }}>
          Adicionar Faturas
        </Title>
        <Button
          type="primary"
          loading={uploadBillsStatus === "pending"}
          disabled={billList.length === 0}
          onClick={handleUpload}
        >
          {uploadBillsStatus === "pending" ? "Enviando" : "Enviar arquivos"}
        </Button>
      </Flex>

      <Dragger
        accept="application/pdf"
        fileList={billList}
        progress={progress}
        beforeUpload={beforeUpload}
        onRemove={onRemove}
        showUploadList
        multiple
      >
        <DraggerContent filesLen={billList.length} />
      </Dragger>
    </Flex>
  );
}

export default ExtractBillForm;
