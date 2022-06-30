import React from 'react'
import {
     View,
     TouchableOpacity,
     Image,
     Text
     } from "react-native";
import  styles from './styles';
import Stars from '../Stars'

interface IListing{
    photo: any,
    type: string,
    title: string,

    price: number,
    priceType: string,
    id:number,

    stars: number,
}

const Lister:React.FC<{listing:IListing}> = ({listing}) =>{
    
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.widget} activeOpacity={0.6}>
                <Image 
                    source={listing.photo}
                    style={styles.image}
                    resizeMode={'cover'}
                />
                <Text>{listing.type}</Text>
                <Text>{listing.title}</Text>
                <Text>{listing.price}$ {listing.priceType}</Text>
                <Stars rating={listing.stars}/>
            </TouchableOpacity>
        </View>
    )
}

export default Lister