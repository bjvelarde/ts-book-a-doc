import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

const Trigger = styled(Button)`
  border-radius: 24px;
  background-color: royalblue;
  border-color: royalblue;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  padding: 10px 20px;

  &:hover {
    color: yellow;
  }
`;

const SC = {
  Trigger
};

export default SC;