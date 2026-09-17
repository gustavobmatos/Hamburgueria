import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.container}
      behavior='padding'
      keyboardVerticalOffset={30}>
      <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>Burguer Craft</Text>
            <Text style={styles.headerSubtitle}>Sabor artesanal de verdade</Text>
          </View>

          <View style={styles.avatarPlaceholder}>
            <Ionicons name="person" size={20} color="#000000ff"></Ionicons>
          </View>
        </View>
        {/* Header */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7ff'
  },
  header: {
    width: "100%",
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: "#2f2d2c"
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#9b9b9b",
    marginTop: 4
  },
  avatarPlaceholder: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center"
  },
});
