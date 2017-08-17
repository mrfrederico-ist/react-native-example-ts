import * as React from 'react'
import {
  Animated,
  PanResponder,
  PanResponderInstance,
  Dimensions,
} from 'react-native'

// constants =====
const SCREEN_WIDTH = Dimensions.get('window').width
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH
const SWIPE_OUT_DURATION = 350

// types =========
interface Props {
  keyProp: string
  data: any[]
  renderCard: (item: any) => JSX.Element
  renderNoMoreCards?: () => JSX.Element
  onSwipeRight?: (item: any) => void
  onSwipeLeft?: (item: any) => void
}

interface State {
  cardIndex: number
}

// ==============
class Swipe extends React.Component<Props, State> {
  public state = { cardIndex: 0 }

  private positionSmoothTransition: Animated.ValueXY
  private position: Animated.ValueXY
  private panResponder: PanResponderInstance

  constructor(props: Props) {
    super(props)

    this.positionSmoothTransition = new Animated.ValueXY()
    this.position = new Animated.ValueXY()

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gesture) => {
        this.position.setValue({ x: gesture.dx, y: gesture.dy })
      },
      onPanResponderRelease: (evt, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) {
          this.forceSwipe('right')
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          this.forceSwipe('left')
        } else {
          this.resetPosition()
        }
      },
    })
  }

  public componentWillReceiveProps(nextProps: Props) {
    if (nextProps.data !== this.props.data) {
      this.setState({ cardIndex: 0 })
    }
  }

  public render() {
    return (
      <Animated.View style={this.positionSmoothTransition.getLayout()}>
        {this.renderCards()}
      </Animated.View>
    )
  }

  private forceSwipe = (direction: 'right' | 'left') => {
    const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH
    const y = 0

    Animated.timing(this.position, {
      toValue: { x, y },
      duration: SWIPE_OUT_DURATION,
    }).start(() => this.onSwipeComplete(direction))
  }

  private onSwipeComplete = (direction: 'right' | 'left') => {
    const { onSwipeRight, onSwipeLeft, data } = this.props
    const item = data[this.state.cardIndex]

    if (onSwipeRight && direction === 'right') {
      onSwipeRight(item)
    } else if (onSwipeLeft) {
      onSwipeLeft(item)
    }

    Animated.timing(this.positionSmoothTransition, {
      toValue: { x: 0, y: -10 },
      duration: 250,
    }).start(() => {
      this.positionSmoothTransition.setValue({ x: 0, y: 0 })
      this.position.setValue({ x: 0, y: 0 })
      this.setState({ cardIndex: this.state.cardIndex + 1 })
    })
  }

  private resetPosition = () => {
    Animated.spring(this.position, { toValue: { x: 0, y: 0 } }).start()
  }

  private renderCards = () => {
    const { cardIndex } = this.state

    if (this.props.renderNoMoreCards && cardIndex >= this.props.data.length) {
      return this.props.renderNoMoreCards()
    }

    return this.props.data
      .map((item, i) => {
        if (i < cardIndex) {
          return null
        } else if (i === cardIndex) {
          return (
            <Animated.View
              key={item[this.props.keyProp]}
              style={[ this.getCardStyle(), cardStyle, { zIndex: 1 } ]}
              {...this.panResponder.panHandlers}
            >
              {this.props.renderCard(item)}
            </Animated.View>
          )
        }
        return (
          <Animated.View
            key={item[this.props.keyProp]}
            style={[ cardStyle, { top: 10 * (i - cardIndex) } ]}
          >
            {this.props.renderCard(item)}
          </Animated.View>
        )
      })
      .reverse()
  }

  private getCardStyle = () => {
    const rotate = (this.position.x as any).interpolate({
      inputRange: [ -SCREEN_WIDTH, 0, SCREEN_WIDTH ],
      outputRange: [ '-90deg', '0deg', '90deg' ],
    })

    return {
      ...this.position.getLayout(),
      transform: [ { rotate } ],
    }
  }
}

// styles =======
const cardStyle = {
  position: 'absolute',
  width: SCREEN_WIDTH,
  zIndex: 0,
}

// ==============
export default Swipe
