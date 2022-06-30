import React from "react";
 
import {
    View,
    Text,
    FlatList
} from 'react-native';
import Categories from "../../Components/Categories";
import categoriesList from "../../data/categories";
import styles from './styles';

interface Icategories{
    name:string,
    photo:string
};

const CategoriesContainer = () =>{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Explore Categories</Text>
            <FlatList
                horizontal
                keyExtractor={(cat)=>cat.name}
                data={categoriesList}
                renderItem={({item})=><Categories photo={item.photo}/>}
                
                contentContainerStyle={styles.widgetContainer}
            />
        </View>
    )
}

export default CategoriesContainer