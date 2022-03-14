import { useEffect, useState } from 'react';
import { client } from '../../utils/client';
import { fetchPicsByCategoryID, fetchAllPics } from '../../utils/query';
import { Loader } from '../../components/index';
import { BsEmojiSmile } from 'react-icons/bs';
import { MasonryContainer } from '../index';

const PicsContainer = ({ urlParams }) => {
  const [pics, setPics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    client.fetch(urlParams?.id ? fetchPicsByCategoryID(urlParams.id) : fetchAllPics())
      .then(res => {
        setPics(res);
        setIsLoading(false);
        })
      .catch(err => console.log(err.message));
  }, [urlParams]);

  return (
    <div className="p-3">
      {isLoading && (
        <Loader 
          message={
          <p className="flex flex-col items-center text-xl">
            Be patient we are loading your pics... 
            <BsEmojiSmile className="mt-1 text-3xl" />
          </p>}
        />
      )}
      <MasonryContainer items={pics} /> 
    </div>
  )
}

export default PicsContainer;