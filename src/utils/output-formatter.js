export const outputFormatter = (array) => {
    return array.map((item, i) => {
      if (i !== array.length - 1) {
        return item + ", ";
      } else {
        return item;
      }
    });
  };