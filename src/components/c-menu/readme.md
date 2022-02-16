# c-menu



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description | Type      | Default                                                              |
| --------- | --------- | ----------- | --------- | -------------------------------------------------------------------- |
| `items`   | --        |             | `any[]`   | `[     // { name: 'Default 1', action: () => alert('action') },   ]` |
| `nohover` | `nohover` |             | `boolean` | `false`                                                              |
| `simple`  | `simple`  |             | `boolean` | `false`                                                              |
| `small`   | `small`   |             | `boolean` | `false`                                                              |


## Dependencies

### Used by

 - [c-pagination](../c-pagination)
 - [c-paginationrow](../c-paginationrow)

### Depends on

- [c-menu-item](../c-menu-item)

### Graph
```mermaid
graph TD;
  c-menu --> c-menu-item
  c-pagination --> c-menu
  c-paginationrow --> c-menu
  style c-menu fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
