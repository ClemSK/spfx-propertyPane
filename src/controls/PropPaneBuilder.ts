import { IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';

import {
  buttonControl,
  checkboxControl,
  choiceGroupControl,
  dropDownControl,
  linkControl,
  sliderControl,
  textFieldControl,
  toggleControl,
} from './';

export class PropertyPaneBuilder {
  public getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return <IPropertyPaneConfiguration>{
      pages: [
        buttonControl.getPropertyPanePage(),
        checkboxControl.getPropertyPanePage(),
        choiceGroupControl.getPropertyPanePage(),
        dropDownControl.getPropertyPanePage(),
        linkControl.getPropertyPanePage(),
        sliderControl.getPropertyPanePage(),
        textFieldControl.getPropertyPanePage(),
        toggleControl.getPropertyPanePage(),
      ],
    };
  } // getPropertyPaneConfiguration()
}

export let propertyPaneBuilder = new PropertyPaneBuilder();
