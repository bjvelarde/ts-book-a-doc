import styled from 'styled-components';
import Form from 'react-bootstrap/Form';

const Container = styled.div`
  display: flex;
  position: relative;
`;

const SearchInput = styled(Form.Control)`
  border-radius: 20px;
  border: 1px solid linen;
`;

const Icon = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10000;
  cursor: pointer;

  > svg {
    font-size: 24px;
    margin: 8px 12px;
    color: darkcyan;
  }
`;

const SC = {
  Container,
  Icon,
  SearchInput
};

export default SC;