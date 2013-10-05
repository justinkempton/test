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
