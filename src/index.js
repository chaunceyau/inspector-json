const smelly = require('./smelly-deps')
const fs = require('fs')

module.exports = {
  onPreBuild: function ({ utils, inputs }) {
    const json = JSON.parse(fs.readFileSync(inputs.path || './package.json', 'utf8'))
    if (!json) { return }

    let smellyDependencies = []
    for (dependency in json.dependencies) {
      const match = smelly.knownSmellyDependencies.find(smelly => smelly.title === dependency)
      if (match) {
        smellyDependencies.push({ title: dependency, reason: match.reason })
      }

      for (const smellyPrefix of smelly.knownSmellyPrefixes) {
        if (dependency.startsWith(smellyPrefix.prefix)) {
          smellyDependencies.push({ title: dependency, reason: smellyPrefix.reason })
        }
      }
    }

    if (smellyDependencies.length > 0) {
      utils.build.failBuild(`The following dependency(s) almost shipped with your application: ${smellyDependencies.map(dep => dep.title).join(', ')}`)
    }
  }
}
