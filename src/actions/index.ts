export * from './AuthActions'
export * from './JobActions'

import * as AuthActions from './AuthActions'
import * as JobActions from './JobActions'

export type Actions =
  | AuthActions.FacebookLoginSuccessAction
  | AuthActions.FacebookLoginFailAction
  | JobActions.FetchJobsAction
  | JobActions.LikeJobAction
