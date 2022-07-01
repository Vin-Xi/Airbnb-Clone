import React, {useCallback, useRef} from 'react';
import {View, Image, Text, Animated, ImageBackground} from 'react-native';
import styles from './styles';
import Stars from '../Stars';
import {useAppDispatch} from '../../redux/hooks';
import {save} from '../../redux/actions/savedActions';
import {
  TapGestureHandler,
  TouchableOpacity,
} from 'react-native-gesture-handler';

export interface IListing {
  photo: any;
  type: string;
  title: string;
  price: number;
  priceType: string;
  location: string;
  id: number;
  stars: number;
}

const AnimatedImage = Animated.createAnimatedComponent(Image);

const Lister: React.FC<{listing: IListing}> = ({listing}) => {
  const dispatch = useAppDispatch();
  const handleSaved = () => {
    dispatch(save(listing));
  };

  const animatedValue = useRef(new Animated.Value(0)).current;

  const onDoubleTap = useCallback(() => {
    handleSaved();
    Animated.sequence([
      Animated.spring(animatedValue, {
        toValue: 2,
        useNativeDriver: true,
      }),
      Animated.spring(animatedValue, {
        toValue: 0,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const ImageStyle = {
    shadowOffset: {width: 0, height: 20},
    shadowOpacity: 0.35,
    shadowRadius: 35,

    opacity: animatedValue,
    transform: [
      {
        scale: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0.7, 1.5],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <TapGestureHandler numberOfTaps={2} onActivated={onDoubleTap}>
        <View style={styles.widget}>
          <ImageBackground source={listing.photo} style={styles.image}>
            <AnimatedImage
              source={require('../../assets/heart.png')}
              resizeMode={'center'}
              style={[ImageStyle, {height: 25, width: 25, flex: 1}]}
            />
          </ImageBackground>
          <Text style={styles.text}>{listing.type}</Text>
          <Text style={styles.text}>{listing.title}</Text>
          <Text>
            {listing.price}$ {listing.priceType}
          </Text>
          <Stars rating={listing.stars} />
        </View>
      </TapGestureHandler>
    </View>
  );
};

export default Lister;
