import React, { useRef } from "react";
import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Form } from "@unform/mobile";
import { FormHandles } from "@unform/core";

import { styles } from "./styles";

import { Input } from "../../components/Input";
import { LoginButton } from "../../components/LoginButton";

type RegisterProps = {
  navigation: any;
};

export function Register({ navigation }: RegisterProps) {
  const formRef = useRef<FormHandles>(null);

  function handleSubmit(data: any) {}
  return (
    <View style={styles.container}>
      <View style={styles.createAccount}>
        <AntDesign
          style={styles.back}
          name="arrowleft"
          size={24}
          color="white"
          onPress={() => navigation.navigate("Lading")}
        />

        <Text style={styles.createText}>Criar conta</Text>
      </View>

      <Form ref={formRef} onSubmit={handleSubmit} style={styles.mail}>
        <Text style={styles.mailText}>Qual é o seu e-mail?</Text>
        <Input name={"email"} marginBottom={10} />
        <Text style={styles.confirm}>
          Você vai ter que confirmar esse e-mail mais tarde.
        </Text>
      </Form>

      <View style={styles.advanced}>
        <LoginButton> Avançar</LoginButton>
      </View>
    </View>
  );
}
