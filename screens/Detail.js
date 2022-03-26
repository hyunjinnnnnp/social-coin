import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components/native";
import { VictoryChart, VictoryLine, VictoryScatter } from "victory-native";
import { history, info } from "../api";
import { Icon } from "../components/Coin";

const Container = styled.ScrollView`
  background-color: black;
`;

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
  const [victoryData, setVictoryData] = useState(null);
  useEffect(() => {
    if (historyData) {
      setVictoryData(
        historyData.map((price) => ({
          x: new Date(price.timestamp).getTime(),
          y: price.price,
        }))
      );
    }
  }, [historyData]);

  return (
    <Container>
      {victoryData ? (
        <VictoryChart height={360}>
          <VictoryLine
            animate
            interpolation="monotoneX"
            data={victoryData}
            style={{ data: { stroke: "#1abc9c" } }}
          />
          <VictoryScatter
            data={victoryData}
            style={{ data: { fill: "#1abc9c" } }}
          />
        </VictoryChart>
      ) : null}
    </Container>
  );
};

export default Detail;
