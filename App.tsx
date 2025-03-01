import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PhoneList from "./components/PhoneList";
import PhoneDetail from "./components/PhoneDetail";
import { RecoilRoot } from "recoil";
import { Phone } from "./models/model";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import FavoritesList from "./components/FavoritesList";
import { TouchableOpacity } from "react-native";

type RootStackParamList = {
  PhoneList: undefined;
  PhoneDetail: { phone: Phone };
  FavoritesList: undefined;
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
            options={{
              title: "Liste des annonces",
              headerLeft: () => null,
            }}
          />
          <Stack.Screen
            name="PhoneDetail"
            component={PhoneDetail}
            options={({ navigation }) => ({
              title: "Annonce",
              headerLeft: () => (
                <TouchableOpacity
                  style={{ marginLeft: 15 }}
                  onPress={() => navigation.goBack()}
                >
                  <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="FavoritesList"
            component={FavoritesList}
            options={{
              title: "Mes Favoris",
              headerLeft: () => null,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}
