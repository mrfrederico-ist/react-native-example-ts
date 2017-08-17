import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducers from '../reducers'
import { AuthState } from '../reducers/authReducer'
import { Job } from '../screens/DeckScreen'

// types ======
export interface StoreState {
  auth: AuthState
  jobs: Job[]
  likedJobs: Job[]
}

const store = createStore(reducers, {}, compose(applyMiddleware(thunk)))

// ============
export default store
