// export default KNOWN_SMELLY_DEPENDENCIES = [
module.exports = {
  knownSmellyPrefixes: [
    {
      prefix: '@testing-library',
      reason: '@testing-library should be a devDependency...'
    },
    {
      prefix: '@types',
      reason: '@types should be a devDependency...'
    }
  ],
  knownSmellyDependencies: [
    {
      title: 'typescript',
      reason: 'Should not ship ts with client...',
      version: 'any',
      critical: true
    },
    {
      title: 'fs',
      reason: 'fs, ya.',
      critical: true,
      version: '0.1.1'
    }
  ]
}