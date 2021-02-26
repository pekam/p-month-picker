# &lt;p-month-picker&gt;

`<p-month-picker>` is a Web Component for selecting month and year.
It is built with [LitElement](https://lit-element.polymer-project.org/) and [Vaadin components](https://vaadin.com/components).
The default styles are based on Vaadin's Lumo theme.

## Usage

After installing and importing the `p-month-picker` module from `npm`,
you can use the HTML element, optionally setting initial properties as attributes:
```html
<p-month-picker
  label="Starting month"
  value="2021-03"
  min="2018-01"
  max="2021-09">
</p-month-picker>
```

### Properties

| Name  | Type | Example value |
| ------------- | ------------- | ------------- |
| `value`  | `string`  | `"01-2021"` |
| `min` | `string`  | `"01-2020"` |
| `max` | `string`  | `"12-2021"` |
| `opened`  | `boolean`  | `false` |
| `label` | `string` | `"Starting month"` |
| `placeholder` | `string` | `"Pick a month"` |
| `disabled` | `boolean` | `false` |
| `readonly` | `boolean` | `false` |
| `invalid` | `boolean` | `false` |
| `monthLabels` | `string[]` | `["Jan", ..., "Dec"]` |

### Reacting to value changes
```js
const monthPicker = document.querySelector('p-month-picker');

monthPicker.addEventListener('change', e =>
  console.log('New value: ' + e.target.value));
```

### Customization/i18n
```js
// Customizing month labels in the overlay:
monthPicker.monthLabels = [
  'Tammi', 'Helmi', 'Maalis', 'Huhti',
  'Touko', 'Kesä', 'Heinä', 'Elo',
  'Syys', 'Loka', 'Marras', 'Joulu'
]

// You can customize how the current value is presented in the field
// by overriding the formatValue and parseValue functions.
// This example changes e.g. "1/2020" to "Jan 2020":
monthPicker.formatValue = ({year, month}) =>
  `${monthPicker.monthLabels[month - 1]} ${year}`;

monthPicker.parseValue = (inputValue) => {
  const [firstWord, secondWord] = inputValue.split(' ');
  const month = monthPicker.monthLabels
    .findIndex((label) => label === firstWord) + 1;
  if (month < 1) {
    return null;
  }
  const year = parseInt(secondWord);
  if (isNaN(year)) {
    return null;
  }
  return { month, year };
};
```

## License

Apache License 2.0
