import { Component, Host, h } from '@stencil/core'

@Component({
  tag: 'ff-button',
  styleUrl: 'ff-button.scss',
  shadow: true,
})
export class FFButton {

  render() {
    return (
      <Host>
        <button class="">
          <slot />
        </button>
      </Host>
    );
  }

}
