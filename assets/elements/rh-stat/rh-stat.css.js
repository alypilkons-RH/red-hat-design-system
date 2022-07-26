import {css} from 'lit';
export const styles = css`:host([on='dark']) {
    --accent-color: var(--rh-color-brand-red-on-dark, #ff3333);
}

:host {
    display: flex;
    --accent-color: var(--rh-color-brand-red, #ee0000);
    --red-hat-text:  var(--rh-font-family-text, "RedHatText", "Overpass", Helvetica, Arial, sans-serif);
    --red-hat-text-display: var(--rh-font-family-heading, "RedHatDisplay", "Overpass", Helvetica, Arial, sans-serif);
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: space-around;
}

::slotted(*),
slot:not(:empty){
    display: block;
    text-align: center;
}

slot[name="icon"] {
    display: none;
}

slot[name="icon"].hasIcon {
    order: 1;
    display: block;
    color: black;
    margin-bottom: 16px;
} 

pfe-icon[size="md"],
::slotted(pfe-icon[size="md"]) {
    --pfe-icon--size: var(--rh-font-size-heading-xl, 2.5rem);
}

::slotted([slot="title"]) {
    order: 1;
    color: var(--accent-color);
    font-size: var(--rh-font-size-body-text-xl, 1.25rem);
    font-family: var(--red-hat-text-display);
    font-weight: var(--rh-font-weight-regular, 400);
    text-transform: uppercase;
}

slot[name="statistic"] {
    order: 2;
    color: var(--accent-color);
    font-size: var(--rh-font-size-heading-lg, 2.25rem);
    font-weight: var(--rh-font-weight-regular, 300);
    font-family: var(--red-hat-text-display);
}

slot[name="description"] {
    order: 3;
    font-size: var(--rh-font-size-text-xl, 1.125rem);
    font-family: var(--red-hat-text);
    margin-top: var(--rh-space-sm, 0.5rem);
}


::slotted([slot="cta"]) {
    order: 4;
    font-size: var(--rh-font-size-text-xl, 1.125rem);
    font-family: var(--red-hat-text-display);
    margin-top: var(--rh-space-lg, 1.5rem);
}

:host([size='large']) slot[name="statistic"],
:host([size='large']) ::slotted([slot="statistic"]) {
    font-size: var(--rh-font-size-heading-2xl, 3rem);
}

:host([is-mobile]) slot[name='description'],
:host([is-mobile]) ::slotted([slot="description"]) {
    font-size: var(--rh-font-size-text-lg, 1rem);
}

:host([is-mobile]) slot[name='statistic'],
:host([is-mobile]) ::slotted([slot="statistic"]) {
    font-size: var(--pf-global--spacer--lg, 32px);
}

:host([top='statistic']) slot[name="statistic"],
:host([top='statistic']) ::slotted([slot="statistic"]) {
    order: 1;
}

:host([top='statistic']) ::slotted([slot="title"]) {
    order: 2;
}

`;
export default styles;
