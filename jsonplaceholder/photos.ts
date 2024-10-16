import { useQuery } from "@tanstack/react-query";
import { fetchJsonPlaceholderResource } from "./_fetch";

interface PhotoType {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export const usePhotosQuery = () => {
  return useQuery({
    queryKey: ["photos"],
    queryFn: fetchPhotos,
  });
};

const fetchPhotos = async (): Promise<PhotoType[]> => {
  const response = fetchJsonPlaceholderResource(
    "https://jsonplaceholder.typicode.com/photos"
  );

  return (await response).json();
};
