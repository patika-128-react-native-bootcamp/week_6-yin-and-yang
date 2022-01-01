import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import fontSizes from '../../styles/fontSizes';
import radius from '../../styles/radius';
import spacing from '../../styles/spacing';

const base_style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  buttonContainer: {
    width: Dimensions.get('window').width / 1.5,
    marginHorizontal: spacing.normal,
    padding: spacing.small,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightThemeColorBlue,
    borderBottomRightRadius: radius.normal,
    borderBottomLeftRadius: radius.normal,
  },
  buttonText: {
    fontSize: fontSizes.big,
    color: colors.textColor,
    fontWeight: '800',
  },
  list: {
    marginTop: spacing.huge,
  },
  textView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.huge,
    borderBottomColor: colors.lightThemeColorRed,
    borderTopColor: colors.lightThemeColorBlue,
    borderBottomWidth: 3,
    borderTopWidth: 3,
  },
  text: {
    fontSize: fontSizes.huge,
    fontWeight: 'bold',
    padding: spacing.small,
  },
});

export default {
  light: StyleSheet.create({
    ...base_style,
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
    text: {
      ...base_style.text,
      color: colors.textColor,
    },
  }),
};
