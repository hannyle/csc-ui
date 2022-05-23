
/**
 * Examples for c-modal.
 * Automatically generated at 5/23/2022, 5:59:55 PM.
 *
 * ⚠️ DO NOT EDIT THESE MANUALLY AS THEY WILL BE OVERWRITTEN IN THE NEXT BUILD!
 */

export const basic = `<c-button (click)="modal = true">Open modal</c-button>

<c-modal cControl [(ngModel)]="modal">
  <c-card>
    <c-card-title>Modal</c-card-title>

    <c-card-content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </c-card-content>

    <c-card-actions>
      <c-button (click)="modal = false">Close</c-button>
    </c-card-actions>
  </c-card>
</c-modal>`;

export const maxWidth = `<c-button (click)="maxWidthModal = true">Open modal</c-button>

<c-modal cControl [(ngModel)]="maxWidthModal" max-width="400">
  <c-card>
    <c-card-title>Modal (400px)</c-card-title>

    <c-card-content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </c-card-content>

    <c-card-actions>
      <c-button (click)="maxWidthModal = false">Close</c-button>
    </c-card-actions>
  </c-card>
</c-modal>`;

export const dismissable = `<c-button (click)="dismissableModal = true">Open dismissable modal</c-button>

<c-modal cControl [(ngModel)]="dismissableModal" dismissable>
  <c-card>
    <c-card-title>Dismissable</c-card-title>

    <c-card-content>
      <div>This modal can be dismissed by clicking outside the content</div>

      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </c-card-content>

    <c-card-actions>
      <c-button (click)="dismissableModal = false">Close</c-button>
    </c-card-actions>
  </c-card>
</c-modal>`;
