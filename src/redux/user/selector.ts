import { createSelector } from 'reselect';

import { AppState }  from '../';
import { UserState } from './types'

const selectUser = (state: AppState) : UserState => state.userReducer;
export const selectCurrentUser = createSelector(selectUser, state => state.currentUser);