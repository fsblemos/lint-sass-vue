This linter plugin is a fork of [AtomLinter/linter-sass-lint](https://github.com/AtomLinter/linter-sass-lint) that provides an interface to [sass-lint](https://github.com/sasstools/sass-lint) for [Vue.js](https://vuejs.org).

It will parse **.vue** files with style tags in scss or sass language:

```html
<template>
<!-- your tamplate here -->
</template>

<script>
  export default {
    props: {
      // ...
    },
  };
</script>

<style lang="scss" scoped>
/* your rules here */
</style>
```

#### Plugin installation

`apm install sass-lint-vue`

#### .sass-lint.yml

A .sass-lint.yml config file is required for this linter. You can find an example of one [here](https://github.com/fsblemos/lint-sass-vue/blob/master/.sass-lint.yml).

If you already have a `.sass-lint.yml` file, make sure there is the pattern `'**/*.vue'` in the `include` property.

By default this plugin will search up the directory tree for this file, you can also specify a path to this config file in the plugin settings or in `~/.atom/config.cson` file. Usually you would place this config file in your projects root and keep it under version control too.

You can use the `noConfigDisable` option to prevent any attempts at linting (and the missing config error messages you will encounter) if a valid config is not found.

By default a config file found in the root of your currently open project will take preference over a config file specified with the `configFile` option.

### Settings

There are three options you can configure either within the plugin or by editing your `~/.atom/config.cson` file.

* `noConfigDisable` - Enable to prevent any linting if a valid config file (`.sass-lint.yml`) is not found in the project root.

* `configFile` - this is path to a `.sass-lint.yml` config file, this should only be used if you'd like to specify a global config file rather than rely on a project config file in the root of your project.

* `globalNodePath` This is where you can set your global node installation path. Run `npm get prefix` and paste the result here. This will be where `linter-sass-lint` will then search for the globally installed version of `sass-lint` if you choose to enable this with `globalSassLint`.

* `globalSassLint` This allows you to specify that you want to use your globally installed version of `sass-lint` (`npm install -g sass-lint`) instead of the version bundled with `linter-sass-lint`.

* `resolvePathsRelativeToConfig` This option allows you to choose to resolve file paths relative to your config file rather than relative to the root of your currently open project.
