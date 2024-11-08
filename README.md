


https://github.com/user-attachments/assets/5274bc0f-e768-4638-9fcc-6820497c0b98


Slidenote is a scroll driven slide-out for React that can be used to increase your landing page conversion rate.

## Usage

To start using the library, install it in your project:,

```bash
npm install vaul
```

Use the drawer in your app.

```jsx
import { Drawer } from 'vaul';

function MyComponent() {
  return (
    <Drawer.Root>
      <Drawer.Trigger>Open</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Content>
          <Drawer.Title>Title</Drawer.Title>
        </Drawer.Content>
        <Drawer.Overlay />
      </Drawer.Portal>
    </Drawer.Root>
  );
}
```

## Documentation

Find the full API reference and examples in the [documentation](https://devneill.com/ui/slidenote).
