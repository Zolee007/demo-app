import { Address } from '../types/Address';

export const formatStreetLine = (address: Address) => `${address.street} ${address.house_number}`;
export const formatCityLine = (address: Address) => `${address.postal_code} ${address.town}`;
