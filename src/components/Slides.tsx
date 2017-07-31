import * as React from 'react'
import { ScrollView, Dimensions } from 'react-native'
import { Button } from 'react-native-elements'
import styled from 'styled-components/native'

// constants =====
const SCREEN_WIDTH = Dimensions.get('window').width

// types =========
interface Slide {
  text: string
  color: string
}

interface Props {
  data: Slide[]
  onComplete: () => void
}

// ===============
class Slides extends React.Component<Props, {}> {
  public render() {
    return (
      <ScrollView horizontal={true} pagingEnabled={true} style={{ flex: 1 }}>
        {this.renderSlides()}
      </ScrollView>
    )
  }

  private renderSlides = () => {
    return this.props.data.map((slide, index) => {
      return (
        <Slide key={slide.text} style={{ backgroundColor: slide.color }}>
          <Text>{slide.text}</Text>
          {this.renderLastSlide(index)}
        </Slide>
      )
    })
  }

  private renderLastSlide = (index: number) => {
    if (index !== this.props.data.length - 1) return

    return (
      <ButtonStyled
        title="Onwards!"
        raised={true}
        backgroundColor="#0288d1"
        onPress={this.props.onComplete}
      />
    )
  }
}

// styles ===========
const Slide = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: ${SCREEN_WIDTH};
`

const Text = styled.Text`
  font-size: 30px;
  color: white;
  text-align: center;
`

const ButtonStyled = styled(Button)`
  margin-top: 15px;
`

// ===============
export default Slides
