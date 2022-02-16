import { Component, Prop, h } from '@stencil/core';
import { mdiPlus, mdiMinus, mdiAccount, mdiPencil } from '@mdi/js';
import { createRipple } from '../../utils/utils';

/**
 * @group Buttons
 * @slot - Button text
 * @slot icon - Icon
 */
@Component({
  tag: 'c-button',
  styleUrl: 'button.scss',
  shadow: true,
})
export class Button {
  /**
   * Outlined button style
   */
  @Prop() outlined = false;

  /**
   * Light button background
   */
  @Prop() ghost = false;

  /**
   * Transparent button background
   */
  @Prop() text = false;

  /**
   * Display loader on the button
   */
  @Prop() loading = false;

  /**
   * Dense variant
   */
  @Prop() dense = false;

  /**
   * Fit width to containing element
   */
  @Prop() fit = false;

  /**
   * Remove the default border radius
   */
  @Prop() noRadius = false;

  /**
   * Secondary variant
   */
  @Prop() secondary = false;

  /**
   * Disable the button
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * Name of the icon to be displayed in the button
   *
   * @deprecated Please use the icon slot instead
   */
  @Prop() icon: 'plus' | 'minus' | 'account' | 'edit';

  /**
   * Value for the button
   * - for use in the c-content-switcher
   */
  @Prop() value?: number | string;

  /**
   * Id of the button
   */
  @Prop({ attribute: 'id' }) hostId: string;

  /**
   * Size of the button
   */
  @Prop() size: 'default' | 'small' | 'large' = 'default';

  private _container?: HTMLDivElement;

  private _onClick = (event) => {
    createRipple(event, this._container);
  };

  render() {
    const SPINNER_SMALL: SVGImageElement = (
      <svg
        class="spinner"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle class="spinner__circle" cx="50" cy="50" r="45" />
      </svg>
    );

    let selectedIcon = null;
    let svg: SVGImageElement;

    if (this.icon) {
      const icons = {
        plus: mdiPlus,
        minus: mdiMinus,
        account: mdiAccount,
        edit: mdiPencil,
      };
      selectedIcon = icons[this.icon];
      svg = (
        <svg class="button-icon" width="16" height="16" viewBox="0 0 22 22">
          <path d={selectedIcon} />
        </svg>
      );
    }

    const buttonClasses = {
      'border-radius': !this.noRadius,
      'csc-bg-color': !this.disabled,
      'csc-button--disabled': !!this.disabled,
      'csc-button--ghost': !!this.ghost,
      'csc-button--small': this.size === 'small',
      'csc-button--large': this.size === 'large',
      'csc-button': true,
      'csc-button-text': !!this.text,
      fit: !!this.fit,
      outlined: !!this.outlined,
      secondary: !!this.secondary,
    };

    const innerClasses = {
      'csc-button-padding': !this.dense,
      'hide-text': this.loading,
      dense: !!this.dense,
    };

    const hostClasses = {
      fit: !!this.fit,
    };

    return (
      <button
        id={this.hostId}
        class={hostClasses}
        tabindex="0"
        role="button"
        disabled={this.disabled}
        onClick={this._onClick}
      >
        <div
          class={buttonClasses}
          ref={(el) => (this._container = el as HTMLDivElement)}
        >
          {this.loading ? (
            <div
              class={
                this.dense ? 'spinner_wrapper dense_spinner' : 'spinner_wrapper'
              }
            >
              {SPINNER_SMALL}
            </div>
          ) : (
            ''
          )}
          <div class={innerClasses}>
            <slot name="icon"></slot>
            {svg}
            <slot></slot>
          </div>
        </div>
      </button>
    );
  }
}
