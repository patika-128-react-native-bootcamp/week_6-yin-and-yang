import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import fontSizes from '../../styles/fontSizes';
import spacing from '../../styles/spacing';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  imageBackground: {
    height: Dimensions.get('window').height / 2.1,
    width: Dimensions.get('window').width / 1.05,
    margin: spacing.normal,
  },
  textView: {
    padding: spacing.tiny,
    backgroundColor: colors.lightThemeColorRed,
    alignItems: 'center',
  },
  text: {
    fontSize: fontSizes.bigTitle,
    color: colors.textColor,
    fontWeight: 'bold',
  },
});
