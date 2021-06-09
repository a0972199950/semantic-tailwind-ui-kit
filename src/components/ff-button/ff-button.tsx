import { Component, Host, h, Prop } from '@stencil/core'
import { SemanticCOLORS, SemanticSIZES } from 'semantic-ui-react'

@Component({
  tag: 'ff-button',
  styleUrl: 'ff-button.scss',
  shadow: true,
})
export class FFButton {
  @Prop () type?: SemanticCOLORS | 'primary' | 'secondary' = 'primary'
  @Prop () size?: SemanticSIZES = 'medium'

  render() {
    return (
      <Host>
        <button class={`ui button ${this.type} ${this.size}`}>
          <slot />
        </button>
      </Host>
    );
  }

}
