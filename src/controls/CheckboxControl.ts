import {
  IPropertyPanePage,
  PropertyPaneLabel,
  IPropertyPaneLabelProps,
  PropertyPaneHorizontalRule,
  PropertyPaneCheckbox,
  IPropertyPaneCheckboxProps,
} from '@microsoft/sp-webpart-base';

export class CheckboxControl {
  public getPropertyPanePage(): IPropertyPanePage {
    return <IPropertyPanePage>{
      header: {
        description: 'PropertyPaneCheckbox Control',
      },
      displayGroupsAsAccordion: true,
      groups: [
        {
          groupName: 'Basic usage',
          groupFields: [
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'Label to display next to the checkbox.',
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'text?: string;',
            }),
            PropertyPaneHorizontalRule(),
            PropertyPaneCheckbox('checkbox_dummyProperty0', <
              IPropertyPaneCheckboxProps
            >{
              text: 'Checkbox label',
            }),
          ],
        },
        {
          groupName: 'Explicitly setting checked state',
          groupFields: [
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'Whether the property pane checkbox is checked or not. Default value is false.',
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'checked?: boolean;',
            }),
            PropertyPaneHorizontalRule(),
            PropertyPaneCheckbox('checkbox_dummyProperty1', <
              IPropertyPaneCheckboxProps
            >{
              text: 'Checkbox label',
              checked: true,
            }),
          ],
        },
        {
          groupName: 'Disabled checkbox',
          groupFields: [
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'Whether the property pane checkbox is disabled or not.',
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'disabled?: boolean;',
            }),
            PropertyPaneHorizontalRule(),
            PropertyPaneCheckbox('checkbox_dummyProperty2', <
              IPropertyPaneCheckboxProps
            >{
              text: 'Checkbox label',
              disabled: true,
            }),
          ],
        },
      ], // groups[]
    }; // return <IPropertyPanePage>{}
  } // getPropertyPanePage()
}

export let checkboxControl = new CheckboxControl();
