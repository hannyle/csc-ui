# c-accordion-item



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                    | Type                                             | Default     |
| ---------- | ---------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------ | ----------- |
| `expanded` | `expanded` | Expansion status of the item                                                                   | `boolean`                                        | `false`     |
| `heading`  | `heading`  | Heading of the accordion item                                                                  | `string`                                         | `undefined` |
| `icon`     | `icon`     | <span style="color:red">**[DEPRECATED]**</span> Please use the icon slot instead<br/><br/>Icon | `"bell" \| "disabled" \| "enabled" \| "pending"` | `undefined` |
| `value`    | `value`    | Value of the accordion item                                                                    | `number \| string`                               | `undefined` |


## Events

| Event        | Description                     | Type               |
| ------------ | ------------------------------- | ------------------ |
| `itemChange` | Emit changes to the c-accordion | `CustomEvent<any>` |


## Dependencies

### Depends on

- [c-spacer](../spacer)

### Graph
```mermaid
graph TD;
  c-accordion-item --> c-spacer
  style c-accordion-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
