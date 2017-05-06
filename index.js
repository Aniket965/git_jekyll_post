#!/usr/bin/env node

git_jekyll_post = require('./git_jekyll_post');

if( process.argv[2] == 'start')
	git_jekyll_post();