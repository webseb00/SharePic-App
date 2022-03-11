import { authWrapper, AppWrapper } from '../wrapper/index';
import { PicsContainer } from '../containers/index';

function Main() {
  return <PicsContainer />;
}

export default authWrapper(AppWrapper(Main));