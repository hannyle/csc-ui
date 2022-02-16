import { Component, Host, h } from '@stencil/core';
/**
 * Component which fills the remaining space within a flex container
 *
 * @group Layout
 */
@Component({
  tag: 'c-flex',
  styleUrl: 'c-flex.css',
  shadow: true,
})
export class CFlex {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
