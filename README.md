YeoMEAN GPA Calculator
======================

A Yeoman based, generator-angular-fullstack project.

## Dependencies to run:

You will need to have some global dependencies installed. Ask Brian if these are installed on the machine you are on. If not, have him run these as root for you:

```sh
$ npm install -g yo && npm install -g grunt && npm install -g generator-angular-fullstack
```

To use yo generators, see [https://github.com/DaftMonk/generator-angular-fullstack](https://github.com/DaftMonk/generator-angular-fullstack)

For example, running ```yo angular-fullstack:route testing``` from a terminal will generate a page titled 'testing'.

## To Develop

Run ```grunt serve``` to start node and run the web application on [http://localhost:9000](http://localhost:9000). (The page will be opened automatically by grunt)

To run tests, run ```grunt test```.

## To Setup Mongo Plugin in WebStorm

* Go to File > Settings
* Then navigate to Plugins
* Search for "Mongo" and install "Mongo PLugin" (this will require WebStorm to be restarted)
* Once WebStorm is re-opened, there will be a Mongo Explorer tab on the righthand side of the window.
* Open the tab and click the gear and wrench icon (when hovered over, it says "Mongo Settings").
* Enter in "/usr/bin/mongo" to the path of the Mongo executable and click test.
* In the same settings menu, click the green "+" and add the database "yeoman-dev" and label it the same.

To use the plugin, open the Mongo Explorer tab and right click on the yeomean-dev server and choose "refresh this server". You can then double click on your dabatase and view its contents.
