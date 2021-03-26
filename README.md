# &lt;p-month-picker&gt;

`<p-month-picker>` is a Web Component for selecting month and year.
It is built with [LitElement](https://lit-element.polymer-project.org/) and [Vaadin components](https://vaadin.com/components).
The default styles are based on Vaadin's Lumo theme.

<img src="https://raw.githubusercontent.com/pekam/p-month-picker/master/screenshot.png" alt="Screenshot of p-month-picker component" height="250px">

```html
<p-month-picker
  label="Starting month"
  value="2021-03"
  min="2018-01"
  max="2021-09">
</p-month-picker>
```

## Installing

```
npm install p-month-picker
```

## Properties

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

## Reacting to value changes
```js
const monthPicker = document.querySelector('p-month-picker');

monthPicker.addEventListener('change', e =>
  console.log('New value: ' + e.target.value));
```

## Internationalization (i18n)

Translating month labels in the overlay (to Finnish in this example):
```js
monthPicker.monthLabels = [
  'Tammi', 'Helmi', 'Maalis', 'Huhti',
  'Touko', 'Kesä', 'Heinä', 'Elo',
  'Syys', 'Loka', 'Marras', 'Joulu'
]
```

## Customizing the presentation format

You can customize how the current value is presented in the input field
by overriding the `formatValue` and `parseValue` functions.

This example changes the format from `1/2020` to `Jan 2020`:
```js
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
