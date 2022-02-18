# c-radio



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description              | Type                                            | Default                                                                                                                   |
| -------- | --------- | ------------------------ | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `color`  | `color`   | Color of the radio group | `string`                                        | `''`                                                                                                                      |
| `items`  | --        | Radio group items        | `{ label: string; value: string \| number; }[]` | `[     { label: 'default 1', value: 0 },     { label: 'default 2', value: 1 },     { label: 'default 3', value: 2 },   ]` |
| `label`  | `label`   | Label of the radio group | `string`                                        | `undefined`                                                                                                               |
| `value`  | --        | Value of the radio group | `{ label: string; value: string \| number; }`   | `undefined`                                                                                                               |


## Events

| Event         | Description                     | Type               |
| ------------- | ------------------------------- | ------------------ |
| `changeValue` | Emit value change to the parent | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
