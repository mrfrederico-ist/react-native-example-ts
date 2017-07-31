import * as _ from 'lodash'
import * as React from 'react'
import { AsyncStorage } from 'react-native'
import { AppLoading } from 'expo'
import { NavigationScreenProps } from 'react-navigation'

import Slides from '../components/Slides'

// constants ======
const SLIDE_DATA = [
  { text: 'Welcome to JobApp', color: '#03a9f4' },
  { text: 'Use this to get a job', color: '#009688' },
  { text: 'Set your location then swipe away', color: '#03a9f4' },
]

// types ==========
interface State {
  token: boolean | null
}

// ================
class WelcomeScreen extends React.Component<NavigationScreenProps<{}>, State> {
  public state = { token: null }

  public async componentWillMount() {
    const token = await AsyncStorage.getItem('fb_token')
    if (token) return this.props.navigation.navigate('map')

    return this.setState({token: false})
  }

  public render() {
    if (_.isNull(this.state.token)) return <AppLoading />

    return <Slides data={SLIDE_DATA} onComplete={this.onSlideComplete} />
  }

  private onSlideComplete = () => {
    this.props.navigation.navigate('auth')
  }
}

// ================
export default WelcomeScreen
