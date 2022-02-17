import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Listen,
  Prop,
  Watch,
} from '@stencil/core';

/**
 * @group Content Switchers
 */
@Component({
  tag: 'c-accordion',
  styleUrl: 'c-accordion.scss',
  shadow: true,
})
export class CAccordion {
  /**
   * Value of the content switcher
   */
  @Prop({ mutable: true }) value!: number | string | (number | string)[];

  /**
   * Allow expanding multiple items
   */
  @Prop() multiple: boolean = false;

  /**
   * Show an outline around expanded items
   */
  @Prop() outlined: boolean = false;

  /**
   * Emit changes to the parent
   */
  @Event() changeValue: EventEmitter<number | string>;

  @Element() el: HTMLCAccordionElement;

  @Watch('value')
  watchPropHandler(value: string | number) {
    this.changeValue.emit(value);
  }

  @Listen('itemChange', { passive: true })
  onAccordionItemChange(
    event: CustomEvent<{ value: number | string; expanded: boolean }>,
  ) {
    const { value, expanded } = event.detail;

    console.log({ value, expanded });

    if (this.multiple && Array.isArray(this.value)) {
      if (expanded) {
        this.value.push(value);
      } else {
        this.value = this.value.filter((v) => v !== value);
      }
    } else {
      this.value = expanded ? value : null;
    }

    this._handleItemExpansion();
  }

  get items() {
    return Array.from(this.el.childNodes) as HTMLCAccordionItemElement[];
  }

  private _handleItemExpansion() {
    for (const item of this.items) {
      item.expanded = Array.isArray(this.value)
        ? this.value.includes(item.value)
        : item.value === this.value;
    }
  }

  componentWillLoad() {
    this._handleItemExpansion();
  }

  render() {
    const classes = {
      'c-accordion': true,
      'c-accordion--outlined': !!this.outlined,
    };

    return (
      <div class={classes}>
        <slot></slot>
      </div>
    );
  }
}
