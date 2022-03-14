import { useEffect, useState } from 'react';
import { Logout, MasonryContainer } from "../index";
import { client } from '../../utils/client';
import { fetchPicsByUserID } from '../../utils/query';
import { Loader } from '../../components/index';

const UserProfile = ({ userId }) => {

  const [profileObj, setProfileObj] = useState(null);
  const [active, setActive] = useState('created');
  const [items, setItems] = useState([]);
  const [backgroundUrl, setBackgroundUrl] = useState('');

  useEffect(() => {
    setProfileObj(JSON.parse(localStorage.getItem('profileObj')));
    // fetch random background form unsplash API
    fetch(`https://api.unsplash.com/photos/random/?client_id=${process.env.UNSPLASH_API_ACCESS_KEY}`)
      .then(res => res.json())
      .then(data => setBackgroundUrl(data.urls.full));
  }, []);

  useEffect(() => {
    // fetch pics CREATED by the user
    if(active === 'created') {
      client.fetch(fetchPicsByUserID(userId))
        .then(res => setItems(res))
        .catch(err => console.log(err.message));
    }
    //fetch pics SAVED by the user
  }, [active, userId]);

  const fetchCreatedPics = e => {
    setActive(e.target.value);
  }

  const fetchSavedPics = e => {
    setActive(e.target.value);
  }

  if(!profileObj) return <Loader />;

  return (
    <div className="relative">
      <div className="absolute top-1 right-1">
        <Logout />
      </div>
      <div className="h-96 shadow-lg relative">
        <img src={backgroundUrl} className="h-full w-full object-cover" />
        <img src={profileObj.imageUrl} alt={profileObj.name} className="w-20 h-20 absolute -bottom-8 left-2/4 -translate-x-2/4 shadow-lg rounded-full" />
      </div>
      <h1 className="font-semibold text-center text-3xl mt-10 mb-3">{profileObj.name}</h1>
      <div className="flex justify-center my-6">
        <button 
          type="button"
          onClick={fetchCreatedPics}
          value="created"
          className={`${active === 'created' ? 'bg-red-500 text-white' : ''} mx-2 py-1 px-6 rounded-full border-2 border-red-500 font-semibold text-l`}
        >
          Created
        </button>
        <button 
          type="button"
          onClick={fetchSavedPics}
          value="saved"
          className={`${active === 'saved' ? 'bg-red-500 text-white' : ''} mx-2 py-1 px-6 rounded-full border-2 border-red-500 font-semibold text-l`}
        >
          Saved
        </button>
      </div>
      <div className="mt-8 mb-2">
        {items?.length !== 0 ? <MasonryContainer items={items} /> : <p className="text-center font-semibold text-xl">No pics found!</p>}
      </div>
    </div> 
  )
}

export default UserProfile;