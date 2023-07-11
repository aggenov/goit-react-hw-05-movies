import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const NavLinks = styled(NavLink)`
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: gray;
  font-weight: 500;

  &.active {
    color: lightgray;
    box-shadow: rgba(11, 127, 171, 0.7) 0 0 5px 3px;
  }
  &:hover {
    color: lightgray;
  }
`;

export const HeaderLinks = styled.header`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;
  padding: 24px;

  max-width: 1160px;

  align-items: center;
  /* justify-content: space-between; */
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,
    rgba(0, 0, 0, 0.14) 0px 4px 5px 0px,
    rgba(11, 127, 171, 0.5) 0px 0px 25px 5px;

  > nav {
    display: flex;
    gap: 12px;
    padding: 0;
    margin-left: auto;
    margin-right: auto;

    /* max-width: 1200px; */
  }
`;
