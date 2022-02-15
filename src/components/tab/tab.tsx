import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';
/**
 * @group Tabs
 * @parent c-tabs
 * @slot - Default slot
 */
@Component({
  tag: 'c-tab',
  styleUrl: 'tab.css',
  shadow: true,
})
export class Tab {
  /**
   * Mark tab as active
   */
  @Prop() active: boolean;

  /**
   * Id of the tab
   */
  @Prop({ attribute: 'id' }) hostId: string;

  /**
   * Value for the tab
   * - for use in c-tabs
   */
  @Prop() value?: number | string;

  /**
   * Emit changes to the parent
   *
   * @private
   */
  @Event() tabChange: EventEmitter;

  private _onClick = () => {
    this.tabChange.emit(this.value);
  };

  render() {
    return (
      <Host tabindex="0" role="button">
        <div
          id={this.hostId}
          class={this.active ? 'c-tab active' : 'c-tab'}
          onClick={this._onClick}
        >
          <slot></slot>
        </div>
      </Host>
    );
  }
}
