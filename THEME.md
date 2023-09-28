# Theming

The default TailwindCSS theming has been extended with the palette of the website.

## Colors

The slate grey color, dark homepage color, and gold color can be accessed with the `slate`, `dark`, and `gold` keywords:

```html
<div class="bg-slate">
    <h1 class="text-gold">Title</h1>
</div>

<div class="bg-dark">
    <p>Body</p>
</div>
```

The notebook text and bubble background colors can be accessed with the `notebookBg` and `notebookText` keywords:

```html
<div class="bg-notebookBg">
    <p class="text-notebookText">Body</p>
</div>
```

## Typography

The Montserrat and Fira Sans fonts have been added to the project. Montserrat has been set as the default font, and Fira Sans can be accessed with `font-title`.

The `text-title` and `text-title-sm` classes will give the text a large title font size and semibold font weight. The `text-subtitle` and `text-subtitle-sm` classes will give the text a medium font size and normal font weight. Use the `-sm` version as the default and the non `-sm` version on the `lg:` breakpoint.

```html
<h1 class="font-title text-title">Title</h1> <!-- This text will be in semibold Fira Sans and large font size  -->
<h2 class="font-subtitle">Subtitle</h2> <!-- This text will be in Montserrat and medium font size -->
<p>Body</p> <!-- This text will be in Montserrat -->
```

Note that the default font color has been set to `text-grey-50`.