
build/%.js: %.js
	flow check $<
	babel $< -o $@

run: build/query.js build/sql.js
	node $<

.PHONY: run
