import { StyledButton } from "./components/Button.style.tsx";
import { MainContent, StyledHeader } from "./components/PageLayout.style.tsx";
import { Wrapper } from "./components/Wrapper.style.tsx";
import { GameModel } from "./models/GameModel.ts";
import Category from "./components/Category.tsx";
import { useEffect, useState } from "react";
import { CategoriesEnum } from "./enums/CategoriesEnum.ts";
import Featured from "./components/Featured.tsx";
import Footer from "./components/Footer.tsx";
import { useMediaQuery } from "react-responsive";
import { LogIn } from "lucide-react";
import RewardCard from "./components/RewardCard.tsx";
import {CategoryModel} from "./models/CategoryModel.ts";

function App() {
  const [games, setGames] = useState<GameModel[]>([]);
  const [categories, setCategories] = useState<CategoryModel[]>([]);

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    fetch("data/games.json")
      .then((response) => response.json())
      .then((data) => setGames(data.games));

    fetch("data/categories.json")
      .then((response) => response.json())
      .then((data) => setCategories(data.categories));
  }, []);

  return (
    <>
      <Wrapper>
        <StyledHeader>
          <h1>LOGO</h1>

          <div style={{ display: "flex", gap: "15px" }}>
            {!isMobile &&
              <StyledButton color={"secondary"}>Acessar conta</StyledButton>
            }
            <StyledButton>{!isMobile && `Cadastre-se`} <LogIn /></StyledButton>
          </div>
        </StyledHeader>

        <MainContent>
          <Featured games={[...games].slice(0, 3)} categories={categories} />

          <Category title={"Jogos mais jogados"} games={games} categories={categories} sortByPlayers={true} showBackground={true} />

          <RewardCard />

          <Category games={games} categories={categories} sortByCategory={CategoriesEnum.Plataforma} size={"medium"} hideShowMore />
          <Category title={"Jogos de cartas"} games={games} categories={categories} sortByPlayers={true} sortByCategory={CategoriesEnum.Cartas}
            showBackground={true} />
          <Category games={games} categories={categories} sortByCategory={CategoriesEnum.Tiro} size={"large"} hideShowMore />
          <Category title={"Jogos de estratégia"} games={games} categories={categories} sortByPlayers={true} sortByCategory={CategoriesEnum.Estrategia}
            showBackground={true} />
        </MainContent>

        <Footer />
      </Wrapper>
    </>
  )
}

export default App
