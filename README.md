
<a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
</a>

# Master DOM
### A lightweight DOM manipulation and event handling utilities.

&nbsp;

```bash
npm install @master/dom
```

## Usage

```tsx
import { $ } from '@master/dom';
// or scope as 'Master' prevent from conflicting with jquery
import { $ as Master } from '@master/dom';
```

### Create element and assign element utilities
```ts
$('div', { id: 'target', class: 'bg:blue f:white' }, [
    $('span', { class: 'xxx' }),
    $('span', { class: 'xxx' })
])
```

### Assign element utilities
```ts
const $body = $(document.body)
    .addClass('bg:red')
    .on('click', (event) => {
        console.log(event);
    }, { passive: true });
```

## Event Listener
```ts
interface ListenerOptions {
    capture?: boolean;
    once?: boolean;
    passive?: boolean;
    id?: any;
}
```

### Add event listener
#### `.on(typeSet: string, handle, option?: ListenerOptions)`
#### `.on(typeSet: string, factorSelector, handle, option?: ListenerOptions)`

### Remove event listener
#### `.off(typeSet?: string, factorSelector?, handle?, option?: ListenerOptions)`

## Manipulations

### Attribute
#### `.attr(): object`
Getting all of attributes
#### `.attr(key: string): any`
Getting value by attribute key
#### `.attr(key: string, value)`
Setting value by attribute key
#### `.attr(object)`
Setting multiple attributes by object
#### `.toggleAttr(key: string, state?: boolean)`

### Style
#### `.css(): object`
Getting all of compulted styles
#### `.css(key: string): any`
Getting compulted style by key
#### `.css(key: string, value)`
Setting style by key
#### `.css(object)`
Setting multiple styles by object

### Class
#### `.addClass(value: string)`
#### `.rmClass(value: string)`
#### `.toggleClass(key: string, state?: boolean)`