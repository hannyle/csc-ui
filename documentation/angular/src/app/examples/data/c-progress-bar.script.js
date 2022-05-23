
/**
 * Examples for c-progress-bar.
 * Automatically generated at 5/23/2022, 5:59:55 PM.
 *
 * ⚠️ DO NOT EDIT THESE MANUALLY AS THEY WILL BE OVERWRITTEN IN THE NEXT BUILD!
 */
export const basic = `progress = 0;
interval = null;

ngOnInit() {
  this.interval = setInterval(() => {
    this.progress = Math.ceil(Math.random() * 100);
  }, 2000);
}

ngOnDestroy() {
  clearInterval(this.interval);
}
`;

