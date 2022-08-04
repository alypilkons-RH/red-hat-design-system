import {css} from 'lit';
export const styles = css`:host {
  display: block;
}

::slotted([slot="header"]) {
  padding: 0;
}

::slotted([slot="links"]:is(ul, ol)) {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75em;
}

::slotted([slot="cta"]) {
  padding: 1.5em 0 0;
}

::slotted([slot="cta"]:last-of-type) {
  padding: 1.5em 0;
}


@media screen and (min-width: 992px) {
  ::slotted([slot="header"]) {
    padding: 0;
  }

  ::slotted([slot="links"]) {
    padding: 0;
    margin: 0;
  }

}`;
export default styles;
