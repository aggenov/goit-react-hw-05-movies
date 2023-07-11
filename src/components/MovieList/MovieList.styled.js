import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 20px;
  padding-left: 12px;
`;

export const Item = styled.li`
  color: lightgrey;
  /* 
  &:not(:last-child) {
    margin-bottom: 5px;
  } */
`;

export const FilmLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  &:hover {
    color: gray;
    font-weight: 500;
  }
`;
