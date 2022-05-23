
/**
 * Examples for c-loader.
 * Automatically generated at 5/23/2022, 5:59:55 PM.
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

