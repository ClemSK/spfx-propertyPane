import {
  IPropertyPanePage,
  PropertyPaneLabel,
  IPropertyPaneLabelProps,
  PropertyPaneHorizontalRule,
  PropertyPaneTextField, IPropertyPaneTextFieldProps
} from '@microsoft/sp-webpart-base';

export class TextFieldControl {
  public getPropertyPanePage(): IPropertyPanePage {
    return <IPropertyPanePage>{
      header: {
        description: 'PropertyPaneTextField Control'
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
            PropertyPaneTextField('dummyProperty0', <IPropertyPaneTextFieldProps>{
              label: 'basic'
            })
          ]
        },
        {
          groupName: 'Placeholder text',
          groupFields: [
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'Placeholder text to be displayed in the control.'
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'placeholder?: string;'
            }),
            PropertyPaneHorizontalRule(),
            PropertyPaneTextField('dummyProperty0', <IPropertyPaneTextFieldProps>{
              label: 'placeholder',
              placeholder: 'placeholder text'
            })
          ]
        },
        {
          groupName: 'Set maxlength',
          groupFields: [
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'Maximum number of characters that the PropertyPaneTextField can have. (If the value is set to a negative number, an exception will be thrown.)'
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'maxLength?: number;'
            }),
            PropertyPaneHorizontalRule(),
            PropertyPaneTextField('dummyProperty0', <IPropertyPaneTextFieldProps>{
              label: 'maxlength (5 char)',
              maxLength: 5
            })
          ]
        },
        {
          groupName: 'Resizeable control',
          groupFields: [
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'Whether or not the multiline textfield is resizable. Default value is TRUE. This one is set to FALSE.'
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'resizable?: boolean;'
            }),
            PropertyPaneHorizontalRule(),
            PropertyPaneTextField('dummyProperty0', <IPropertyPaneTextFieldProps>{
              label: 'resizeable (false... default=true)',
              resizable: false
            })
          ]
        },
        {
          groupName: 'Disabled',
          groupFields: [
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'Whether the property pane textfield is enabled or not.'
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'disabled?: boolean;'
            }),
            PropertyPaneHorizontalRule(),
            PropertyPaneTextField('dummyProperty0', <IPropertyPaneTextFieldProps>{
              label: 'disabled',
              disabled: true
            })
          ]
        },
        {
          groupName: 'Error message',
          groupFields: [
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'If set, this will be displayed as an error message. When onGetErrorMessage returns empty string, if this property has a value set then this will be displayed as the error message. So, make sure to set this only if you want to see an error message dispalyed for the text field.'
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'errorMessage?: string;'
            }),
            PropertyPaneHorizontalRule(),
            PropertyPaneTextField('dummyProperty0', <IPropertyPaneTextFieldProps>{
              label: 'error message',
              errorMessage: 'sample validation error message'
            })
          ]
        },
        {
          groupName: 'Underlined',
          groupFields: [
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'Whether or not the textfield is underlined. Default value is false.'
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'underlined?: boolean;'
            }),
            PropertyPaneHorizontalRule(),
            PropertyPaneTextField('dummyProperty0', <IPropertyPaneTextFieldProps>{
              label: 'underlined',
              underlined: true
            })
          ]
        },
        {
          groupName: 'Multiline',
          groupFields: [
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'Whether or not the textfield is a multiline textfield. Default value is false. This example also leverages the "rows" property to make the control bigger.'
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'multiline?: boolean;'
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'rows?: number;'
            }),
            PropertyPaneHorizontalRule(),
            PropertyPaneTextField('dummyProperty0', <IPropertyPaneTextFieldProps>{
              label: 'multiline (3 rows)',
              multiline: true,
              rows: 3
            })
          ]
        },
        {
          groupName: 'Aria label',
          groupFields: [
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'Aria Label for textfield, if any.'
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'ariaLabel?: string;'
            }),
            PropertyPaneHorizontalRule(),
            PropertyPaneTextField('dummyProperty0', <IPropertyPaneTextFieldProps>{
              label: 'aria',
              ariaLabel: 'sample aria text'
            })
          ]
        }
      ] // groups[]
    }; // return <IPropertyPanePage>{}
  } // getPropertyPanePage()
}

export let textFieldControl = new TextFieldControl();