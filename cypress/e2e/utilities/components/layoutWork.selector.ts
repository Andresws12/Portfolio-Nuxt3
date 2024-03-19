import { cySelector } from '../utils';

const baseLayoutWork = 'layout-work';

const layoutWork = cySelector(baseLayoutWork);
const layoutWorkBusinessData = cySelector(`${baseLayoutWork}-business-data`);
const layoutWorkBusinessImage = cySelector(`${baseLayoutWork}-business-image`);
const layoutWorkBusinessName = cySelector(`${baseLayoutWork}-business-name`);
const layoutWorkBusinessRole = cySelector(`${baseLayoutWork}-business-role`);
const layoutWorkBusinessPeriod = cySelector(
  `${baseLayoutWork}-business-period`
);
const layoutWorkBusinessTechnologyVue = cySelector(
  `${baseLayoutWork}-technology-vue`
);
const layoutWorkBusinessTechnologyAngular = cySelector(
  `${baseLayoutWork}-technology-angular`
);
const layoutWorkBusinessTechnologyNet = cySelector(
  `${baseLayoutWork}-technology-net`
);
const layoutWorkBusinessTechnologyReact = cySelector(
  `${baseLayoutWork}-technology-react`
);
const layoutWorkBusinessTechnologyJquery = cySelector(
  `${baseLayoutWork}-technology-jquery`
);
const layoutWorkBusinessTechnologyTypescript = cySelector(
  `${baseLayoutWork}-technology-typescript`
);
const layoutWorkBusinessTechnologyPhp = cySelector(
  `${baseLayoutWork}-technology-php`
);
const layoutWorkPersonalData = cySelector(`${baseLayoutWork}-personal-data`);

export const layoutWorkSelectors = {
  layoutWork,
  layoutWorkBusinessData,
  layoutWorkBusinessImage,
  layoutWorkBusinessName,
  layoutWorkBusinessRole,
  layoutWorkBusinessPeriod,
  layoutWorkBusinessTechnologyVue,
  layoutWorkBusinessTechnologyAngular,
  layoutWorkBusinessTechnologyNet,
  layoutWorkBusinessTechnologyReact,
  layoutWorkBusinessTechnologyJquery,
  layoutWorkBusinessTechnologyTypescript,
  layoutWorkBusinessTechnologyPhp,
  layoutWorkPersonalData,
};
