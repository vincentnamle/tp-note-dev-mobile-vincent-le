import { View, Text } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { Phone } from "../models/model";
import { useRecoilValue } from "recoil";
import { phonesAtom } from "../state/state";
import { FlatList } from "react-native";
import PhoneItem from "./PhoneItem";
import tw from 'tailwind-react-native-classnames';

type Props = {
  navigation: NavigationProp<any>;
};

export default function PhoneList({ navigation }: Props) {
  const phones = useRecoilValue(phonesAtom);

  return (
    <View>
      <Text style={tw`p-3`}>Nombre d'annonces : {phones.length}</Text>
      <FlatList
        data={phones}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PhoneItem phone={item} />}
      />
    </View>
  );
}
