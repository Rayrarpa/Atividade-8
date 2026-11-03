import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

export default function Saudacao() {
  const [nome, setNome] = useState('');
  const [visivel, setVisivel] = useState(false);

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
        onFocus={() => setVisivel(true)}
        style={{ borderWidth: 1, borderColor: '#999', padding: 8, borderRadius: 6 }}
      />
      <Text style={{ marginTop: 12, fontSize: 18 }}>
        {nome ? `Olá, ${nome}!` : 'Digite algo acima'}
      </Text>
      {visivel && <Text style={{ color: '#888' }}>(campo já foi focado)</Text>}
    </View>
  );
}
