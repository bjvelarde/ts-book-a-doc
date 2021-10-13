import { useEffect } from 'react';
import Spinner from '../Spinner';
import Pagination from '../Pagination';
import { useAppContext } from '../../context';
import DoctorCard from '../DoctorCard';
import ToolBar from '../ToolBar';
import Alert from 'react-bootstrap/Alert';
import SC from './style';
import { Doctor } from '../../types';

const Doctors = () => {
  const { state, fetchDoctors } = useAppContext();

  const showDoctors = () => {
    return state.doctors.data.map((doctor: Doctor) => {
      return <DoctorCard key={doctor.id} doctor={doctor} />;
    });
  };

  useEffect(() => {
    async function fetchData() {
      await fetchDoctors(state.page, state.search, state.sortOrder);
    }
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ state.page, state.search, state.sortOrder ]);

  return  <SC.Container fluid="md">
    <SC.Title>Book-a-Doctor</SC.Title>
    {state.error && <Alert variant="danger">{state.error}</Alert>}
    {state.doctors && state.doctors.data ? (
      <>
        <ToolBar />
        <SC.Cards>
          {showDoctors()}
        </SC.Cards>
        <Pagination totalCount={state.doctors.total} currentPage={state.page} />
      </>
    ) : (state.error ? '' : <Spinner />) }
  </SC.Container>;
};

export default Doctors;