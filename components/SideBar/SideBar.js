import { useEffect, useState } from 'react';
import { client } from '../../utils/client';
import { fetchCategoriesQuery } from '../../utils/query';
import { BsCameraFill, BsFillBookmarkFill, BsCaretRight } from 'react-icons/bs';
import styles from './SideBar.module.css';
import Link from 'next/link';

const SideBar = () => {

  const [profileObj, setProfileObj] = useState({});
  const { name, imageUrl, googleId } = profileObj;

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setProfileObj(JSON.parse(localStorage.getItem('profileObj')));

    client.fetch(fetchCategoriesQuery())
    .then(res => setCategories(res))
    .catch(err => console.log(err));
  }, []);

  return (
    <div className="h-screen w-[260px] overflow-y-scroll disable-scrollbar">
      <div className="flex flex-col py-4">
        <div className="mb-4 text-2xl text-gray-300 font-semibold px-4">
          <Link href="/">
            <a className="flex justify-center items-center">
              <BsCameraFill className="text-3xl mr-1.5" />
              <h5>Share<span className="text-red-500">Pic</span></h5>
            </a>
          </Link>
        </div>
        <Link href="/">
          <a className="flex items-center text-l text-gray-500 font-semibold px-4">
            <BsFillBookmarkFill className="mr-1" />
            Home
          </a>
        </Link>
        <div className="flex flex-col">
          <h5 className="my-5 px-4">Discover categories</h5>
          <div className="flex flex-col gap-3">
            {categories.length && 
              categories.map(cat => {
                const { _id, slug, imageUrl, title } = cat;

                return (
                  <Link 
                    href={{
                      pathname: `/category/[slug]`,
                      query: { slug: slug.current, id: _id }
                    }} 
                    as={`/category/${slug.current}`}
                    key={_id}
                  >
                    <a className={`${styles['app__sidebar-link']} pl-4 text-l text-gray-400 font-semibold flex items-center transition duration-300 hover:text-gray-900`}>
                      <img src={imageUrl} alt={title} className="w-10 h-10 mr-3.5 rounded-full" />
                      {title}
                    </a>
                  </Link>
                )
              })
            }
          </div>
        </div>
        <Link href={{ pathname: `/user-profile/[id]`, query: { id: googleId } }}>
          <a className="flex justify-center">
            <div className="shadow-md hover:shadow-sm duration-300 flex items-center p-2 rounded-lg mt-5">
              <img src={imageUrl} alt={name} className="w-11 h-11 rounded-full" />
              <h4 className="mx-3">{name}</h4>
              <BsCaretRight />
            </div>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default SideBar;