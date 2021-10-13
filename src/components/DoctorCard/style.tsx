import styled, { keyframes } from 'styled-components';
import { flipInY } from 'react-animations';
import Accordion from 'react-bootstrap/Accordion';

const animation = keyframes`${flipInY}`;

const Container = styled.div`
  animation: 1s ${animation};
  background-color: white;
  flex: 0 1 calc(25% - 1em);
  margin: 10px 0;
  cursor: pointer;
  padding: 20px;
  border-radius: 8px;

  > a {
    text-decoration: none;
    color: #000;
  }

  table {
    border-color: transparent;
  }

  &:hover {
    box-shadow: 8px 8px 10px rgba(200, 200, 200, 0.75);
    background-color: linen;

    table {
      background-color: white;
    }
  }
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

const AccordionItem = styled(Accordion.Item)`
  border: none;
  padding: 0;
  background: transparent;
`;

const AccordionHeader = styled(Accordion.Header)`
  > button {
    padding: 0;
    margin-bottom: 20px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    background: transparent;

    &:focus {
      outline: none;
      border-color: transparent;
      box-shadow: none;
      background: transparent;
    }

    &:not(.collapsed) {
      border-color: transparent;
      box-shadow: none;
      background: transparent;
    }
  }
`;

const AccordionBody = styled(Accordion.Body)`
  padding: 0;
  background: transparent;
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
  AccordionItem,
  AccordionHeader,
  AccordionBody
};

export default SC;