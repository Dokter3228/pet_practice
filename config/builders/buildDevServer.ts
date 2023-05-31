import { type BuildOptions } from "./types/config"
import type * as webpackDevServer from 'webpack-dev-server'

export function buildDevServer (options: BuildOptions): webpackDevServer.Configuration {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
    hot: true
  }
}
