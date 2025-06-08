import { View, Text, Image } from 'react-native';

export default function ProjectCard ({ title, image }) {
  return (
    <View>
      <Image 
        source={image}
        style={{ height: 150, aspectRatio: 16/9, borderRadius: 10, marginBottom: 5 }}
        resizeMode="cover"
        />
        <Text
          style={{ fontWeight: '600', fontSize: 18, color: '#000', marginTop: 10, marginBottom: 5 }}>
          {title}
        </Text>
      </View>
  );
  }