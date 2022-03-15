import { useState, useEffect } from 'react';
import { MdDownloadForOffline } from 'react-icons/md';
import { client } from '../../utils/client';
import { fetchPicDetailsQuery } from '../../utils/query';
import { Loader } from '../../components';
import Link from 'next/link';

const PicDetail = ({ picID }) => {

  const [pics, setPics] = useState(null);
  const [pic, setPic] = useState(null);
  const [profileObj, setProfileObj] = useState(null);
  
  useEffect(() => {
    client.fetch(fetchPicDetailsQuery(picID))
      .then(res => setPic(res[0]))
      .catch(err => console.log(err.message));
      
      setProfileObj(JSON.parse(localStorage.getItem('profileObj')));
    }, [picID]);

  if(!pic || !profileObj) return <Loader message={<p className="text-center">Loading details...</p>} />;

  return (
    <div className="p-3 my-3 flex justify-center">
      <div className="w-11/12 flex bg-white rounded-2xl max-w-screen-xl">
        <div className="w-2/5">
          <img src={pic.imageUrl} alt={pic.title} className="rounded-2xl object-cover" />
        </div>
        <div className="w-3/5 p-4">
          <div className="flex justify-between">
            <a 
              href={pic.imageUrl} 
              target="_blank"
              download
              className="shadow-md p2 bg-gray-100 p-2 rounded-full text-xl opacity-60 hover:opacity-100 duration-300"
            >
              <MdDownloadForOffline />
            </a>
            <a href={pic.link} target="_blank">{pic.link}</a>
          </div>
          <div className="my-4">
            <h1 className="font-bold mb-3 text-3xl">{pic.title}</h1>
            <p className="text-xl">{pic.description}</p>
          </div>
          <div>
            <Link href={`/user-profile/${pic?.author.googleID}`}>
              <a className="flex items-center">
                <img src={pic?.author.image} alt={pic?.author.full_name} className="w-10 h-10 rounded-full" />
                <p className="font-semibold ml-2">{pic?.author.full_name}</p>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default PicDetail;