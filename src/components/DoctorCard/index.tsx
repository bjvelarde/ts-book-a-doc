import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import BookButton from '../BookButton';
import { useDoctor } from '../../hooks/useDoctor';
import { formatTime } from '../../utils/timeUtils';
import SC from './style';
import { Doctor } from '../../types';

interface Props {
  doctor: Doctor;
}

const DoctorCard = ({ doctor }: Props) => {
  const { fullAddress, sortedOpeningHours } = useDoctor(doctor);

  const showOpeningHours = () => {
    return sortedOpeningHours.map(slot => {
      return <SC.TableRow key={slot.day}>
          <td>{slot.day}</td>
          <td>{slot.isClosed ? 'Closed' : formatTime(slot.start)}</td>
          <td>{slot.isClosed ? 'Closed' : formatTime(slot.end)}</td>
        </SC.TableRow>;
    });
  };

  return <SC.Container data-testid="doctor-card">
    <Link to={`/doctor/${doctor.id}`}>
      <SC.Header>
        <SC.Icon>
          <FontAwesomeIcon icon={faUserMd} />
        </SC.Icon>
        <SC.Title role="heading">{doctor.name}</SC.Title>
      </SC.Header>
      <SC.CardBody>
        <SC.Subtitle className="mb-2 text-muted">{doctor.description}</SC.Subtitle>
        <SC.Address>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          {fullAddress}
        </SC.Address>
      </SC.CardBody>
    </Link>
    <Accordion>
      <SC.AccordionItem eventKey="0">
        <SC.AccordionHeader>Opening Hours</SC.AccordionHeader>
        <SC.AccordionBody>
          <Table striped bordered hover size="sm">
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
        </SC.AccordionBody>
      </SC.AccordionItem>
      </Accordion>
    <BookButton doctor={doctor} />
  </SC.Container>;
}

DoctorCard.propTypes = {
  doctor: PropTypes.object
};

export default DoctorCard;