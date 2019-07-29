import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const NavChildContainer = css`
    background: transparent;
    display: inline;


    font-family: inherit;
    font-size: 1.8rem;
    text-transform: uppercase;

    cursor: pointer;

    &:not(:first-child) {
        margin-left: 2rem;
    }
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 5%;
    padding: 0 10rem;
    align-items: center;

    margin-bottom: 2.4rem;
`;

export const LogoContainer = styled(Link)``;

export const NavContainer = styled.nav`
    display: flex;
    align-items: center;
`;

export const NavDivContainer = styled.div`
    ${NavChildContainer}
`;
export const NavLinkContainer = styled(Link)`
    ${NavChildContainer}
`;