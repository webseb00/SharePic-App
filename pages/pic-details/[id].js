import { useRouter } from 'next/router';
import { AppWrapper } from '../../wrapper/index';

const PicDetails = () => {
  const router = useRouter();
  const { query: { id } } = router;
  console.log(router);
  return <p>Pic details id: {id}</p>
}

export default AppWrapper(PicDetails);