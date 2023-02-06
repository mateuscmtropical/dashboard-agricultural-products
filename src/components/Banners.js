import { Grid } from "@mui/material";
import BannerCard from "./BannerCard";
import styles from './Banner.module.scss';
import Carousel from "react-material-ui-carousel";

const Banner = () => {
    const images = [
        './images/produto.jpg',
        './images/produtor.jpeg'
    ]

    return (
        <Grid>
            <Carousel
                slide
                swipe={true}
                duration={1000}
                fullHeightHover
                navButtonsAlwaysVisible
            >
                {
                    images.map(image => {
                        return <BannerCard
                        key={image}
                        image={image}
                        />
                    })
                }
            </Carousel>
        </Grid>
    )
}

export default Banner;