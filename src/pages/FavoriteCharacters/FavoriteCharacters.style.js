import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import fontSizes from '../../styles/fontSizes';
import spacing from '../../styles/spacing';

export default StyleSheet.create({
  buttonContainer: {
    width: Dimensions.get('window').width / 1.5,
    marginHorizontal: spacing.normal,
    padding: spacing.small,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(22, 22, 250, 0.8)',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  buttonText: {
    fontSize: fontSizes.big,
    color: colors.textColor,
    fontWeight: '800',
  },
});
