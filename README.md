###### Simple, integrated, console based testing for the PAGE framework ######

Allows easy initiation of testing over all testable code written within the PAGE(dog) framework.

Open up your console (preferably in chrome). In your console type ```PAGE.runAllTests()``` to see results

> Features
> + Asynchronous and synchronous testing
> + Dynamically load tests as seperate files.
> + Config based list of test files.
> + Tests are not loaded until you call PAGE.runAllTests(), saving bandwidth. 
> + Tests are easily married to the PAGE framework constructors, modules, or Properties.
> + Tests can be broken out into individual test files for more portability.

Future enhancements
==
Integrating the tests with automated building, TeamCity

Functions to test
```Javascript
PAGE.add$("Constructors.Dummy", function($base) {
  var dog = {
    addEasy : function(a,b) { return a+b }
    , $base : $base
    , changeInner : function(text) { $base.html(text); return this }
  }
  return dog
})

PAGE.add$("Constructors.BrilliantCode", function($base) {
  var dog = {
    addEasy : function(a,b) { return a+b }
    , $base : $base
    , changeInner : function(text) { $base.html(text); return this }
  }
  return dog
})

PAGE.add("Constructors.ReallyDumb", function() {
  var dog = { }

  dog.example = function(val, callback) {
    setTimeout(function() {
      callback(val)
    }, 1000)
    return this
  }

  return dog
})

```
tests.config.js

```JavaScript
PAGE.wait("setTests", function(setTests) {
  setTests([
      "synchronousExample.js"
      , "asynchronousExample.js"
  ])
})
```

Synchronous Testing : runTests.js

```JavaScript
PAGE.addTests("Constructors.Dummy", function(Constructor, Test) {

  var $mock = $("<div>")
    , module = Constructor($mock)

  new Test("make sure it adds right", function() {
    return module.addEasy(1,2) === 4
  })

  new Test("make sure it changes the inner stuff", function() {
    module.changeInner("dog")
    return module.$base.html() === "dog"
  })

})

PAGE.addTests("Constructors.BrilliantCode", function(Constructor, Test) {

  var $mock = $("<div>")
    , module = Constructor($mock)

  new Test("make sure it adds right", function() {
    return module.addEasy(1,2) === 3
  })

  new Test("make sure it changes the inner stuff", function() {
    module.changeInner("dog")
    return module.$base.html() === "dog"
  })

})
```
Asynchronous Testing

```JavaScript
PAGE.addTests("Constructors.ReallyDumb", function(ReallyDumb, Test, TestWaiter) {

  var module = ReallyDumb()

  new TestWaiter("Async Tests", function(series, go, call) {

    series.push(function() {
      module.example(42, function(val) {
        call({ result : (val === 42), name : "try async example" })
        go()
      })
    })

    series.push(function() {
      module.example(12, function(val) {
        call({ result : (val === 12), name : "try async example again" })
        go()
      })
    })

    go()
  })

})
```
