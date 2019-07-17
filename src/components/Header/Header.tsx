import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

interface HeaderProps {
    user: firebase.User | null;
    signOutUser?(): void;
}

const Header : React.FC<HeaderProps> = (props) => (
    <div className="header">
        <div className="header__logo">
            <Link to='/'>
                <Logo/>
            </Link>
        </div>
        <nav className="header-nav">
            <Link to='/shop' className="header-nav__link">Shop</Link>
            <Link to='/' className="header-nav__link">Contact</Link>
            {
                props.user ?
                (<div className="header-nav__link" onClick={props.signOutUser}>Sign Out</div>) :
                (<Link to='/signin' className="header-nav__link">Sign In</Link>)
            }
            <Link to='/' className="header-nav__link">Cart</Link>
        </nav>
    </div>
)

export default Header;