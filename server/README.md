# React POC



## Security
Implicit Grant using Okta as the Authorization Server and Okta hosted login page

## Tools
#### ESlint and AirBnb Javascript Style Guide 
 This project uses [ESLint](https://eslint.org/) and [AirBnb Javascript Syle Guide](https://github.com/airbnb/javascript)
 
 Using a style guide allows us to adhere with community defined standards without figuring it out our own. AirBnb is one of the common style guides out there.
 
 #### Prettier Integration
 This project [Prettier](https://prettier.io/) to apply code formatting so that every contributor can adhere to a specific format
 
__For Webstorm IDE formatting__ 

We can configure Webstorm to use prettier when formatting code on save of our Javascript files

1. Go to _File > Settings > Tools File Watchers_

2. Click the plus button to add a watcher

3. Select Prettier and accept all the defaults

Alternatively you can run prettier in Webstorm by using a hotkey _Ctrl + Alt + Shift + P_

##### Currently overridden Prettier options

- Use of single quote - will enforce / fix code with double quotes to single quotes

See default options [here](https://prettier.io/docs/en/options.html)

#### Type Checking
This projects is currently using the react [prop-types](https://www.npmjs.com/package/prop-types) type checking. We can look into using _Flow_ or _Typescript_ as well