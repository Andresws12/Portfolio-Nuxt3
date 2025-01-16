import { cySelector } from "../utils";

const baseButtonContact = "button-contact";

const buttonContact = cySelector(baseButtonContact);
const buttonContactGithub = cySelector(`${baseButtonContact}-github`);
const buttonContactLinkedin = cySelector(`${baseButtonContact}-linkedin`);
const buttonContactGmail = cySelector(`${baseButtonContact}-gmail`);

export const buttonContactSelectors = {
  buttonContact,
  buttonContactGithub,
  buttonContactLinkedin,
  buttonContactGmail,
};
