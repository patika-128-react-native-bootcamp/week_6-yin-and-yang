import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import fontSizes from '../../styles/fontSizes';
import spacing from '../../styles/spacing';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
    alignItems:'center',
    flexDirection:'row',
    margin: spacing.normal,
  },
  comicsListView: {
    margin: spacing.large,
    borderBottomWidth:1
  },

  characterName: {
    fontSize: fontSizes.bigTitle,
    fontWeight: 'bold',
  },
  contents: {
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
