export function getIndianFormat(str) {
  str = str.split(".");
  return (
    str[0].replace(/(\d)(?=(\d\d)+\d$)/g, "$1,") + (str[1] ? "." + str[1] : "")
  );
}
