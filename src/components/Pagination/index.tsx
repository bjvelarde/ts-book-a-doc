import PropTypes from 'prop-types';
import { useAppContext } from '../../context';
import { usePagination, DOTS } from '../../hooks/usePagination';
import SC from './style';

interface Props {
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
}

const Pagination = ({
  totalCount,
  siblingCount = 1,
  currentPage = 1
}: Props) => {
  const pageSize = process.env.REACT_APP_PER_PAGE ? parseInt(process.env.REACT_APP_PER_PAGE) : 20;

  const { navigate } = useAppContext();

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    navigate(currentPage + 1);
  };

  const onPrevious = () => {
    navigate(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <SC.Container>
      <SC.Navigation title="navigation">
        <SC.Item
          className={currentPage === 1 ? 'disabled' : ''}
          onClick={onPrevious}
        >
          <SC.Arrow className="left" />
        </SC.Item>
        {paginationRange.map(pageNumber => {
          if (pageNumber === DOTS) {
            return <SC.Item key={pageNumber} className="dots">&#8230;</SC.Item>;
          }

          return (
            <SC.Item
              key={pageNumber}
              className={pageNumber === currentPage ? 'selected' : ''}
              onClick={() => navigate(pageNumber)}
            >
              {pageNumber}
            </SC.Item>
          );
        })}
        <SC.Item
          className={currentPage === lastPage ? 'disabled' : ''}
          onClick={onNext}
        >
          <SC.Arrow className="right" />
        </SC.Item>
      </SC.Navigation>
    </SC.Container>
  );
};

Pagination.propTypes = {
  totalCount: PropTypes.number,
  siblingCount: PropTypes.number,
  currentPage: PropTypes.number
};

export default Pagination;