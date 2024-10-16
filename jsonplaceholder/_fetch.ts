export const fetchJsonPlaceholderResource = async (
  url: string
): Promise<Response> => {
  const resp = await fetch(url);

  if (!resp.ok) {
    throw new Error("Failed to fetch resource");
  }

  return resp;
};
