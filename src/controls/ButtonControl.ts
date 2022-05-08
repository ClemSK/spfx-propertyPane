import {
  IPropertyPanePage,
  PropertyPaneLabel,
  IPropertyPaneLabelProps,
  PropertyPaneHorizontalRule,
  PropertyPaneButton,
  IPropertyPaneButtonProps,
  PropertyPaneButtonType,
} from '@microsoft/sp-webpart-base';

export class ButtonControl {
  public onButtonClick() {
    alert('button clicked');
  }

  public getPropertyPanePage(): IPropertyPanePage {
    return <IPropertyPanePage>{
      header: {
        description: 'PropertyPaneButton Control',
      },
      displayGroupsAsAccordion: true,
      groups: [
        {
          groupName: 'Basic usage',
          groupFields: [
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'Display text of the element.',
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'text: string;',
            }),
            PropertyPaneHorizontalRule(),
            PropertyPaneButton('', <IPropertyPaneButtonProps>{
              text: 'Button Text',
              onClick: this.onButtonClick,
            }),
          ],
        },
        {
          groupName: 'Disabled button',
          groupFields: [
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'Whether the button is disabled.',
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'disabled?: boolean;',
            }),
            PropertyPaneHorizontalRule(),
            PropertyPaneButton('', <IPropertyPaneButtonProps>{
              text: 'Button Text',
              disabled: true,
            }),
          ],
        },
        {
          groupName: 'Aria label',
          groupFields: [
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'The aria label of the button for the benefit of screen readers. Detailed description of the button for the benefit of screen readers. Besides the compound button, other button types will need more information provided to screen reader.',
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'ariaLabel?: string;',
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'ariaDescription?: string;',
            }),
            PropertyPaneHorizontalRule(),
            PropertyPaneButton('', <IPropertyPaneButtonProps>{
              text: 'Button Text',
              ariaLabel: 'aria label',
              ariaDescription: 'aria description',
            }),
          ],
        },
        {
          groupName: 'Button types',
          groupFields: [
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'The type of button to render. Default value is ButtonType.normal. Buttons are defined in the enum PropertyPaneButtonType.',
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'buttonType?: PropertyPaneButtonType;',
            }),
            PropertyPaneHorizontalRule(),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'Optional completion action. Typically used at the end of a form or task when paired with the Primary button OR as a standalone button to undo an action. Examples: "Done" button which closes a container but doesn\'t make a server call or an "Undo" button when a user is uploading a file in OneDrive.',
            }),
            PropertyPaneButton('', <IPropertyPaneButtonProps>{
              text: 'PropertyPaneButtonType.Normal',
              buttonType: PropertyPaneButtonType.Normal,
              onClick: this.onButtonClick,
            }),
            PropertyPaneHorizontalRule(),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'Preferred completion action when paired with a Standard button. Typically used at the end of a task or form. Examples: "Create", "Save", "Send" which makes a server call.',
            }),
            PropertyPaneButton('', <IPropertyPaneButtonProps>{
              text: 'PropertyPaneButtonType.Primary',
              buttonType: PropertyPaneButtonType.Primary,
              onClick: this.onButtonClick,
            }),
            PropertyPaneHorizontalRule(),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'Hero button.',
            }),
            PropertyPaneButton('', <IPropertyPaneButtonProps>{
              text: 'PropertyPaneButtonType.Hero',
              buttonType: PropertyPaneButtonType.Hero,
              onClick: this.onButtonClick,
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'icon?: string;',
            }),
            PropertyPaneButton('', <IPropertyPaneButtonProps>{
              text: 'PropertyPaneButtonType.Hero with icon',
              buttonType: PropertyPaneButtonType.Hero,
              icon: 'FangBody',
              onClick: this.onButtonClick,
            }),
            PropertyPaneHorizontalRule(),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'Always used as a set with both Standard and Primary compound buttons. Typically used in a confirmation dialog. Examples: A confirmation dialog when a user discards a form or task with a possible significant time investment such as an email or a complex form. This button can also leverage the "description" property.',
            }),
            PropertyPaneButton('', <IPropertyPaneButtonProps>{
              text: 'PropertyPaneButtonType.Compound',
              description: 'Button description for compound button',
              buttonType: PropertyPaneButtonType.Compound,
              onClick: this.onButtonClick,
            }),
            PropertyPaneHorizontalRule(),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'Optional actions. Typically used in a command bar at the top of a view, panel and inside an inline command bar. Examples: Command bar at the top of OneDrive, Outlook, SharePoint. Inline command bar on the top of SharePoint web parts.',
            }),
            PropertyPaneButton('', <IPropertyPaneButtonProps>{
              text: 'PropertyPaneButtonType.Command',
              buttonType: PropertyPaneButtonType.Command,
              onClick: this.onButtonClick,
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'icon?: string;',
            }),
            PropertyPaneButton('', <IPropertyPaneButtonProps>{
              text: 'PropertyPaneButtonType.Command with icon',
              buttonType: PropertyPaneButtonType.Command,
              icon: 'FangBody',
              onClick: this.onButtonClick,
            }),
            PropertyPaneHorizontalRule(),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'Same usage as Command button, when real estate does not allow for icons + labels or as secondary actions within the command bar. Typically used in Command bar in small and medium responsive web breakpoints. Also used on objects. Examples: OneDrive small and medium responsive web breakpoint Command Bars and view icons within the Command Bar. In SharePoint and OneDrive, Cards with social actions and images which allow users to access the image picker. In SharePoint, formatting experiences such as formatting a story within the Authoring experience. In Calendar, in the bottom of an event creation Callout when clicking inside an empty time range.',
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'icon?: string;',
            }),
            PropertyPaneButton('', <IPropertyPaneButtonProps>{
              text: 'PropertyPaneButtonType.Icon',
              buttonType: PropertyPaneButtonType.Icon,
              icon: 'FangBody',
              onClick: this.onButtonClick,
            }),
          ],
        },
      ], // groups[]
    }; // return <IPropertyPanePage>{}
  } // getPropertyPanePage()
}

export let buttonControl = new ButtonControl();
