import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Landing } from "../screens/Landing";
import { RegisterMail } from "../screens/RegisterMail";
import { RegisterPassword } from "../screens/RegisterPassword";
import { Login } from "../screens/Login";
import { TabRoutes } from "./tab.routes";

const { Navigator, Screen } = createStackNavigator();


export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: "transparent",
        },
      }}
    >
      <Screen name="Landing" component={Landing} />

      <Screen name="RegisterMail" component={RegisterMail} />

      <Screen name="RegisterPassword" component={RegisterPassword} />

      <Screen name="Login" component={Login} />

      <Screen name="Home" component={TabRoutes} />
    </Navigator>
  );
}
