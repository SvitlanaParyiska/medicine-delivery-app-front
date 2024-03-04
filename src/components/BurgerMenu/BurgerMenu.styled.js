import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BackdropBurgerMenu = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 4999;
  background-color: rgba(4, 4, 4, 0.4);
`;

export const ContainerBurgerMenu = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  margin-left: auto;
  padding: 20px;
  width: 50%;
  height: 100%;
  z-index: 5000;
  background-color: var(--color-accent);

  @media (min-width: 769px) and (max-width: 1440px) {
    padding: 26px 32px 32px 32px;
  }
`;

export const ButtonClose = styled.button`
  position: absolute;
  border: none;
  width: 24px;
  height: 24px;
  stroke: white;
  top: 19px;
  right: 20px;
  background-color: transparent;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    top: 24px;
    right: 32px;
    width: 32px;
    height: 32px;
  }
`;

export const IconClose = styled.svg`
  width: 24px;
  height: 24px;
  fill: var(--color-btn-primary);
  cursor: pointer;

  &:hover,
  &:focus {
    transform-origin: center center;
    transform: scale(1.1);
  }
`;

export const NavListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 35px;
  align-items: center;
  transform: translateY(100%);
`;

export const BurgerMenuNavLinkStyled = styled(NavLink)`
  font-weight: 400;
  line-height: 1.43;
  color: #fff;
  padding: 10px 10px;
  border-radius: 12px;
  font-size: 16px;
  transition: border-color var(--transition);

  &:hover,
  &:focus {
    border: 1px solid #fff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  &.active {
    border: 1px solid #fff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    padding: 10px 27px;
  }
`;
