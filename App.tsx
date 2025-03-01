import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import PhoneList from "./components/PhoneList";
import { RecoilRoot } from "recoil";

type RootStackParamList = {
  PhoneList: undefined;
  Detail: undefined;
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
