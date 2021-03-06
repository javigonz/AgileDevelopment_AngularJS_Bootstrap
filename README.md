# Agile Development with AngularJS + Gulp + Bootstrap

A simple application (Users Manager) in AngularJS for admin user, posts, albums.
The data are request from a general CDN (http://jsonplaceholder.typicode.com), exported in JSON.

It's uses Gulp to create a easy and quickly way to launch task that are repetitive and headache to the develpment team, like refresh browser, look for warnings and errors in JS files, start server in development, create package for production with CSS LESS, JS cleaner and compress it.

Click <a href="http://www.malagaenblancoynegro.com/AgileDevelopment_angularjs/index.html" >here</a> to view onLine


##The folder structure
```
  /app
      /controllers      
      /directives
      /services
      /partials
      /views
  /Content
  /Scripts    
```

## Dependencies
- AngularJS
- Bootstrap
- JQuery

## Usage
### Install global
```
$ npm install -g gulp
$ npm install -g bower
```

### Install local
```
$ bower install
$ npm install

```
### Configuration
```
Gulpfile.js -> Automated tasks
Packege.json -> Dependencies
bower.json -> Module Dependencies
.jshintrc -> Configuration

```

Gulpfile.js tasks
- When there are changes in HTML then browser it reload automatic
- Look for errors in js scripts and show its
- Developer server config
- Include libs installed by Bower
- Minimize CSS files and non used files
- Clean JS files


### Unit Test with karma
```

# Install Karma:
$ [sudo] npm install karma --save-dev

# Install plugins that your project needs:
$ [sudo] npm install karma-jasmine karma-chrome-launcher --save-dev

$ [sudo] npm install -g karma-cli

# Configure karma conf file:
$ karma init karma.conf.js
$ sudo npm install --save-dev angular-mocks

$ gulp unitTest

```
### Launch mode
```
Development -> $ gulp
Production -> $ gulp production

http://localhost:8080/
```


