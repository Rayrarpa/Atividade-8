import { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function AtualizacaoFuncional() {
  const [contador, setContador] = useState(0);

  function somarTresErrado() {
    setContador(contador + 1);
    setContador(contador + 1);
    setContador(contador + 1);
  }

  function somarTres() {
    setContador((anterior) => anterior + 1);
    setContador((anterior) => anterior + 1);
    setContador((anterior) => anterior + 1);
  }

  function somaUm(anterior) {
    return anterior + 1;
  }

  return (
    <View style={{ padding: 20, gap: 10 }}>
      <Text style={{ fontSize: 40, textAlign: 'center' }}>{contador}</Text>
      <Button title="Problema · soma só 1" onPress={somarTresErrado} />
      <Button title="Solução · soma 3" onPress={somarTres} />
      <Button title="setContador(somaUm) · entrega, não chama" onPress={() => setContador(somaUm)} />
      <Button title="Zerar" onPress={() => setContador(0)} />
    </View>
  );
}
