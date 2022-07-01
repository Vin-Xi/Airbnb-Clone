import React from 'react';
import {View, TouchableOpacity, Text, Image, Animated} from 'react-native';
import ListingsContainer from '../../Containers/ListingsContainer';
import { IListing } from '../Lister/listings';
import styles from './styles';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { useAppDispatch } from '../../redux/hooks';
import { del } from '../../redux/actions/savedActions';
import { RectButton } from 'react-native-gesture-handler';

const SavedList:React.FC<{listing:IListing}> = ({listing}) => {
    const dispatch = useAppDispatch()
    
    const onSwipeLeft= () =>{
        console.log("Dispatched!")
        dispatch(del(listing))
    }
    const AnimatedView = Animated.createAnimatedComponent(View)

    const leftSwipeActions = (
      _progress:Animated.AnimatedInterpolation,
      dragX:Animated.AnimatedInterpolation
      ) =>{
      const scale=dragX.interpolate({
        inputRange:[0,100],
        outputRange:[0,1],
        extrapolate:'clamp'
      });
      
      return(
          <AnimatedView style={styles.animatedContainer}>
            <Animated.Text style={[styles.animate,{transform:[{scale}]}]} >
              Delete
            </Animated.Text>
          </AnimatedView>     
        )
    }
    return(
        <View style={styles.container}>
            <Swipeable renderLeftActions={leftSwipeActions} onSwipeableWillOpen={onSwipeLeft} >
            <TouchableOpacity style={styles.widget} activeOpacity={1}>
                <Image source={listing.photo} style={styles.image}/>
                <Text style={styles.text}>{listing.title}</Text>
            </TouchableOpacity>
            </Swipeable>
        </View>
    )
};
export default SavedList;
