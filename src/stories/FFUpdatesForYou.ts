import { html } from 'lit-html';
import { applyPolyfills, defineCustomElements } from '../../loader'

applyPolyfills().then(() => {
  defineCustomElements()
})

export const FFUpdatesForYou = () => {

  return html`
    <div style="width: 300px; border: 1px grey dashed;">
      <ff-updates-for-you />
    </div>
  `;
};
