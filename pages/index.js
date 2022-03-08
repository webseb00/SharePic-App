import { authWrapper } from '../wrapper/index';
import Logout from '../containers/Logout/Logout';
import Home from '../containers/Home/Home';

function Main() {

  return (
    <>
      {/* <Logout /> */}
      <Home />
    </>
  )
}

export default authWrapper(Main);