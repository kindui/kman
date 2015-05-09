A very light web building system. Config it in config.json.

[![NPM version][npm-image]][npm-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/webproxy.svg?style=flat-square
[npm-url]: https://npmjs.org/package/webproxy
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/webproxy.svg?style=flat-square
[download-url]: https://npmjs.org/package/webproxy




Install
--------------

```
$ npm install -g kman
$ maybe need: sudo npm install -g kman
```


Quick Start
--------------

### 1、init sample project
```
$ kman init
```

### 2、debug mode(can dynamic watch/build some conf file).
```
$ kman debug
```

### 3、build dist
```
$ kman build
```

### config.json
```javascript
{
      "name": "sample_project",
      "dist_path":"dist",
      "static_build_path": [
            {
                  "src": "src/page",
                  "dist": "dist/page"
            },
            {
                  "src": "src/common",
                  "dist": "dist/common"
            },
            {
                  "src": "src/image",
                  "dist": "dist/image"
            }

      ],
      "all_pack_path": "dist/common",
      "all_pack_name": "package.js",        //the name of just one libs.
      "modules": [
            {
                  "src_path": "src/common/config",
                  "dist_path": "src/common",
                  "dist_name": "package.js",
                  "pack_to_libs": true,     //whether pack to one libs.
                  "is_dev":true,            //debug mode. dynamic build
                  "pack_list": [
                        "require.js",
                        "isDist.js",
                        "require-config.js"
                  ]

            },
            {
                  "src_path": "src/common/config",
                  "dist_path": "dist/common/config",
                  "dist_name": "configs.js",
                  "pack_to_libs": true,
                  "pack_list": [
                        "require.js",
                        "isDist.js",
                        "require-config.js"
                  ]

            },
            {
                  "src_path": "src/common/lib",
                  "dist_path": "dist/common/lib",
                  "dist_name": "libs.js",
                  "pack_to_libs": true,
                  "pack_list": [
                        "jquery.js"
                  ]

            },
            {
                  "src_path": "src/common/util",
                  "dist_path": "dist/common/util",
                  "dist_name": "utils.js",
                  "pack_to_libs": true,
                  "pack_list": [
                        "template.js"
                  ]

            },
            {
                  "src_path": "src/common/widget",
                  "dist_path": "dist/common/widget",
                  "dist_name": "widgets.js",
                  "pack_to_libs": true,
                  "pack_list": [
                  ]

            },
            {
                  "src_path": "src/page/index",
                  "dist_path": "dist/page/index",
                  "dist_name": "main.js",
                  "pack_list": [
                        "main.js"
                  ]

            }
      ]

}
```

--------------

Author: human huang

QQ    : 316996367

Email : halfthink@163.com

交流Q群: 415719701
