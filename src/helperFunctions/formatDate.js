export const formatDate = (datetime) => {
  const date = new Date(datetime);
  const options = { month: "long", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
};
