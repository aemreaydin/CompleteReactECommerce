import React from 'react';

import './MenuItem.scss';

interface MenuItemProps {
    title: string;
    imageUrl: string;
}

const MenuItem : React.FC<MenuItemProps> = ({title, imageUrl}) => (
    <div className={`menu__item menu__item--${title}`}>
        <img className="menu__image" src={imageUrl} alt={title}/>
        <div className="menu__content">
            <h1 className="menu__title">{title}</h1>
            <h4 className="menu__subtitle">Shop Now!</h4>
        </div>
    </div>
);

export default MenuItem;