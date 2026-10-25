import "./card.css";

import { Avatar, Card as CardLib, Text } from "@mantine/core";
import { isNil } from "lodash";

const Card = ({ metadata = {}, onClick = () => {} }) => {
  const title = metadata?.title ?? "";
  const description = metadata?.description ?? "";
  const iconAvaliable = !isNil(metadata?.icon);
  const Icon = metadata?.icon;

  return (
    <CardLib
      style={{ cursor: "pointer" }}
      withBorder
      orientation="horizontal"
      onClick={() => onClick(metadata)}
    >
      <CardLib.Section inheritPadding px="xs" withBorder>
        {iconAvaliable ? (
          <Avatar>
            <Icon size={28} />
          </Avatar>
        ) : (
          <Avatar name={title} />
        )}
      </CardLib.Section>

      <CardLib.Section inheritPadding px="md">
        <Text fz="xl">{title}</Text>
        <Text fz="xs" c="dimmed">
          {description}
        </Text>
      </CardLib.Section>
    </CardLib>
  );
};

export default Card;
