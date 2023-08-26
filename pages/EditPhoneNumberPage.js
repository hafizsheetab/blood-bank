import React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const EditPhoneNumberPage = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Text style={styles.title}>Edit Phone Number</Text>

      <View style={styles.hr} />

      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Phone Number</Text>
        <Text style={styles.subtitleSuggestion}>
          Use the phone number that you most frequently use.
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.enterText}>Change Number</Text>
        <View style={styles.phoneNumberInputContainer}>
          <TextInput style={styles.countryCodeInput}></TextInput>
          <TextInput style={styles.phoneNumberInput}></TextInput>
        </View>
        <Text style={styles.confirmationText}>
          A 6-digit verification code will be send to this number
        </Text>
      </View>

      <TouchableOpacity style={styles.updateButton}>
        <Text style={styles.updateText}>Update</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  hr: {
    borderBottomColor: "#d0d0d1",
    borderBottomWidth: 1,
    width: "100%",
    marginBottom: 16,
  },
  subtitleContainer: {
    marginBottom: 16,
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 18,
  },
  subtitleSuggestion: {
    fontSize: 14,
    fontWeight: "300",
  },
  inputContainer: {
    marginVertical: 16,
  },
  enterText: {
    fontWeight: "600",
  },
  phoneNumberInputContainer: {
    flexDirection: "row",
    marginVertical: 8,
  },
  countryCodeInput: {
    borderWidth: 1,
    borderColor: "#e7e6e6",
    width: "20%",
    marginRight: 8,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 14,
  },
  phoneNumberInput: {
    borderWidth: 1,
    borderColor: "#e7e6e6",
    width: "70%",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 14,
  },
  input: {
    borderWidth: 1,
    borderColor: "#e7e6e6",
    marginVertical: 8,
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  confirmationText: {
    fontSize: 12,
  },
  updateButton: {
    alignItems: "center",
    borderRadius: 32,
    paddingVertical: 20,
    paddingHorizontal: 12,
    backgroundColor: "#11462f",
    width: "100%",
    marginTop: 16,
    marginBottom: 16,
  },
  updateText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default EditPhoneNumberPage;
