import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Entypo } from "@expo/vector-icons"
import { Ionicons } from "@expo/vector-icons"
import { MaterialIcons } from "@expo/vector-icons"

import { Home } from "../screens/Home"
import { Search } from "../screens/Search"
import { Library } from "../screens/Library"

import { theme } from "../global/styles"

const { Navigator, Screen } = createBottomTabNavigator()

export function TabRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.COLORS.white,
        tabBarInactiveTintColor: "#A7A7A7",
        tabBarStyle: {
          height: 48,
          backgroundColor: theme.COLORS.grayPrimary,
          borderTopWidth: 0,
          alignItems: "center",
          justifyContent: "center",
        },
        tabBarIconStyle: {
          flex: 0,
          width: 24,
          height: 24,
        },
        tabBarLabelStyle: {
          fontFamily: theme.FONTS.title500,
          fontSize: 9,
          marginTop: 3,
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
            )
          },
        }}
      />

      <Screen
        name="Buscar"
        component={Search}
        options={{
          tabBarIcon: ({ focused, size }) => {
            return (
              <Ionicons
                name="md-search"
                size={size}
                color={focused ? theme.COLORS.white : "#A7A7A7"}
              />
            )
          },
        }}
      />

      <Screen
        name="Biblioteca"
        component={Library}
        options={{
          tabBarIcon: ({ focused, size }) => {
            return (
              <MaterialIcons
                name="library-music"
                size={size}
                color={focused ? theme.COLORS.white : "#A7A7A7"}
              />
            )
          },
        }}
      />
    </Navigator>
  )
}
