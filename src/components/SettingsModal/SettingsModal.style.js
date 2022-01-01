import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import spacing from '../../styles/spacing';
import fontSizes from '../../styles/fontSizes';
import radius from '../../styles/radius';

const base_style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: spacing.big,
    borderRadius: radius.normal,
  },
  modal: {
    justifyContent: 'flex-start',
  },
  dropdownPicker: {
    width: Dimensions.get('window').width / 2.8,
    height: 35,
    marginTop: spacing.small,
  },
  text: {
    fontSize: fontSizes.normal,
  },
  switchView: {
    alignItems: 'center',
  },
});

export default {
  light: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: 'white',
      borderBottomColor: colors.lightThemeColorBlue,
      borderTopColor: colors.lightThemeColorRed,
      borderColor: 'green',
      borderWidth: 3,
    },

    text: {
      ...base_style.text,
      color: 'black',
    },
  }),
  dark: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: colors.darkThemeBackground,
      borderColor: 'white',
      borderWidth: 1,
    },
    text: {
      ...base_style.text,
      color: 'white',
    },
  }),
};
