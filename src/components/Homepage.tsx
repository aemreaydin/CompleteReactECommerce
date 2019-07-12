import React from 'react';

import './Homepage.scss';

const HomePage : React.FC = () => (
    <div className="menu">
        <div className="menu__item menu__item--hats">
            <div className="menu__content">
                <h1 className="menu__title">Hats</h1>
                <h4 className="menu__subtitle">Shop Now!</h4>
            </div>
        </div>
        <div className="menu__item menu__item--jackets">
            <div className="menu__content">
                <h1 className="menu__title">Jackets</h1>
                <h4 className="menu__subtitle">Shop Now!</h4>
            </div>
        </div>
        <div className="menu__item menu__item--sneakers">
            <div className="menu__content">
                <h1 className="menu__title">Sneakers</h1>
                <h4 className="menu__subtitle">Shop Now!</h4>
            </div>
        </div>
        <div className="menu__item menu__item--womens">
            <div className="menu__content">
                <h1 className="menu__title">Womens</h1>
                <h4 className="menu__subtitle">Shop Now!</h4>
            </div>
        </div>
        <div className="menu__item menu__item--mens">
            <div className="menu__content">
                <h1 className="menu__title">Mens</h1>
                <h4 className="menu__subtitle">Shop Now!</h4>
            </div>
        </div>
    </div>
);

export default HomePage;