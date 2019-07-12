import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import './MenuItem.scss';

interface MenuItemProps {
    title: string;
    imageUrl: string;
    linkUrl: string;
}

const MenuItem : React.FC<MenuItemProps & RouteComponentProps> = ({title, imageUrl, linkUrl, history, match}) => (
    <div className={`menu__item menu__item--${title}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <img className="menu__image" src={imageUrl} alt={title}/>
        <div className="menu__content">
            <h1 className="menu__title">{title}</h1>
            <h4 className="menu__subtitle">Shop Now!</h4>
        </div>
    </div>
);

export default withRouter(MenuItem);