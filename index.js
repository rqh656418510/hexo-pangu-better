/* global hexo */

'use strict';

const spacing = require('./lib/filter');
const pangu = require('pangu/src/browser/pangu');

const config = hexo.config;
const panguConfig = config.pangu;
const pluginEnable = panguConfig ? panguConfig.enable : false;

function validateFile(filePath) {
	if (!filePath || filePath === '') {
		return true;
	}
	var startIndex = filePath.lastIndexOf(".");
	if (startIndex != -1) {
		var type = filePath.substring(startIndex + 1, filePath.length).toLowerCase();
		return "md" === type;
	}
	return false;
}

hexo.extend.filter.register('after_post_render', data => {
	var postEnable = data.pangu;

	// if the value of postEnable is undefined or null
	if (postEnable == undefined) {
		postEnable = true;
	}

	if (postEnable && pluginEnable && validateFile(data.full_source)) {
		data.content = spacing(data.content);
		data.title = pangu.spacing(data.title);
	}
}, 8);