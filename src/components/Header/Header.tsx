import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { AppState } from '../../redux';
import { FirebaseUser } from '../../redux/userReducer/types';

import './Header.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

interface HeaderProps {
    currentUser: FirebaseUser;
}

const Header : React.FC<HeaderProps> = ({currentUser}) => (
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
                currentUser ?
                (<div className="header-nav__link" onClick={() => auth.signOut()}>Sign Out</div>) :
                (<Link to='/signin' className="header-nav__link">Sign In</Link>)
            }
            <Link to='/' className="header-nav__link">Cart</Link>
        </nav>
    </div>
)

const mapStateToProps = (state: AppState) => ({
    currentUser: state.userReducer.currentUser
});

export default connect(mapStateToProps)(Header);