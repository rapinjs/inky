"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugin_1 = require("./plugin");
class InkyPlugin {
    afterInitRegistry({ registry }) {
        registry.set('inky', new plugin_1.Inky());
    }
}
exports.default = InkyPlugin;
//# sourceMappingURL=index.js.map