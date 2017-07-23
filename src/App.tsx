import * as React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

class App extends React.Component {
  public render() {
    return (
      <Container>
        <Text>Open up App.ts to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
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

// ==================
export default App
