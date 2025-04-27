import React, { useState, useEffect } from "react";
import { BookIcon } from "@/assets/icons";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import { prepare, connect, disconnect } from "react-native-vpn-ipsec";

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [vpnToggled, setVpnToggled] = useState(false);

  useEffect(() => {
    prepare();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 56, color: "#97979B" }}>1:00:00</Text>
      <Button
        title="Edit Timer"
        buttonStyle={{
          backgroundColor: "#97979B",
          borderRadius: 32,
          padding: 10,
        }}
        onPress={() => setModalVisible(true)}
      />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <View
          style={{
            margin: 20,
            backgroundColor: "white",
            borderRadius: 10,
            padding: 35,
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 4,
          }}
        >
          <Text>Test</Text>
          <Button title="Done" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>

      <TouchableOpacity
        style={{
          width: 250,
          height: 250,
          borderColor: "#0AD6CF",
          borderWidth: 6,
          borderRadius: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 40,
        }}
        onPress={() => {
          if (vpnToggled) {
            disconnect();
            setVpnToggled(false);
          } else {
            connect(
              "name",
              "10.0.0.3:1194",
              "lufa",
              "lufa",
              "z/OWXE0Ms1RS6OQX4jZCh54J+WajJbzxin0YiMEl/Xs=",
              false,
            );
            setVpnToggled(true);
          }
        }}
      >
        <BookIcon />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 56,
          color: "#97979B",
          marginVertical: 10,
          marginTop: 40,
        }}
      >
        Domains
      </Text>
      <Text style={{ fontSize: 26, color: "#97979B" }}>
        https://instagram.com/reels
      </Text>
      {/*Line break*/}
      <View
        style={{
          height: 1,
          backgroundColor: "#97979B",
          marginVertical: 10,
          width: "60%",
          alignSelf: "center",
        }}
      />
      <Text style={{ fontSize: 26, color: "#97979B" }}>
        https://youtube.com/shorts
      </Text>
    </View>
  );
}
