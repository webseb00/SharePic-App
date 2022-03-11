import { SideBar, SearchBar } from '../../components/index';
import { PicsContainer } from '../index';

const Home = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex flex-col basis-full h-screen bg-gray-50">
        <SearchBar />
        <PicsContainer />
      </div>
    </div>
  )
}

export default Home;