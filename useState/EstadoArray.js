import { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';

export default function EstadoArray() {
  const [texto, setTexto] = useState('');
  const [tarefas, setTarefas] = useState([]);

  const adicionar = (t) => {
    if (!t.trim()) return;
    setTarefas((ant) => [...ant, { id: Date.now().toString(), texto: t, feita: false }]);
    setTexto('');
  };

  const remover = (id) =>
    setTarefas((ant) => ant.filter((t) => t.id !== id));

  const alternar = (id) =>
    setTarefas((ant) =>
      ant.map((t) => (t.id === id ? { ...t, feita: !t.feita } : t))
    );

  const ordenar = () =>
    setTarefas((ant) => [...ant].sort((a, b) => a.texto.localeCompare(b.texto)));

  return (
    <View style={{ padding: 20, flex: 1, gap: 8 }}>
      <TextInput
        placeholder="Nova tarefa"
        value={texto}
        onChangeText={setTexto}
        style={{ borderWidth: 1, borderColor: '#999', padding: 8, borderRadius: 6 }}
      />
      <Button title="Adicionar" onPress={() => adicionar(texto)} />
      <Button title="Ordenar A-Z" onPress={ordenar} />
      <Text style={{ color: '#666' }}>Toque: alternar · Segure: remover</Text>

      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => alternar(item.id)}
            onLongPress={() => remover(item.id)}
          >
            <Text style={{
              padding: 12, fontSize: 16,
              textDecorationLine: item.feita ? 'line-through' : 'none',
              opacity: item.feita ? 0.5 : 1,
            }}>
              {item.feita ? '✔ ' : '○ '}{item.texto}
            </Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text>Nenhuma tarefa</Text>}
      />
    </View>
  );
}
