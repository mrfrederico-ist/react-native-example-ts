import { Dispatch } from 'redux'
import axios from 'axios'
import * as qs from 'qs'
import reverseGeocode = require('latlng-to-zip')

import { Region } from '../screens/MapScreen'

import { StoreState } from '../store'

// constants =======
export const FETCH_JOBS = 'FETCH_JOBS'

const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?'

const JOB_QUERY_PARAMS = {
  publisher: '4201738803816157',
  format: 'json',
  v: '2',
  latlong: 1,
  radius: 10,
  q: 'javascript',
}

// types ===========
export interface FetchJobsAction {
  type: typeof FETCH_JOBS
  payload: object[]
}

// =================
export const fetchJobs = (region: Region, cb: () => void) => async (
  dispatch: Dispatch<StoreState>,
) => {
  try {
    const zip = await reverseGeocode(region)
    const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zip })
    const url = `${JOB_ROOT_URL}${query}`

    const { data } = await axios.get(url)
    
    dispatch({ type: FETCH_JOBS, payload: data })
    cb()
  } catch (error) {
    console.log({ error })
  }
}
