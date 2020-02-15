lint:
	npx eslint --ext .js ./
	npx eslint --ext .js ./ --fix
.PHONY: install

lint-fix:
	npx eslint --ext .js ./ --fix
.PHONY: lint-fix

