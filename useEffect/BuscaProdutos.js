import { useState, useEffect } from 'react';
import { View, TextInput, FlatList, Text } from 'react-native';
import { API_PRODUTOS } from '../../config/api';

export default function BuscaProdutos() {
  const [termo, setTermo] = useState('');
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    if (termo.length < 3) return;

    const timer = setTimeout(async () => {
      const r = await fetch(`${API_PRODUTOS}/search?q=${termo}`);
      const dados = await r.json();
      setResultados(dados.products);
    }, 500);

    return () => clearTimeout(timer); 
  }, [termo]);

  return (
    <View style={{ padding: 20, flex: 1 }}>
      <TextInput
        placeholder="Digite 3+ letras (ex: cam)"
        value={termo}
        onChangeText={setTermo}
        style={{ borderWidth: 1, borderColor: '#999', padding: 8, borderRadius: 6 }}
      />
      <FlatList
        data={resultados}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Text style={{ padding: 10 }}>{item.title}</Text>}
      />
    </View>
  );
}
