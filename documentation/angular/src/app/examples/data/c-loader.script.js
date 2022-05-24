
/**
 * Examples for c-loader.
 * Automatically generated at 5/24/2022, 8:09:04 AM.
 *
 * ⚠️ DO NOT EDIT THESE MANUALLY AS THEY WILL BE OVERWRITTEN IN THE NEXT BUILD!
 */
export const basic = `loader = false;

startLoader() {
  this.loader = true;

  setTimeout(() => {
    this.loader = false;
  }, 5000);
}
`;

export const delayed = `loader = false;

startLoader() {
  this.loader = true;

  setTimeout(() => {
    this.loader = false;
  }, 5000);
}
`;

