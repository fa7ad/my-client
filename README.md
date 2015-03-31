# NogorAds client landing page template
[![Dependency Status](https://david-dm.org/fa7ad/NogorAds.svg?style=flat-square)](https://david-dm.org/fa7ad/NogorAds)
[![devDependency Status](https://david-dm.org/fa7ad/NogorAds/dev-status.svg?style=flat-square)](https://david-dm.org/fa7ad/NogorAds#info=devDependencies)
[![Project is in Beta Stage](https://img.shields.io/badge/stage-beta-orange.svg?style=flat-square)](#)
[![CC-BY-SA License](https://img.shields.io/badge/License-CC--BY--SA-brightgreen.svg?style=flat-square)](#)
[![Build Status](https://travis-ci.org/fa7ad/adkave-client.svg?branch=master&style=flat-square)](https://travis-ci.org/fa7ad/adkave-client)

This is a template for a nogorads clients' landing page

## Requirements

You'll need to have the following items installed before continuing.

  * [Node.js](http://nodejs.org): Use the installer provided on the NodeJS website.
  * [Ruby](http://ruby-lang.com): Download Ruby for your OS
  * [Grunt](http://gruntjs.com/): Run `[sudo] npm install -g grunt-cli`
  * [Bower](http://bower.io): Run `[sudo] npm install -g bower`
  * [Jekyll](http://jekyllrb.com/): Run `[sudo] gem install jekyll`

## Quickstart

```bash
git clone git@gitlab.com:nogrweb-git/nogorads-client.git
npm install
bower install
grunt build
```

While you're working on your project, run:

`grunt`

And you're set!

# Edit .travis.yml before final deployment

## Directory Structure

  * `scss/_settings.scss`: Foundation configuration settings go in here
  * `scss/style.scss`: Application styles go here
  * `src/app.js`: Application Javascript go here
