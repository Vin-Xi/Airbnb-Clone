import {StyleSheet,Platform} from 'react-native'

export default StyleSheet.create({
    container:{
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 1,
        borderLeftColor: '#B74558',
        borderLeftWidth: 10,
        alignSelf: 'stretch',
        backgroundColor: 'white',
        marginTop: 20,
    },
    widget:{
        flexDirection:'row'
    },
    image:{
        height:100,
        width:100
    },
    text:{
        flexShrink:1,
        alignSelf:'center',
        fontWeight:'bold',
        fontSize:17,
        margin:10,
    },
    animatedContainer:{
        backgroundColor: '#B74558',
        justifyContent: 'center',
        flex:1,

    },
    animate:{
        fontSize:20,
        fontWeight:'600',
        color:'#40394a',
        margin:3,
    }
})