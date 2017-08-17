import * as React from 'react'
import { ScrollView, Linking, View } from 'react-native'
import { connect } from 'react-redux'
import { MapView } from 'expo'
import {
  NavigationStackScreenOptions,
  NavigationScreenConfigProps,
} from 'react-navigation'
import { Card, Button } from 'react-native-elements'
import styled from 'styled-components/native'

import { StoreState } from '../store'
import { Job } from './DeckScreen'

// types ==========
interface Props {
  likedJobs: Job[]
}

// ================
class ReviewScreen extends React.Component<Props> {
  public static navigationOptions = ({
    navigation,
  }: NavigationScreenConfigProps): NavigationStackScreenOptions => {
    return {
      title: 'Review Jobs',
      headerRight: (
        <Button
          title="Settings"
          backgroundColor="rgba(0,0,0,0)"
          color="rgba(0, 122, 255, 1)"
          onPress={() => navigation.navigate('settings')}
        />
      ),
    }
  }

  public render() {
    return <ScrollView>{this.renderLikedJobs()}</ScrollView>
  }

  private renderLikedJobs() {
    return this.props.likedJobs.map(job => {
      const initialRegion = {
        latitude: job.latitude,
        longitude: job.longitude,
        latitudeDelta: 0.045,
        longitudeDelta: 0.02,
      }

      return (
        <Card key={job.jobkey}>
          <View style={{ height: 200 }}>
            <MapView
              style={{ flex: 1 }}
              scrollEnabled={false}
              cacheEnabled={true}
              initialRegion={initialRegion}
            />
            <DetailContainer>
              <DetailText>{job.company}</DetailText>
              <DetailText>{job.formattedRelativeTime}</DetailText>
            </DetailContainer>
            <Button
              title="Apply Now!"
              backgroundColor="#03a9f4"
              onPress={() => Linking.openURL(job.url)}
            />
          </View>
        </Card>
      )
    })
  }
}

// styles =========
const DetailContainer = styled.View`
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: space-around;
`

const DetailText = styled.Text`font-style: italic;`

// ================
const mapStateToProps = ({ likedJobs }: StoreState) => ({ likedJobs })

export default connect<{}, Props, {}>(mapStateToProps)(ReviewScreen)
