import { useEffect, useState } from 'react';
import Link from 'next/link'
import { BsPlus } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'

const SearchBar = () => {

  const [profileObj, setProfileObj] = useState({});
  const { imageUrl, googleId, name } = profileObj;

  const [term, setTerm] = useState('');

  useEffect(() => {
    setProfileObj(JSON.parse(localStorage.getItem('profileObj')));
  }, []);
  
  const handleSearchTerm = e => {
    setTerm(e.target.value);
  }

  return (
    <div className="flex p-3 gap-3">
      <div className="w-full">
        <div className="flex items-center rounded-lg bg-white p-3">
          <AiOutlineSearch className="mx-2 text-2xl" />
          <input 
            type="text" 
            name="search" 
            value={term} 
            onChange={handleSearchTerm} 
            placeholder="Search..." 
            className="w-full border-none outline-none" 
          />
        </div>
      </div>
      <div className="flex justify-between gap-3">
        <Link href={{ pathname: '/user-profile/[id]', query: { id: googleId } }}>
          <a className="w-12 h-12 hover:shadow-md duration-300">
            <img src={imageUrl} alt={name} className="rounded-lg" />
          </a>
        </Link>
        <Link href="/create-pic">
          <a className="w-12 h-12 rounded-lg inline-block bg-slate-900 flex items-center justify-center hover:shadow-md duration-300">
            <BsPlus className="text-white text-2xl" />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default SearchBar;