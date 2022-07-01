import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {TextInput} from 'react-native';
import styles from './styles';
import {RadioButton} from 'react-native-paper';
import {TouchableHighlight} from 'react-native-gesture-handler';

const CreateListScreen = () => {
  const [checked, setChecked] = useState('Public');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a list</Text>
      <TextInput placeholder="Title" style={styles.input} />
      <View style={styles.privacyContainer}>
        <Text style={{fontSize: 24}}>Privacy</Text>
        <View style={styles.radio}>
          <RadioButton
            value="Public"
            status={checked === 'Public' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Public')}
            color="#B74558"
          />
          <Text style={styles.radioText}>
            Public
            <Text style={{fontSize: 16}}>
              {'\n'}Visible to everyone who can view your profile
            </Text>
          </Text>
        </View>
        <View style={[styles.radio, {borderTopWidth: 1}]}>
          <RadioButton
            value="Private"
            status={checked === 'Private' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Private')}
            color="#B74558"
          />
          <Text style={styles.radioText}>
            Private
            <Text style={{fontSize: 16}}>
              {'\n'}Visible to only you and your friends
            </Text>
          </Text>
        </View>
      </View>
      <TouchableHighlight style={styles.button}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Create</Text>
      </TouchableHighlight>
    </View>
  );
};

export default CreateListScreen;
