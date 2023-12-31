import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import CrowdfundingComponent from '../components/HomePageComponents/CrowdFundingComponent';
import JumpIntoServices from '../components/HomePageComponents/JumpIntoServices';
import LocationComponent from '../components/HomePageComponents/LocationComponent';
import LoggedInUser from '../components/HomePageComponents/LoggedInUser';
import LoggedOutUser from '../components/HomePageComponents/LoggedOutUser';
import NearbyHospitals from '../components/HomePageComponents/NearbyHospitals';
import SearchBar from '../components/HomePageComponents/SearchBar';
import WaysToUseBloodBank from '../components/HomePageComponents/WaysToUseBloodBank';
import ContextStore from '../Context/ContextStore';

const HomePage = ({ navigation }) => {
  const [isLocationEnabled, setLocationEnabled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {contextStore, setContextStore} = useContext(ContextStore)
  useEffect(() => {
    const checkLocationEnabled = () => {
      const isEnabled = true;
      setLocationEnabled(isEnabled);
    };
    checkLocationEnabled();
  }, []);

  useEffect(() => {
    console.log(contextStore.loggedIn)
    setIsLoggedIn(contextStore.loggedIn);
  }, [contextStore.loggedIn]);
  console.log(contextStore.token)
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar
          barStyle='light-content'
          backgroundColor={isLocationEnabled ? 'black' : '#10472f'}
        />
        {!isLocationEnabled && <LocationComponent />}
        <SearchBar />
        {isLoggedIn ? (
          <LoggedInUser navigation={navigation} />
        ) : (
          <LoggedOutUser navigation={navigation} />
        )}
        <JumpIntoServices navigation={navigation} />
        <NearbyHospitals navigation={navigation} />
        <CrowdfundingComponent navigation={navigation} />
        <WaysToUseBloodBank navigation={navigation} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HomePage;
