export const displayTime = dateObj => {
  const date = dateObj.toISOString().slice(0, 10);
  const time = dateObj.toString().substr(16, 8);
  return `${date}, ${time}`;
};
