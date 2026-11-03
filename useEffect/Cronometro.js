import { useState, useEffect } from 'react';
import { Text } from 'react-native';

export default function Cronometro() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSegundos((s) => s + 1);
    }, 1000);

    return () => clearInterval(id); // limpeza
  }, []);

  return <Text style={{ fontSize: 48, textAlign: 'center', padding: 20 }}>{segundos}s</Text>;
}

