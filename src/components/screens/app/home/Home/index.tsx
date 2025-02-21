import { View, Text, StyleSheet } from 'react-native';
import { StackNavigationProps } from '../../../../../types/navigation/navigation';

type HomeScreenProps = StackNavigationProps<'HOME'>;

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
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

export default HomeScreen;