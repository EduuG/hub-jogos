import {StyledButton} from "./components/Button.style.tsx";
import {MainContent, StyledFooter, StyledHeader} from "./components/PageLayout.style.tsx";
import {Wrapper} from "./components/Wrapper.style.tsx";
import {Game} from "./models/Game.tsx";
import Category from "./components/Category.tsx";
import {useEffect, useState} from "react";
import {CategoriesEnum} from "./enums/CategoriesEnum.ts";
import Featured from "./components/Featured.tsx";

function App() {
  const [games, setGames] = useState<Game[]>([]);
  const [categories, setCategories] = useState<[]>([]);

  useEffect(() => {
    fetch("/data/games.json")
        .then((response) => response.json())
        .then((data) => setGames(data.games));

    fetch("/data/categories.json")
        .then((response) => response.json())
        .then((data) => setCategories(data.categories));
  }, []);

  return (
    <>
      <Wrapper>
        <StyledHeader>
          <p>pvp games</p>

          <div style={{ display: "flex", gap: "15px" }}>
            <StyledButton color={"secondary"}>Acessar conta</StyledButton>
            <StyledButton>Cadastre-se</StyledButton>
          </div>
        </StyledHeader>

        <MainContent>
          <Featured games={[...games].slice(0, 3)} categories={categories}/>

          <Category title={"Jogos mais jogados"} games={games} sortByPlayers={true} showBackground={true} />
          <Category title={"Jogos de cartas"} games={games} sortByCategory={CategoriesEnum.Cartas} showBackground={true} />
          <Category games={games} sortByCategory={CategoriesEnum.Plataforma} size={"large"} hideShowMore />
          <Category title={"Jogos de estratégia"} games={games} sortByCategory={CategoriesEnum.Estrategia} showBackground={true} />
        </MainContent>

        <StyledFooter>
          footer
        </StyledFooter>
      </Wrapper>
    </>
  )
}

export default App
