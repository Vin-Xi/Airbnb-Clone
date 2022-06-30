import React from 'react'
import {
     View,
     TouchableOpacity,
     Image
     } from "react-native";
import  styles from './styles';


const Categories:React.FC<{photo:any}> = ({photo}) =>{
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.widget}>
                <Image 
                    source={photo}
                    style={styles.image}
                    resizeMode={'contain'}
                />
            </TouchableOpacity>
        </View>
    )
}

export default Categories