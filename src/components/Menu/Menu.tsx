import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { DirectoryInfo } from '../../redux/directory/types';
import { selectDirectorySections } from '../../redux/directory/selectors'

import MenuItem from '../MenuItem/MenuItem';
import './Menu.scss';
import { AppState } from '../../redux/';

interface MenuProps {
  sections: DirectoryInfo[];
}

const Menu : React.FC<MenuProps> = ({ sections }) => {
  return (
  <div className="menu">
  {
      sections.map(({id, title, imageUrl, linkUrl}) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} linkUrl={linkUrl}/>
      ))
  }
  </div>
)}

const mapStateToProps = createStructuredSelector<AppState, MenuProps>({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Menu);