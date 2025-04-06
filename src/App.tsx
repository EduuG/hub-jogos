import {StyledButton} from "./components/Button.style.tsx";
import {StyledHeader, StyledFooter, MainContent} from "./components/PageLayout.style.tsx";
import {Wrapper} from "./components/Wrapper.style.tsx";
import {StyledCategory, Featured} from "./components/Sections.style.tsx";
import GameCard from "./components/GameCard.tsx";
import {Game} from "./models/Game.tsx";
import Category from "./components/Category.tsx";
import {useState} from "react";
import {GameCategories} from "./enums/GameCategories.ts";

function App() {
    const [games, setGames] = useState<Game[]>([]);

    useState(() => {
        fetch("/data/games.json").then((response) => response.json()).then((data) => setGames(data.games));
        fetch("/data/games.json").then((response) => response.json()).then((data) => setCategories(data.categories));
    })

    return (
        <>
            <Wrapper>
                <StyledHeader>
                    <p>pvp games</p>
                    <div>
                        <StyledButton color={"secondary"}>Acessar conta</StyledButton>
                        <StyledButton>Cadastre-se</StyledButton>
                    </div>
                </StyledHeader>

                <MainContent>
                    <Featured>
                        <div>
                            <GameCard title={"Sonic"} playersCount={200} categoryId={GameCategories.RPG}/>
                            <GameCard title={"Sonic"} playersCount={200} categoryId={GameCategories.RPG}/>
                            <GameCard title={"Sonic"} playersCount={200} categoryId={GameCategories.RPG}/>
                        </div>
                    </Featured>

                    <Category title={"Jogos mais jogados"} games={[...games].sort((a, b) => b.playersCount - a.playersCount)} />
                    <Category title={"Jogos de cartas"} games={games.filter(game => game.categoryId === GameCategories.Cartas)} />
                    <Category title={"Jogos de estratégia"} games={games.filter(game => game.categoryId === GameCategories.Estrategia)} />
                </MainContent>

                <StyledFooter>
                    footer
                </StyledFooter>
            </Wrapper>
        </>
    )
}

export default App
