import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Entypo} from 'react-native-vector-icons';
import {Container, Left, Icon, Header} from 'native-base';
import Card from '../shared/card';
export default function Feed({navigation}) {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <Container>
      <Header>
        <Left>
          <Icon name="menu" onPress={openMenu} />
        </Left>
      </Header>
      <Card />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
