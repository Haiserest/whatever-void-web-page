export const parseDataListModel = (data = []) => {
  return data.filter((_, index) => index !== 0).map(parseDataModel);
};

export const parseDataModel = (data) => {
  const [name, tags, description, location] = data;

  const tagArray = tags.split(" ");
  return {
    name,
    tags: tagArray,
    description,
    location,
  };
};
