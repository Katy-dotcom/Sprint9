import React from "react";
import Moment from "react-moment";
import ReactRoundedImage from "react-rounded-image";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const CondensedListItem = ({ condensedItem, onClickItem }) => {
  return (
    <>
      {condensedItem && (
        <Grid
          container
          spacing={0}
          pt={2}
          borderRadius={2}
          borderBottom={1}
          borderColor="grey"
          sx={{ backgroundColor: "#252130" }}
        >
          {" "}
          <Grid item lg={1}>
            <ReactRoundedImage
              roundedSize="0"
              imageWidth="50"
              imageHeight="50"
              image={condensedItem.videos[0].snippet.thumbnails.default.url}
            />
          </Grid>
          <Grid item lg={2}>
            {condensedItem.searchedTerm}
          </Grid>
          <Grid item lg={1}>
            ·
          </Grid>
          <Grid item lg={2}>
            <Moment fromNow>{condensedItem.timestamp}</Moment>
          </Grid>
          <Grid item lg={3}></Grid>
          <Grid item lg={3}>
            <Button
              onClick={() => onClickItem(condensedItem.videos[0].id.videoId)}
              variant="contained"
              size="small"
              color="error"
              style={{ maxHeight: "40px", fontSize: "12px" }}
            >
              Cargar videos
            </Button>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default CondensedListItem;
