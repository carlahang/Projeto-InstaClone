import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Header,
  Logo,
  Container,
  Email,
  Senha,
  Botao,
  TextoBotao,
  Esqueceu,
  Ajuda,
  ContainerFacebook,
  Facebook,
  Conta,
  Cadastro,
  ContainerAjuda,
  ContainerCadastro,
} from './styles';

const Login = () => {
  return (
    <View>
      <Header>
        <Logo source={require('../../assets/instagram.png')} />
      </Header>

      <Container>
        <Email placeholder="Número de telefone,email ou nome de usuário" />
        <Senha placeholder="Senha" />
        <Botao>
          <TextoBotao>Entrar</TextoBotao>
        </Botao>
      </Container>
      <ContainerAjuda>
        <Esqueceu>Esqueceu seus dados de login?</Esqueceu>
        <Ajuda>Obtenha ajuda para entrar. </Ajuda>
      </ContainerAjuda>
      <ContainerFacebook>
        <Icon name="mf09a" size={20} color="lightblue" />
        <Facebook>Entrar com o Facebook</Facebook>
      </ContainerFacebook>
      <ContainerCadastro>
        <Conta>Não tem uma conta?</Conta>
        <Cadastro>Cadastre-se</Cadastro>
      </ContainerCadastro>
    </View>
  );
};

export default Login;
