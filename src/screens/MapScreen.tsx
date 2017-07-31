import * as React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { MapView } from 'expo'
import { NavigationScreenProps } from 'react-navigation'
import { Button } from 'react-native-elements'
import styled from 'styled-components/native'

import { fetchJobs } from '../actions'

// types ==========
export interface Region {
  latitude: number
  longitude: number
  latitudeDelta: number
  longitudeDelta: number
}

interface MapScreenProps {
  fetchJobs: typeof fetchJobs
}

type Props = MapScreenProps & NavigationScreenProps<{}>

// ================
class MapScreen extends React.Component<Props> {
  public state = {
    region: {
      latitude: 37,
      longitude: -122,
      latitudeDelta: 0.09,
      longitudeDelta: 0.04,
    },
  }

  public render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          provider="google"
          region={this.state.region}
          onRegionChangeComplete={this.onRegionChangeComplete}
          style={{ flex: 1 }}
        />
        <ButtonContainer>
          <Button
            large={true}
            title="Search This Area"
            backgroundColor="#009688"
            icon={{ name: 'search' }}
            onPress={this.onButtonPress}
          />
        </ButtonContainer>
      </View>
    )
  }

  private onRegionChangeComplete = (region: Region) => this.setState({ region })

  private onButtonPress = () => {
    this.props.fetchJobs(this.state.region, () => {
      this.props.navigation.navigate('deck')
    })
  }
}

// styles =========
const ButtonContainer = styled.View`
  position: absolute;
  bottom: 20px;
  left: 0px;
  right: 0px;
`

// ================
export default connect(null, { fetchJobs })(MapScreen)
