import { useMemo } from "react";
import { useDispatch } from "react-redux";
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";
import { setActiveNote } from "../../store/journal";
import { formatDate } from "../../helpers/formatDate";

export const SideBarItem = ({ title = "", body, id, date, imageUrls = [] }) => {
  const dispatch = useDispatch();

  const onClickNote = () => {
    dispatch(setActiveNote({ title, body, id, date, imageUrls }));
  };

  const newTitle = useMemo(() => {
    return title.length > 17 ? title.substring(0, 17) + "..." : title;
  }, [title]);

  const newBody = useMemo(() => {
    return body.length > 60 ? body.substring(0, 60) + "..." : body;
  }, [body]);

  const formatedDate = formatDate(date);

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onClickNote}>
        <Grid
          container
         
        >
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <ListItemText primary={formatedDate} />
            <ListItemText primary={newTitle} />
          </Grid>

     
        </Grid>
       <Grid container>
          <ListItemText secondary={newBody} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
