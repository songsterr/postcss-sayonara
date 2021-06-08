let postcss = require('postcss')

let plugin = require('./')

function run(input, output, opts) {
  let result = postcss([plugin(opts)]).process(input, { from: undefined })
  expect(result.css).toEqual(output)
  expect(result.warnings()).toHaveLength(0)
}

it('removes declarations', () => {
  run(
    `a {
      stroke: 1px solid;
      flex: 1 0 auto;
      color: black;
    }`,
    `a {
      stroke: 1px solid;
      color: black;
    }`,
    {
      allowedPropNames: [
        'stroke', 'stroke-width', 'stroke-opacity', 'stroke-dasharray',
        'stroke-dashoffset', 'stroke-linecap',
        'stroke-linejoin', 'stroke-miterlimit',
        'fill', 'fill-rule', 'fill-opacity',
        'clip-path', 'mask',
        'opacity', 'color', 'stop-color', 'stop-opacity',
        'font-family', 'font-size', 'font-weight',
        'text-anchor', 'visibility', 'display',
      ],
    }
  )
})
