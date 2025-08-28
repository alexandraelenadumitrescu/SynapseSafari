
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity, Platform, Alert } from 'react-native';
import { useUser } from '../context/UserContext';
import * as ImagePicker from 'react-native-image-picker';

export default function ProfileScreen() {
  const { user, updateProfile, logout } = useUser();
  const [bio, setBio] = useState(user?.bio || '');
  const [editing, setEditing] = useState(false);
  const [photo, setPhoto] = useState(user?.photo);

  if (!user) return <View style={styles.container}><Text>Not logged in.</Text></View>;

  const handleSave = async () => {
    await updateProfile({ bio, photo });
    setEditing(false);
  };

  const pickImage = async () => {
    ImagePicker.launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
        selectionLimit: 1,
      },
      (response) => {
        if (response.didCancel) return;
        if (response.errorCode) {
          Alert.alert('ImagePicker Error', response.errorMessage || 'Unknown error');
          return;
        }
        if (response.assets && response.assets.length > 0) {
          setPhoto(response.assets[0].uri);
        }
      }
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={editing ? pickImage : undefined}>
        {photo ? (
          <Image
            source={{ uri: photo }}
            style={styles.avatar}
          />
        ) : (
          <View style={[styles.avatar, styles.avatarPlaceholder]}>
            <Text style={styles.avatarInitial}>
              {user.name ? user.name[0].toUpperCase() : '?'}
            </Text>
          </View>
        )}
      </TouchableOpacity>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
      {editing ? (
        <TextInput
          style={styles.bioInput}
          value={bio}
          onChangeText={setBio}
          placeholder="Your bio"
        />
      ) : (
        <Text style={styles.bio}>{user.bio || 'No bio yet.'}</Text>
      )}
      {editing ? (
        <Button title="Save" onPress={handleSave} />
      ) : (
        <Button title="Edit Profile" onPress={() => setEditing(true)} />
      )}
      <Button title="Log Out" color="#d33" onPress={logout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 24, backgroundColor: '#fff' },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 16, backgroundColor: '#eee' },
  avatarPlaceholder: { justifyContent: 'center', alignItems: 'center' },
  avatarInitial: { fontSize: 40, color: '#bbb', fontWeight: 'bold' },
  name: { fontSize: 24, fontWeight: 'bold', marginBottom: 4 },
  email: { fontSize: 16, color: '#888', marginBottom: 16 },
  bio: { fontSize: 16, color: '#444', marginBottom: 16, textAlign: 'center' },
  bioInput: { width: 250, height: 40, borderColor: '#ccc', borderWidth: 1, borderRadius: 8, marginBottom: 16, paddingHorizontal: 8 },
});
