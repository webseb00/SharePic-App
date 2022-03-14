import { UserProfile } from '../../containers/index';
import { AppWrapper } from '../../wrapper/index';
import { useRouter } from 'next/router';

const Profile = () => {

  const router = useRouter();
  const { query: { id } } = router;

  return <UserProfile userId={id} />;
}

export default AppWrapper(Profile, 'hidden');