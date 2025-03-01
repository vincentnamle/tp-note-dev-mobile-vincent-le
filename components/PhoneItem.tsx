// src/components/PhoneItem.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { Phone } from '../state/state';
import tw from 'tailwind-react-native-classnames';

interface PhoneItemProps {
  phone: Phone;
}

const PhoneItem: React.FC<PhoneItemProps> = ({ phone }) => {
  return (
    <View style={tw`p-3 border-b`}>
      <Text style={tw`text-lg font-bold`}>{phone.model}</Text>
      <Text style={tw`text-base text-gray-600`}>
        {phone.releaseDate} - {phone.price} €
      </Text>
      <Text style={tw`text-base text-gray-600`}>
        {phone.description}
      </Text>
    </View>
  );
};

export default PhoneItem;
