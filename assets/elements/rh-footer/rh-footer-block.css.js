import {css} from 'lit';
export const styles = css`:host {
  display: block;
  position: relative;
}

/** Add margin to blocks that aren't first in the sidebar. */
:host(:not(:first-of-type)) {
  margin-top: 1.5em;
}
/** Add the separator to blocks in the middle */
:host(:not(:last-of-type, :first-of-type)) {
  border-bottom: 1px solid var(--_border-color);
  padding-bottom: 1.5em;
}

::slotted(*) {
  color: #fff;
  font-size: 0.875em;
  text-decoration: none;
}

::slotted(:is(h1, h2, h3, h4, h5)) {
  font-weight: 500 !important;
  font-size: 0.875em !important;
  margin-block-start: 0px !important;
  margin-block-end: 1em !important;
}

.content ::slotted(*) {
  color: #d2d2d2;
  font-family: 'Red Hat Text', 'RedHatText', 'Overpass', Overpass, Arial, sans-serif;
  font-weight: 400;
}
`;
export default styles;