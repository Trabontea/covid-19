export const DateLocale = (value) => {
  const arr = value.split('-');
  let cutOut = arr.splice(0,1)[0];
  arr.splice(1,0, cutOut);
  return `${arr[2]}-${arr[0]}-${arr[1]}`;
};

export const twoDecimals =(value) => {
  return value.toFixed(2)
};


