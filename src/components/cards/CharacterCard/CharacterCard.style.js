import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../styles/colors';
import fontSizes from '../../../styles/fontSizes';
import spacing from '../../../styles/spacing';

export default StyleSheet.create({
  container: {
    width: Dimensions.get('window').width / 1.5,
    marginHorizontal: spacing.normal,
    padding: spacing.large,
    alignItems: 'center',
    backgroundColor: 'rgba(200, 22, 22, 0.7)',
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: Dimensions.get('window').height / 2.6,
    marginBottom: spacing.normal,
    alignItems: 'flex-end',
  },
  characterName: {
    fontSize: fontSizes.title,
    color: colors.textColor,
    fontWeight: 'bold',
  },
  contents: {
    fontSize: fontSizes.normal,
    color: colors.textColor,
    fontStyle: 'italic',
  },
  description: {
    fontSize: fontSizes.normal,
    color: colors.textColor,
    fontStyle: 'italic',
  },
});
