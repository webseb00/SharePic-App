import { useRouter } from 'next/router'

const Category = () => {

  const router = useRouter();
  console.log(router);
  return (
    <h4>Category: </h4>
  )
}

export default Category;