# Inspector JSON

This plugin runs through your `package.json` and ensures you are not shipping any dependencies that you shouldn't be. Examples include: shipping @types, @testing-library, typescript, etc.

### Basic Example

```toml
[[plugins]]
package = 'netlify-plugin-inspector-json'
```

### Custom path
By default, the plugin assumes your `package.json` lies in the root directory. You can provide a custom path in your `netlify.toml` if desired.

```toml
[[plugins]]
package = 'netlify-plugin-inspector-json'
  [plugins.inputs]
  path = 'yourpathhere'
```
