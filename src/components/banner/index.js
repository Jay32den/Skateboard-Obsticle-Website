import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BannerContainer, BannerContent, BannerDescription, BannerTitle, BannerImage, BannerShopButton } from "../../styles/banner";

export default function Banner() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
        
    return (
            <BannerContainer>
                <BannerImage src="/images/banner/ave-bench.webp"/>
                <BannerContent>
                    <Typography variant="h6"> Check it Out </Typography>
                    <BannerTitle variant="h2">
                        New New
                    </BannerTitle>
                    <BannerDescription variant="subtitle">
                        Whats up
                    </BannerDescription>
                    <BannerShopButton color="secondary">Shop Now</BannerShopButton>
                </BannerContent>
            </BannerContainer>
        )
}