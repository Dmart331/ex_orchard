# Pear and Oak Tree Orchard Simulator

## Setup

These commands are a helpful quick start. You may choose to ignore them completely and create your own directory structure. If you choose to use this recommendation, just copy the commands below and paste. It doesn't matter what directory you are currently in.

```bash
mkdir -p ~/workspace/exercises/mjd/orchard && cd $_
```

## Instructions

Use Jasmine to write your unit tests before you begin writing **any** implementation code.

### Unit Tests

1. There should be a `Plant` function defined.
1. There should be a `Tree` function defined.
1. There should be a function named `increaseHeight` on the prototype of Plant.
1. There should be a function named `decreaseHeight` on the prototype of Plant.
1. There should be a `height` property on Plant.
1. There should be a function named `grow` on the prototype of Tree.
1. There should be a function named `trim` on the prototype of Tree.
1. When you invoke the `trim` method on Tree, the height of the Tree should be reduced by the integer value that is passed as an argument (e.g. `PearTree.trim(2)`)
1. When you invoke the `trim` method on Tree, the values of the `branches` property should be decreased by one.
1. When you invoke the `grow` method on Tree, the height of the Tree should be increased by the integer value that is passed as an argument (e.g. `PearTree.grow(2)`)

### Requirements & Behavior

> Reference: Checkout the [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval) and [clearInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/clearInterval) functions in JavaScript

1. Create a Plant function.
1. Create a Tree function.
1. Plant should be the prototype of Tree.
1. Plant should have a property of `height`.
1. The Plant prototype should have two methods on it: `increaseHeight` and `decreaseHeight`. Each method should accept an integer value as input.
    ```js
    Plant.prototype.increaseHeight = function (growth) {

    }
    ```
1. `increaseHeight` should increase the value of the `height` property by the amount passed in as an argument.
1. `decreaseHeight` should decrease the value of the `height` property by the amount passed in as an argument.
1. Tree should have a property of `branches`.
1. The Tree prototype should have two methods on it: `grow` and `trim`.
1. The `grow` method should accept an integer value as input.
    ```js
    Tree.prototype.grow = function (amount) {

    }
    ```