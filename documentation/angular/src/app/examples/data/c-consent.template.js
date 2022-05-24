
/**
 * Examples for c-consent.
 * Automatically generated at 5/24/2022, 8:09:04 AM.
 *
 * ⚠️ DO NOT EDIT THESE MANUALLY AS THEY WILL BE OVERWRITTEN IN THE NEXT BUILD!
 */

export const basic = `<c-button (click)="consent = true">Show consent</c-button>

<c-consent *ngIf="consent">
  <span>
    Our service uses cookies to ensure you get the best experience. It may also include third
    party cookies.
    <c-link href="https://www.csc.fi">Read more</c-link>
  </span>
  <c-spacer></c-spacer>
  <c-button ghost (click)="consent = false">Deny</c-button>
  <c-button (click)="consent = false">Accept</c-button>
</c-consent>`;
