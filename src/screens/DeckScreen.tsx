import * as React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import { StoreState } from '../store'

// types ==========
interface Props {
  jobs: object[]
}

// ================
class DeckScreen extends React.Component<Props> {
  public render() {
    return <View />
  }
}

// ================
const mapStateToProps = ({ jobs }: StoreState) => {
  return { jobs: jobs.results }
}

export default connect<{}, Props, {}>(mapStateToProps)(DeckScreen)
