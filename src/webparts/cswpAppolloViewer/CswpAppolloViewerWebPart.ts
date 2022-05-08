import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  //   passing the props to be used in the property pane
  IPropertyPaneTextFieldProps,
  PropertyPaneLabel,
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme } from '@microsoft/sp-component-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './CswpAppolloViewerWebPart.module.scss';
import * as strings from 'CswpAppolloViewerWebPartStrings';

import { IMission } from '../../models';
import { MissionServices } from '../../services';

export interface ICswpAppolloViewerWebPartProps {
  description: string;
  selectedMission: string;
}

export default class CswpAppolloViewerWebPart extends BaseClientSideWebPart<ICswpAppolloViewerWebPartProps> {
  private selectedMission: IMission;
  private missionDetailElement: HTMLElement;

  protected onInit(): Promise<void> {
    return new Promise<void>(
      (resolve: () => void, reject: (error: any) => void): void => {
        this.selectedMission = this._getSelectedMission();
        resolve();
      }
    );
  }

  public render(): void {
    this.domElement.innerHTML = `
    <section class="${styles.cswpAppolloViewer}">
      <div class="${styles.container}">
            <div class="ms-Grid-row ${styles.row}">
              <div class="ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1">
                <p class="ms-font-xl">Apollo Mission Viewer</p>
                <p class="ms-font-s ms-fontWeight-light">${escape(
                  this.properties.description
                )}</p>
                <div class='apolloMissionDetails'></div>
              </div>
            </div>
          </div>
    </section>`;

    this.missionDetailElement = this.domElement.getElementsByClassName(
      'apolloMissionDetails'
    )[0] as HTMLElement;

    if (this.selectedMission) {
      this._renderMissionDetails(
        this.missionDetailElement,
        this.selectedMission
      );
    } else {
      this.missionDetailElement.innerHTML = '';
    }
  }
  //   here we are setting some regex for the correct mission name format and check if it matches a mission name
  //    else, return an error message with the expected format
  private _validateMissionCode(value: string): string {
    const validateMissionCodeRegEx = /AS-[2, 5][0, 1][0-9]/g;
    return value.match(validateMissionCodeRegEx)
      ? ''
      : "Invalid mission code: Should be 'AS-###'.";
  }

  //   changing the mode of the property pane to render changes on the right pattern
  protected get disableReactivePropertyChanges(): boolean {
    return true;
  }
  //   this means that changes take effect after they have been applied
  protected onAfterPropertyPaneChangesApplied(): void {
    //   update selected mission
    this.selectedMission = this._getSelectedMission();

    // update rendering
    if (this.selectedMission) {
      this._renderMissionDetails(
        this.missionDetailElement,
        this.selectedMission
      );
    } else {
      this.missionDetailElement.innerHTML = '';
    }
  }

  private _getSelectedMission(): IMission {
    //   determine the mission ID, defaulting to Apollo 11 or selecting a new mission
    const selectedMissionId: string = this.properties.selectedMission
      ? this.properties.selectedMission
      : 'AS-506';

    // get the specified mission
    return MissionServices.getMission(selectedMissionId);
  }

  private _renderMissionDetails(element: HTMLElement, mission: IMission): void {
    element.innerHTML = `
      <p class="ms-font-m">
        <span class="ms-fontWeight-semibold">Mission: </span>
        ${escape(mission.name)}
      </p>
      <p class="ms-font-m">
        <span class="ms-fontWeight-semibold">Duration: </span>
        ${escape(this._getMissionTimeline(mission))}
      </p>
      <a href="${mission.wiki_href}" target="_blank" class="${styles.button}">
        <span class="${styles.label}">Learn more about ${escape(
      mission.name
    )} on Wikipedia &raquo;</span>
      </a>`;
  }

  private _getMissionTimeline(mission: IMission): string {
    let missionDate =
      mission.end_date !== ''
        ? `${mission.launch_date.toString()} - ${mission.end_date.toString()}`
        : `${mission.launch_date.toString()}`;
    return missionDate;
  }

  private _getEnvironmentMessage(): string {
    if (!!this.context.sdks.microsoftTeams) {
      // running in Teams
      return this.context.isServedFromLocalhost
        ? strings.AppLocalEnvironmentTeams
        : strings.AppTeamsTabEnvironment;
    }

    return this.context.isServedFromLocalhost
      ? strings.AppLocalEnvironmentSharePoint
      : strings.AppSharePointEnvironment;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
  // returns IPropertyPaneConfiguration
  //   the config returns a collection of pages
  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        //   <page 1>
        {
          header: {
            description: 'About this web part',
          },
          groups: [
            {
              groupFields: [
                PropertyPaneLabel('', {
                  text: 'this is a killer first web part!',
                }),
              ],
            },
          ],
        },
        //   </page 1>
        //   <page 2>
        {
          header: {
            description: strings.PropertyPaneDescription,
          },
          //   default is false
          displayGroupsAsAccordion: true,
          groups: [
            //   <group 1>
            {
              groupName: strings.BasicGroupName,
              isCollapsed: true,
              groupFields: [
                // be careful with this part of the property pane control as it will
                // produce runtime errors if it does not match the value of the name of hte property
                // in the interface
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel,
                }),
                // additional property for the property pane
                PropertyPaneTextField('selectedMission', <
                  IPropertyPaneTextFieldProps
                >{
                  label: 'Apollo Mission to Show',
                  //   passing the current control into the method
                  onGetErrorMessage: this._validateMissionCode.bind(this),
                }),
              ],
            },
            // </group 1>
            // <group 2>
            {
              groupName: 'group 2',
              groupFields: [
                //   property pane does not need to be bound to a public property on the web part
                PropertyPaneLabel('', {
                  text: 'hello',
                }),
              ],
            },
          ], // groups[]
        },
        //  </ page 2>
      ], // pages[]
    };
  }
}
