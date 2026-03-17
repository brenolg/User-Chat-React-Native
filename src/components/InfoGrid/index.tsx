import React from "react";
import { Container, Label, LeftItem, RightItem, Value } from "./styles";

type InfoItem = {
  label: string;
  value: string | number;
};

type Props = {
  data: InfoItem[];
};

export default function InfoGrid({ data }: Props) {
  return (
    <Container>
      {data.map((item, index) =>
        index % 2 === 0 ? (
          <LeftItem key={index}>
            <Value numberOfLines={1} ellipsizeMode="tail">
              {item.value}
            </Value>
            <Label>{item.label}</Label>
          </LeftItem>
        ) : (
          <RightItem key={index}>
            <Value numberOfLines={1} ellipsizeMode="tail">
              {item.value}
            </Value>
            <Label>{item.label}</Label>
          </RightItem>
        ),
      )}
    </Container>
  );
}
