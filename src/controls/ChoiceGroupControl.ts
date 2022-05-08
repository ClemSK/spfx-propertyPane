import {
  IPropertyPanePage,
  PropertyPaneLabel,
  IPropertyPaneLabelProps,
  PropertyPaneHorizontalRule,
  PropertyPaneChoiceGroup,
  IPropertyPaneChoiceGroupProps,
  IPropertyPaneChoiceGroupOption,
} from '@microsoft/sp-webpart-base';

import { cloneDeep } from '@microsoft/sp-lodash-subset';

export class ChoiceGroupControl {
  // setup some options to use
  private options: IPropertyPaneChoiceGroupOption[] = <
    IPropertyPaneChoiceGroupOption[]
  >[
    {
      key: 'red',
      text: 'red',
    },
    {
      key: 'green',
      text: 'green',
    },
    {
      key: 'blue',
      text: 'blue',
    },
  ];
  private preSelectedOptions: IPropertyPaneChoiceGroupOption[];
  private disabledOptions: IPropertyPaneChoiceGroupOption[];
  // setup some image options to use
  private imgOptions: IPropertyPaneChoiceGroupOption[] = <
    IPropertyPaneChoiceGroupOption[]
  >[
    {
      key: 'xlsx',
      text: 'xlsx',
      imageSrc:
        'https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/png/xlsx_32x2.png',
      selectedImageSrc:
        'https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/png/xlsx_32x2.png',
      imageSize: {
        width: 64,
        height: 64,
      },
    },
    {
      key: 'docx',
      text: 'docx',
      imageSrc:
        'https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/png/docx_32x2.png',
      selectedImageSrc:
        'https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/png/docx_32x2.png',
      imageSize: {
        width: 64,
        height: 64,
      },
    },
    {
      key: 'one',
      text: 'one',
      imageSrc:
        'https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/png/one_32x2.png',
      selectedImageSrc:
        'https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/png/one_32x2.png',
      imageSize: {
        width: 64,
        height: 64,
      },
    },
  ];
  private preSelectedImgOptions: IPropertyPaneChoiceGroupOption[];
  private disabledImgOptions: IPropertyPaneChoiceGroupOption[];

  constructor() {
    // use the existing collection, but make a new copy, not a reference...
    this.preSelectedOptions = cloneDeep(this.options);
    // select the 2nd option
    this.preSelectedOptions[1].checked = true;

    // use the existing collection, but make a new copy, not a reference...
    this.disabledOptions = cloneDeep(this.options);
    // disable the 2nd option
    this.disabledOptions[1].disabled = true;

    // image options

    // use the existing collection, but make a new copy, not a reference...
    this.preSelectedImgOptions = cloneDeep(this.imgOptions);
    // select the 2nd option
    this.preSelectedImgOptions[1].checked = true;

    // use the existing collection, but make a new copy, not a reference...
    this.disabledImgOptions = cloneDeep(this.imgOptions);
    // disable the 2nd option
    this.disabledImgOptions[1].disabled = true;
  }

  public getPropertyPanePage(): IPropertyPanePage {
    return <IPropertyPanePage>{
      header: {
        description: 'PropertyPaneChoiceGroup Control',
      },
      displayGroupsAsAccordion: true,
      groups: [
        {
          groupName: 'Basic usage',
          groupFields: [
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'Descriptive label & options for the choice group. Each option must have a "key" and "text" property',
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'label?: string;',
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'options: IPropertyPaneChoiceGroupOption[];',
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'options[i].key: string | number;',
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'options[i].text: string;',
            }),
            PropertyPaneHorizontalRule(),
            PropertyPaneChoiceGroup('choiceGroup_dummyProperty0', <
              IPropertyPaneChoiceGroupProps
            >{
              label: 'Choice Group label',
              options: this.options,
            }),
          ],
        },
        {
          groupName: 'Disabled item',
          groupFields: [
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'Whether the property pane choice group option is disabled or not.',
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'options[i].disabled?: boolean;',
            }),
            PropertyPaneHorizontalRule(),
            PropertyPaneChoiceGroup('choiceGroup_dummyProperty0', <
              IPropertyPaneChoiceGroupProps
            >{
              label: 'Choice Group label',
              options: this.disabledOptions,
            }),
          ],
        },
        {
          groupName: 'Checked item',
          groupFields: [
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'Whether the property pane choice group option is checked or not. Default value is false. In this example, one of the option has it\'s "checked" property set to TRUE.',
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'options[i].checked?: boolean;',
            }),
            PropertyPaneHorizontalRule(),
            PropertyPaneChoiceGroup('choiceGroup_dummyProperty1', <
              IPropertyPaneChoiceGroupProps
            >{
              label: 'Choice Group label',
              options: this.preSelectedOptions,
            }),
          ],
        },
        {
          groupName: 'Image options',
          groupFields: [
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'Choice groups can also have images as options. When using images, additional properties on each option is required.',
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'options[i].imageSrc?: boolean;',
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'options[i].selectedImageSrc?: boolean;',
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'options[i].imageSize?: { width: number; height: number; };',
            }),
            PropertyPaneHorizontalRule(),
            PropertyPaneChoiceGroup('choiceGroup_dummyProperty2', <
              IPropertyPaneChoiceGroupProps
            >{
              label: 'Choice Group label',
              options: this.imgOptions,
            }),
            PropertyPaneHorizontalRule(),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'Image options can also be selected & disabled using the same properties as above.',
            }),
            PropertyPaneChoiceGroup('choiceGroup_dummyProperty2', <
              IPropertyPaneChoiceGroupProps
            >{
              label: 'Choice Group label',
              options: this.preSelectedImgOptions,
            }),
            PropertyPaneChoiceGroup('choiceGroup_dummyProperty2', <
              IPropertyPaneChoiceGroupProps
            >{
              label: 'Choice Group label',
              options: this.disabledImgOptions,
            }),
          ],
        },
      ], // groups[]
    }; // return <IPropertyPanePage>{}
  } // getPropertyPanePage()
}

export let choiceGroupControl = new ChoiceGroupControl();
