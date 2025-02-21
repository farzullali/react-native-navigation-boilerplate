import { View, Text, StyleSheet } from 'react-native';
import { StackNavigationProps } from '../../../../../types/navigation/navigation';

type SettingsScreenProps = StackNavigationProps<'SETTINGS'>;
type HomeScreenProps = StackNavigationProps<'HOME'>;

const SettingsScreen: React.FC<SettingsScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SettingsScreen;