import React, { useContext } from "react";
import CondensedListItem from "./CondensedListItem";
import { FavVideosContext } from "../Hooks/videoContext";
import { Box } from "@mui/system";

const SearchHistory = ({ onClickItem }) => {
  const { condensedList } = useContext(FavVideosContext);

  return (
    <Box>
      <h4>Last Searches</h4>
      {condensedList &&
        condensedList.map((condensedItem) => (
          <CondensedListItem
            key={condensedItem.timestamp}
            onClickItem={onClickItem}
            condensedItem={condensedItem}
          ></CondensedListItem>
        ))}
    </Box>
  );
};

export default SearchHistory;
