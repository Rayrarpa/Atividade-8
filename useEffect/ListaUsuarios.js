import { useState, useEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import Lista from '../../components/Lista';
import { URL_API } from '../../config/api';

export default function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function carregar() {
      try {
        const resposta = await fetch(URL_API);
        const dados = await resposta.json();
        setUsuarios(dados);
      } catch (e) {
        setErro(e.message);
      } finally {
        setCarregando(false);
      }
    }
    carregar();
  }, []);

  if (carregando) return <ActivityIndicator size="large" />;
  if (erro) return <Text>Erro: {erro}</Text>;
  return <View style={{ flex: 1 }}><Lista dados={usuarios} /></View>;
}
