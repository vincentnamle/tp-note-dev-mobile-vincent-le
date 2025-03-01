import { View, Text } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { Phone } from "../models/model";
import { useRecoilValue } from "recoil";
import { phonesAtom } from "../state/state";
import { FlatList } from "react-native";
import PhoneItem from "./PhoneItem";
import tw from 'tailwind-react-native-classnames';
import { useState } from "react";

type Props = {
  navigation: NavigationProp<any>;
};

export default function PhoneList({ navigation }: Props) {
  const phones = useRecoilValue(phonesAtom);
  const [query, setQuery] = useState('');

  const filteredPhones = phones.filter((phone) =>
    phone.model.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View>
      <Text style={{ margin: 10 }}>
        Nombre d'annonces : {filteredPhones.length}
      </Text>
      <FlatList
        data={phones}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PhoneItem phone={item} />}
      />
    </View>
  );
}
