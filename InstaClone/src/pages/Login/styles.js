import {ColorPropType} from 'react-native';
import styled from 'styled-components/native';

export const View = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.View`
  margin-top: 125px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image``;

export const Container = styled.View`
  margin-top: 25px;
  padding: 15px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Email = styled.TextInput`
  border: lightgrey 1px;
  border-radius: 5px;
  width: 100%;
`;

export const Senha = styled.TextInput`
  margin-top: 10px;
  border: lightgrey 1px;
  border-radius: 5px;
  width: 100%;
`;

export const Botao = styled.TouchableOpacity`
  margin-top: 10px;
  background-color: lightblue;
  width: 100%;
  height: 50px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const TextoBotao = styled.Text`
  color: #333;
  font-weight: bold;
`;

export const Esqueceu = styled.Text`
  color: #333;
`;

export const Ajuda = styled.Text`
  color: darkblue;
  font-weight: bold;
`;

export const ContainerFacebook = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Facebook = styled.Text`
  color: lightblue;
  font-weight: bold;
`;

export const Conta = styled.Text`
  color: #333;
`;

export const Cadastro = styled.Text`
  color: darkblue;
  font-weight: bold;
`;

export const ContainerAjuda = styled.View`
  padding: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ContainerCadastro = styled.View`
  padding: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
