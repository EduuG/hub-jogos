import { StyledRewardCard } from "./RewardCard.style";
import {MoveRight} from "lucide-react";
import {theme} from "../Theme.tsx";
import {useIsMobile} from "../utils/isMobile.ts";

const RewardCard = () => {
  const useIsMobileCheck = (customSize: number) => useIsMobile(customSize);

  return (
    <StyledRewardCard>
      <div style={{ display: "flex", alignItems: "center", paddingInline: "60px", gap: "30px", width: "550px" }}>
        {!useIsMobileCheck(472) &&
          <img src={"images/RewardCoin.png"} alt={"Imagem de uma moeda ilustrativa"} style={{ width: "150px", height: "auto" }}/>
        }

        <div style={{ display: "flex", flexDirection: "column", gap: "20px", minWidth: "200px", flexShrink: 1 }}>
          <div style={{ textWrap: "wrap" }}>
            <h1 style={{ fontWeight: "normal" }}>Ganhe <span style={{ color: "#3DC1EC", fontWeight: "bold" }}>100</span> moedas grátis</h1>
            <h4 style={{ fontWeight: "normal" }}>Ao realizar seu cadastro!</h4>
          </div>

          <a href={"#"} style={{ display: "flex", alignItems: "center", gap: "10px", color: theme.palette.primary, width: "fit-content" }}>Cadastre-se agora <MoveRight/></a>
        </div>
      </div>

      {!useIsMobileCheck(1100) &&
        <img src={"images/RewardImage.png"} alt={"Exemplo de jogos"} style={{ width: "100%", height: "auto", maxWidth: "850px", minWidth: "200px"}} />
      }
    </StyledRewardCard>
  )
}

export default RewardCard;
