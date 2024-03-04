import sprite from '../../images/sprite.svg';
import { useEffect } from 'react';
import {
  BackdropBurgerMenu,
  BurgerMenuNavLinkStyled,
  ButtonClose,
  ContainerBurgerMenu,
  IconClose,
  NavListStyled,
} from './BurgerMenu.styled';

function BurgerMenu({ onClick }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClick();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClick]);

  const handleCloseClick = () => {
    onClick();
  };

  const handleBackdropClick = ({ currentTarget, target }) => {
    if (currentTarget === target) {
      onClick();
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <BackdropBurgerMenu onClick={handleBackdropClick}>
      <ContainerBurgerMenu>
        <ButtonClose
          type="button"
          aria-label="Close menu"
          onClick={handleCloseClick}
        >
          <IconClose width="8" height="8">
            <use href={`${sprite}#icon-close`}></use>
          </IconClose>
        </ButtonClose>
        <div onClick={handleCloseClick}>
          <NavListStyled>
            <li>
              <BurgerMenuNavLinkStyled aria-label="Link to shop page" to="/">
                Shop
              </BurgerMenuNavLinkStyled>
            </li>
            <li>
              <BurgerMenuNavLinkStyled
                aria-label="Link to shopping cart page"
                to="/cart"
              >
                Shopping Cart
              </BurgerMenuNavLinkStyled>
            </li>
            <li>
              <BurgerMenuNavLinkStyled
                aria-label="Link to favorites page"
                to="/favorites"
              >
                Favorites
              </BurgerMenuNavLinkStyled>
            </li>
            <li>
              <BurgerMenuNavLinkStyled
                aria-label="Link to history page"
                to="/history"
              >
                History
              </BurgerMenuNavLinkStyled>
            </li>
          </NavListStyled>
        </div>
      </ContainerBurgerMenu>
    </BackdropBurgerMenu>
  );
}

export default BurgerMenu;
