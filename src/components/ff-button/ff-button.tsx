import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ff-button',
  styleUrl: 'ff-button.scss',
  shadow: true,
})
export class FButton {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
