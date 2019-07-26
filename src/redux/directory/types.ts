import { Section } from '../../types';

export interface DirectoryAction {
    type: string;
    payload?: any;
}

export interface DirectoryState {
    directories: DirectoryInfo[];
}

export type DirectoryInfo = Section;