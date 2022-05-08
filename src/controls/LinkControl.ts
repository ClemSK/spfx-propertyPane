import {
  IPropertyPanePage,
  PropertyPaneLabel,
  IPropertyPaneLabelProps,
  PropertyPaneHorizontalRule,
  PropertyPaneLink,
  IPropertyPaneLinkProps,
} from '@microsoft/sp-webpart-base';

export class LinkControl {
  public getPropertyPanePage(): IPropertyPanePage {
    return <IPropertyPanePage>{
      header: {
        description: 'PropertyPaneLink Control',
      },
      displayGroupsAsAccordion: true,
      groups: [
        {
          groupName: 'Basic usage',
          groupFields: [
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'Basic usage for the control. The `text` and `href` properties are always required.',
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'text: string;',
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'href: string;',
            }),
            PropertyPaneHorizontalRule(),
            PropertyPaneLink('link_dummyProperty0', <IPropertyPaneLinkProps>{
              text: 'Voitanos',
              href: 'https://www.voitanos.io',
            }),
          ],
        },
        {
          groupName: 'Link target',
          groupFields: [
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: "This attribute specifies where to display the linked resource. All W3C spec'd options supported: _self, _blank, _parent & _top. This example uses _blank.",
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'target?: string;',
            }),
            PropertyPaneHorizontalRule(),
            PropertyPaneLink('', <IPropertyPaneLinkProps>{
              text: 'Voitanos',
              href: 'https://www.voitanos.io',
              target: '_blank',
            }),
          ],
        },
        {
          groupName: 'Disabled link',
          groupFields: [
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'Whether the property pane link is disabled or not. In this example disabled is set to TRUE.',
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'disabled?: boolean;',
            }),
            PropertyPaneHorizontalRule(),
            PropertyPaneLink('', <IPropertyPaneLinkProps>{
              text: 'Voitanos',
              href: 'https://www.voitanos.io',
              disabled: true,
            }),
          ],
        },
      ], // groups[]
    }; // return <IPropertyPanePage>{}
  } // getPropertyPanePage()
}

export let linkControl = new LinkControl();
