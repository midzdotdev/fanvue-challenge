import { Container, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import type { NextPage } from "next";
import { Post } from "../components/Post";
import { fetchPosts } from "../jsonplaceholder/posts";

const FeedPage: NextPage = () => {
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  return (
    <Container component="main" maxWidth="xs">
      <Typography variant="h3" component="h1" my={3}>
        Feed
      </Typography>

      <Stack spacing={2}>
        {postsQuery.status === "error" ? (
          <Typography>Failed to retrieve posts</Typography>
        ) : (
          (postsQuery.data ?? Array.from<undefined>({ length: 3 })).map(
            (post, i) => <Post key={post ? `post-${post.id}` : i} post={post} />
          )
        )}
      </Stack>
    </Container>
  );
};

export default FeedPage;
