# angular-q-extras

Download with `bower install angular-q-extras --save`

TODO

### Example
```javascript
TODO
```

### Setup
```
npm install
grunt build
```

### How create library

Interactively create a package.json file and create Gruntfile.js file
```
npm init
npm install grunt --save-dev
npm install <LIBRARY> --save-dev
```

Setup package manager
```
bower init
bower install angular --save
bower install <LIBRARY> --save
```

### Publish library
```
git tag vx.y.z
git push origin master --tags

npm adduser
npm publish ./

bower register angular-q-extras git://github.com/niqdev/angular-q-extras.git
bower info angular-q-extras
```
