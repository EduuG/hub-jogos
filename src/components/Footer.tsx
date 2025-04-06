import {Divider, FooterSection, StyledFooter} from "./PageLayout.style.tsx";
import {SiFacebook, SiInstagram} from "@icons-pack/react-simple-icons";
import {FooterLinks, FooterSocialMedia, RatingInfo} from "./Footer.style.tsx";
import {theme} from "../Theme.tsx";

const Footer = () => {
    return (
        <StyledFooter>
            <FooterSection>
                <h1>LOGO</h1>
                <div style={{display: "flex", gap: "10px"}}>
                    <FooterSocialMedia>
                        <SiInstagram/>
                    </FooterSocialMedia>

                    <FooterSocialMedia>
                        <SiFacebook/>
                    </FooterSocialMedia>
                </div>
            </FooterSection>

            <Divider/>

            <FooterSection>
                <div style={{display: "flex", gap: "40px"}}>
                    <div>
                        <h3>Principal</h3>
                        <FooterLinks>
                            <a href={"#"}>Item do menu</a>
                            <a href={"#"}>Item do menu</a>
                        </FooterLinks>
                    </div>

                    <div>
                        <h3>Mais</h3>
                        <FooterLinks>
                            <a href={"#"}>Item do menu</a>
                            <a href={"#"}>Item do menu</a>
                        </FooterLinks>
                    </div>

                    <div>
                        <h3>Suporte</h3>
                        <FooterLinks>
                            <a href={"#"}>Item do menu</a>
                            <a href={"#"}>Item do menu</a>
                        </FooterLinks>
                    </div>
                </div>

                <RatingInfo>
                    <div>
                        <img src="/images/rating-12.svg" alt="Classificação Etária"/>
                    </div>

                    <div>
                        <p>Violência / Linguajar inapropriado</p>
                        <Divider/>
                        <p>Compras online</p>
                    </div>
                </RatingInfo>
            </FooterSection>

            <Divider/>

            <FooterSection>
                <div>
                    <p>Todos os direitos reservados</p>

                    <div style={{display: "flex", gap: "15px", marginTop: "10px"}}>
                        <a href={"#"}>Termos de serviço</a>
                        <a href={"#"}>Política de privacidade</a>
                    </div>
                </div>

                <div>
                    <p>Feito por: <span style={{
                        color: `${theme.colors.text.primary}`,
                        textDecoration: 'underline',
                        textDecorationThickness: '2px',
                        textDecorationColor: `${theme.colors.text.primary}`,
                        fontWeight: 'bold',
                        textUnderlineOffset: '3px'
                    }}>Eduardo Guimarães</span></p>
                </div>
            </FooterSection>
        </StyledFooter>
    )
}

export default Footer;