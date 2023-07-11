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

export const TrendItem = styled.li`
  padding-left: 12px;
  &:not(:last-child) {
    margin-bottom: 7px;
  }
`;

export const FilmLink = styled(Link)`
  color: lightgrey;
  text-decoration: none;
  &:hover {
    color: gray;
    font-weight: 500;
  }
`;
