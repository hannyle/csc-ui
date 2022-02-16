import { Component, Host, h, Prop } from '@stencil/core';
/**
 * Container component for holding current page content
 * @group Layout
 */
@Component({
  tag: 'c-container',
  styleUrl: 'c-container.css',
  shadow: true,
})
export class CContainer {
  @Prop() width: number;

  render() {
    let style = {};
    if (this.width > 0) {
      style = { 'max-width': `${this.width}px` };
    }

    return (
      <Host style={style}>
        <slot></slot>
      </Host>
    );
  }
}
