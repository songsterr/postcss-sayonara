# PostCSS Sayonara

[PostCSS] plugin to limit used declarations to a given set.

![version](https://img.shields.io/npm/v/postcss-sayonara?style=flat-square)
![node-current](https://img.shields.io/node/v/postcss-sayonara?style=flat-square)
![npm](https://img.shields.io/npm/dt/postcss-sayonara?style=flat-square)
![licence](https://img.shields.io/npm/l/postcss-sayonara?style=flat-square)
![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/postcss-sayonara?style=flat-square)


[PostCSS]: https://github.com/postcss/postcss

```css
.foo {
  /* Input example */
  fill: #fff;
  cursor: pointer;
}
```

```css
.foo {
  /* Output example */
  fill: #fff;
}
```

## Usage

Check you project for existed PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you already use PostCSS, add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('postcss-sayonara')({
+     allowedPropNames: [
+       'stroke', 'stroke-width', 'stroke-opacity', 'stroke-dasharray',
+       'stroke-dashoffset', 'stroke-linecap',
+       'stroke-linejoin', 'stroke-miterlimit',
+       'fill', 'fill-rule', 'fill-opacity',
+       'clip-path', 'mask',
+       'opacity', 'color', 'stop-color', 'stop-opacity',
+       'font-family', 'font-size', 'font-weight',
+       'text-anchor', 'visibility', 'display',
+     ],
+   }),
    require('autoprefixer'),
  ],
}
```

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

[official docs]: https://github.com/postcss/postcss#usage
