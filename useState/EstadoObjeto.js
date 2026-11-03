import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function EstadoObjeto() {
  const [usuario, setUsuario] = useState({
    nome: '', email: '', idade: 0,
  });

  function mutarErrado() {
    usuario.nome = 'Ana';
    setUsuario(usuario);
  }

  function trocarNomeCerto() {
    setUsuario({ ...usuario, nome: 'Ana' });
  }

  function atualizar(campo, valor) {
    setUsuario((ant) => ({ ...ant, [campo]: valor }));
  }

  const input = { borderWidth: 1, borderColor: '#999', padding: 8, borderRadius: 6 };

  return (
    <View style={{ padding: 20, gap: 8 }}>
      <TextInput style={input} placeholder="Nome" value={usuario.nome}
        onChangeText={(t) => atualizar('nome', t)} />
      <TextInput style={input} placeholder="E-mail" value={usuario.email}
        onChangeText={(t) => atualizar('email', t)} />
      <TextInput style={input} placeholder="Idade" keyboardType="numeric"
        value={String(usuario.idade)}
        onChangeText={(t) => atualizar('idade', Number(t) || 0)} />

      <Text>{JSON.stringify(usuario)}</Text>

      <Button title="ERRADO: mutar (tela não atualiza)" color="#c2571a" onPress={mutarErrado} />
      <Button title="CERTO: { ...usuario, nome: 'Ana' }" onPress={trocarNomeCerto} />
    </View>
  );
}
