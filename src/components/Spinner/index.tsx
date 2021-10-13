import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

interface Props {
  size?: SizeProp;
  color?: string;
  testid?: string;
}

const Spinner = ({size = '3x', color = 'crimson', testid = 'spinner'}: Props) => {

  return <div data-testid={testid}>
    <FontAwesomeIcon icon={faStarOfLife} spin size={size} color={color}/>
  </div>;
};

export default Spinner;