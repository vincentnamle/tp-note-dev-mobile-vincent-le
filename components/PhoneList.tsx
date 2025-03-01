import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { useRecoilValue } from "recoil";
import { favoritesAtom, phonesAtom } from "../state/state";
import { FlatList } from "react-native";
import PhoneItem from "./PhoneItem";
import tw from "tailwind-react-native-classnames";
import { useState } from "react";

type Props = {
  navigation: NavigationProp<any>;
};

export default function PhoneList({ navigation }: Props) {
  const phones = useRecoilValue(phonesAtom);
  const favorites = useRecoilValue(favoritesAtom);
  const [query, setQuery] = useState("");

  const filteredPhones = phones.filter((phone) =>
    phone.model.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={tw`flex-1 p-4`}>
      <View style={tw`flex-row justify-center`}>
        <TouchableOpacity
          style={tw`bg-green-500 px-4 py-2 rounded-lg`}
          onPress={() => navigation.navigate("FavoritesList")}
        >
          <Text style={tw`text-white font-bold`}>
            Mes favoris : {favorites.length}
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={tw`p-3 mb-3`}>
        Nombre d'annonces : {filteredPhones.length}
      </Text>
      <TextInput
        style={tw`h-10 border mx-3 mb-3 px-3 rounded`}
        placeholder="Rechercher un téléphone..."
        value={query}
        onChangeText={setQuery}
      />
      <FlatList
        data={filteredPhones}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("PhoneDetail", { phone: item })}
            style={tw`mb-3`}
          >
            <PhoneItem phone={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
