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
    height: Dimensions.get('window').height / 2.6,
    marginTop:spacing.normal,
    borderRadius:5,
    resizeMode:'contain'
  },
  comicsNameView: {
    alignItems: 'center',
    margin: spacing.normal,
  },
  contentView: {
    alignItems:'center',
    flexDirection:'row',
    margin: spacing.normal,
  },
  contentListView: {
    margin: spacing.large,
    borderBottomWidth:1
  },

  comicsName: {
    fontSize: fontSizes.bigTitle,
    fontWeight: 'bold',
  },
  contentTitle: {
    fontSize: fontSizes.huge,
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
