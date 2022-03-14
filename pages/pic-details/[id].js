import { useRouter } from 'next/router';
import { AppWrapper } from '../../wrapper/index';
import { PicDetail } from '../../containers/index';

const PicDetails = () => {
  const router = useRouter();
  const { query: { id } } = router;
  
  return <PicDetail picID={id} />;
}

export default AppWrapper(PicDetails);