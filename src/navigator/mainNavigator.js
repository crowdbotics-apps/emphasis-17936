import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile64262Navigator from '../features/UserProfile64262/navigator';
import Maps64243Navigator from '../features/Maps64243/navigator';
import Settings64221Navigator from '../features/Settings64221/navigator';
import Settings64206Navigator from '../features/Settings64206/navigator';
import NotificationList64205Navigator from '../features/NotificationList64205/navigator';
import Maps64204Navigator from '../features/Maps64204/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile64262: { screen: UserProfile64262Navigator },
Maps64243: { screen: Maps64243Navigator },
Settings64221: { screen: Settings64221Navigator },
Settings64206: { screen: Settings64206Navigator },
NotificationList64205: { screen: NotificationList64205Navigator },
Maps64204: { screen: Maps64204Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
