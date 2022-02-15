export function parseComponents(docs) {
  const components = docs.components.map((component) => ({
    ...component,
    name: component.tag.replace(/^c-/, '').replaceAll('-', ' '),
  }));

  const parentComponents = components.filter(
    (component) => !component.docsTags.some((docsTag) => docsTag.name === 'parent'),
  );

  return parentComponents.map((item) => {
    const children = components
      .filter((component) =>
        component.docsTags.some(
          (docsTag) => docsTag.name === 'parent' && docsTag.text === item.tag,
        ),
      )
      .map((child) => ({
        ...child,
        events: child.events.filter((e) => e.docsTags.every((tag) => tag.name !== 'private')),
      }));

    return { ...item, children };
  });
}
