# Fix the Dependencies

## Overview

In this lab, we're going to explore how to resolve dependency issues in Node.js. We've provided a bare-bones project in lib/ — it currently fails all its tests. Your job is to make sure the tests pass.

## Goals

1. Explain errors that npm prints during `npm install`
2. Determine solutions based the errors that npm provides
3. Explain npm peerDependencies

## Getting started

Run `npm test` — you'll notice that everything crashes. Like before, we'll need to install a few packages just to get tests to run. But even with those packages installed, things won't run quite as expected.

## `peerDependencies`

Before we set you loose, there's one last thing we need to introduce (and we promise not to make the whole introduction in rhyming couplets).

npm has a concept of `peerDependencies` that's important to understand. `peerDependencies` (which can be declared in a `package.json` just like `dependencies` and `devDependencies`) describe packages that require a "host" package — you can think of `peerDependencies` as plugins. One example of a host package that we've already encountered is [Chai.js](http://chaijs.com/plugins/). Each Chai plugin has `chai` as a `peerDependency`, meaning that the plugin expects that it will be required in an environment that also has `chai`.

**NOTE**: There will be a warning that a peerDependency hasn't been met _no matter what_. It's currently an open issue on npm: https://github.com/npm/npm/issues/3218. The trick is still to make sure to get the _right_ version of the peerDependency from the repository that we've provided. (Remember that you can refer to specific commits.)
