import CommentIcon from "@mui/icons-material/Comment";
import {
  Button,
  Card,
  Divider,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { useCallback, useRef, useState } from "react";
import { useIsVisible } from "../hooks/useIsNearingViewport";
import { usePostCommentsCount } from "../jsonplaceholder/comments";
import { PostType } from "../jsonplaceholder/posts";
import { PostComments } from "./PostComments";

export const Post = ({ post }: { post: PostType | undefined }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);

  const [showComments, setShowComments] = useState(false);

  // the comment count is lazy loaded once the post enters the viewport
  // TODO: prevent rerenders after the users has scrolled past the post
  const commentsCount = usePostCommentsCount(isVisible ? post?.id : undefined);

  const toggleComments = useCallback(() => {
    setShowComments((x) => !x);
  }, []);

  return (
    <Card
      ref={ref}
      component="article"
      sx={{
        p: 2,
      }}
    >
      <Stack spacing={3}>
        <Stack spacing={1}>
          <Typography variant="h5">{post?.title ?? <Skeleton />}</Typography>
          <Typography variant="subtitle2">
            {post?.body ?? <Skeleton />}
          </Typography>
        </Stack>

        <Stack direction="row" justifyContent="space-between">
          {post ? (
            <Button
              variant="outlined"
              onClick={toggleComments}
              endIcon={<CommentIcon />}
            >
              {commentsCount.data ?? <Skeleton />}
            </Button>
          ) : (
            <Skeleton variant="rounded" width={70} height={35} />
          )}
        </Stack>

        {showComments && post ? (
          <>
            <Divider />
            <PostComments postId={post.id} />
          </>
        ) : null}
      </Stack>
    </Card>
  );
};
