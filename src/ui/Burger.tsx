import styled from 'styled-components';

interface IBurgerProps {
  scrolled: boolean;
}

const Burger = styled.div<IBurgerProps>`
  width: 30px;
  height: 4px;
  background: ${({ scrolled }) => (scrolled ? '#fff' : '#000')};
  border-radius: 5px;
  transition: all 0.5s ease-in-out;
  z-index: 100;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 4px;
    background: ${({ scrolled }) => (scrolled ? '#fff' : '#000')};
    border-radius: 5px;
    transition: all 0.5s ease-in-out;
  }

  &::before {
    transform: translateY(-10px);
  }
  &::after {
    transform: translateY(10px);
  }

  &.open {
    transform: translateX(50px);
    background: transparent;
  }

  &.open {
    &::after {
      content: '';
      transform: rotate(45deg) translate(-35px, 35px);
      background: #fff;
    }
  }

  &.open {
    &::before {
      content: '';
      transform: rotate(-45deg) translate(-35px, -35px);
      background: #fff;
    }
  }
`;

export default Burger;
