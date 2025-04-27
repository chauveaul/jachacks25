import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/HapticTab";
import { SettingsIcon, HomeIcon, ChartIcon } from "@/assets/icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#0AD6CF",
        tabBarInactiveTintColor: "#D5D5D7",
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          height: 80,
          paddingTop: 20,
          paddingBottom: 40,
        },
      }}
    >
      <Tabs.Screen
        name="settings"
        options={{
          title: "",
          tabBarIcon: ({ color }) => <SettingsIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="charts"
        options={{
          title: "",
          tabBarIcon: ({ color }) => <ChartIcon color={color} />,
        }}
      />
    </Tabs>
  );
}
