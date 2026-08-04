# Assets for the “Почему именно сейчас” section

Use the PNG files only for complex 3D artwork. Keep headings, body text,
buttons, arrows, backgrounds and card frames in HTML/CSS.

## Mapping

- `ai-object.png` — first visual card.
- `project-stack.png` — second visual card.
- `result-portal.png` — third visual card.
- `security-cluster.svg` — fourth visual card; its internal groups can animate independently.
- `animation.css` — optional motion starter.

## Minimal markup

```html
<article class="why-now__visual">
  <img class="why-now__asset" src="/assets/neurokids-why-now/ai-object.png" alt="" />
</article>

<article class="why-now__visual why-now__security">
  <object class="why-now__asset" data="/assets/neurokids-why-now/security-cluster.svg" type="image/svg+xml"></object>
</article>
```

For direct access to SVG groups such as `#magnifier` and `#check-1`, inline
the contents of `security-cluster.svg` in the component instead of using an
`img` or `object` tag.
