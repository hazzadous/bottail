help:
	@echo
	@echo "  \033[34mstart\033[0m - starts webserver serving static frontend"
	@echo

start:
	cd web && yarn start

.PHONY: start