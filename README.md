# Hexo Pangu Better

[![npm-image]][npm-url]
[![lic-image]](LICENSE)

Server side [pangu.js](https://github.com/vinta/pangu.js) filter for Hexo.

## Installation

![size-image]
[![dm-image]][npm-url]
[![dt-image]][npm-url]

```bash
$ npm install hexo-pangu-better --save
```

## Expansion

- Add enable switch
- Support disable pangu for an article
- Only render for Markdown and HTML file

## Usage

``` yml
pangu:
  enable: true
```

## Disable for an article

You can disable pangu for an article by `unpangu: true`.

```
---
title: Hexo add darkmode
tags: [Hexo]
unpangu: true
keywords: [Hexo, Darkmode]
date: 2021-01-12 22:25:49
updated: 2021-01-12 22:25:49
---
```

## License

Released under the MIT License

[npm-url]: https://www.npmjs.com/package/hexo-pangu-better
[npm-image]: https://img.shields.io/npm/v/hexo-pangu-better?style=flat-square
[lic-image]: https://img.shields.io/npm/l/hexo-pangu-better?style=flat-square
[dm-image]: https://img.shields.io/npm/dm/hexo-pangu-better?style=flat-square
[dt-image]: https://img.shields.io/npm/dt/hexo-pangu-better?style=flat-square
[size-image]: https://img.shields.io/github/languages/code-size/rqh656418510/hexo-pangu-better?style=flat-square
