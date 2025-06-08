import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, TouchableOpacity, Linking } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import ProjectCard from './components/ProjectCard'; 


export default function App() {
  const handlePress = (url) => {
    Linking.openURL(url).catch((err) => console.error('Failed to open URL:', err));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
            style={{ width: '100%', aspectRatio: 16/9 }} 
            resizeMode="cover"
          />

          <Image 
            source={require('./assets/pic.jpeg')}
            style={styles.profilePic}
          />

          <Text style={styles.name}>Tanishq Pratap</Text>
          <Text>Freelance Software Engineer</Text>

          <View style={styles.iconRow}>
            <TouchableOpacity onPress={() => handlePress('mailto:tanishqontop@gmail.com')}>
              <FontAwesome6 name="envelope" size={22} color="#D44638" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress('https://github.com/Tanishqontop')}>
              <FontAwesome6 name="github" size={22} color="#000000" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress('https://linkedin.com/in/tanishqpratap')}>
              <FontAwesome6 name="linkedin" size={22} color="#0A66C2" />
            </TouchableOpacity>
          </View>

          <Text style={styles.about}>
            Hey, I'm Tanishq 👋 — a freelance mobile developer who builds sleek, scalable apps with React Native and Supabase. 
            From idea to App Store, I handle UI/UX, backend, animations, and everything in between. I’ve worked on real estate 
            platforms, social apps, and scroll-animated experiences with GSAP.
            Outside of coding, I enjoy good design, indie tech, and helping founders ship quickly without cutting corners. 
            Let’s build your next big thing.
          </Text>

          <Text style={{ fontWeight: '600' ,fontSize: 22, color: '#000', marginBottom: 20, marginTop: 10 }}>
            My Projects:
          </Text>
         <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 10, paddingHorizontal: 20 }}>
            <ProjectCard title="Habitat" image= {require ('./assets/Project1.png')} />
            <ProjectCard title="Restate" image= {require ('./assets/Project1.png')} />
         </ScrollView>
          
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginTop: -49,
    borderWidth: 5,
    borderColor: 'white',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconRow: {
    flexDirection: 'row',
    marginVertical: 8,
    gap: 15,
  },
  about: {
    padding: 10,
    fontSize: 16,
    paddingLeft: 25,
    paddingRight: 25,
    lineHeight: 24,
    textAlign: 'center',
  },
});
