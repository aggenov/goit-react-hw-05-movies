import styled from 'styled-components';

export const RevList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* margin-top: 20px; */
`;

export const RevItem = styled.li`
  box-shadow: 0 0 5px 3px rgb(11 127 171 / 50%);
  padding: 15px;
  margin: 0;
  /* &:not(:last-child) {
    margin-bottom: 20px;
  } */
`;

export const RevName = styled.p`
  color: lightgrey;
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 15px;
`;

export const RevText = styled.p`
  color: lightgrey;
  font-weight: 400;
  font-size: 14px;
  margin: 0;
  margin-top: 10px;

  line-height: 1.3;
`;
