export const getConvertedData = (data) => {
  try {
    const cleanedString = data[0].replace(/\n/g, "");

    const jsonArray = JSON.parse(cleanedString);
    const formattedArray = jsonArray.map((value) => ({
      value: value,
      label: value,
    }));
    return formattedArray;
  } catch (error) {
    console.log(error);
  }
};

export const getRatingStar = (value) => {
  switch (value) {
    case 5:
      return "⭑⭑⭑⭑⭑";
    case 4:
      return "⭑⭑⭑⭑";
    case 3:
      return "⭑⭑⭑";
    case 2:
      return "⭑⭑";
    case 1:
      return "⭑";
  }
};
