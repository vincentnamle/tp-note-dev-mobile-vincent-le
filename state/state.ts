import { atom } from 'recoil';
import { Phone } from '../models/model';
import phones from '../assets/phone.json';

export const phonesAtom = atom<Phone[]>({
    key: 'phones',
    default: phones,
  });

export { Phone };
