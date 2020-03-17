import React from "react";
import { Container, Card, Content, Text } from "native-base";

const Running = () => {
  return (
    <Container>
      <Card style={{ margin: 20 }}>
        <Content>
          <Text>
            <h2>
              <b>Running</b>
            </h2>
            <h3>218/kcal for 30 minutes</h3>
          </Text>
        </Content>
      </Card>
    </Container>
  );
};

export default Running;
