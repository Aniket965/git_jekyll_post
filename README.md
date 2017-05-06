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

## sample generated file 
```
---
layout: post
title:  "SenPaper"
date:   2017-04-09
excerpt: "this is android Experiment that Generates the Material Wallpapers by use of Sensors"
project: true
tag:
- android
- sensors
- experiment
- androidexperiment
- android-experiment
comments: false
---
## SenPaper<a href='https://play.google.com/store/apps/details?id=com.jarvis.scibots.SenPaper&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'/></a>
this is android Experiment that Generates the Material Wallpapers by use of Sensors

![](https://media.giphy.com/media/xUPGcA44UuYJCQxB2U/giphy.gif)

# Demo

![](https://media.giphy.com/media/S85sHCDOAfnyw/giphy.gif)

## About
> this app Generates Wallpaper with help of sensors , Light Sensors Decides the Color/main theme of Background of Wallpaper, Magnetic Sensor manipultes the colors of the shapes and shapes ratio as well, Proximity Sensor decides the Depth of the shapes , Accelerometer calculates the postion of the each shape, Number of shapes is decided by the time app is trained with sensors

## How App Works ?
 > hold start for as much time as much shapes you want  and move your phone  in funny manner  then release, app will generate the Wallpaper with help of the Recorded values that are Recorded in that holding time and will automatically save Wallpaper to storage .
 
 
## what next ?
> well if making wallpaper from sensors can give us fun , then breaking them may also give enjoyment ,it will be interesting if wallpaper is can make a story and people can read wallpaper and break stories from them. 

```

or you can see [demo](http://aniket965.tech/blog/SenPaper/) of this published post 