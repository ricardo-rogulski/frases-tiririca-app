import React from 'react';
import { AppRegistry, View, Image, Text, TouchableOpacity, Alert } from 'react-native';

const Estilos = {
  principal: {
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 30,
    borderRadius: 6
  },
  textoBotao: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold'
  }
};

const gerarNovaFrase = () => {

  var numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 7);

  //Frases
  var frases = Array();
  frases[0] = 'Jamais esquecerei das coisas que me lembro.';
  frases[1] = 'Uma coisa é certa... Se não é verdade é mentira.';
  frases[2] = 'Não importa onde você esteja, você sempre estará lá...';
  frases[3] = 'Se tem uma coisa que acaba com o meu dia, é a noite...';
  frases[4] = 'Feliz é aquele... que não é triste.';
  frases[5] = 'Muitas vezes tentei fugir de mim, mas onde eu ia, eu tava.';
  frases[6] = 'O negócio é viver enquanto está vivo, porque depois que você morrer, sua vida acaba.';

  var fraseEscolhida = frases[numeroAleatorio];

  Alert.alert(fraseEscolhida);

};

const App = () => {

  const { principal, botao, textoBotao } = Estilos;

  return (
    <View style={principal} >

      <Image source={ require('./imgs/tiririca.jpg') }/>
      <TouchableOpacity
      onPress={gerarNovaFrase}
      style={botao}>
        <Text style={textoBotao}>Nova frase</Text>
      </TouchableOpacity>

    </View>

  );
};


AppRegistry.registerComponent('app2', () => App);
