<h1 align="center">Kyouko</h1>
<p align="center">
  <b>Wrapper for managing the <a href="https://kyouko.se/">kyouko.se</a> api in simple and sane</b>
  <br><br>
  <a href="https://npmjs.com/package/kyouko"><img src="https://img.shields.io/npm/v/kyouko?style=flat-square" alt="NPM Version"></a>
    <img src="https://img.shields.io/bundlephobia/min/kyouko?style=flat-square" alt="NPM Bundle Size">
    <img src="https://img.shields.io/david/tentaclenotsoft/node-kyouko?style=flat-square" alt="Dependencies">
    <a href="https://github.com/tentaclenotsoft/node-kyouko/blob/master/LICENSE"><img src="https://img.shields.io/github/license/tentaclenotsoft/node-kyouko?style=flat-square" alt="License"></a>
    <a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square"></a>
</p>

## Installation

```bash
# with npm
$ npm install kyouko

# or with Yarn
$ yarn add kyouko
```

## Documentation

### Kyouko(token)

```js
new Kyouko(token)
```

- `token` - The your api key to perform operations on the service

#### upload(path)
Upload file

- `path` - Relative or absolute file path

>**Returns**: &nbsp;&nbsp; [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>

#### delete(id)
Delete file

- `id` - File identification number

>**Returns**: &nbsp;&nbsp; [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>

#### files()
Gets all your files sent

>**Returns**: &nbsp;&nbsp; [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>

#### me()
Details about user

>**Returns**: &nbsp;&nbsp; [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>

#### createAlbum(name)
Create a new album

- `name` - Name for the album

>**Returns**: &nbsp;&nbsp; [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>

#### deleteAlbum(id)
Delete a exists album

- `id` - Album identification number

>**Returns**: &nbsp;&nbsp; [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>

#### albums()
Get information from all your albums

>**Returns**: &nbsp;&nbsp; [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>