import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Text = styled.h1`
  margin: 0;
  color: lightgrey;
  padding-left: 12px;
  font-weight: 700;
  margin-top: 24px;
  margin-bottom: 24px;
`;

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
