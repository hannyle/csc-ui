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

  private _handleItemExpansion(animate = true) {
    for (const item of this.items) {
      item.expanded = Array.isArray(this.value)
        ? this.value.includes(item.value)
        : item.value === this.value;

      const wrapper: HTMLDivElement = item.shadowRoot.querySelector(
        '.c-accordion-item__content-wrapper',
      );

      wrapper.classList[animate ? 'add' : 'remove']('animate');

      if (item.expanded) this._expandItem(wrapper);
      else this._collapseItem(wrapper);
    }
  }

  private _collapseItem(item) {
    if (item.dataset.collapsed === 'true') return;

    const sectionHeight = item.scrollHeight;

    const elementTransition = item.style.transition;
    item.style.transition = '';

    requestAnimationFrame(function () {
      item.style.height = sectionHeight + 'px';
      item.style.transition = elementTransition;

      requestAnimationFrame(function () {
        item.style.height = '0px';
      });
    });

    item.setAttribute('data-collapsed', 'true');
  }

  private _expandItem(item) {
    if (item.dataset.collapsed === 'false') return;

    var sectionHeight = item.scrollHeight;

    item.style.height = sectionHeight + 'px';

    setTimeout(() => {
      item.style.height = null;
    }, 200);

    item.setAttribute('data-collapsed', 'false');
  }

  private _addTransitionClasses() {
    for (const item of this.items) {
      const wrapper: HTMLDivElement = item.shadowRoot.querySelector(
        '.c-accordion-item__content-wrapper',
      );
      setTimeout(() => {
        wrapper.classList['add']('c-accordion-item__transition');
      }, 200);
    }
  }

  componentDidRender() {
    this._handleItemExpansion(false);
    this._addTransitionClasses();
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
