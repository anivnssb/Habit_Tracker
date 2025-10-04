export const formatDate = (date: Date) => {
  let day: string | number = date.getDate();
  let month: string | number = date.getMonth() + 1; // Months are zero-based, so add 1
  let year = date.getFullYear();
  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;
  return `${day}/${month}/${year}`;
};
