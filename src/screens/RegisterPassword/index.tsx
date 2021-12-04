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

export function RegisterPassword({ navigation }: RegisterProps) {
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
          onPress={() => navigation.navigate("RegisterMail")}
        />

        <Text style={styles.createText}>Criar conta</Text>
      </View>

      <Form ref={formRef} onSubmit={handleSubmit} style={styles.mail}>
        <Text style={styles.mailText}>Crie uma senha</Text>
        <Input name={"email"} marginBottom={10} />
        <Text style={styles.confirm}>
          sua senha deve ter pelo menos 8 caracteres.
        </Text>
      </Form>

      <View style={styles.advanced}>
        <LoginButton> Avançar</LoginButton>
      </View>
    </View>
  );
}
