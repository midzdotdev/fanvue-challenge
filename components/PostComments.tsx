"use client";

import { Skeleton, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { fetchPostComments } from "../jsonplaceholder/comments";
import { PostType } from "../jsonplaceholder/posts";

export const PostComments = ({ postId }: { postId: PostType["id"] }) => {
  const comments = useQuery({
    queryKey: ["comments", { postId }],
    queryFn: () => fetchPostComments({ postId }),
  });

  return (
    <Stack spacing={1}>
      {comments.status === "error" ? (
        <Typography>Failed to load comments</Typography>
      ) : (
        (comments.data ?? Array.from<undefined>({ length: 3 })).map(
          (comment) => (
            <Typography variant="body1">
              {comment?.body ?? <Skeleton />}
            </Typography>
          )
        )
      )}
    </Stack>
  );
};
