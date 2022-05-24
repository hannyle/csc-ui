
/**
 * Examples for c-notification.
 * Automatically generated at 5/24/2022, 8:09:04 AM.
 *
 * ⚠️ DO NOT EDIT THESE MANUALLY AS THEY WILL BE OVERWRITTEN IN THE NEXT BUILD!
 */

export const basic = `<c-button (click)="addNotification()">Add notification</c-button>

<c-notification [notification]="basicNotification"></c-notification>`;

export const custom = `<c-row gap="16">
  <c-text-field label="Message" [(ngModel)]="message" cControl></c-text-field>

  <c-select
    label="Type"
    name="type"
    [(ngModel)]="type"
    [items]="types"
    return-value
    cControl
  ></c-select>

  <c-text-field label="Showing time" type="number" [(ngModel)]="delay" cControl></c-text-field>

  <c-select
    [(ngModel)]="requiresClosing"
    [items]="requiresClosingOptions"
    label="Requires closing"
    name="type"
    return-value
    cControl
  ></c-select>

  <c-select
    [(ngModel)]="position"
    [items]="positions"
    label="Position"
    name="type"
    return-value
    cControl
  ></c-select>

  <c-button (click)="addCustomNotification()">Add notification</c-button>
</c-row>

<div style="position: relative">
  <c-notification [notification]="notification" [position]="position"></c-notification>
</div>`;
