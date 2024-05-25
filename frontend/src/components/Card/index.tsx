import { Card, theme } from "antd";

import CardDescription from "./Card.description";
import CardCover from "./Card.cover";
import { Bill } from "@/@types/bill";
import CardActions from "./Card.actions";
import { Key } from "react";

type BillCardProps = {
  bill: Bill;
  onSelect: (key: Key[]) => void;
  selected: Key[];
  loading?: boolean;
};

const { Grid } = Card;

const descriptionStyle = { width: "100%", padding: "4px" };
const cardStyle = { width: "100%", minWidth: "25em", maxWidth: "35em", maxHeight: "30em", transition: "0.2 all" };

function BillCard({ bill, onSelect, selected, loading }: BillCardProps) {
  const { token } = theme.useToken();
  const { id, ...billInformation } = bill;

  const handleSelect = () => {
    if (selected.includes(id)) {
      return onSelect(selected.filter((selectedId) => selectedId !== id));
    }

    onSelect([...selected, id]);
  };

  const injectStyle = () => {
    return selected.includes(id) ? { boxShadow: `1px 1px 5px 1px ${token.colorPrimary}` } : {};
  };

  return (
    <Card
      loading={loading}
      key={id}
      style={{ ...cardStyle, ...injectStyle() }}
      cover={<CardCover onSelect={handleSelect} selected={selected.includes(id)} />}
      actions={CardActions(id)}
    >
      <Grid hoverable={false} style={descriptionStyle}>
        <CardDescription {...billInformation} />
      </Grid>
    </Card>
  );
}

export default BillCard;
