import { View, Button, Text } from 'react-native';

export default function Contador() {
  let valor = 0;

  return (
    <View style={{ padding: 20 }}>
      <Text>Toque no botão e veja: o número nunca muda na tela.</Text>
      <Button
        title={`${valor}`}
        onPress={() => { valor++; console.log('valor agora é', valor); }}
      />
    </View>
  );
}
