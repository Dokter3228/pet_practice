const path = require("path")
const {buildLoaders} = require("../builders/buildLoaders");

module.exports = ({ config }) => {

    config.resolve.modules = [
        path.resolve(__dirname, "..", "..", "src"),
        "node_modules",
    ]

    config.module.rules = buildLoaders({isDev: true})

    return config
}