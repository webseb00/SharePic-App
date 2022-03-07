import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Logout from '../containers/Logout/Logout';

export default function Home() {

  const router = useRouter();

  useEffect(() => {
    if(!localStorage.getItem('profileObj')) router.push('/login');
  }, [])

  return (
    <>
      <Logout />
      <h3>home page</h3>
    </>
  )
}
