import { useRouter } from 'next/router'

const authWrapper = (Component) => () => {
  if(typeof window !== 'undefined') {
    const router = useRouter();

    if(!localStorage.getItem('profileObj')) {
      router.replace('/login');
      return null;
    }

    return <Component />
  }

  return null;
}

export default authWrapper;