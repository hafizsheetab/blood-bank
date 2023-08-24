import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const AccountInfoBody = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Basic info</Text>
      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>Name</Text>
        <Text>Xabin Jannat Chowdhury</Text>
        <View style={styles.hr} />
      </View>
      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>Phone number</Text>
        <Text>+880 1883947283</Text>
        <View style={styles.hr} />
      </View>
      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>Email</Text>
        <View style={styles.emailInfo}>
          <Text>intesarhasan98@gmail.com</Text>
          <Image
            source={require("../../images/warning.png")}
            style={styles.emailIcon}
          />
        </View>
        <View style={styles.hr} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 12,
  },
  infoSection: {
    marginBottom: 16,
  },
  infoTitle: {
    fontWeight: "bold",
    marginBottom: 4,
  },
  hr: {
    borderBottomWidth: 1,
    borderBottomColor: "#cccccd",
    width: "100%",
    marginTop: 4,
    marginBottom: 8,
  },
  emailInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  emailIcon: {
    width: 16,
    height: 16,
    marginLeft: 8,
  },
});

export default AccountInfoBody;
