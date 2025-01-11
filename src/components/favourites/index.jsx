import {
    GirlsVibing,
    GirlWithGlassesVibing,
    RightArrow,
} from "../../assets/svg/export";
import {
    FavouritesSection,
    FavouritesTitle,
    ArrowImage,
    Card,
    CardButton,
    CardDescription,
    CardImage,
    Cards,
    DescriptionSubTitle,
    DescriptionText,
    DescriptionTitle,
    TitleH3,
} from "./styles";

export default function Favourites() {
    return (
        <FavouritesSection>
            <FavouritesTitle>
                <TitleH3>
                    Young's Favourite
                </TitleH3>
            </FavouritesTitle>
            <Cards>
                <Card>
                    <CardImage src={GirlsVibing} alt="girl-putting-cloath" />
                    <CardDescription>
                        <DescriptionText>
                            <DescriptionTitle>Trending on instagram</DescriptionTitle>
                            <DescriptionSubTitle>Explore Now!</DescriptionSubTitle>
                        </DescriptionText>
                        <CardButton>
                            <ArrowImage src={RightArrow} alt="right-arrow" />
                        </CardButton>
                    </CardDescription>
                </Card>
                <Card>
                    <CardImage src={GirlWithGlassesVibing} alt="girl-using-phone" />
                    <CardDescription>
                        <DescriptionText>
                            <DescriptionTitle>All Under $40</DescriptionTitle>
                            <DescriptionSubTitle>Explore Now!</DescriptionSubTitle>
                        </DescriptionText>
                        <CardButton>
                            <ArrowImage src={RightArrow} alt="right-arrow" />
                        </CardButton>
                    </CardDescription>
                </Card>
            </Cards>
        </FavouritesSection>
    );
}
