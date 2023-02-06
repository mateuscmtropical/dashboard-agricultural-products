import React from "react";
import Banner from "@/components/Banners";
import Products from "@/components/Products";
import Producers from "@/components/Producers";
import { Grid } from "@mui/material";

function Home() {        
    return (
        <Grid>
            <Grid>
                <Banner />
            </Grid>
            <Grid>
                <Products 
                    home
                />
            </Grid>
            <Grid>
                <Producers />
            </Grid>
        </Grid>
    );
}

export default Home;
