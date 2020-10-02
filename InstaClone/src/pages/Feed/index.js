import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Header,
  Logo,
  Story,
  UserPrincipal,
  UserBoomlab,
  UserNetflix,
  UserJabuti,
  Container,
  Post,
  PostHeader,
  Avatar,
  Name,
  PostImage,
  ContainerIcones,
  Description,
} from './styles';

const Feed = () => {
  return (
    <>
      <Header>
        <Icon name="camera-outline" size={24} />
        <Logo source={require('../../assets/instagram.png')} />
        <Icon name="send-outline" size={24} />
      </Header>
      <Story>
        <UserPrincipal source={require('../../assets/carla.jpg')} />
        <UserBoomlab source={require('../../assets/boomlab.png')} />
        <UserNetflix source={require('../../assets/netflix.png')} />
        <UserJabuti source={require('../../assets/ingrid.jpg')} />
      </Story>
      <Container>
        <Post>
          <PostHeader>
            <Avatar source={require('../../assets/catia.jpg')} />
            <Name>catita95</Name>
            <Icon name="more_vert" size={20} />
          </PostHeader>
          <PostImage source={require('../../assets/fotofeed.jpeg')} />
          <ContainerIcones>
            <Icon name="hearto" size={20} />
            <Icon name="chatbubble-outline" size={20} />
            <Icon name="send-outline" size={20} />
          </ContainerIcones>
          <Description>
            <Name>catita95</Name> Estudar é preciso!
          </Description>
        </Post>
      </Container>
    </>
  );
};

export default Feed;
