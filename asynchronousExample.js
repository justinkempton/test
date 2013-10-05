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
