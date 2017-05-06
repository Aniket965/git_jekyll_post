# git_jekyll_post

This is node module for automating the process making  posts in markdown files for jekyll theme based blog pages,
all public github projects posts will be created in ready to use markdown format for jekyll themes project details will be extracted from readme of that project and description will be taken from github project description 

[NPM](https://www.npmjs.com/package/git_jekyll_post)

## Install

```
npm install -g git_jekyll_post
```

OR

```
sudo npm install -g git_jekyll_post
```
## Usage

in which ever dir you want to generate posts , move to that directory

```
git_jekyll_post start
```

OR

```
sudo git_jekyll_post start
```
then enter username all the markdown for your github public projects will be created and stored in _posts dir under
current working directory