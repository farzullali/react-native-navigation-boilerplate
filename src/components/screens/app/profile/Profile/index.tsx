import { View, Text, StyleSheet } from 'react-native';
import { StackNavigationProps } from '../../../../../types/navigation/navigation';

type ProfileScreenProps = StackNavigationProps<'PROFILE'>;

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
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

export default ProfileScreen;