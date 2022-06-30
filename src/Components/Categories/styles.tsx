import { StyleSheet,Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
console.log(windowHeight,windowWidth)
const styles = StyleSheet.create({
    container:{
      marginHorizontal:10,
    },
    widget:{

      height:windowHeight/6,
      width:windowWidth/4,
    },
    image:{
      flex:1,
      height:undefined,
      width:undefined
    }
  });

  export default styles