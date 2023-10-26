import { StyleSheet, Dimensions, Platform } from "react-native";

export const windowHeight = Dimensions.get('window').height;
export const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  titleText: {
    color: 'white',
    fontSize: 45,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleContainer: {
    margin: 10,
  },
  appBarContainer: {
    margin: Platform.OS == 'android' ? 24 : 0,
  },
});