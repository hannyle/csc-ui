import { Component, Host, h } from '@stencil/core';
/**
 * Spacer component for flex containers
 * @group Layout
 */
@Component({
  tag: 'c-spacer',
  styleUrl: 'spacer.css',
  shadow: true,
})
export class Spacer {
  render() {
    return <Host></Host>;
  }
}
