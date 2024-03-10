import type { Schema, Attribute } from '@strapi/strapi';

export interface AddressAddress extends Schema.Component {
  collectionName: 'components_dsf_addresses';
  info: {
    displayName: 'Address';
    icon: 'archive';
    description: '';
  };
  attributes: {
    line_1: Attribute.String;
    line_2: Attribute.String;
    city: Attribute.String;
    postal_code: Attribute.Integer;
  };
}

export interface CarUserManualsUserManual extends Schema.Component {
  collectionName: 'components_car_user_manuals_user_manuals';
  info: {
    displayName: 'User Manual';
    icon: 'car';
  };
  attributes: {
    Mode: Attribute.Enumeration<['Rescue', 'Repair', 'Training']>;
    userManual: Attribute.Media;
    availableOffline: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'address.address': AddressAddress;
      'car-user-manuals.user-manual': CarUserManualsUserManual;
    }
  }
}
