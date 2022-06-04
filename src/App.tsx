import { Box } from "@mui/material";
import React from "react";
import List from "./List";

const content = require(`./data.json`);


function App() {

    return (

       <List lists={content}></List> 
    );
}

export default App;
