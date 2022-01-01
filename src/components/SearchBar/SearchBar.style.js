import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import radius from '../../styles/radius';
import spacing from '../../styles/spacing';

const base_style = StyleSheet.create({
  container: {
    borderBottomColor: colors.lightThemeColorRed,
    borderTopColor: colors.lightThemeColorBlue,
    borderColor: 'green',
    borderWidth: 3,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.tiny,
    marginHorizontal: spacing.small,
    borderRadius: radius.normal,
    marginVertical: spacing.large,
    height: 45,
  },
  input: {
    flex: 1,
  },
});

export default {
  light: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: 'white',
    },
  }),

  dark: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: colors.darkThemeColor1,
      borderBottomColor: 'white',
      borderTopColor: 'white',
      borderColor: 'white',
      borderWidth: 1,
    },
    input: {
      ...base_style.input,
      color: 'white',
    },
  }),
};
