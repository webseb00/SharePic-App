import { FaAlignJustify } from 'react-icons/fa';

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: FaAlignJustify,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ]
}