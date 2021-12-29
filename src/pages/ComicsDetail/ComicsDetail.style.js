import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import fontSizes from '../../styles/fontSizes';
import radius from '../../styles/radius';
import spacing from '../../styles/spacing';

const base_style = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: Dimensions.get('window').height / 2.6,
    marginTop: spacing.normal,
    borderRadius: radius.small,
    resizeMode: 'contain',
  },
  comicsNameView: {
    alignItems: 'center',
    margin: spacing.normal,
  },
  contentView: {
    alignItems: 'center',
    flexDirection: 'row',
    margin: spacing.big,
    marginBottom: 0,
  },
  contentListView: {
    margin: spacing.large,
    borderBottomWidth: 1,
  },
  comicsName: {
    fontSize: fontSizes.bigTitle,
    fontWeight: 'bold',
  },
  contentTitle: {
    fontSize: fontSizes.title,
    fontStyle: 'italic',
  },
  description: {
    margin: spacing.normal,
    fontSize: fontSizes.big,
    fontStyle: 'italic',
  },
  contents: {
    fontSize: fontSizes.normal,
    fontStyle: 'italic',
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
    comicsName: {
      ...base_style.comicsName,
      color: colors.textColor,
    },
    contentTitle: {
      ...base_style.contentTitle,
      color: colors.textColor,
    },
    description: {
      ...base_style.description,
      color: colors.textColor,
    },
    contents: {
      ...base_style.contents,
      color: colors.textColor,
    },
    contentListView: {
      ...base_style.contentListView,
      borderColor: 'white',
    },
  }),
};
