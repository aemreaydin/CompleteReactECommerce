import { createSelector } from 'reselect';
import { AppState } from '../';

const selectDirectory = (state: AppState) => state.directoryReducer;

export const selectDirectorySections = createSelector(selectDirectory, state => state.directories);