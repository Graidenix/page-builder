# Page Builder

Clone the project 

```shell
pnpm install
```


In the target project add import of generated `colors.css` in your `App.tsx` file
```ts 
import "./colors.css"
```

And add the follow lines in the `tailwind.config.js`:
```js
module.exports = {
    theme: {
        extend: {
            colors: {
                'main-1': 'var(--main-1)',
                'main-2': 'var(--main-2)',
                'main-3': 'var(--main-3)',
                'main-4': 'var(--main-4)',
                'main-5': 'var(--main-5)',
                'main-6': 'var(--main-6)',
                'main-7': 'var(--main-7)',
                'main-8': 'var(--main-8)',
                'main-9': 'var(--main-9)',
                'main-10': 'var(--main-10)',
                'main-11': 'var(--main-11)',
                'main-12': 'var(--main-12)',
                'main-a1': 'var(--main-a1)',
                'main-a2': 'var(--main-a2)',
                'main-a3': 'var(--main-a3)',
                'main-a4': 'var(--main-a4)',
                'main-a5': 'var(--main-a5)',
                'main-a6': 'var(--main-a6)',
                'main-a7': 'var(--main-a7)',
                'main-a8': 'var(--main-a8)',
                'main-a9': 'var(--main-a9)',
                'main-a10': 'var(--main-a10)',
                'main-a11': 'var(--main-a11)',
                'main-a12': 'var(--main-a12)',
                'accent-1': 'var(--accent-1)',
                'accent-2': 'var(--accent-2)',
                'accent-3': 'var(--accent-3)',
                'accent-4': 'var(--accent-4)',
                'accent-5': 'var(--accent-5)',
                'accent-6': 'var(--accent-6)',
                'accent-7': 'var(--accent-7)',
                'accent-8': 'var(--accent-8)',
                'accent-9': 'var(--accent-9)',
                'accent-10': 'var(--accent-10)',
                'accent-11': 'var(--accent-11)',
                'accent-12': 'var(--accent-12)',
                'accent-a1': 'var(--accent-a1)',
                'accent-a2': 'var(--accent-a2)',
                'accent-a3': 'var(--accent-a3)',
                'accent-a4': 'var(--accent-a4)',
                'accent-a5': 'var(--accent-a5)',
                'accent-a6': 'var(--accent-a6)',
                'accent-a7': 'var(--accent-a7)',
                'accent-a8': 'var(--accent-a8)',
                'accent-a9': 'var(--accent-a9)',
                'accent-a10': 'var(--accent-a10)',
                'accent-a11': 'var(--accent-a11)',
                'accent-a12': 'var(--accent-a12)',
            },
        }
    }
}
```
