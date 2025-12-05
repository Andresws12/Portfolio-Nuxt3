import { cySelector } from "../utils";

const baseDescription = "home-description";

const homeDescription = cySelector(baseDescription);
const homeDescriptionImage = cySelector(`${baseDescription}-image`);
const homeDescriptionData = cySelector(`${baseDescription}-data`);
const homeDescriptionDataTitle = cySelector(`${baseDescription}-data-title`);
const homeDescriptionDataSubtitle = cySelector(
  `${baseDescription}-data-subtitle`,
);
const homeDescriptionButtonContact = cySelector(
  `${baseDescription}-button-contact`,
);

const baseExperience = "home-experience";

const homeExperience = cySelector(baseExperience);
const homeExperienceTitle = cySelector(`${baseExperience}-title`);
const homeExperienceCardIskaypet = cySelector(
  `${baseExperience}-card-iskaypet`,
);
const homeExperienceCardCloudappi = cySelector(
  `${baseExperience}-card-cloudappi`,
);
const homeExperienceCardStar = cySelector(`${baseExperience}-card-star`);
const homeExperienceCardPantallazo = cySelector(
  `${baseExperience}-card-pantallazo`,
);

export const homeDescriptionSelectors = {
  homeDescription,
  homeDescriptionImage,
  homeDescriptionData,
  homeDescriptionDataTitle,
  homeDescriptionDataSubtitle,
  homeDescriptionButtonContact,
};

export const homeExperienceSelectors = {
  homeExperience,
  homeExperienceTitle,
  homeExperienceCardStar,
  homeExperienceCardIskaypet,
  homeExperienceCardCloudappi,
  homeExperienceCardPantallazo,
};
