import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import PhoneList from "./components/PhoneList";
import PhoneDetail from "./components/PhoneDetail";

import { RecoilRoot } from "recoil";
import { Phone } from "./models/model";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import FavoritesList from "./components/FavoritesList";

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
          {/* Liste des annonces (Sans bouton retour) */}
          <Stack.Screen
            name="PhoneList"
            component={PhoneList}
            options={{
              title: "Liste des annonces",
              headerLeft: () => null, // Supprime le bouton retour
              // Cache la flèche de retour par défaut
            }}
          />

          {/* Détail de l'annonce (Avec bouton retour) */}
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

          {/* Liste des Favoris (Sans bouton retour) */}
          <Stack.Screen
            name="FavoritesList"
            component={FavoritesList}
            options={{
              title: "Mes Favoris",
              headerLeft: () => null, // Supprime le bouton retour
              // Cache la flèche de retour par défaut
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}