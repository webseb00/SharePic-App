import Masonry from 'react-masonry-css'
import { Pic } from '../index'

const breakpointColumnsObj = {
  default: 5,
  1200: 4,
  900: 3,
  700: 2,
  500: 1,
};

const MasonryContainer = ({ items }) => {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid flex gap-5"
    >
      {items.map((item, index) => <Pic key={index} item={item} />)}
    </Masonry>
  )
}

export default MasonryContainer;