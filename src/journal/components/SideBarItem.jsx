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
    return body.length > 80 ? body.substring(0, 80) + "..." : body;
  }, [body]);

  const formatedDate = formatDate(date);

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onClickNote}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xs={5}>
            <ListItemText primary={formatedDate} />
          </Grid>
          <Grid item xs={7}>
            <ListItemText primary={newTitle} />
          </Grid>
          <Grid item xs={12}>
            <ListItemText secondary={newBody} />
          </Grid>
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
