import {
  IPropertyPanePage,
  PropertyPaneLabel,
  IPropertyPaneLabelProps,
  PropertyPaneHorizontalRule,
  PropertyPaneToggle, IPropertyPaneToggleProps
} from '@microsoft/sp-webpart-base';

export class ToggleControl {
  public getPropertyPanePage(): IPropertyPanePage {
    return <IPropertyPanePage>{
      header: {
        description: 'PropertyPaneToggle Control'
      },
      displayGroupsAsAccordion: true,
      groups: [
        {
          groupName: 'Basic usage',
          groupFields: [
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'A label for the control.'
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'label: string;'
            }),
            PropertyPaneHorizontalRule(),
            PropertyPaneToggle('dummyProperty1', <IPropertyPaneToggleProps>{
              label: 'Toggle control label',
            })
          ]
        },
        {
          groupName: 'Set key to ID the control',
          groupFields: [
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'A key to uniquely identify the field.'
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'key?: string | number;'
            }),
            PropertyPaneHorizontalRule(),
            PropertyPaneToggle('dummyProperty1', <IPropertyPaneToggleProps>{
              label: 'Toggle control label',
              key: 'some-key-value'
            })
          ]
        },
        {
          groupName: 'Displayed when control is ON',
          groupFields: [
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'Text to display when toggle is ON.'
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'onText?: string;'
            }),
            PropertyPaneHorizontalRule(),
            PropertyPaneToggle('dummyProperty1', <IPropertyPaneToggleProps>{
              label: 'Toggle control label',
              onText: 'some text to show when toggle is ON'
            })
          ]
        },
        {
          groupName: 'Displayed when control is OFF',
          groupFields: [
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'Text to display when toggle is OFF.'
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'offText?: string;'
            }),
            PropertyPaneHorizontalRule(),
            PropertyPaneToggle('dummyProperty1', <IPropertyPaneToggleProps>{
              label: 'Toggle control label',
              offText: 'some text to show when toggle is off'
            })
          ]
        },
        {
          groupName: 'Explicitly setting checked state',
          groupFields: [
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'Checked state of the toggle. If you are maintaining state yourself, use this property.'
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'checked?: boolean;'
            }),
            PropertyPaneHorizontalRule(),
            PropertyPaneToggle('dummyProperty2', <IPropertyPaneToggleProps>{
              label: 'Toggle control label',
              checked: true
            })
          ]
        },
        {
          groupName: 'Disabled control',
          groupFields: [
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'Optional disabled flag.'
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'disabled?: boolean;'
            }),
            PropertyPaneHorizontalRule(),
            PropertyPaneToggle('dummyProperty2', <IPropertyPaneToggleProps>{
              label: 'Toggle control label',
              disabled: true
            })
          ]
        }
      ] // groups[]
    }; // return <IPropertyPanePage>{}
  } // getPropertyPanePage()
}

export let toggleControl = new ToggleControl();