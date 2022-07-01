import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        flexGrow:1,

    },
    title:{
        fontSize:30,
        color:'#484848',
        fontWeight:'bold',
        marginLeft:16,
        marginTop:60,
    },

    content:{

        marginTop:30,
        margin:20,
        fontSize:18,
        color:'grey',
        lineHeight:30,
        paddingHorizontal:5,
        textAlign:'justify'
    },
    footer:{
        borderTopWidth:1,
        borderTopColor:'grey',
        position:'absolute',
        bottom:0,
        width:'100%',
        paddingHorizontal:15,
    },
    button:{
        marginVertical:10,
        paddingVertical:15,
  	    borderRadius: 3,
        backgroundColor:'#B74558',
    },
    text:{
        fontSize:20,
        color: 'white',
        textAlign: 'center',
        fontWeight: '600',
    }
})