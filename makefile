test:
	mocha $(shell find test -name "*test.js") --test --reporter spec
mostcommon:
	mocha $(shell find test -name "*mostcommon-test.js") --test --reporter spec
.PHONY: test

