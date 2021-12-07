import React, { useRef } from "react";
import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Form } from "@unform/mobile";
import { FormHandles } from "@unform/core";

import { styles } from "./styles";

import { Input } from "../../components/Input";
import { LoginButton } from "../../components/LoginButton";
import { BlackButton } from "../../components/BlackButton";

type RegisterProps = {
  navigation: any;
};

export function Login({ navigation }: RegisterProps) {
  const formRef = useRef<FormHandles>(null);

  function handleSubmit(data: any) {}
  return (
    <View style={styles.container}>
      <View style={styles.jusBack}>
        <AntDesign
          style={styles.back}
          name="arrowleft"
          size={24}
          color="white"
          onPress={() => navigation.navigate("Landing")}
        />
      </View>

      <Form ref={formRef} onSubmit={handleSubmit} style={styles.login}>
        <Text style={styles.loginText}>
          E-mail ou nome de {"\n"}
          usuário
        </Text>
        <Input name={"data"} marginBottom={20} />

        <Text style={styles.loginText}>Senha</Text>
        <Input name={"password"} marginBottom={40} />
      </Form>

      <View style={styles.enter}>
        <LoginButton
          onPress={() => navigation.navigate("Home")}
          marginBottom={50}
        >
          Entrar
        </LoginButton>

        <BlackButton
          onPress={() => navigation.navigate("Home")}
          width={150}
          height={34}
          fontSize={11}
        >
          Entrar sem senha
        </BlackButton>
      </View>
    </View>
  );
}
