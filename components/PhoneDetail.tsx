import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import tw from "tailwind-react-native-classnames";
import { Phone } from "../models/model";
import { favoritesAtom } from "../state/state";
import { useRecoilState } from "recoil";

type PhoneDetailRouteProp = RouteProp<
  { PhoneDetail: { phone: Phone } },
  "PhoneDetail"
>;

type Props = {
  route: PhoneDetailRouteProp;
  navigation: NavigationProp<any>;
};

export default function PhoneDetail({ route, navigation }: Props) {
  const { phone } = route.params;
  const [favorites, setFavorites] = useRecoilState(favoritesAtom);

  const isFavorite = favorites.some((fav) => fav.id === phone.id);

  function onAddToFavorites(event: GestureResponderEvent): void {
    setFavorites((prevFavorites) => [...prevFavorites, phone]);
    navigation.navigate("FavoritesList");
  }

  function onRemoveToFavorites(event: GestureResponderEvent): void {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.id !== phone.id)
    );
    navigation.navigate("PhoneList");
  }

  return (
    <View style={tw`flex-1 flex-col p-4`}>
      {/* Contenu principal en haut */}
      <View style={tw`flex-auto`}>
        <Text style={tw`text-2xl font-bold mb-2 text-center`}>
          {phone.model}
        </Text>
        <Text style={tw`text-base mb-1 font-bold`}>Informations :</Text>
        <Text style={tw`text-base mb-1`}>Prix : {phone.price} €</Text>
        <Text style={tw`text-base mb-1`}>
          Système d'exploitation : {phone.os}
        </Text>
        <Text style={tw`text-base mb-1`}>Marque : {phone.brand}</Text>
        <Text style={tw`text-base mb-1`}>
          Année de sortie : {phone.releaseDate}
        </Text>

        {/* Infos Vendeur */}
        <Text style={tw`text-base mb-1 font-bold`}>{`\n`}Vendeur :</Text>
        <View style={tw`flex-row w-full items-center`}>
          <Image
            source={{ uri: phone.salerAvatar }}
            style={tw`w-12 h-12 rounded-full border-2 border-green-500`}
            resizeMode="cover"
          />
          <View style={tw`flex-1 ml-3`}>
            <Text style={tw`text-lg font-bold`}>{phone.saler}</Text>
            <View style={tw`flex-row justify-between`}>
              <Text style={tw`text-base`}>Pays : {phone.salerCountry}</Text>
              <Text style={tw`text-base`}>Ville : {phone.salerCity}</Text>
            </View>
            <Text style={tw`text-base`}>Tel. {phone.phone}</Text>
          </View>
        </View>

        <Text style={tw`text-base mt-4 font-bold`}>{`\n`}Description :</Text>
        <Text style={tw`text-base`}>{phone.description}</Text>
      </View>

      <View style={tw`flex-1 justify-center items-center`}>
        {isFavorite ? (
          <TouchableOpacity
            style={tw`p-4 rounded-lg w-1/2 bg-red-500`}
            onPress={onRemoveToFavorites}
          >
            <Text style={tw`text-white text-center text-lg font-bold`}>
              Retirer favoris
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={tw`p-4 rounded-lg w-1/2 bg-green-500`}
            onPress={onAddToFavorites}
          >
            <Text style={tw`text-white text-center text-lg font-bold`}>
              Ajouter favoris
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
