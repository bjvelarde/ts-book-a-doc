import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClinicMedical } from '@fortawesome/free-solid-svg-icons';
import SC from './style';

const Header = () => {
  return <SC.Container title="top-bar">
    <Link to="/">
      <SC.LogoContainer>
        <SC.Icon><FontAwesomeIcon icon={faClinicMedical} /></SC.Icon>
        <SC.Title>Book-a-Doctor</SC.Title>
      </SC.LogoContainer>
    </Link>
  </SC.Container>;
};

export default Header;