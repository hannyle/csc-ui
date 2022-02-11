export function parseComponents(docs) {
  const parentComponents = docs.components.filter(
    (component) =>
      !component.docsTags.some((docsTag) => docsTag.name === 'parent')
  );

  return parentComponents.map((item) => {
    const children = docs.components.filter((component) =>
      component.docsTags.some(
        (docsTag) => docsTag.name === 'parent' && docsTag.text === item.tag
      )
    );
    return { ...item, children };
  });
}
