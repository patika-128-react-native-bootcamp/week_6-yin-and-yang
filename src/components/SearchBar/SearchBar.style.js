import {StyleSheet} from 'react-native';
import spacing from '../../styles/spacing';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderBottomColor: 'red',
    borderTopColor: 'blue',
    borderColor: 'green',
    borderWidth: 3,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.tiny,
    marginHorizontal: spacing.small,
    borderRadius: 10,
    marginVertical: spacing.large,
    height: 45,
  },
  input: {
    flex: 1,
  },
});
