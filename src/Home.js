import TopBanner from "./component/home/TopBanner";
import Description from "./component/home/Description";
import Carousel from "./component/carousel/Carousel";
import FactCard from "./component/home/FactCard";
import React, {useState} from "react";
import History from "./component/home/History";
import CarouselItem from "./component/carousel/CarouselItem";

const Home = () => {
    const [factText, setFactText] = useState("Hello World.");
    const getRandomFact = (currentFact) => {
        const facts = [
            "Favourite Colour: Blue",
            "Age: 21",
            "Favourite Band: Radiohead",
            "Favourite Language: Python",
            "Favourite Book: To Kill a Mockingbird",
            "Favourite Film: The Godfather Part II"
        ];

        let newFact = facts[Math.floor(Math.random() * facts.length)];
        if (newFact === factText) {
            while (true) {
                newFact = facts[Math.floor(Math.random() * facts.length)]
                if (newFact !== factText) {
                    break;
                }
            }
        }

        return newFact;
    }

    return (
        <>
            <TopBanner/>
            <Description/>
            <History />
            <div className={'container mt-4'}>
                <h2>Get to know Mii</h2>
                <div className={'d-flex flex-wrap align-items-center justify-content-evenly'}>
                    <div className={'p-2'}>
                        <Carousel>
                            <CarouselItem image={'mii.png'} isActive={true} />
                            <CarouselItem image={'memoji.png'} />
                            <CarouselItem image={'bitmoji.png'} />
                        </Carousel>
                    </div>
                    <div className={'p-2'}>
                        <FactCard className={'mb-3 fact-card text-center'} text={factText} />
                        <button
                            className={'btn text-primary'}
                            onClick={() => setFactText(getRandomFact(factText))}
                        >
                            <i className="bi bi-arrow-clockwise"/> Get New Fact
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home