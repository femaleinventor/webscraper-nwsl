const rootDir = require('app-root-path');

const folder = {
    root: {
        package: rootDir + '/package.json',
        webpack: rootDir + '/webpack.config.js',
        gulp: rootDir + '/gulpfile.js'
    },
    controller: {
        statistics: {
            players: {
                index: rootDir + '/server/statistics/players',
                players: rootDir + '/server/statistics/players/players.js'
            },
            teams: {
    
            }
        }
    },
    build: {
        everything: rootDir + '/build/**/*',
        path: rootDir + '/build',
        js: rootDir + '/build/index.bundle.js',
        css: rootDir + '/build/AppStylesMin.css'
    },
    test: {
        everything: rootDir + '/test/**/*'
    },
    client: {
        index: rootDir + '/src/client/index.html',
        path: rootDir + '/src/client'
    },
    components: {
        everything: rootDir + '/src/client/components/**/*',
        index: rootDir + '/src/client/components/index.jsx',
        path: rootDir + '/src/client/components',
        partials: rootDir + '/src/client/components/partials'
    },
    js: {
        everything: rootDir + '/src/js/**/*',
        path: rootDir + '/src/js',
        index: rootDir + '/src/client/js/index.js'
    },
    styles: {
        everything: rootDir + '/src/client/styles/**/*',
        path: rootDir + '/src/client/styles',
        index: rootDir + '/src/client/styles/index.less'
    }
}

module.exports = { folder: folder };