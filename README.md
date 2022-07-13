# kdu-jest

Jest Kdu transformer with source map support

## Usage

```
npm install --save-dev kdu-jest
```

## Setup

To define kdu-jest as a transformer for your .kdu files, you need to map .kdu files to the kdu-jest module.

```
"transform": {
  ".*\\.(kdu)$": "<rootDir>/node_modules/kdu-jest"
},
```

To use source maps, you need to set `mapCoverage` to `true`. A full config will look like this.

```json
{
  "jest": {
    "moduleFileExtensions": [
      "js",
      "json",
      "kdu"
    ],
    "transform": {
      "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
      ".*\\.(kdu)$": "<rootDir>/node_modules/kdu-jest"
    },
    "mapCoverage": true
  }
}
```

## Supported langs

kdu-jest compiles the script and template of SFCs into a JavaScript file that Jest can run. **It does not currently compile the style section**.

### Supported script languages

- **typescript** (`lang="ts"`, `lang="typescript"`)
- **coffeescript** (`lang="coffee"`, `lang="coffeescript"`)

### Supported template languages

- **pug** (`lang="pug"`)
- **jade** (`lang="jade"`)
