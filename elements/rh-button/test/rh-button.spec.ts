import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhButton } from 'rh-button';

const element = html`
  <rh-button></rh-button>
`;

describe('<rh-button>', function() {
  it('should upgrade', async function() {
    const el = await createFixture<RhButton>(element);
    const klass = customElements.get('rh-button');
    expect(el)
      .to.be.an.instanceOf(klass)
      .and
      .to.be.an.instanceOf(RhButton);
  });
});
