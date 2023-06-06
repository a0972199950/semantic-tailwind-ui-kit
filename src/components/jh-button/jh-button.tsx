import { Component, Host, h, Prop } from '@stencil/core'
// import { SemanticCOLORS, SemanticSIZES } from 'semantic-ui-react'

@Component({
  tag: 'jh-button',
  styleUrls: [
    '../../semantic/dist/components/button.min.css',
    'jh-button.scss'
  ],
  shadow: true,
})
export class JHButton {
  @Prop () type?: any | 'primary' | 'secondary' = 'primary'
  @Prop () size?: any = 'medium'

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
