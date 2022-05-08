import {
  IPropertyPanePage,
  PropertyPaneLabel,
  IPropertyPaneLabelProps,
  PropertyPaneHorizontalRule,
  PropertyPaneSlider, IPropertyPaneSliderProps
} from '@microsoft/sp-webpart-base';

export class SliderControl {
  public getPropertyPanePage(): IPropertyPanePage {
    return <IPropertyPanePage>{
      header: {
        description: 'PropertyPaneSlider Control'
      },
      displayGroupsAsAccordion: true,
      groups: [
        {
          groupName: 'Basic usage',
          groupFields: [
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'A label for the control. NOTE: min & max are required properties & set to 0-100 for all examples.'
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'label: string;'
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'min: number;'
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'max: number;'
            }),
            PropertyPaneHorizontalRule(),
            PropertyPaneSlider('slider_dummyProperty0', <IPropertyPaneSliderProps>{
              label: 'Slider control label',
              min: 0,
              max: 100
            })
          ]
        },
        {
          groupName: 'Set the step value',
          groupFields: [
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'The difference between the two adjacent values of the Slider. Defaults to 1. In this example, the min & max are set to 0-100 & step to 5.'
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'step?: number;'
            }),
            PropertyPaneHorizontalRule(),
            PropertyPaneSlider('slider_dummyProperty1', <IPropertyPaneSliderProps>{
              label: 'Slider control label',
              min: 0,
              max: 100,
              step: 5
            })
          ]
        },
        {
          groupName: 'Show control value',
          groupFields: [
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'Whether to show the value on the right of the Slider. If you want to show the value by yourself, you may want to set this value to false. In this example it is set to FALSE, but all other examples are set to TRUE.'
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'showValue?: boolean;'
            }),
            PropertyPaneHorizontalRule(),
            PropertyPaneSlider('slider_dummyProperty0', <IPropertyPaneSliderProps>{
              label: 'Slider control label',
              min: 0,
              max: 100,
              showValue: false
            })
          ]
        },
        {
          groupName: 'Disabled',
          groupFields: [
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'Whether or not the Slider is disabled.'
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'disabled?: boolean;'
            }),
            PropertyPaneHorizontalRule(),
            PropertyPaneSlider('slider_dummyProperty0', <IPropertyPaneSliderProps>{
              label: 'Slider control label',
              min: 0,
              max: 100,
              disabled: true
            })
          ]
        },
        {
          groupName: 'Aria label',
          groupFields: [
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'A description of the Slider for the benefit of screen readers.'
            }),
            PropertyPaneLabel('', <IPropertyPaneLabelProps>{
              text: 'ariaLabel?: string;'
            }),
            PropertyPaneHorizontalRule(),
            PropertyPaneSlider('slider_dummyProperty0', <IPropertyPaneSliderProps>{
              label: 'Slider control label',
              min: 0,
              max: 100,
              ariaLabel: 'sample aria text'
            })
          ]
        }
      ] // groups[]
    }; // return <IPropertyPanePage>{}
  } // getPropertyPanePage()
}

export let sliderControl = new SliderControl();