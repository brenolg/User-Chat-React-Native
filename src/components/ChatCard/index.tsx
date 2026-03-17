import { formatDateTime } from "@/helper/dates";
import React from "react";
import {
  Avatar,
  CardContainer,
  Content,
  DateText,
  Divider,
  HeaderRow,
  ImgRow,
  MessageText,
  NameText,
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
      <Content>
        <HeaderRow>
          <ImgRow>
            <Avatar source={{ uri: img }} />
            <NameText>{name}</NameText>
          </ImgRow>
          <DateText>{formatDateTime(createdAt)}</DateText>
        </HeaderRow>

        <Divider />
        <MessageText>{msg}</MessageText>
      </Content>
    </CardContainer>
  );
}
