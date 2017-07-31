import { Dispatch } from 'redux'
import { AsyncStorage } from 'react-native'
import { Facebook } from 'expo'

import { StoreState } from '../store'

// constants =======
export const FB_LOGIN_SUCCESS = 'FB_LOGIN_SUCCESS'
export const FB_LOGIN_FAIL = 'FB_LOGIN_FAIL'

// types ===========
export interface FacebookLoginSuccessAction {
  type: typeof FB_LOGIN_SUCCESS
  payload: string
}

export interface FacebookLoginFailAction {
  type: typeof FB_LOGIN_FAIL
}

// =================
export const facebookLogin = () => async (dispatch: Dispatch<StoreState>) => {
  const token = await AsyncStorage.getItem('fb_token')

  if (token) return dispatch({ type: FB_LOGIN_SUCCESS, payload: token })

  const res: any = await Facebook.logInWithReadPermissionsAsync(
    '318545268571200',
    { permissions: [ 'public_profile' ] },
  )
  if (res.type === 'cancel') return dispatch({ type: FB_LOGIN_FAIL })

  await AsyncStorage.setItem('fb_token', res.token)
  return dispatch({ type: FB_LOGIN_SUCCESS, payload: res.token })
}
