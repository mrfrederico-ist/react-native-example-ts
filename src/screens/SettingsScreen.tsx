import * as React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

class SettingsScreen extends React.Component {
  public render() {
    return (
      <Container>
        <Text>SettingsScreen</Text>
      </Container>
    )
  }
}

// styles ===========
const Container = styled.View`
  align-items: center;
  background-color: #fff;
  flex: 1;
  justify-content: center;
`

// ================
export default SettingsScreen
