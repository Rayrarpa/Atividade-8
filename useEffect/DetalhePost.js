import { useState, useEffect } from 'react';
import { ActivityIndicator, Text, View, Button } from 'react-native';
import { API } from '../../config/api';

function DetalhePost({ postId }) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    setPost(null);
    fetch(`${API}/posts/${postId}`)
      .then((r) => r.json())
      .then(setPost);
  }, [postId]); 

  if (!post) return <ActivityIndicator />;
  return <Text style={{ fontSize: 16 }}>{post.title}</Text>;
}

export default function DetalheExemplo() {
  const [postId, setPostId] = useState(1);
  return (
    <View style={{ padding: 20, gap: 10 }}>
      <Text style={{ fontWeight: 'bold' }}>Post #{postId}</Text>
      <DetalhePost postId={postId} />
      <Button title="Anterior" disabled={postId <= 1} onPress={() => setPostId((p) => p - 1)} />
      <Button title="Próximo" onPress={() => setPostId((p) => p + 1)} />
    </View>
  );
}
