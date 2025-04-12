import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksCampusHomePage extends Struct.ComponentSchema {
  collectionName: 'components_blocks_campus_home_pages';
  info: {
    displayName: 'Campus-home-page';
    icon: 'paperPlane';
  };
  attributes: {
    Description: Schema.Attribute.String;
    locations: Schema.Attribute.Relation<'oneToMany', 'api::location.location'>;
    Title: Schema.Attribute.String;
  };
}

export interface BlocksGetInvolved extends Struct.ComponentSchema {
  collectionName: 'components_blocks_get_involveds';
  info: {
    description: '';
    displayName: 'getInvolved';
    icon: 'code';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    textDropdown: Schema.Attribute.Component<'blocks.text-dropdown', true>;
  };
}

export interface BlocksHomeAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_blocks_home_about_uses';
  info: {
    description: '';
    displayName: 'home-about-us';
    icon: 'folder';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    Link: Schema.Attribute.Component<'buttons.button-link', false>;
    quote: Schema.Attribute.Blocks;
    Title: Schema.Attribute.String;
  };
}

export interface BlocksImagePair extends Struct.ComponentSchema {
  collectionName: 'components_blocks_image_pairs';
  info: {
    description: '';
    displayName: 'imagePair';
    icon: 'book';
  };
  attributes: {
    aboutImage: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'>;
    imageDescription: Schema.Attribute.Text;
  };
}

export interface BlocksMusic extends Struct.ComponentSchema {
  collectionName: 'components_blocks_music';
  info: {
    displayName: 'Music';
    icon: 'volumeUp';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files'>;
    link: Schema.Attribute.Component<'buttons.button-link', false>;
    smalltext: Schema.Attribute.Blocks;
    Title: Schema.Attribute.String;
  };
}

export interface BlocksMusicRow extends Struct.ComponentSchema {
  collectionName: 'components_blocks_music_rows';
  info: {
    displayName: 'music-row';
    icon: 'rotate';
  };
  attributes: {
    rowmusic: Schema.Attribute.Component<'blocks.music', true>;
  };
}

export interface BlocksPetraImages extends Struct.ComponentSchema {
  collectionName: 'components_blocks_petra_images';
  info: {
    displayName: 'petraImages';
    icon: 'picture';
  };
  attributes: {
    homeText: Schema.Attribute.Text;
    imagePairs: Schema.Attribute.Component<'blocks.image-pair', true>;
  };
}

export interface BlocksSermon extends Struct.ComponentSchema {
  collectionName: 'components_blocks_sermons';
  info: {
    displayName: 'Sermon';
    icon: 'gate';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    MusicRow: Schema.Attribute.Component<'blocks.music-row', false>;
    smallText: Schema.Attribute.Blocks;
    Title: Schema.Attribute.String;
  };
}

export interface BlocksTextDropdown extends Struct.ComponentSchema {
  collectionName: 'components_blocks_text_dropdowns';
  info: {
    displayName: 'textDropdown';
    icon: 'arrowDown';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Header: Schema.Attribute.String;
  };
}

export interface ButtonsButtonLink extends Struct.ComponentSchema {
  collectionName: 'components_buttons_button_links';
  info: {
    description: '';
    displayName: 'Button Link';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    link: Schema.Attribute.String;
    Title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['PRIMARY', 'SECONDARY', 'NONE']>;
  };
}

export interface ButtonsButtonLinkRow extends Struct.ComponentSchema {
  collectionName: 'components_buttons_button_link_rows';
  info: {
    displayName: 'Button Link Row';
    icon: 'cloud';
  };
  attributes: {
    Links: Schema.Attribute.Component<'buttons.button-link', true>;
    Title: Schema.Attribute.String;
  };
}

export interface CampusesCampuses extends Struct.ComponentSchema {
  collectionName: 'components_campuses_campuses';
  info: {
    displayName: 'Campuses';
    icon: 'pinMap';
  };
  attributes: {
    address: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Component<'buttons.button-link', false>;
    name: Schema.Attribute.String;
  };
}

export interface EventsEventDetails extends Struct.ComponentSchema {
  collectionName: 'components_events_event_details';
  info: {
    displayName: 'Event Details';
    icon: 'plane';
  };
  attributes: {
    Title: Schema.Attribute.String;
    titleText: Schema.Attribute.Component<'blocks.text-dropdown', true>;
  };
}

export interface FooterPageFooter extends Struct.ComponentSchema {
  collectionName: 'components_footer_page_footers';
  info: {
    displayName: 'footer';
    icon: 'apps';
  };
  attributes: {
    footer: Schema.Attribute.String;
  };
}

export interface SeoMetaData extends Struct.ComponentSchema {
  collectionName: 'components_seo_meta_data';
  info: {
    displayName: 'Meta Data';
  };
  attributes: {
    metaDesc: Schema.Attribute.Text;
    metaImage: Schema.Attribute.Media<'images' | 'files'>;
    metaTitle: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.campus-home-page': BlocksCampusHomePage;
      'blocks.get-involved': BlocksGetInvolved;
      'blocks.home-about-us': BlocksHomeAboutUs;
      'blocks.image-pair': BlocksImagePair;
      'blocks.music': BlocksMusic;
      'blocks.music-row': BlocksMusicRow;
      'blocks.petra-images': BlocksPetraImages;
      'blocks.sermon': BlocksSermon;
      'blocks.text-dropdown': BlocksTextDropdown;
      'buttons.button-link': ButtonsButtonLink;
      'buttons.button-link-row': ButtonsButtonLinkRow;
      'campuses.campuses': CampusesCampuses;
      'events.event-details': EventsEventDetails;
      'footer-page.footer': FooterPageFooter;
      'seo.meta-data': SeoMetaData;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
