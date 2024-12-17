export const getKeysNameObject = (data) => {
  let getKey = [];
  for (let key in data) {
    if (key !== "id") {
      getKey.push(key);
    }
  }
  return getKey;
};
