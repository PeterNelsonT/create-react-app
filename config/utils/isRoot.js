/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

 'use strict';

 function isRoot() {
	return process.getuid && process.getuid() === 0;
 }
 
 module.exports = isRoot;
 