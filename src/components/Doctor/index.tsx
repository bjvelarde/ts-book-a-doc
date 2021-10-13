import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
import BookButton from '../BookButton';
import { useAppContext } from '../../context';
import { useParams } from "react-router-dom";
import { formatTime } from '../../utils/timeUtils';
import { sortOpeningHours } from '../../utils/openingHours';
import { getDoctorsAddress } from '../../utils/fullAddress';
import Spinner from '../Spinner';
import Header from '../Header';
import SC from './style';

const Doctor = () => {
  let { id } = useParams<any>();

  const { state, fetchDoctor } = useAppContext();

  useEffect(() => {
    async function fetchData() {
      await fetchDoctor(id);
    }
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showOpeningHours = () => {
    return sortOpeningHours(state.doctor.opening_hours).map(slot => {
      return <SC.TableRow key={slot.day} data-testid="slot-row">
          <td>{slot.day}</td>
          <td>{slot.isClosed ? 'Closed' : formatTime(slot.start)}</td>
          <td>{slot.isClosed ? 'Closed' : formatTime(slot.end)}</td>
        </SC.TableRow>;
    });
  };

  return <>
    <Header />
    {state.error && <Alert variant="danger">{state.error}</Alert>}
    {state.doctor ? (
      <SC.Container>
        <SC.Header>
          <SC.Icon>
            <FontAwesomeIcon icon={faUserMd} />
          </SC.Icon>
          <SC.Title role="heading" aria-label="doctor-name">{state.doctor.name}</SC.Title>
        </SC.Header>
        <SC.CardBody>
          <SC.Subtitle className="mb-2 text-muted">{state.doctor.description}</SC.Subtitle>
          <SC.Address>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            {getDoctorsAddress(state.doctor)}
          </SC.Address>
        </SC.CardBody>
        <Table striped bordered hover size="sm" aria-label="opening-hours">
          <thead>
            <SC.TableRow>
              <th>Day</th>
              <th>Opening</th>
              <th>Closing</th>
            </SC.TableRow>
          </thead>
          <tbody>
            {showOpeningHours()}
          </tbody>
        </Table>
        <BookButton doctor={state.doctor} />
      </SC.Container>
    ) : <SC.Spinner>
      <Spinner />
    </SC.Spinner> }
  </>;
}

export default Doctor;