import {css} from 'lit';
export const styles = css`:host {
  display: block;
}

#container {
  position: relative;
}

#container:not(:is(.visible)) {
  display: none;
}

#container.visible {
  background-color: var(--rh-color-surface-lightest, #FFFFFF);
}

:host(:not([type="fixed-width"])) #sections {
  display: grid;
  grid-template-columns: var(--rh-secondary-nav-menu-section-grid, repeat(auto-fit, minmax(15.5em, 1fr)));
  grid-template-rows: auto;
  gap: var(--rh-secondary-nav-menu-section-grid-gap, 2em);
}

#sections {
  padding: 1.5em
}

::slotted(:is(ul, ol)) {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75em;
}

@media screen and (min-width: 992px) {
  #container.visible {
    position: absolute;
    left: 0;
    right: 0;
    top: var(--_nav-height);
    padding: 4em 2em 3em;
    box-shadow: var(--rh-box-shadow-sm, 0 0.125em 0.25em 0 rgba(21, 21, 21, 0.2));
    z-index: -1;
  }

  :host([layout="fixed-width"]) #container {
    position: absolute;
    top: var(--_nav-height);
    left: auto;
    right: auto;
    bottom: auto;
    margin-top: 0;
    padding: 0;
  }

  #sections {
    padding: 0; 
  }

  :host([layout="fixed-width"]) #sections {
    padding: 2em;
  }

  #sections {
    max-width: var(--rh-secondary-nav-menu-content-max-width, 1136px);
    margin: auto;
  }
}

@media screen and (min-width: 1200px) {
  #container.visible {
    padding: 3em 2em 3em;
  }
}

@media screen and (min-width: 1440px) {
  #container.visible {
    padding: 3em 4em 3em;
  }
}

@media screen and (min-width: 1600px) {
  #full-width {
    margin: auto;
  }
}
`;
export default styles;
