import React from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Item = (doctor, navigation) => {
  return (
    <TouchableOpacity
      style={reownedDoctorsListStyle.cardView}
      onPress={() => {
        navigation.navigate('DoctorDetailScreen', {
          id: doctor._id,
        });
      }}>
      <View style={reownedDoctorsListStyle.cardView__Left}>
        <Image
          style={{ maxWidth: '100%', height: '100%', borderRadius: 4 }}
          source={{
            uri: 'https://img.freepik.com/free-photo/attractive-young-male-nutriologist-lab-coat-smiling-against-white-background_662251-2960.jpg',
          }}></Image>
      </View>
      <View style={reownedDoctorsListStyle.cardView__Right}>
        <Text
          style={reownedDoctorsListStyle.cardView__doctorName}
          ellipsizeMode='tail'
          numberOfLines={1}>
          Dr. Syed Mahmud Mahi
        </Text>
        <Text
          ellipsizeMode='tail'
          numberOfLines={1}
          style={reownedDoctorsListStyle.cardView__hospitalName}>
          Hospital Evercare Bangladesh
        </Text>
        <Text
          ellipsizeMode='tail'
          numberOfLines={2}
          style={reownedDoctorsListStyle.cardView__details}>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const DoctorsPage = ({ navigation, route }) => {
  let itemData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}>
      <ScrollView>
        <View style={reownedDoctorsListStyle.screenBody}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={reownedDoctorsListStyle.reownedDoctorsCaption}>
              Doctors
            </Text>
            <TouchableOpacity style={reownedDoctorsListStyle.nearbyContainer}>
              <Image
                source={require('../images/travel-map-location-pin.png')}
                style={reownedDoctorsListStyle.locationIcon}
              />
              <Text style={reownedDoctorsListStyle.nearbyText}>Nearby</Text>
              <Image
                source={require('../images/interface-arrows-button-down.png')}
                style={reownedDoctorsListStyle.dropdownIcon}
              />
            </TouchableOpacity>
          </View>

          <ScrollView>
            <FlatList
              contentContainerStyle={
                reownedDoctorsListStyle.reownedDoctorCardList
              }
              data={itemData}
              numColumns={1}
              renderItem={({ item }) => Item(item, navigation)}
              keyExtractor={(item, index) => index}
            />
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DoctorsPage;

const reownedDoctorsListStyle = StyleSheet.create({
  screenBody: {
    height: 0.9 * height,
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },

  reownedDoctorsCaption: {
    fontSize: 20,
    fontWeight: 'bold',
    width: 80,
  },

  cardView: {
    width: '100%',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'black',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginVertical: 10,
  },
  cardView__Left: {
    backgroundColor: 'black',
    height: 0.2 * width,
    width: 0.2 * width,
    borderRadius: 10,
  },
  cardView__Right: {
    marginLeft: 10,
    flex: 1,
  },
  cardView__doctorName: {
    fontSize: 18,
  },
  cardView__hospitalName: {
    fontSize: 15,
  },
  cardView__details: {
    fontSize: 12,
    numberOfLines: 2,
  },
  reownedDoctorCardList: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: -5,
  },
  nearbyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ccc',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 24,
    marginVertical: 4,
  },
  locationIcon: {
    width: 14,
    height: 14,
    marginRight: 4,
  },
  dropdownIcon: {
    width: 9,
    height: 9,
    marginRight: 2,
  },
  nearbyText: {
    fontSize: 13,
    color: '#333',
    marginRight: 8,
  },
});
