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
