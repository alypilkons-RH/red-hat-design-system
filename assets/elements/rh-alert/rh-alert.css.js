import {css} from 'lit';
export const styles = css`:host {
  --BackgroundColor: #f2f9f9;
  --BorderWidth: 3px;
  --BorderColor: #009596;
  --BorderStyle: solid;
  --Padding: 16px;
  --Gap: 4px;
  --Header--MarginBottom: var(--rh-alert--Gap, 4px);
  --headerActions--MarginRight: 4px;
  --header--Color: #003737;
  --header--FontSize: 14px;
  --header--FontWeight: 500;
  --icon--Color: #009596;
  --icon--Width: var(--rh-alert__icon--Size, 24px);
  --icon--Height: var(--rh-alert__icon--Size, 24px);
  --description--FontSize: 14px;
  --close-button--Color: #6a6e73;
  --close-button--BackgroundColor: transparent;
  --close-button--Border: none;
  --close-button--Height: var(--rh-alert__close-button--Size, 24px);
  --close-button--Width: var(--rh-alert__close-button--Size, 24px);
  --close-button--hover--Color: #151515;
  --actions--MarginTop: var(--rh-alert--Padding, 16px);
  --actions--Gap: 24px;
  --actions-item--MarginRight: var(--rh-alert__actions--Gap, 24px);
  --actions-item--Padding: 0;
  --actions-item--border: none;
  --actions-item--BackgroundColor: transparent;
  --actions-item--Color: #06c;
  --actions-item--FontSize: 14px;
  --actions-item--hover--Color: #004080;
  --actions-item--hover--TextDecoration: underline;
  display: block;
}

:host([hidden]) {
  display: none;
}

:host([state='info']) {
  --BorderColor: #2b9af3;
  --icon--Color: #2b9af3;
  --header--Color: #002952;
  --BackgroundColor: #e7f1fa;
}

:host([state='success']) {
  --BorderColor: #3e8635;
  --icon--Color: #3e8635;
  --header--Color: #1e4f18;
  --BackgroundColor: #f3faf2;
}

:host([state='warning']) {
  --BorderColor: #f0ab00;
  --icon--Color: #f0ab00;
  --header--Color: #795600;
  --BackgroundColor: #fdf7e7;
}

:host([state='danger']) {
  --BorderColor: #c9190b;
  --icon--Color: #c9190b;
  --header--Color: #7d1007;
  --BackgroundColor: #faeae8;
}

:host([toast]) {
  --BackgroundColor: #fff; 
}

#container {
  border-width: var(--BorderWidth);
  border-color: var(--BorderColor);
  border-style: var(--BorderStyle);
  background-color: var(--BackgroundColor);
  padding: var(--Padding);
  display: grid;
  grid-template-columns: min-content 1fr;
  gap: var(--Gap);
}

#left-column {
  display: inline-block;
  vertical-align: top;
}

#middle-column {
  display: inline-block;
  vertical-align: top;
}

header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: var(--Header--MarginBottom);
}

header ::slotted(:is(h1,h2,h3,h4,h5,h6)) {
  margin: 0;
}

#header-actions {
  margin-right: var(--headerActions--MarginRight);
}

#header {
  font-size: var(--header--FontSize);
  color: var(--header--Color);
  font-weight: var(--header--FontWeight);
  flex: 1 1 auto;
}

#icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--icon--Width);
  height: var(--icon--Height);
  color: var(--icon--Color);
}

#close-button {
  color: var(--close-button--Color);
  background-color: var(--close-button--BackgroundColor);
  border: var(--close-button--Border);
  width: var(--close-button--Width);
  height: var(--close-button--Height);
  cursor: pointer;
}

#close-button:hover {
  color: var(---close-button--hover--Color);
}

#close-button:hover {
  color: var(--close-button--hover--Color);
}

#description {
  font-size: var(--description--FontSize);
}

footer {
  margin-top: var(--actions--MarginTop);
}

footer ::slotted([slot="actions"]) {
  margin-right: var(--actions-item--MarginRight);
  padding: var(--actions-item--Padding);
  border: var(--actions-item--border);
  background-color: var(--actions-item--BackgroundColor);
  color: var(--actions-item--Color);
  font-size: var(--actions-item--FontSize);
}

/* TODO: separate focus and hover styles */
footer ::slotted([slot="actions"]:hover),
footer ::slotted([slot="actions"]:focus) {
  text-decoration: var(--actions-item--hover--TextDecoration);
  color: var(--actions-item--hover--Color);
}

footer ::slotted([slot="actions"]) {
  margin-right: var(--actions-item--MarginRight) !important;
}

:host(:not([variant])) #container,
:host([toast]) #container {
  border-left: 0;
  border-bottom: none;
  border-right: 0;
}

:host([toast]) #container {
  box-shadow: 0 5px 15px #0003;
}
`;
export default styles;