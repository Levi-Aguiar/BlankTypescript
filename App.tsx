import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import "./global.css";
import { Profile } from '@/app/Profile';


export default function App() {
  return (
    <View >
      <Profile/>
      <Text className="text-xl font-bold text-blue-500">
        @XeiquisperBr
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}