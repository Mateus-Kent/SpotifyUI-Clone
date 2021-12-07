import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";

import { Home } from "../screens/Home";
import { theme } from "../global/styles";

const { Navigator, Screen } = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 48,
          backgroundColor: theme.COLORS.grayPrimary,
        },
      }}
    >
      <Screen
        name="Início"
        component={Home}
        options={{
          tabBarIcon: ({ focused, size }) => {
            return (
              <Entypo
                name="home"
                size={size}
                color={focused ? theme.COLORS.white : "#A7A7A7"}
              />
            );
          },
        }}
      />
    </Navigator>
  );
}
