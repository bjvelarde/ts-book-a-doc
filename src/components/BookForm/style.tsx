import styled from 'styled-components';
import Calendar from 'react-calendar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormGroup = styled(Form.Group)`
  &.error {
    select,
    input {
      border-color: crimson;
    }
  }
`;

const Confirm = styled(Button)`
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

const Error = styled.div`
  color: red;
  font-weight: bold;
  font-size: 12px;
  padding: 5px 0;
`;

const DatePicker = styled(Calendar)`
  button {
    margin: 0;
    border: 0;
    outline: none;
    font: inherit;
    font-size: 0.8em;
  }

  .react-calendar__navigation {
    height: 44px;
    margin-bottom: 10px;
    display: flex;
    box-sizing: border-box;

    button {
      min-width: 44px;
      background: none;
    }
  }

  .react-calendar__viewContainer {
    box-sizing: border-box;
  }

  .react-calendar__month-view {
    > div {
      display: flex;
      align-items: flex-end;

      .react-calendar__month-view__weekdays {
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 0.75em;
        display: flex;

        .react-calendar__month-view__weekdays__weekday {
          padding: 0.5em;
          flex-basis: 14.2857%;
          max-width: 14.2857%;
          overflow: hidden;
        }
      }

      .react-calendar__month-view__days {
        display: flex;
        flex-wrap: wrap;

        .react-calendar__tile {
          max-width: 100%;
          text-align: center;
          padding: 0.75em 0.5em;
          background: none;
        }

        .react-calendar__month-view__days__day--weekend {
          color: #d10000;
        }

        .react-calendar__month-view__days__day--neighboringMonth {
          color: #757575;
        }

        .react-calendar__tile--active {
          background: #006edc;
          color: white;
        }
      }
    }
  }
`;

const SC = {
  DatePicker,
  Error,
  Confirm,
  FormGroup
};

export default SC;