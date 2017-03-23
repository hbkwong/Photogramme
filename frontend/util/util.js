export const getIndex = (arr, id) => {
  let ind;
  arr.forEach((el, index) => {
    if (el.id === id) {
      ind = index;
    }
  });
  return ind;
};
