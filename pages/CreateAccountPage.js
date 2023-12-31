import React, { useContext, useEffect, useState } from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from "expo-file-system"
import dispatch from '../dispatch/dispatch';
import actions from '../dispatch/actions';
import ContextStore from '../Context/ContextStore';
import * as Location from 'expo-location';
const CreateAccountPage = ({ navigation }) => {
  const {contextStore, setContextStore} = useContext(ContextStore)
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const [formData,setFormData] = useState({
    name: "",
    age: "",
    email: "",
    bloodGroup: "",
    phoneNumber: ""
  })
  const [image, setImage] = useState(null);
  const [activeBloodGroup, setActiveBloodGroup] = useState(null);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    
    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const onClickSignup = async () => {

    let token = await dispatch(actions.signup, {}, {...formData, location}, )
    console.log(token)
    let user = await dispatch(actions.uploadImage, {},image, token)
    console.log(token, user)
    setContextStore({...contextStore, token, user})
    navigation.navigate('RequestVerificationCode');
  }
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor='white' />
      <Text style={styles.title}>Create an account</Text>

      <View style={styles.pictureContainer}>
        <View style={styles.profilePicture}>{image && <Image source={{ uri: image }} style={styles.profilePicture} />}</View>
        <View style={styles.profilePictureTextContainer}>
          <TouchableOpacity onPress={pickImage}><Text style={styles.profilePictureText}>Add a Profile Picture</Text></TouchableOpacity>
        </View>
      </View>

      <Text style={styles.subtitle}>Enter your name</Text>

      <View style={styles.patientInfoContainer}>
        <TextInput
          style={styles.patientInput}
          placeholder='Name...'
          placeholderTextColor='#777'
          value={formData.name}
          onChangeText={(text) => {
            setFormData({...formData, name: text})
          }}
        />
        
      </View>
      <View style={styles.selectAgeButton}>
          <TextInput
          style={styles.patientInput}
          placeholder='Age..'
          placeholderTextColor='#777'
          value={formData.age}
          keyboardType={"numeric"}
          onChangeText={(text) => {
            setFormData({...formData, age: text})
          }}
        />
        </View>

      <Text style={styles.subtitle}>Enter your e-mail address</Text>

      <View style={styles.inputEmailContainer}>
      <TextInput
          style={styles.patientInput}
          placeholder='Name...'
          placeholderTextColor='#777'
          value={formData.email}
          onChangeText={(text) => {
            setFormData({...formData, email: text})
          }}
        />
      </View>

      <View style={styles.addBloodGroupButton}>
        <Text style={styles.addBloodGroup}>Select your blood group</Text>
      </View>

      <View style={styles.bloodGroupContainer}>
        {['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-'].map((bloodType) => (
          <View
            key={bloodType}
            style={[
              styles.bloodGroupCard,
              activeBloodGroup === bloodType && styles.activeBloodGroupCard,
            ]}
            onTouchEnd={() => {
              setActiveBloodGroup(bloodType)
              setFormData({...formData, bloodGroup: bloodType})
            }}>
            <Text
              style={[
                styles.bloodGroup,
                activeBloodGroup === bloodType
                  ? styles.activeBloodGroupText
                  : styles.inactiveBloodGroupText,
              ]}>
              {bloodType}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.phoneNumberContainer}>
        <Text style={styles.enterText}>Enter your phone number</Text>
        <View style={styles.phoneNumberInputContainer}>
          <TextInput style={styles.countryCodeInput} value='+880'></TextInput>
          <TextInput style={styles.phoneNumberInput} keyboardType={"numeric"} value={formData.phoneNumber} onChangeText={(text) => {
            setFormData({...formData, phoneNumber: text})
          }}></TextInput>
        </View>
      </View>

      <TouchableOpacity
        style={styles.submitRequestButton}
        onPress={() => {
          onClickSignup()
        }}>
        <Text style={styles.submitRequestText}>Request verification code</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  pictureContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },
  profilePicture: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 6,
  },
  profilePictureTextContainer: {
    alignItems: 'center',
    borderColor: 'black',
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: 'black',
    width: '38%',
  },
  profilePictureText: {
    color: 'white',
    fontSize: 12,
  },
  subtitle: {
    fontSize: 16,
  },
  patientInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
    alignItems: 'center',
    marginBottom: 8,
  },
  patientInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 16,
    paddingVertical: 2,
    paddingHorizontal: 12,
    marginRight: 8,
    fontSize: 10,
  },
  selectAgeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  selectAgeText: {
    marginRight: 6,
    fontSize: 10,
  },
  dropdownIcon: {
    width: 13,
    height: 13,
  },
  inputEmailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    width: '75%',
    marginTop: 6,
    marginBottom: 12,
  },
  inputEmail: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 16,
    paddingVertical: 2,
    paddingHorizontal: 12,
    marginRight: 8,
    fontSize: 10,
  },
  addBloodGroupButton: {
    alignItems: 'center',
    borderColor: 'black',
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: 'black',
    width: '43%',
  },
  addBloodGroup: { color: 'white', fontSize: 12 },
  bloodGroupContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    marginBottom: 12,
  },
  bloodGroupCard: {
    borderColor: '#e7e6e6',
    borderWidth: 1,
    paddingHorizontal: 6,
    paddingVertical: 6,
    borderRadius: 10,
    width: 38,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bloodGroup: {
    fontSize: 12,
  },
  activeBloodGroupCard: {
    backgroundColor: '#2881b9',
  },
  activeBloodGroupText: {
    color: 'white',
  },
  inactiveBloodGroupText: {
    color: 'black',
  },
  submitRequestButton: {
    alignItems: 'center',
    borderRadius: 32,
    paddingVertical: 20,
    paddingHorizontal: 12,
    backgroundColor: '#11462f',
    width: '100%',
    marginTop: 16,
    marginBottom: 16,
  },
  submitRequestText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
  },
  phoneNumberContainer: {
    marginVertical: 16,
  },
  enterText: {
    fontWeight: '500',
    fontSize: 16,
  },
  phoneNumberInputContainer: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  countryCodeInput: {
    borderWidth: 1,
    borderColor: '#e7e6e6',
    width: '20%',
    marginRight: 8,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 14,
  },
  phoneNumberInput: {
    borderWidth: 1,
    borderColor: '#e7e6e6',
    width: '70%',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 14,
  },
});

export default CreateAccountPage;
