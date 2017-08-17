import * as React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { MapView } from 'expo'
import { Card } from 'react-native-elements'
import styled from 'styled-components/native'

import { StoreState } from '../store'
import { likeJob } from '../actions'
import Swipe from '../components/Swipe'

// types ==========
export interface Job {
  jobkey: string
  jobtitle: string
  company: string
  formattedRelativeTime: string
  snippet: string
  url: string
  latitude: number
  longitude: number
}

interface Props {
  jobs: Job[]
  likeJob: typeof likeJob
}

// ================
class DeckScreen extends React.Component<Props> {
  public render() {
    return (
      <View style={{ marginTop: 10 }}>
        <Swipe
          keyProp="jobkey"
          data={this.props.jobs}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          onSwipeRight={job => this.props.likeJob(job)}
        />
      </View>
    )
  }

  private renderCard = (job: Job) => {
    const initialRegion = {
      latitude: job.latitude,
      longitude: job.longitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.02,
    }

    return (
      <Card title={job.jobtitle}>
        <View style={{ height: 300 }}>
          <MapView
            style={{ flex: 1 }}
            scrollEnabled={false}
            cacheEnabled={true}
            initialRegion={initialRegion}
          />
        </View>
        <DetailContainer>
          <Text>{job.company}</Text>
          <Text>{job.formattedRelativeTime}</Text>
        </DetailContainer>
        <Text>{job.snippet.replace(/<\/*b>/g, '')}</Text>
      </Card>
    )
  }

  private renderNoMoreCards = () => {
    return <Card title="No more jobs" />
  }
}

// styles =========
const DetailContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 10px;
`

// ================
const mapStateToProps = ({ jobs }: StoreState) => ({ jobs })

export default connect<{}, Props, {}>(mapStateToProps, { likeJob })(DeckScreen)
