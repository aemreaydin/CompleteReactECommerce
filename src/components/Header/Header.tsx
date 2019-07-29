import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { AppState } from '../../redux';
import { FirebaseUser } from '../../redux/user/types';
import { CartVisibility } from '../../redux/cart/types';

import { HeaderContainer, LogoContainer, NavContainer, NavLinkContainer } from './styles';

import './Header.scss';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

import { selectCurrentUser } from '../..//redux/user/selector';
import { selectCartHidden } from '../../redux/cart/selectors';

interface HeaderProps {
    currentUser: FirebaseUser;
    cartVisibility: CartVisibility;
}

const Header : React.FC<HeaderProps> = ({currentUser, cartVisibility}) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo/>
        </LogoContainer>
        <NavContainer>
            <NavLinkContainer to='/shop'>Shop</NavLinkContainer>
            <NavLinkContainer to='/'>Contact</NavLinkContainer>
            {
                currentUser ?
                (<div className="header-nav__link" onClick={() => auth.signOut()}>Sign Out</div>) :
                (<NavLinkContainer to='/signin'>Sign In</NavLinkContainer>)
            }
            <CartIcon additionalClass="header-nav__link"/>
        </NavContainer>
        {
            cartVisibility ? <CartDropdown /> : null
        }
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector<AppState, HeaderProps>({
    currentUser: selectCurrentUser,
    cartVisibility: selectCartHidden
});

export default connect(mapStateToProps)(Header);