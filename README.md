
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
$(document.body)
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

### `.on(typeSet: string, handle, option?: ListenerOptions)`
### `.on(typeSet: string, factorSelector, handle, option?: ListenerOptions)`
### `.off(typeSet?: string, factorSelector?, handle?, option?: ListenerOptions)`
### `.attr(): object`
Getting all of attributes
### `.attr(key): any`
Getting value by attribute key
### `.attr(key, value)`
Setting value by attribute key
### `.attr(object)`
Setting multiple attributes by object