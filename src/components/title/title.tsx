import { Component, Host, h } from '@stencil/core';

/**
 * @parent None
 * @slot - Default slot
 */

@Component({
  tag: 'c-title',
  styleUrl: 'title.css',
  shadow: true,
})
export class Title {
  render() {
    return (
      <Host>
        <slot></slot>
        <div class="title-underline"></div>
      </Host>
    );
  }
}
