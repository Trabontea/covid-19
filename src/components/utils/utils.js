export const DateLocale = (value) => {
  const arr = value.split('-');
  let cutOut = arr.splice(0,1)[0];
  arr.splice(1,0, cutOut);
  return `${arr[2]}-${arr[0]}-${arr[1]}`;
};


export const timeConverter = (unixTime, format) => {
  if (!unixTime || unixTime === "0" || unixTime === " " || unixTime === 0 )  return "";
  let time = unixTime.toString().length <= 10 ? new Date(unixTime * 1000) : new Date(unixTime);
  if (!time || isNaN(time.getDate())) return "";
  
  let date = (time.getDate() < 10 ? "0" : "") + time.getDate();
  let month = (time.getMonth() + 1 < 10 ? "0" : "") + (time.getMonth() + 1);
  let year = time.getFullYear();
  let hours = (time.getHours() < 10 ? "0" : "") + time.getHours();
  let min = (time.getMinutes() < 10 ? "0" : "") + time.getMinutes();
  let sec = (time.getSeconds() < 10 ? "0" : "") + time.getSeconds();
  let ddmmyy = date + "-" + month + "-" + year;
  let withHour = date + "-" + month + "-" + year + " " + hours + ":" + min + ":" + sec;
  switch (format) {
    case "dd/mm/yy":
      return ddmmyy;
    default:
      return withHour;
  }
 
};

export const twoDecimals =(value) => {
  return value.toFixed(2)
};