import React from 'react';
import { HeaderStyled, LinkStyled, NavBox, Image } from './Header.styled';
import { Link } from 'react-router-dom';
import logoPicture from '../../images/logo.png';

function Header() {
  return (
    <HeaderStyled>
      <div className="container-header">
        <NavBox>
          <Link aria-label="Welcome page" to="/">
            <Image src={logoPicture} alt="Logo" />
          </Link>
          <LinkStyled aria-label="Link to home page" to="/">
            Shop
          </LinkStyled>
          <LinkStyled aria-label="Link to shopping cart page" to="/cart">
            Shopping Cart
          </LinkStyled>
          <LinkStyled aria-label="Link to home page" to="/favorites">
            Favorites
          </LinkStyled>
          <LinkStyled aria-label="Link to home page" to="/history">
            History
          </LinkStyled>
        </NavBox>
      </div>
    </HeaderStyled>
  );
}

export default Header;
