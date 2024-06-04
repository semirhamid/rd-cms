import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementsButtonWithLink extends Schema.Component {
  collectionName: 'components_elements_button_with_links';
  info: {
    displayName: 'ButtonWithLink';
    icon: 'link';
  };
  attributes: {
    buttonText: Attribute.String;
    link: Attribute.String;
  };
}

export interface ElementsMenuItem extends Schema.Component {
  collectionName: 'components_menu_item_menu_items';
  info: {
    displayName: 'TextWithLinks';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    link: Attribute.String & Attribute.Required;
  };
}

export interface ElementsTestComponent extends Schema.Component {
  collectionName: 'components_test_component_test_components';
  info: {
    displayName: 'IconWithLinks';
    icon: 'write';
    description: '';
  };
  attributes: {
    link: Attribute.String & Attribute.Required;
    icon: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.button-with-link': ElementsButtonWithLink;
      'elements.menu-item': ElementsMenuItem;
      'elements.test-component': ElementsTestComponent;
    }
  }
}
