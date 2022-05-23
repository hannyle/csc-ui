
/**
 * Examples for c-loader.
 * Automatically generated at 5/23/2022, 5:59:55 PM.
 *
 * ⚠️ DO NOT EDIT THESE MANUALLY AS THEY WILL BE OVERWRITTEN IN THE NEXT BUILD!
 */

export const basic = `<c-card>
  <c-loader *ngIf="loader"></c-loader>

  <c-card-title>Loader card</c-card-title>

  <c-card-content>Click start to show a loader for 5 seconds</c-card-content>

  <c-card-actions>
    <c-button (click)="startLoader()">Start</c-button>
  </c-card-actions>
</c-card>`;

export const delayed = `<c-card>
  <c-loader *ngIf="loader" contentdelay="2">This loader will disappear soon</c-loader>

  <c-card-title>Loader card</c-card-title>

  <c-card-content>Click start to show a loader with a delayed explanation text</c-card-content>

  <c-card-actions>
    <c-button (click)="startLoader()">Start</c-button>
  </c-card-actions>
</c-card>`;
