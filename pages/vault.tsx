import { Container, Skeleton, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import type { NextPage } from "next";
import React from "react";
import { usePhotosQuery } from "../jsonplaceholder/photos";

// TODO: componentise this big block of code

const VaultPage: NextPage = () => {
  const photosQuery = usePhotosQuery();

  return (
    <Container component="main" maxWidth="sm">
      <Typography variant="h3" component="h1" my={3}>
        Vault
      </Typography>

      {photosQuery.status === "error" ? (
        <Typography>Failed to load photos</Typography>
      ) : (
        <Grid container spacing={1}>
          {(photosQuery.data ?? Array.from<undefined>({ length: 10 })).map(
            (photo, i) => (
              // TODO: implement virtualisation here
              <Grid
                key={photo ? `photo-${photo.id}` : i}
                size={4}
                alignItems="stretch"
                justifyContent="stretch"
                position="relative"
                sx={{
                  aspectRatio: "1/1",
                }}
              >
                <Skeleton variant="rectangular" width="100%" height="100%" />
                {/* TODO: retry on error, show failure */}
                {/* I think I'm getting rate limited */}
                {photo ? (
                  <img
                    src={photo.thumbnailUrl}
                    loading="lazy"
                    alt={photo.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      position: "absolute",
                      inset: 0,
                    }}
                  />
                ) : null}
              </Grid>
            )
          )}
        </Grid>
      )}
    </Container>
  );
};

export default VaultPage;
