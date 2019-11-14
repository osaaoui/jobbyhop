import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/*Column 1*/}
            <div className="col-md-3 col-sm-6">
              <h4>Candidats</h4>
              <ul className="list-unstyled">
                <li>Offres</li>
                <li>Poster CV</li>
                <li>Catégories</li>
                <li>Profils</li>
              </ul>
            </div>
            {/*Column 2*/}
            <div className="col-md-3 col-sm-6">
              <h4>Employeurs</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Nouveaux Postes</a>
                </li>
                <li>
                  <a href="/">Listing Offres</a>
                </li>
                <li>
                  <a href="/">Catégories</a>
                </li>
                <li>
                  <a href="/">Forfaits</a>
                </li>
              </ul>
            </div>
            {/*Column 3*/}
            <div className="col-md-3 col-sm-6">
              <h4>Catégories Emplois</h4>
              <ul className="list-unstyled">
                <li>Cafés / Restaurant</li>
                <li>Hotellerie</li>
                <li>Gardiennage</li>
                <li>Magasins</li>
              </ul>
            </div>
            {/*Column 4*/}
            <div className="col-md-3 col-sm-6">
              <h4>Contactez-nous</h4>
              <ul className="list-unstyled">
                <li>Par courriel</li>
                <li>Par téléphone</li>
                <li>Adresse</li>
                <li>A propos</li>
              </ul>
            </div>
          </div>
          {/*Footer Bottom*/}
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} Jobby-Hop - All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
  }

  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }

  ul li a {
    color: var(--mainGrey);
  }

  ul li a:hover {
    color: var(--mainLightGrey);
  }
`;
