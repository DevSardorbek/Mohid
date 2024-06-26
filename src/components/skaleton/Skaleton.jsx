import { Box, Grid, Skeleton } from "@mui/material";
import React from "react";

const Skaleton = ({ perPageCount }) => {
  return (
    <Grid container spacing={2}>
      {new Array(perPageCount).fill("").map((_, inx) => (
        <Grid key={inx} item lg={4} sx={{ p: "49px" }}>
          <Skeleton
            spacing={2}
            variant="rectangular"
            width={334}
            height={337}
          />
          <Box
            sx={{
              pt: 0.5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Skeleton width="60%" />
            <Skeleton width="60%" />
            <Skeleton width="60%" />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Skaleton;
