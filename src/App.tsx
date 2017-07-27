import * as React from 'react'
import { Platform, StatusBar } from 'react-native'
import {
  TabNavigator,
  StackNavigator,
  TabNavigatorConfig,
} from 'react-navigation'
import styled from 'styled-components/native'

import {
  WelcomeScreen,
  AuthScreen,
  MapScreen,
  DeckScreen,
  ReviewScreen,
  SettingsScreen,
} from './screens'

// constants ======
const STATUS_BAR_HEIGHT = StatusBar.currentHeight ? StatusBar.currentHeight : 0

// routes ===========
const TAB_NAVIGATOR_CONFIG: TabNavigatorConfig = {
  tabBarPosition: 'bottom',
  lazy: true,
}

const MainNavigator = TabNavigator(
  {
    welcome: { screen: WelcomeScreen },
    auth: { screen: AuthScreen },
    main: {
      screen: TabNavigator(
        {
          map: { screen: MapScreen },
          deck: { screen: DeckScreen },
          review: {
            screen: StackNavigator({
              review: { screen: ReviewScreen },
              settings: { screen: SettingsScreen },
            }),
          },
        },
        TAB_NAVIGATOR_CONFIG,
      ),
    },
  },
  TAB_NAVIGATOR_CONFIG,
)

// styles ===========
const Container = styled.View`
  flex: 1;
  margin-top: ${Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0}px;
`

// ==================
class App extends React.Component {
  public render() {
    return (
      <Container>
        <MainNavigator />
      </Container>
    )
  }
}

// ==================
export default App
