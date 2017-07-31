import * as React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { NavigationScreenProps } from 'react-navigation'

import { StoreState } from '../store'
import { facebookLogin } from '../actions'

// types ==========
interface AuthProps {
  facebookLogin: typeof facebookLogin
  token: string
}

type Props = AuthProps & NavigationScreenProps<{}>

// ================
class AuthScreen extends React.Component<Props, {}> {
  public componentDidMount() {
    this.props.facebookLogin()
    this.onAuthComplete(this.props)
  }

  public componentWillReceiveProps(nextProps: Props) {
    this.onAuthComplete(nextProps)
  }

  public render() {
    return <View />
  }

  private onAuthComplete(props: Props) {
    if (props.token) this.props.navigation.navigate('map')
  }
}

// ================
const mapStateToProps = ({ auth }: StoreState) => {
  return { token: auth.token }
}

export default connect<{}, Props, {}>(mapStateToProps, { facebookLogin })(
  AuthScreen,
)
