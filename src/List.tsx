import React from "react";
import { Box, Grid, ListSubheader, Typography } from "@mui/material";
import { SubListInterface } from "./interface";
import SubList from "./SubList";

interface ListProps {
    lists: SubListInterface[];
}

const List = ({ lists }: ListProps) => {
    return (
        <Grid
            container
            columnSpacing={5}
            rowSpacing={4}
            spacing={0}
            direction="column"
            alignItems="center"
            md="auto" xs="auto"
            
        >
            <Grid item md="auto" xs="auto">
                <Box
                    sx={{
                        padding: "20px 0px 20px",
                        borderRadius: "10px",
                        backgroundColor: "#026773",
                        width:"400px"
                    }}
                >
                    <ListSubheader>
                        <Typography align="center">
                        Nested Items List
                        </Typography>
                    </ListSubheader>
                    {lists.map((sublist, i) => {
                        return <SubList key={i} nestedlist={sublist} />;
                    })}
                </Box>
            </Grid>
        </Grid>
    );
};

export default List;
