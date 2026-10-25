export const parseDataListModel = (data = []) => {
  return data
    .filter((_, index) => index !== 0)
    .map((row, index) => ({ ...parseDataModel(row), key: String(index) }));
};

export const parseDataModel = (data) => {
  const [name = "", type = "", tags = "", description = "", location = ""] =
    data;

  const tagArray = tags.trim().split(/\s+/).filter(Boolean);
  return {
    name,
    tags: tagArray,
    description,
    location,
  };
};
