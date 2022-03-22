import React from "react";
import styled from "styled-components/native";
import { Btn, BtnText } from "../components/shared";

const Container = styled.View`
  background-color: black;
  flex: 1;
  color: white;
`;

const Wrapper = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  font-size: 16px;
  text-align: center;
  color: white;
`;
const Login = ({ navigation: { navigate } }) => (
  <Container>
    <Wrapper>
      <Text>
        Don't have an account?
        <Btn onPress={() => navigate("Join")}>
          <BtnText>Join &rarr;</BtnText>
        </Btn>
      </Text>
    </Wrapper>
  </Container>
);

export default Login;
