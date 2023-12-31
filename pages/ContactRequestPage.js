import React, { useState } from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const ContactRequestPage = ({ navigation }) => {
  const [activeButton, setActiveButton] = useState('Pending');

  const pendingContacts = [
    {
      name: 'Xabin',
      hospital: 'Square Hospital Bangladesh',
      bloodGroup: 'B+',
    },
    {
      name: 'Xabin',
      hospital: 'Square Hospital Bangladesh',
      bloodGroup: 'B+',
    },
    {
      name: 'Xabin',
      hospital: 'Square Hospital Bangladesh',
      bloodGroup: 'B+',
    },
  ];

  const approvedContacts = [
    {
      name: 'Xabin',
      hospital: 'Square Hospital Bangladesh',
      bloodGroup: 'B+',
    },
    {
      name: 'Xabin',
      hospital: 'Square Hospital Bangladesh',
      bloodGroup: 'B+',
    },
    {
      name: 'Xabin',
      hospital: 'Square Hospital Bangladesh',
      bloodGroup: 'B+',
    },
    {
      name: 'Xabin',
      hospital: 'Square Hospital Bangladesh',
      bloodGroup: 'B+',
    },
    {
      name: 'Xabin',
      hospital: 'Square Hospital Bangladesh',
      bloodGroup: 'B+',
    },
  ];

  const displayedContacts =
    activeButton === 'Pending' ? pendingContacts : approvedContacts;

  return (
    <View style={styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor='white' />

      <View style={styles.header}>
        <Text style={styles.text}>Contact Request</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            activeButton === 'Pending' && styles.activeButton,
          ]}
          onPress={() => setActiveButton('Pending')}>
          <Text
            style={[
              styles.buttonText,
              activeButton === 'Pending' && styles.activeButtonText,
            ]}>
            Pending
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            activeButton === 'Approval' && styles.activeButton,
          ]}
          onPress={() => setActiveButton('Approval')}>
          <Text
            style={[
              styles.buttonText,
              activeButton === 'Approval' && styles.activeButtonText,
            ]}>
            Approval
          </Text>
        </TouchableOpacity>
      </View>

      {displayedContacts.map((contact, index) => (
        <TouchableOpacity key={index} style={styles.contactCard}>
          <View style={styles.cardImage}>
            <Image
              style={{ width: 70, height: 70, borderRadius: 4 }}
              source={{
                uri: 'https://img.freepik.com/free-photo/attractive-young-male-nutriologist-lab-coat-smiling-against-white-background_662251-2960.jpg',
              }}></Image>
          </View>
          <View style={styles.cardText}>
            <Text style={styles.name}>{contact.name}</Text>
            <Text style={styles.hospital}>{contact.hospital}</Text>
            <Text style={styles.bloodGroup}>
              Required: {contact.bloodGroup} (2 Bags)
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  button: {
    width: 100,
    backgroundColor: '#eff9fe',
    paddingHorizontal: 16,
    paddingVertical: 6,
    marginRight: 8,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#dae0e3',
  },
  activeButton: {
    backgroundColor: '#2881b9',
    borderColor: '#2881b9',
  },
  buttonText: {
    fontWeight: '500',
    fontSize: 12,
    width: '100%',
    textAlign: 'center',
  },
  activeButtonText: {
    color: 'white',
  },
  contactCard: {
    borderWidth: 1,
    borderColor: '#e1e0e1',
    width: '100%',
    padding: 6,
    flexDirection: 'row',
    borderRadius: 10,
    marginVertical: 4,
  },
  cardImage: {
    backgroundColor: 'black',
    width: 70,
    height: '100%',
    borderRadius: 5,
  },
  cardText: {
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '500',
  },
  hospital: {
    marginBottom: 6,
  },
  bloodGroup: {
    color: '#f66588',
  },
});

export default ContactRequestPage;
