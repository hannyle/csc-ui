import {
  Component,
  // Host,
  h,
  Prop,
  Listen,
  Event,
  EventEmitter,
} from '@stencil/core';
import { createRipple } from '../../utils/utils';

/**
 * @group Form
 */
@Component({
  tag: 'c-radio',
  styleUrl: 'c-radio.scss',
  shadow: true,
})
export class CRadio {
  /**
   * Value of the radio group
   */
  @Prop({ mutable: true }) value: { label: string; value: number | string };

  /**
   * Label of the radio group
   */
  @Prop() label: string;

  /**
   * Color of the radio group
   */
  @Prop() color: string = '';

  /**
   * Radio group items
   */
  @Prop() items: { label: string; value: number | string }[] = [
    { label: 'default 1', value: 0 },
    { label: 'default 2', value: 1 },
    { label: 'default 3', value: 2 },
  ];

  /**
   * Emit value change to the parent
   */
  @Event() changeValue: EventEmitter;

  @Listen('keydown', { passive: true })
  handleKeyDown(ev: any) {
    if (ev.key === ' ') {
      ev.preventDefault();
    }
  }

  private _containers?: HTMLDivElement[] = [];

  private _select(event, item, index) {
    console.log(event, item);
    createRipple(event, this._containers[index]);
    this.value = item;
    this.changeValue.emit(item);
  }

  private _selectWithSpace(ev, item) {
    if (ev.key === ' ') {
      this.value = item;
      this.changeValue.emit(item);
    }
  }

  private _getRadioButton = (item, index) => {
    const itemId = item.value.toString().replace(/[^a-zA-Z0-9-_]/g, '');

    const classes = {
      'c-radio': true,
      'csc-bg-color': true,
      active: this.value === item,
    };

    return (
      <div
        class="c-radio-group"
        onClick={(event) => this._select(event, item, index)}
      >
        <div
          class="c-radio-wrapper"
          role="radio"
          tabindex="0"
          aria-labelledby={itemId}
          aria-checked={this.value === item}
          ref={(el) => (this._containers[index] = el as HTMLDivElement)}
          onKeyDown={(event) => this._selectWithSpace(event, item)}
        >
          <div class={classes}>
            <div class="c-radio-outer-circle"></div>
            <div class="c-radio-inner-circle"></div>
          </div>
        </div>
        <label class="c-radio-label" id={itemId}>
          {item.label}
        </label>
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.label ? <label id="c-radio-group-label">{this.label}</label> : ''}
        <div role="radiogroup" aria-labelledby="c-radio-group-label">
          {this.items.map((item, index) => this._getRadioButton(item, index))}
        </div>
      </div>
    );
  }
}
