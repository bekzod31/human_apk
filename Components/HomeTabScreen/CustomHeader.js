import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
export default class CustomHeader extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: 'blue'}}>
          <Left>
            <Button transparent>
              <Icon name='arrow-back'/>
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
      </Container>
    );
  }
}