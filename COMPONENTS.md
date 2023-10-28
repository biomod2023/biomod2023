# Notebook & General Documentation

Co-author: Daniel + Minh :D

# General Documentation

## ClickDetection

Wrapper component to detect if the user click outside of your component. First, `import @/components/utils/ClickDetection.vue`. Then, wrap the component outside of your target component with a few extra twists (work arounds):

- `yourCallBackFunc` - the method that will be called when the user clicks outside of your component. You have to define this yourself. It varies depending on the need.
- `setRef` - is a function from `<ClickDetection>` that allows you to to specify the Ref of the target component. With it, we can check if the component has been clicked, whenever there's a click.

```vue
<ClickDetection :callback"yourCallBackFunc" v-slot"{setRef}">
  <YourComponent :ref="(el) => setRef(el)">
    ...
  </YourComponent>
</ClickDetection>
```

# Notebook

## Usage

All you need to get started is import is the `@/components/lab-notebook/Notebook.vue` file.
The component takes two slots - `title` and `body`. Enter the section title directly into the `title` slot.

For the `body` section, you can populate the content using the `SingleColumn`, `DoubleColumn`, and `TripleColumn` components.
Both components are already designed to be fully responsive - no need to account for resizing.
The table of contents will also automatically populate with the titles provided to these components.

### SingleColumn

The `SingleColumn` component takes a `title`, `body`, and optional centered `graphic` slot.
Directly enter the title text with no tags needed. Fill in the other slots with the body content. If you are writing paragraph blocks, I recommend wrapping all the `<p>` tags with a `<div class="flex flex-col gap-4"></div>`.

```html
<SingleColumn>
  <template #title> Title </template>
  <template #body>
    <p>Body</p>
  </template>
  <template #graphic>
    <!-- optional -->
    <img src="path/to/image" />
    <p>Caption</p>
  </template>
</SingleColumn>
```

The `SingleColumn` component also takes an option `always-dropdown` prop that will force it into the dropdown layout on desktop. This is useful for the References bubble as we can turn this into a collapsible:

```html
<SingleColumn :always-dropdown="true">
  <template #title> References </template>
  <template #body> Body text </template>
</SingleColumn>
```

To create a hanging indent for references, surround the body with

```html
<div class="pl-6 -indent-6"></div>
```

### DoubleColumn

The `DoubleColumn` component takes a `title`, `left-title`, `left-body`, `right-title`, and `right-body` slot.
Like `SingleColumn`, the titles require no tags, and other slots can be directly populated with just `<p>` tags.

```html
<DoubleColumn>
  <template #title> Title </template>

  <template #left-title>Subheading 1</template>
  <template #left-body>
    <p>Left text</p>
  </template>

  <template #right-title>Subheading 2</template>
  <template #right-body>
    <p>Right text</p>
  </template>
</DoubleColumn>
```

### TripleColumn

Now you're asking for it. FYI, I didn't implement NColumn because I'm not about to figure out how to make arbitrary-arity trees in Vue. This works the same way as `DoubleColumn`, just with a third `mid-` column.

```html
<TripleColumn>
  <template #title> Title </template>

  <template #left-title>Subheading 1</template>
  <template #left-body>
    <p>Left text</p>
  </template>

  <template #mid-title>Subheading 2</template>
  <template #mid-body>
    <p>Middle text</p>
  </template>

  <template #right-title>Subheading 3</template>
  <template #right-body>
    <p>Right text</p>
  </template>
</TripleColumn>
```

## CustomTable

Tables in HTML are horrible. This makes it easier. `CustomTable` takes one prop named `tableData` which is shaped like the following:

```javascript
tableData: {
    headers: string[]
    rowHeaders: string[]
    rowsPerRowHeader: number
    data: number[][]
}
```

`rowsPerRowHeader` determines how many rows of content each row header should span.
Provide data as a 2D array where each subarray is a row of content.

### Example

```javascript
const tableData = {
  headers: [
    'Buffer',
    'Buffer Concentration (U/mL)',
    'Approximate beginning DNase I concentration (ng/mL)',
    'Approximate final DNase I concentration (ng/mL)'
  ],
  rowHeaders: ["Manufacturer's Buffer", 'TE', 'HEPES'],
  rowsPerRowHeader: 2,
  data: [
    [0.05, 70, 20],
    [0.1, 70, 35],
    [0.05, 90, 90],
    [0.1, 90, 90],
    [0.05, 35, 10],
    [0.1, 65, 10]
  ]
}
```

## Example Template

```html
<script setup lang="ts">
  import Notebook from '@/components/lab-notebook/Notebook.vue'
  import SingleColumn from '@/components/lab-notebook/SingleColumn.vue'
  import DoubleColumn from '@/components/lab-notebook/DoubleColumn.vue'
</script>

<template>
  <Notebook>
    <template #title>Title</template>
    <template #body>
      <SingleColumn>
        <template #title> Heading 1 </template>
        <template #body>
          <p>Some body text</p>
          <br />
          <p>Some more body text</p>
        </template>
        <template #graphic>
          <div class="w-48 h-48 bg-gray-300"></div>
          <!-- replace with an <img> -->
          <p>Figure 1. blah blah blah</p>
        </template>
      </SingleColumn>
      <DoubleColumn>
        <template #title> Heading 2 </template>
        <template #left-title>Subheading 1</template>
        <template #left-body>
          <p>More body text</p>
        </template>
        <template #right-title>Subheading 2</template>
        <template #right-body>
          <p>Even more body text</p>
        </template>
      </DoubleColumn>

      <SingleColumn :always-dropdown="true">
        <template #title> References </template>
        <template #body>
          <div class="pl-6 -indent-6">
            <p>Blah blah blah</p>
          </div>
        </template>
      </SingleColumn>
    </template>
  </Notebook>
</template>
```
