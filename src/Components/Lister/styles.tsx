import { StyleSheet,Platform,Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const boxShadow:any = Platform.select({
  ios:{
      shadowColor:'#000',
      shadowOffset:{
          width:0,
          height:0
      },
      shadowOpacity:0.4,
      shadowRadius:4
  },
  android:{elevation:1},

});

const styles = StyleSheet.create({
    container:{
      margin:5,
      padding:4,

      ...boxShadow
    },  
    widget:{
      height:windowHeight/4 + 50,
      width:windowWidth/3 + 50 
    },
    image:{ 
        flexGrow:1,
        flex:1,
        alignItems:'center',
        height:undefined,
        width:undefined
      },
    text:{
      fontWeight:'bold'
    }
  });

  export default styles