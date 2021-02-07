
const path = require('path');
const Webpack = require('webpack');
const glob = require('globby');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = env => {
    const entryGlob = [
        path.join('../src/app/**/index.{ts,js}')
    ];

    return {
        entry: () => new Promise((resolve) => resolve(
            glob.sync(entryGlob).reduce((entrypoint, eachPath) => {
                const parsePath = path.parse(path.relative(path.join('../src/app'), eachPath));
                const filename = path.join(parsePath.dir, parsePath.name);
                entrypoint[filename] = [eachPath];
                return entrypoint;
            }, {}))
        ),
        mode: 'production',
        resolve: {
            extensions: ['.js', '.ts'],
            modules: [path.resolve('../src'), path.resolve('../src', 'node_modules')]
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loader: 'ts-loader',
                    options: {
                        configFile: path.resolve('../tsconfig.compiler.json')
                    }
                },
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                babelrc: true
                            }
                        }
                    ]
                }
            ]
        },
        output: {
            path: path.resolve('../package')
        },
        plugins: [
            new CleanWebpackPlugin({
                cleanOnceBeforeBuildPatterns: [
                    '!../package/package.json',
                    '!../package/.npmignore'
                ]
            }),
            new Webpack.ProgressPlugin(),
            new BundleAnalyzerPlugin({
                analyzerMode: 'static',
                openAnalyzer: false
            })
        ]
    }
}