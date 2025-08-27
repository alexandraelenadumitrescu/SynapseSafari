
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import type { DrawerNavigationProp } from '@react-navigation/drawer';

type HomeScreenProps = {
  navigation: DrawerNavigationProp<any>;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Synapse Safari</Text>
      <Text style={styles.subtitle}>Embark on an exciting journey through your mind with our interactive cognitive assessment platform.</Text>
      <Button title="Talk to AI Assistant" onPress={() => navigation.navigate('AI Assistant')} />
      <Button title="Try Cognitive Games" onPress={() => navigation.navigate('Games')} />
      <Button title="Learn More" onPress={() => navigation.navigate('Resources')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#2d7be5', marginBottom: 16 },
  subtitle: { fontSize: 16, color: '#444', textAlign: 'center', marginBottom: 32 },
});
