import React, { useEffect } from "react";
import { useQuery } from "react-query";
import styled from "styled-components/native";
import { history, info } from "../api";
import { Icon } from "../components/Coin";

const Container = styled.ScrollView``;

const Detail = ({
  route: {
    params: { symbol, id },
  },
  navigation,
}) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Icon
          source={{
            uri: `https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png`,
          }}
        />
      ),
    });
  }, []);
  const { isLoading: infoLoading, data: infoData } = useQuery(
    ["coinInfo", id],
    info
  );
  const { isLoading: historyLoading, data: historyData } = useQuery(
    ["coinHistory", id],
    history
  );
  console.log(infoData);
  return <Container />;
};

export default Detail;
