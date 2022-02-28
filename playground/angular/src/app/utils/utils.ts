import { ComponentData } from 'src/interfaces/documentation';

export function parseComponents(docs) {
  const components: ComponentData[] = docs.components.map((component) => ({
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
        props: child.props.filter((e) => e.docsTags.every((tag) => tag.name !== 'private')),
        events: child.events.filter((e) => e.docsTags.every((tag) => tag.name !== 'private')),
      }));

    return { ...item, children };
  });
}
