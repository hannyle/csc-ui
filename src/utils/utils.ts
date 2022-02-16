export function format(first: string, middle: string, last: string): string {
  return (
    (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '')
  );
}

export function createRipple(event, element) {
  console.log('ripple click', element);

  let rippleElement = element.querySelector('.md-ripple');

  if (!rippleElement) {
    rippleElement = document.createElement('div');
    rippleElement.classList.add('md-ripple');
    element.appendChild(rippleElement);
  }

  rippleElement.classList.remove('animate');

  const d = Math.max(element.offsetWidth, element.offsetHeight);
  rippleElement.style.width = d + 'px';
  rippleElement.style.height = d + 'px';

  const rect = event.target.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  rippleElement.style.top = y - d / 2 + 'px';
  rippleElement.style.left = x - d / 2 + 'px';

  rippleElement.classList.add('animate');

  // console.log({ x, y, d });

  setTimeout(() => {
    rippleElement.remove();
  }, 500);
}
