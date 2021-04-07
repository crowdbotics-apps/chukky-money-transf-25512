import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Settings222657Navigator from '../features/Settings222657/navigator';
import UserProfile222588Navigator from '../features/UserProfile222588/navigator';
import Tutorial222587Navigator from '../features/Tutorial222587/navigator';
import NotificationList222559Navigator from '../features/NotificationList222559/navigator';
import Settings222558Navigator from '../features/Settings222558/navigator';
import Settings222550Navigator from '../features/Settings222550/navigator';
import UserProfile222548Navigator from '../features/UserProfile222548/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
Settings222657: { screen: Settings222657Navigator },
UserProfile222588: { screen: UserProfile222588Navigator },
Tutorial222587: { screen: Tutorial222587Navigator },
NotificationList222559: { screen: NotificationList222559Navigator },
Settings222558: { screen: Settings222558Navigator },
Settings222550: { screen: Settings222550Navigator },
UserProfile222548: { screen: UserProfile222548Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
