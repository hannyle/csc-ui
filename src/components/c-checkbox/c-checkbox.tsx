import {
  Component,
  Host,
  h,
  Listen,
  Prop,
  Event,
  EventEmitter,
} from '@stencil/core';
import { createRipple } from '../../utils/utils';
/**
 * @group Form
 */
@Component({
  tag: 'c-checkbox',
  styleUrl: 'c-checkbox.scss',
  shadow: true,
})
export class CCheckbox {
  /**
   * Element label
   */
  @Prop() label: string = '';

  /**
   * Is the element checked
   */
  @Prop({ mutable: true }) value: boolean = false;

  /**
   * Disable the checkbox
   */
  @Prop() disabled = false;

  /**
   * Triggered when element is checked or unchecked
   */
  @Event() changeValue: EventEmitter;

  private _container: HTMLDivElement;

  @Listen('keydown', { passive: true })
  handleKeyDown(event: KeyboardEvent) {
    if (['Space', 'Enter'].includes(event.code)) {
      event.preventDefault();
      this.toggleState(event);
    }
  }

  private toggleState(event) {
    if (this.disabled) return;

    createRipple(event, this._container, true);

    this.value = !this.value;
    this.changeValue.emit(this.value);
  }

  render() {
    const wrapperClasses = {
      'c-checkbox': true,
      'c-checkbox--disabled': this.disabled,
    };

    return (
      <Host>
        <label
          id="c-checkbox-label"
          class={wrapperClasses}
          tabindex={this.disabled ? -1 : 0}
        >
          <input
            type="checkbox"
            aria-checked={this.value}
            aria-disabled={this.disabled}
            aria-labelledby="c-checkbox-label"
            checked={this.value}
            disabled={this.disabled}
            tabindex="-1"
            onChange={(event) => this.toggleState(event)}
          />
          <div
            class="ripple"
            ref={(el) => (this._container = el as HTMLDivElement)}
          >
            <span class="checkmark"></span>
          </div>
          {this.label}
        </label>
      </Host>
    );
  }
}
