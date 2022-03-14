import { useRouter } from 'next/router'
import { PicsContainer } from '../../containers';
import { AppWrapper } from '../../wrapper/index';

const Category = () => {
  const router = useRouter();
  
  return <PicsContainer urlParams={router.query} />;
}

export default AppWrapper(Category);