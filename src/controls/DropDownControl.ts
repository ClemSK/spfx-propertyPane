import {
  IPropertyPanePage,
  PropertyPaneLabel,
  IPropertyPaneLabelProps,
  PropertyPaneHorizontalRule,
  PropertyPaneDropdown,
  IPropertyPaneDropdownProps,
  IPropertyPaneDropdownOption,
} from '@microsoft/sp-webpart-base';

export class DropDownControl {
  // setup some options to use
  private options: IPropertyPaneDropdownOption[] = <
    IPropertyPaneDropdownOption[]
  >[
    {
      index: 0,
      key: 'red',
      text: 'red',
    },
    {
      index: 1,
      key: 'green',
      text: 'green',
    },
    {
      index: 2,
      key: 'blue',
      text: 'blue',
    },
  ];

  public getPropertyPanePage(): IPropertyPanePage {
    return <IPropertyPanePage>{
      header: {
        description: 'PropertyPaneDropdown Control',
      },
      displayGroupsAsAccordion: true,
      groups: [
        {
          groupName: 'Basic usage',
          groupFields: [
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'Descriptive label for the Dropdown. Collection of options for this Dropdown.',
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'label: string;',
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'options?: IPropertyPaneDropdownOption[];',
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'options[i].index?: number;',
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'options[i].key: string | number;',
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'options[i].text: string;',
            }),
            PropertyPaneHorizontalRule(),
            PropertyPaneDropdown('dropDown_dummyProperty0', <
              IPropertyPaneDropdownProps
            >{
              label: 'Dropdown Label',
              options: this.options,
            }),
          ],
        },
        {
          groupName: 'Disabled',
          groupFields: [
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'Whether the property pane dropdown option is disabled or not.',
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'disabled?: boolean;',
            }),
            PropertyPaneHorizontalRule(),
            PropertyPaneDropdown('dropDown_dummyProperty0', <
              IPropertyPaneDropdownProps
            >{
              label: 'Dropdown Label',
              options: this.options,
              disabled: true,
            }),
          ],
        },
        {
          groupName: 'Selected item',
          groupFields: [
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'The key of the initially selected option.',
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'selectedKey?: string | number;',
            }),
            PropertyPaneHorizontalRule(),
            PropertyPaneDropdown('dropDown_dummyProperty1', <
              IPropertyPaneDropdownProps
            >{
              label: 'Dropdown Label',
              options: this.options,
              selectedKey: 'green',
            }),
          ],
        },
      ], // groups[]
    }; // return <IPropertyPanePage>{}
  } // getPropertyPanePage()
}

export let dropDownControl = new DropDownControl();
