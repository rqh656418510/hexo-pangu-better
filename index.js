/* global hexo */

'use strict';

const spacing = require('./lib/filter');
const pangu = require('pangu/src/browser/pangu');

const config = hexo.config;
const pangu_config = config.pangu;
const plugin_enable = pangu_config ? pangu_config.enable : false;

if (!plugin_enable) {
  return;
}

function isHtml(filePath) {
  var startIndex = filePath.lastIndexOf(".");
  if (startIndex != -1) {
    var type = filePath.substring(startIndex + 1, filePath.length).toLowerCase();
    return "html" === type;
  }
  return false;
}

hexo.extend.filter.register('after_post_render', data => {
  if (!data.unpangu && isHtml(data.path)) {
    data.content = spacing(data.content);
    data.title = pangu.spacing(data.title);
  }
}, 8);