export const fetchUserQuery = param => {
  const query = `*[_type == 'user' && googleID == '${param}']{ _id, full_name, image, googleID }`;
  return query;
}

export const fetchCategoriesQuery = () => {
  const query = `*[_type == 'category']{ _id, title, 'imageUrl': thumbnail.asset->url, slug }`;
  return query;
}

export const fetchAllPics = () => {
  const query = `*[_type == 'pinpost']{ _id, title, 'imageUrl': image.asset->url, author->, link }`;
  return query;
}

export const fetchPicsByCategoryID = param => {
  const query = `*[_type == 'pinpost' && categories._ref == '${param}']{ _id, title, 'imageUrl': image.asset->url, author->, link }`;
  return query;
}

export const fetchPicsByUserID = param => {
  const query = `*[_type == 'pinpost' && author._ref == '${param}']{ _id, title, 'imageUrl': image.asset->url, author->, link }`;
  return query;
}