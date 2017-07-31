import * as React from 'react'
import { Text } from 'react-native'
import {
  NavigationStackScreenOptions,
  NavigationScreenConfigProps,
} from 'react-navigation'
import { Button } from 'react-native-elements'
import styled from 'styled-components/native'

// ================
class ReviewScreen extends React.Component {
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
    return (
      <Container>
        <Text>ReviewScreen</Text>
      </Container>
    )
  }
}

// styles =========
const Container = styled.View`
  align-items: center;
  background-color: #fff;
  flex: 1;
  justify-content: center;
`

// ================
export default ReviewScreen
