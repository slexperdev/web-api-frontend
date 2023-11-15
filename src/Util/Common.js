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
