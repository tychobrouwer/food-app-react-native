import { StyleSheet } from 'react-native';

// import the style config
import config from '../../config';

// styles for the home screen
const styles = StyleSheet.create({
  recipeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: config.secondaryColor,
  },

  TextRec: {
    fontSize: 17,
    color: config.primaryTextColor,
    paddingBottom: 100,
  },

  contentWrap: {
    width: '100%',
    height: 70,
    backgroundColor: config.tertiaryColor,
    color: config.primaryTextColor,
    alignItems: 'center',
    borderRadius: 5,
  },

  contentText: {
    fontSize: 20,
    color: config.primaryTextColor,
    width: '80%',
  },

  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: config.tertiaryColor,
    paddingHorizontal: '10%',
  },

  cancelBtn: {
    backgroundColor: config.secondaryColor,
    color: config.tertiaryColor,
  },

  cancelBtnView: {
    marginTop: '5%',
    marginBottom: '15%',
    width: '100%',
    alignItems: 'center',
  },

  servings: {
    marginTop: 20,
    width: '100%',
    textAlign: 'left',
    fontSize: 20,
  },

  itemTitle: {
    width: '100%',
    marginTop: 20,
    marginBottom: 5,
  },

  ingredientItem: {
    fontSize: 20,
  },

  ingredient: {
    paddingBottom: 5,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
