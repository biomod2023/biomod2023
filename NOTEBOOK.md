# Notebook
You're welcome.

## Usage
All you need to get started is import is the `@/components/lab-notebook/Notebook.vue` file.
The component takes two slots - `title` and `body`. Enter the section title directly into the `title` slot.

For the `body` section, you can populate the content using the `SingleColumn` and `DoubleColumn` components.
Both components are already designed to be fully responsive - no need to account for resizing.
The table of contents will also automatically populate with the titles provided to these components.

### SingleColumn

The `SingleColumn` component takes a `title`, `body`, and optional centered `graphic` slot.
Directly enter the title text with no tags needed. Directly populate the other slots with text - no need for divs, at most use some `<p>` tags for the body and `<img>` for the graphic.

```html
<SingleColumn>
    <template #title>
        Title
    </template>
    <template #body>
        <p>Body</p>
    </template>
    <template #graphic> <!-- optional -->
        <img src="path/to/image" />
        <p>Caption</p>
    </template>
</SingleColumn>
```

The `SingleColumn` component also takes an option `always-dropdown` prop that will force it into the dropdown layout on desktop. This is useful for the References bubble as we can turn this into a collapsible:

```html
<SingleColumn :always-dropdown="true">
    <template #title>
        References
    </template>
    <template #body>
        Body text
    </template>
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
<SingleColumn>
    <template #title>
        Title
    </template>

    <template #left-title>Subheading 1</template>
    <template #left-body>
        <p>Left text</p>
    </template>

    <template #right-title>Subheading 2</template>
    <template #right-body>
        <p>Right text</p>
    </template>
</SingleColumn>
```

## Example Template

```html
<script setup lang="ts">
import Notebook from "@/components/lab-notebook/Notebook.vue"
import SingleColumn from "@/components/lab-notebook/SingleColumn.vue"
import DoubleColumn from "@/components/lab-notebook/DoubleColumn.vue"
</script>

<template>
    <Notebook>
        <template #title>Title</template>
        <template #body>
            <SingleColumn>
                <template #title>
                    Heading 1
                </template>
                <template #body>
                    <p>
                        Some body text
                    </p>
                    <br />
                    <p>
                        Some more body text
                    </p>
                </template>
                <template #graphic>
                    <div class="w-48 h-48 bg-gray-300"></div> <!-- replace with an <img> -->
                    <p>Figure 1. blah blah blah</p>
                </template>
            </SingleColumn>
            <DoubleColumn>
                <template #title>
                    Heading 2
                </template>
                <template #left-title>Subheading 1</template>
                <template #left-body>
                    <p>
                        More body text
                    </p>
                </template>
                <template #right-title>Subheading 2</template>
                <template #right-body>
                    <p>
                        Even more body text
                    </p>
                </template>
            </DoubleColumn>

            <SingleColumn :always-dropdown="true">
                <template #title>
                    References
                </template>
                <template #body>
                    <div class="pl-6 -indent-6">
                        <p>
                            Blah blah blah
                        </p>
                    </div>
                </template>
            </SingleColumn>
        </template>
    </Notebook>
</template>
```