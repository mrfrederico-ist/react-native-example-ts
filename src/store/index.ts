import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducers from '../reducers'
import { AuthState } from '../reducers/authReducer'
import { JobsState } from '../reducers/jobsReducer'

// types ======
export interface StoreState {
  auth: AuthState
  jobs: JobsState
}

const store = createStore(reducers, {}, compose(applyMiddleware(thunk)))

// ============
export default store
