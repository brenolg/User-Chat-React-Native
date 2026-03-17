import { formatDateTime } from "@/helper/dates";
import { PageTitle } from "@/theme/commonStyles";
import React from "react";
import {
  Avatar,
  CardContainer,
  Content,
  DateText,
  HeaderRow,
  MessageText,
} from "./styles";

type Props = {
  img: string;
  msg: string;
  name: string;
  createdAt: string;
};

export default function ChatCard({ img, name, msg, createdAt }: Props) {
  return (
    <CardContainer>
      <Avatar source={{ uri: img }} />

      <Content>
        <HeaderRow>
          <PageTitle>{name}</PageTitle>
          <DateText>{formatDateTime(createdAt)}</DateText>
        </HeaderRow>

        <MessageText>{msg}</MessageText>
      </Content>
    </CardContainer>
  );
}
