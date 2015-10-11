
#
# Install Medium on your machine.
#

install: node_modules
	@npm link
	@echo
	@echo "\x1B[97m  medium \x1B[90m·\x1B[39m Successfully installed Medium!"
	@echo "\x1B[97m         \x1B[90m·\x1B[39m Run \`medium\` for a list of commands."
	@echo

#
# Install node modules with npm.
#

node_modules: package.json
	@npm install
	@touch node_modules

#
# Phony targets.
#

.PHONY: install
.PHONY: test