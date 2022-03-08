import { useEffect, useState } from 'react';
import { client } from '../../utils/client';
import { fetchCategoriesQuery } from '../../utils/query';
import { BsCameraFill, BsFillBookmarkFill } from 'react-icons/bs';
import styles from './SideBar.module.css';
import Link from 'next/link';

const SideBar = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    client.fetch(fetchCategoriesQuery())
    .then(res => setCategories(res))
    .catch(err => console.log(err));
  }, []);

  return (
    <div className="app__sidebar overflow-y-scroll bg-white pt-10 pb-5 pl-5 h-screen w-56 disable-scrollbar">
      <h5 className={`flex justify-center items-start mb-4 text-2xl text-gray-300 font-semibold`}>
        Share<span className="text-red-500">Pic</span>
        <BsCameraFill className="text-3xl ml-1.5" />
      </h5>
      <Link href="/">
        <a className="flex items-center text-l font-semibold">
          <BsFillBookmarkFill className="mr-1" />
          Home
        </a>
      </Link>
      <div>
        <h5 className="my-5">Discover categories</h5>
        <div className="flex flex-col gap-3">
          {categories.length && 
            categories.map(cat => {
              const { _id, slug, imageUrl, title } = cat;

              return (
                <Link 
                  href={{
                    pathname: `/category/[slug]`,
                    query: { slug: slug.current }
                  }} 
                  key={_id}
                >
                  <a className={`${styles['app__sidebar-link']} text-l text-gray-400 font-semibold flex items-center transition duration-300 hover:text-gray-900`}>
                    <img src={imageUrl} alt={title} className="w-10 h-10 mr-3.5 rounded-full" />
                    {title}
                  </a>
                </Link>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default SideBar;