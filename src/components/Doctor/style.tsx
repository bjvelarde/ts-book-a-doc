import styled, { keyframes } from 'styled-components';
import { slideInDown } from 'react-animations';;

const animation = keyframes`${slideInDown}`;

const Container = styled.div`
  animation: 1s ${animation};
  background-color: white;
  flex: 0 1 calc(25% - 1em);
  margin: 20px;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid moccasin;

  > a {
    text-decoration: none;
    color: #000;
  }

  @media only screen and (min-width: 768px) {
    margin: 40px;
  }
`;

const Spinner = styled.div`
  margin-top: 40px;
`;

const Header = styled.div`
  text-align: center;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
  text-transform: uppercase;
`;

const Icon = styled.div`
  text-align: center;
  font-size: 23px;
  background-color: lightseagreen;
  border-radius: 50%;
  margin: 0 auto;
  width: 40px;

  > svg {
    color: linen;
  }
`;

const CardBody = styled.div`
  padding: 0;
`;

const Subtitle = styled.div`
  --bs-text-opacity: 1;
  color: #6c757d;
`;

const Address = styled.div`
  text-align: left;
  color: #636363;
  border-top: 1px solid chocolate;
  border-bottom: 1px solid chocolate;
  padding: 15px 0;
  margin-bottom: 20px;
  font-size: 16px;

  > svg {
    margin-right: 5px;
  }
`;

const TableRow = styled.tr`
  font-size: 14px;

  > th {
    font-weight: bold;
    text-transform: uppercase;
  }
`;

const SC = {
  Header,
  Title,
  Container,
  CardBody,
  Subtitle,
  Address,
  Icon,
  TableRow,
  Spinner
};

export default SC;