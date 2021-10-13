import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 1 0;
  margin-right: 15px;
`;

const Icon = styled.div`
  background-color: lightseagreen;
  border-radius: 50%;

  > svg {
    font-size: 24px;
    margin: 8px 12px;
    color: white;
  }

  &:hover {
    background-color: darkcyan;
    color: ivory;
  }
`;

const SC = {
  Container,
  Icon
};

export default SC;