
/**
 * Examples for c-tab-buttons.
 * Automatically generated at 5/23/2022, 5:59:55 PM.
 *
 * ⚠️ DO NOT EDIT THESE MANUALLY AS THEY WILL BE OVERWRITTEN IN THE NEXT BUILD!
 */

export const basic = `<c-tab-buttons value="1">
  <c-button>One</c-button>
  <c-button>Two</c-button>
  <c-button>Three</c-button>
</c-tab-buttons>`;

export const customValues = `<c-tab-buttons cControl [(ngModel)]="currentTab">
  <c-button value="one">One</c-button>
  <c-button value="two">Two</c-button>
  <c-button value="three">Three</c-button>
</c-tab-buttons>

<c-card-content>Current tab: {{ currentTab }}</c-card-content>

<c-card-actions>
  <c-button
    (keyup.enter)="currentTab = 'one'"
    (keyup.space)="currentTab = 'one'"
    (click)="currentTab = 'one'"
  >
    Select One
  </c-button>
  <c-button
    (keyup.enter)="currentTab = 'two'"
    (keyup.space)="currentTab = 'two'"
    (click)="currentTab = 'two'"
  >
    Select Two
  </c-button>
  <c-button
    (keyup.enter)="currentTab = 'three'"
    (keyup.space)="currentTab = 'three'"
    (click)="currentTab = 'three'"
  >
    Select Three
  </c-button>
</c-card-actions>`;

export const indexes = `<c-tab-buttons cControl [(ngModel)]="currentTabIndex">
  <c-button>One</c-button>
  <c-button>Two</c-button>
  <c-button>Three</c-button>
</c-tab-buttons>

<c-card-content>Current tab: {{ currentTabIndex }}</c-card-content>

<c-card-actions>
  <c-button
    (keyup.enter)="currentTabIndex = 0"
    (keyup.space)="currentTabIndex = 0"
    (click)="currentTabIndex = 0"
  >
    Select One
  </c-button>
  <c-button
    (keyup.enter)="currentTabIndex = 1"
    (keyup.space)="currentTabIndex = 1"
    (click)="currentTabIndex = 1"
  >
    Select Two
  </c-button>
  <c-button
    (keyup.enter)="currentTabIndex = 2"
    (keyup.space)="currentTabIndex = 2"
    (click)="currentTabIndex = 2"
  >
    Select Three
  </c-button>
</c-card-actions>`;

export const mandatory = `<c-tab-buttons mandatory>
  <c-button>One</c-button>
  <c-button>Two</c-button>
  <c-button>Three</c-button>
</c-tab-buttons>`;

export const disabled = `<c-tab-buttons disabled>
  <c-button>One</c-button>
  <c-button>Two</c-button>
  <c-button>Three</c-button>
</c-tab-buttons>`;

export const small = `<c-tab-buttons size="small">
  <c-button>One</c-button>
  <c-button>Two</c-button>
  <c-button>Three</c-button>
</c-tab-buttons>`;

export const large = `<c-tab-buttons size="large">
  <c-button>One</c-button>
  <c-button>Two</c-button>
  <c-button>Three</c-button>
</c-tab-buttons>`;

export const descriptions = `<c-tab-buttons value="small">
  <c-button value="tiny">
    standard.tiny
    <div slot="description">
      <div>80 GB storage</div>
      <div>1 GB RAM | 1 CPU</div>
    </div>
  </c-button>
  <c-button value="small">
    standard.small
    <div slot="description">
      <div>80 GB storage</div>
      <div>2 GB RAM | 2 CPU</div>
    </div>
  </c-button>
  <c-button value="medium">
    standard.medium
    <div slot="description">
      <div>80 GB storage</div>
      <div>4 GB RAM | 3 CPU</div>
    </div>
  </c-button>
</c-tab-buttons>`;
