export const fetchData = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Something went wrong with heroes");
  }

  return response.json();
};
