import { Component, Host, h, Prop, getAssetPath } from '@stencil/core';

export type CardBackground = 'puhti' | 'mahti' | 'allas';
/**
 * @group Containers
 * @slot - Card contents
 */
@Component({
  tag: 'c-card',
  styleUrl: 'card.css',
  shadow: true,
  assetsDirs: ['assets'],
})
export class Card {
  /**
   * Card background image for login pages of specific services
   */
  @Prop() background: CardBackground;

  allowedBackgrounds = ['puhti', 'mahti', 'allas'];
  render() {
    const style = {};

    if (this.allowedBackgrounds.includes(this.background)) {
      style['background-image'] = `url(${getAssetPath(
        `./assets/${this.background}.gif`
      )}`;
      style['background-size'] = 'cover';
      style['background-position-y'] = 'bottom';
    }

    return (
      <Host class="elevation-1" style={style}>
        <slot></slot>
      </Host>
    );
  }
}
