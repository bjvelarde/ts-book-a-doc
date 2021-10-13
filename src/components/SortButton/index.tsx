import { useEffect, useState } from "react";
import { debounce } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAlphaUp, faSortAlphaDownAlt } from '@fortawesome/free-solid-svg-icons';
import { useAppContext } from "../../context";
import SC from './style';

const SortButton = () => {
  const { state, sortCards } = useAppContext();
  const [icon, setIcon] = useState(faSortAlphaUp);
  const handleClick = debounce(() => sortCards(state.sortOrder === 'asc' ? 'desc' : 'asc'), 300);

  useEffect(() => {
    const theIcon = (state.sortOrder === 'asc') ? faSortAlphaUp : faSortAlphaDownAlt;
    setIcon(theIcon);
  }, [ state.sortOrder ]);

  return <SC.Container>
    <SC.Icon onClick={handleClick} role="button" aria-label="sort-icon">
      <FontAwesomeIcon icon={icon} />
    </SC.Icon>
  </SC.Container>;
}

export default SortButton;