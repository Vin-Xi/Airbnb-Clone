import React from 'react';

import {View, Text} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const color = {
  enabled: '#467D84',
  disabled: '#808080',
};

const Stars: React.FC<{rating: number}> = ({rating}) => {
  // construct stars according to rating
  const constructStars = () => {
    const starElements = [];
    for (let i = 0; i < 5; i++) {
      starElements.push(
        <Icon
          key={`stars-${i}`}
          name="star"
          style={styles.stars}
          color={rating > i ? color.enabled : color.disabled} // Color all stars if rating > i
        />,
      );
    }
    return starElements;
  };

  return (
    <View style={styles.container}>
      {constructStars()}
      <Text style={styles.text}>({rating})</Text>
    </View>
  );
};
export default Stars;
