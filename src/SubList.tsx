import React, { useState } from "react";
import { SubListInterface } from "./interface";
import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  ListSubheader
} from "@mui/material";
interface SubListProps {
    nestedlist: SubListInterface;
}
import { StarBorder } from "@mui/icons-material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
const SubList = ({ nestedlist }: SubListProps) => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
      isNotLeaf() && setOpen(!open);

  };

  const isNotLeaf = () => {
      return nestedlist.sublist.length > 0;
  };

  const nestedChaps = (nestedlist.sublist || []).map((sublist, k) => {
      return (
          <SubList
              key={k}
              nestedlist={sublist}
          />
      );
  });

  return (
      <Box style={{ marginLeft: "20px", marginTop: "10px" }}>
          <List>
              
              <ListItemButton
                  onClick={(e) => {
                      handleClick();
                  }}
              >
                  <StarBorder />

                  <ListItemText>
                      <Typography
                          sx={{
                              width: "100%",
                              fontWeight: "650",
                              letterSpacing: "-0.5px",
                          }}
                      >
                          {nestedlist.title}
                      </Typography>
                  </ListItemText>
                  {isNotLeaf() && (open ? <ExpandMore /> : <ExpandLess /> )}
              </ListItemButton>
              <Collapse in={!open} timeout="auto" unmountOnExit>
                  {nestedChaps}
              </Collapse>
          </List>
      </Box>
  );
};

export default SubList;
