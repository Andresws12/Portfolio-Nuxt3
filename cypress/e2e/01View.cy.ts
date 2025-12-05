import {
  homeDescriptionSelectors,
  homeExperienceSelectors,
} from "./utilities/home/home.selectors";

import { commonCardExperienceSelectors } from "./utilities/components/comonCardExperience.selector";
import { buttonContactSelectors } from "./utilities/components/buttonContact.selector";

describe("E2E Tests", () => {
  beforeEach(() => {
    cy.visit("/"); // Replace with the URL of your application
  });

  it("should have correct home description", () => {
    cy.get(homeDescriptionSelectors.homeDescriptionDataTitle).should(
      "contain",
      "Andrés Felipe Hernández Galindo",
    );
    cy.get(homeDescriptionSelectors.homeDescriptionDataSubtitle).should(
      "contain",
      "Programador Front-end",
    );
  });

  it("should have correct contact buttons", () => {
    cy.get(buttonContactSelectors.buttonContactGithub)
      .should("have.attr", "href", "https://github.com/Andresws12")
      .should("have.attr", "target", "_blank");
    cy.get(buttonContactSelectors.buttonContactLinkedin)
      .should(
        "have.attr",
        "href",
        "https://www.linkedin.com/in/andreshernandez1995/",
      )
      .should("have.attr", "target", "_blank");
    cy.get(buttonContactSelectors.buttonContactGmail)
      .should("have.attr", "href", "mailto:andreshernandez12.1995@gmail.com")
      .should("have.attr", "target", "_blank");
  });

  it("should have correct home experience cards", () => {
    cy.get(homeExperienceSelectors.homeExperienceCardIskaypet).should("exist");
    cy.get(homeExperienceSelectors.homeExperienceCardCloudappi).should("exist");
    cy.get(homeExperienceSelectors.homeExperienceCardStar).should("exist");
    cy.get(homeExperienceSelectors.homeExperienceCardPantallazo).should(
      "exist",
    );
  });

  it("should have correct technologies in experience cards", () => {
    cy.get(commonCardExperienceSelectors.commonCardExperienceTechVue).should(
      "exist",
    );
    cy.get(
      commonCardExperienceSelectors.commonCardExperienceTechAngular,
    ).should("exist");
    cy.get(commonCardExperienceSelectors.commonCardExperienceTechNet).should(
      "exist",
    );
    cy.get(commonCardExperienceSelectors.commonCardExperienceTechReact).should(
      "exist",
    );
    cy.get(commonCardExperienceSelectors.commonCardExperienceTechJquery).should(
      "exist",
    );
    cy.get(
      commonCardExperienceSelectors.commonCardExperienceTechTypescript,
    ).should("exist");
    cy.get(commonCardExperienceSelectors.commonCardExperienceTechPhp).should(
      "exist",
    );
  });
});
