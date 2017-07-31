import * as React from 'react'
import { Platform, StatusBar } from 'react-native'
import {
  TabNavigator,
  StackNavigator,
  TabNavigatorConfig,
} from 'react-navigation'
import { Provider } from 'react-redux'
import styled from 'styled-components/native'

import store from './store'
import WelcomeScreen from './screens/WelcomeScreen'
import AuthScreen from './screens/AuthScreen'
import MapScreen from './screens/MapScreen'
import DeckScreen from './screens/DeckScreen'
import ReviewScreen from './screens/ReviewScreen'
import SettingsScreen from './screens/SettingsScreen'

// constants ======
const STATUS_BAR_HEIGHT = StatusBar.currentHeight ? StatusBar.currentHeight : 0

// routes ===========
const TAB_NAVIGATOR_CONFIG: TabNavigatorConfig = {
  tabBarPosition: 'bottom',
  lazy: true,
  animationEnabled: false,
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
  {
    navigationOptions: { tabBarVisible: false },
    ...TAB_NAVIGATOR_CONFIG,
  },
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
      <Provider store={store}>
        <Container>
          <MainNavigator />
        </Container>
      </Provider>
    )
  }
}

// ==================
export default App
