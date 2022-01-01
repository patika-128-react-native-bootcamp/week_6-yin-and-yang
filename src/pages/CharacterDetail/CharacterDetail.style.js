import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import fontSizes from '../../styles/fontSizes';
import spacing from '../../styles/spacing';

const base_style = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: Dimensions.get('window').height / 2.9,
  },
  characterNameView: {
    alignItems: 'center',
    margin: spacing.normal,
  },
  comicsView: {
    alignItems: 'center',
    flexDirection: 'row',
    margin: spacing.normal,
  },
  comicsListView: {
    margin: spacing.large,
    borderBottomWidth: 1,
  },
  characterName: {
    fontSize: fontSizes.bigTitle,
    fontWeight: 'bold',
  },
  comicsNumber: {
    fontSize: fontSizes.huge,
    fontStyle: 'italic',
  },
  description: {
    margin: spacing.normal,
    fontSize: fontSizes.big,
    fontStyle: 'italic',
  },
  comics: {
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
    comicsListView: {
      ...base_style.comicsListView,
      borderColor: 'white',
    },
    characterName: {
      ...base_style.characterName,
      color: colors.textColor,
    },
    comicsNumber: {
      ...base_style.comicsNumber,
      color: colors.textColor,
    },

    description: {
      ...base_style.description,
      color: colors.textColor,
    },
    comics: {
      ...base_style.comics,
      color: colors.textColor,
    },
  }),
};
