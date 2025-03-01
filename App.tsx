import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import PhoneList from "./components/PhoneList";
import PhoneDetail from "./components/PhoneDetail";

import { RecoilRoot } from "recoil";
import { Phone } from "./models/model";

type RootStackParamList = {
  PhoneList: undefined;
  PhoneDetail: { phone: Phone };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="PhoneList" id={undefined}>
          <Stack.Screen
            name="PhoneList"
            component={PhoneList}
            options={{ title: "Liste des annonces" }}
          />
          <Stack.Screen name="PhoneDetail" component={PhoneDetail} options={{ title: "Anonce" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
