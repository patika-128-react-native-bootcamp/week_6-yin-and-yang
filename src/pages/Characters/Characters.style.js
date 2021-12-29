import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import fontSizes from '../../styles/fontSizes';
import radius from '../../styles/radius';
import spacing from '../../styles/spacing';

const base_style = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    width: Dimensions.get('window').width / 1.5,
    marginHorizontal: spacing.normal,
    padding: spacing.small,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: radius.normal,
    borderBottomLeftRadius: radius.normal,
  },
  buttonText: {
    fontSize: fontSizes.big,
    color: colors.textColor,
    fontWeight: '800',
  },
});

export default {
  light: StyleSheet.create({
    ...base_style,
    buttonContainer: {
      ...base_style.buttonContainer,
      backgroundColor: colors.lightThemeColorBlue,
    },
  }),

  dark: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: colors.darkThemeBackground,
    },
    buttonContainer: {
      ...base_style.buttonContainer,
      backgroundColor: colors.darkThemeColor2,
      borderTopWidth: 0,
      borderWidth: 1,
      borderColor: 'white',
    },
  }),
};
