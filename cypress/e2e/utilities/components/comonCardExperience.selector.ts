import { cySelector } from '../utils';

const baseCommonCardExperience = 'common-card-experience';

const commonCardExperience = cySelector(baseCommonCardExperience);
const commonCardExperienceImageContainer = cySelector(
  `${baseCommonCardExperience}-image-container`
);
const commonCardExperienceWorkImage = cySelector(
  `${baseCommonCardExperience}-work-image`
);
const commonCardExperienceActiveLabel = cySelector(
  `${baseCommonCardExperience}-active-label`
);
const commonCardExperienceTextContainer = cySelector(
  `${baseCommonCardExperience}-text-container`
);
const commonCardExperienceTechnologiesContainer = cySelector(
  `${baseCommonCardExperience}-technologies-container`
);
const commonCardExperienceTechVue = cySelector(
  `${baseCommonCardExperience}-tech-vue`
);
const commonCardExperienceTechAngular = cySelector(
  `${baseCommonCardExperience}-tech-angular`
);
const commonCardExperienceTechNet = cySelector(
  `${baseCommonCardExperience}-tech-net`
);
const commonCardExperienceTechReact = cySelector(
  `${baseCommonCardExperience}-tech-react`
);
const commonCardExperienceTechJquery = cySelector(
  `${baseCommonCardExperience}-tech-jquery`
);
const commonCardExperienceTechTypescript = cySelector(
  `${baseCommonCardExperience}-tech-typescript`
);
const commonCardExperienceTechPhp = cySelector(
  `${baseCommonCardExperience}-tech-php`
);
const commonCardExperienceButton = cySelector(
  `${baseCommonCardExperience}-button`
);

export const commonCardExperienceSelectors = {
  commonCardExperience,
  commonCardExperienceImageContainer,
  commonCardExperienceWorkImage,
  commonCardExperienceActiveLabel,
  commonCardExperienceTextContainer,
  commonCardExperienceTechnologiesContainer,
  commonCardExperienceTechVue,
  commonCardExperienceTechAngular,
  commonCardExperienceTechNet,
  commonCardExperienceTechReact,
  commonCardExperienceTechJquery,
  commonCardExperienceTechTypescript,
  commonCardExperienceTechPhp,
  commonCardExperienceButton,
};
