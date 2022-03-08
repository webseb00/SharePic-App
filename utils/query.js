export const fetchUserQuery = param => {
  const query = `*[_type == 'user' && googleID == '${param}']{ _id, full_name, image, googleID }`;

  return query;
}

export const fetchCategoriesQuery = () => {
  const query = `*[_type == 'category']{ _id, title, 'imageUrl': thumbnail.asset->url, slug }`;
  return query;
}