install: #Установка проекта
	npm ci
lint: #Запуск eslint
	npx eslint .
lintFix: #Запуск eslint fix
	npx eslint . --fix
test: #Запуск теста Jest
	npx jest
publish:
	npm publish --dry-run
