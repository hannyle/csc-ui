
/**
 * Examples for c-progress-bar.
 * Automatically generated at 5/24/2022, 8:09:04 AM.
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

