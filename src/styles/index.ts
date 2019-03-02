import { StyleSheet } from 'react-native';
import constants from './constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: constants.COLORS.BACKGROUND
  },
  heading: {
    fontFamily: constants.FONTS.HEADLINE,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  headingOne: {
    fontSize: constants.SIZES.TEXTS.H1,
    marginBottom: constants.SIZES.SPACES.FULL,
    color: constants.COLORS.PRIMARY
  },
  pText: {
    fontSize: constants.SIZES.TEXTS.BODY,
    marginBottom: constants.SIZES.SPACES.FULL,
    color: constants.COLORS.TEXT
  },
  linkText: {
    color: constants.COLORS.SECONDARY
  },
  menuItem:{
    padding: constants.SIZES.SPACES.FULL,
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  },
  textInput: {
    fontSize: constants.SIZES.TEXTS.BODY,
    height: 50,
    width: 280,
    paddingTop: constants.SIZES.SPACES.SMALL,
    paddingBottom: constants.SIZES.SPACES.SMALL,
    paddingLeft: constants.SIZES.SPACES.SMALL,
    borderBottomWidth: 2,
    fontWeight: 'bold',
    borderBottomColor: '#EEE'
  },
  lastTextInput: {
    marginBottom: constants.SIZES.SPACES.FULL
  },
  button: {
    fontFamily: constants.FONTS.BUTTON,
    fontWeight: 'bold'
  },
  errorText: {
    fontWeight: 'bold',
    color: constants.COLORS.WARNING,
    fontSize: constants.SIZES.TEXTS.BODY
  },
  userThumb: {
    width: 100,
    height: 100,
    borderRadius: 50
  }
});

export default styles;
