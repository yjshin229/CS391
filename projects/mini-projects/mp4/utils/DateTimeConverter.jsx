export const UnixToDate = (unixTimestamp) => {
  const date = new Date(unixTimestamp * 1000);
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };
  return date.toLocaleString("en-US", options);
};
