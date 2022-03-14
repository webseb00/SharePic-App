import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import { MdDownloadForOffline } from 'react-icons/md';
import Link from 'next/link';

const Pic = ({ item }) => {

  const { _id, title, imageUrl, link, author } = item;

  return (
    <div className="cursor-pointer mb-5">
      <Link href={`/pic-details/${_id}`}>
        <span className="relative shadow-md hover:shadow-xl duration-300 inline-block rounded-lg ">
          <a 
            href={imageUrl} 
            target="_blank"
            onClick={e => e.stopPropagation()}
            className="absolute top-2 left-2 shadow-md p2 bg-gray-100 p-2 rounded-full text-xl opacity-60 hover:opacity-100 duration-300"
          >
            <MdDownloadForOffline />
          </a>
          <a
            onClick={e => e.stopPropagation()} 
            href={link} 
            className="absolute left-2 bottom-2 shadow-md p2 bg-gray-100 p-2 rounded-full text-xl opacity-60 hover:opacity-100 duration-300"
          >
            <BsArrowUpRightCircleFill />
          </a>
          <img src={imageUrl} alt={title} className="rounded-lg" />
        </span>
      </Link>
      <Link href={{
        pathname: '/user-profile/[id]',
        query: { id: author._id }
      }}>
        <a className="flex items-center flex-start mt-2">
          <img src={author.image} alt={author.full_name} className="w-8 h-8 rounded-full" />
          <p className="ml-2 font-semibold text-l text-gray-500">
            {author.full_name}
          </p>
        </a>
      </Link>
    </div>
  )
}

export default Pic;