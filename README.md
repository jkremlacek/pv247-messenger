# React messenger [![Build Status](https://travis-ci.com/jkremlacek/pv247-messenger.svg?token=eG473enqTzynJD1qtNyc&branch=master)](https://travis-ci.com/jkremlacek/pv247-messenger)

This is a small chat-like project built on React (with Redux) for PV247 course at FI MUNI

## How to use

- To run this project run: `npm start` in project root directory.
- To test this project run: `npm test` in project root directory. *(note that you must have jest installed)*

### Note

*please note that the project depends on back-end running (predefined endpoint works only during the course)*

*once back-end is down you also need to run* 
https://github.com/jkremlacek/PV247-API 
*and change its address at* `/src/constants/api.js` *(*`API_URI` *+* `API_APP_ID` *(must be generated manually over backend API via HTML POST at /api/app))*

### Details

There are several prepared users in the app *(course online back-end only)*

- undefined@null.zero
- dad@family.com
- mum@family.com
- stranger@yahoo.com
- genius@yahoo.com
- nerd@yahoo.com

### Known issues

When running app repeatedly, the first attempt to login will fail and refresh the page. Second login attempt works fine.
