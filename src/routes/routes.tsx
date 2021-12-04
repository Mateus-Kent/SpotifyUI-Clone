import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Landing } from "../screens/Landing";
import { Register } from "../screens/Register";

const { Navigator, Screen } = createStackNavigator();

export function AllRoutes() {
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

      <Screen name="Register" component={Register} />
    </Navigator>
  );
}
