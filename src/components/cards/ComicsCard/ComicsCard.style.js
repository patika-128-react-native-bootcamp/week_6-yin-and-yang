import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../styles/colors';
import fontSizes from '../../../styles/fontSizes';
import spacing from '../../../styles/spacing';
import radius from '../../../styles/radius';

const base_style = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width / 1.5,
    height: Dimensions.get('window').height / 1.7,
    margin: spacing.normal,
    marginBottom: 0,
    padding: spacing.large,
    alignItems: 'center',
    borderTopRightRadius: radius.normal,
    borderTopLeftRadius: radius.normal,
  },
  image: {
    width: '100%',
    height: Dimensions.get('window').height / 2.6,
    resizeMode: 'cover',
    borderRadius: radius.big,
    margin: 0,
    marginBottom: spacing.normal,
  },
  comicsName: {
    fontSize: fontSizes.huge,
    color: colors.textColor,
    fontWeight: 'bold',
  },
});

export default {
  light: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: colors.lightThemeColorRed,
    },
  }),

  dark: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: colors.darkThemeColor1,
      borderWidth: 1,
      borderColor: 'white',
    },
  }),
};
