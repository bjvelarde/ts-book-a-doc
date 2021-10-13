import styled from 'styled-components';
import Form from 'react-bootstrap/Form';

const Input = styled(Form.Control)`
  border-radius: 20px;
  border: 1px solid rgba(0, 139, 139, 0.25);
`;

const Icon = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;

  > svg {
    font-size: 24px;
    margin: 8px 12px;
    color: lightseagreen;
  }

  &:hover {
    > svg {
      color: darkcyan;
    }
  }
`;

const SC = {
  Icon,
  Input
};

export default SC;