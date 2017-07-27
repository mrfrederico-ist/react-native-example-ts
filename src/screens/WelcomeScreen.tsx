import * as React from 'react'
import { NavigationScreenProps } from 'react-navigation'

import Slides from '../components/Slides'

// constants ======
const SLIDE_DATA = [
  { text: 'Welcome to JobApp', color: '#03a9f4' },
  { text: 'Use this to get a job', color: '#009688' },
  { text: 'Set your location then swipe away', color: '#03a9f4' },
]

// ================
class WelcomeScreen extends React.Component<NavigationScreenProps<{}>, {}> {
  public render() {
    return <Slides data={SLIDE_DATA} onComplete={this.onSlideComplete} />
  }

  private onSlideComplete = () => {
    this.props.navigation.navigate('auth')
  }
}

// ================
export { WelcomeScreen }
