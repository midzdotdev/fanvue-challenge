import { skipToken, useQuery } from "@tanstack/react-query";
import { PostType } from "./posts";
import { fetchJsonPlaceholderResource } from "./_fetch";

export interface CommentType {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const fetchPostCommentsCount = async ({
  postId,
}: {
  postId: PostType["id"];
}): Promise<number | null> => {
  const resp = await fetchJsonPlaceholderResource(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments?_start=0&_end=0`
  );

  const rawHeader = resp.headers.get("X-Total-Count");

  if (!rawHeader) {
    return null;
  }

  // additional validation required to avoid `NaN`
  return parseInt(rawHeader);
};

export const usePostCommentsCount = (postId: PostType["id"] | undefined) =>
  useQuery({
    queryKey: ["comments-count", { postId }],
    queryFn:
      typeof postId === "number"
        ? () => fetchPostCommentsCount({ postId })
        : skipToken,
  });

export const fetchPostComments = async ({
  postId,
}: {
  postId: PostType["id"];
}): Promise<CommentType[]> => {
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );

  const comments = await resp.json();

  return comments;
};
