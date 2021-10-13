import SearchBar from "../SearchBar";
import SortButton from "../SortButton";
import SC from './style';

const ToolBar = () => {

  return <SC.Container>
    <SortButton />
    <SearchBar />
  </SC.Container>;
}

export default ToolBar;