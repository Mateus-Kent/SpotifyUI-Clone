import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AllRoutes } from "./routes";

export function Routes() {
  return (
    <NavigationContainer>
      <AllRoutes />
    </NavigationContainer>
  );
}
