import React, { useState } from 'react';
import {
  HeaderStyled,
  LinkStyled,
  NavBox,
  Image,
  BurgerIcon,
} from './Header.styled';
import { Link } from 'react-router-dom';
import logoPicture from '../../images/logo.png';
import sprite from '../../images/sprite.svg';
import MediaQuery from 'react-responsive';
import BurgerMenu from 'components/BurgerMenu';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <HeaderStyled>
      <div className="container-header">
        <NavBox>
          <Link aria-label="Welcome page" to="/">
            <Image src={logoPicture} alt="Logo" />
          </Link>
          <MediaQuery minWidth={1440}>
            <LinkStyled aria-label="Link to shop page" to="/">
              Shop
            </LinkStyled>
            <LinkStyled aria-label="Link to shopping cart page" to="/cart">
              Shopping Cart
            </LinkStyled>
            <LinkStyled aria-label="Link to favorites page" to="/favorites">
              Favorites
            </LinkStyled>
            <LinkStyled aria-label="Link to history page" to="/history">
              History
            </LinkStyled>
          </MediaQuery>
          <MediaQuery maxWidth={1439}>
            <BurgerIcon aria-label="Menu" onClick={toggleMenu}>
              <use href={`${sprite}#icon-burger-menu`} />
            </BurgerIcon>
          </MediaQuery>
          <MediaQuery maxWidth={1439}>
            {isMenuOpen && <BurgerMenu onClick={toggleMenu} />}
          </MediaQuery>
        </NavBox>
      </div>
    </HeaderStyled>
  );
}

export default Header;
