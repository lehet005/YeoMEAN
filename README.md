YeoMEAN GPA Calculator
======================

YeoMEAN is a Yeoman based, generator-angular-fullstack project created by Brian. This project includes quite a bit of automatically generated structure and template files. For this lab, your main goal is to build a GPA calculator that stores courses in a Mongo database and displays the overall GPA. You will want to spend some time browsing around the project with your partner once you fork the project and get the dependencies all set up. Good news! The project inculdes a couple tests to show you examples of ways to test your project.

## Dependencies to run:

You will need to have some global dependencies installed. These should be installed, if not, have Brian run these as root for you:

```sh
$ npm install -g yo && npm install -g grunt && npm install -g generator-angular-fullstack
```

To use yo generators, see [https://github.com/DaftMonk/generator-angular-fullstack](https://github.com/DaftMonk/generator-angular-fullstack)

For example, running ```yo angular-fullstack:route testing``` from a terminal will generate a page titled 'testing'.

Use a route to add a new page. This generates an HTML, CSS, controller, javascript file, and test template for the page you want to add. It also links in all of these files for you. Use this to generate the page for your GPA calculator (don't copy your existing files (or if you do, don't ask for help :P)).

Use the endpoint generator to add a new database (similar to Brian's movies database).

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

Play around with Mongo and this plugin, it's super helpful!

## What you should aim to accomplish

Re-implement the GPA calculator, but this time add the following features:
* Store the student's grades in the Mongo database.
* Display the course titles along with the number of credits and earned grades as an editable form. When the form is edited, the GPA gets recalculated.
* Add a button to add more courses. (This was not required last time, though I realize many of you did add such a button.)
* Edit the CSS so that the page looks different from the initial project you forked.

Along the way, *add at least two tests*. This week, I think you should be able to get some tests working. Use the example tests in the /client/app/umm/umm.controller.spec.js file as a guide. You should use Mongoose to create schemas as needed. Whenever you generate a new page, be sure to use the instructions above for adding a new route so that the appropriate things are created for you.

Update your README to include the following documentation that would help someone understand your project:
* What are some of the dependencies of the project (i.e. which libraries does it depend on)? Hint: dependencies are in .json files. Look up four libraries and briefly explain what they each do.
mongoose is the framework for mongo.
//
cookie-parser: parses a cookie value as a type of cookie it's assigned to. (i.e. cookieParser.JSONCookie, or cookieParser.signedCookie)
lo-dash is a framework similar to underscore, it provides a nice list of methods (such as _.forEach)
ejs is a template which removes the use of HTML from javascript.

* What is the structure of the project? What is the purpose of each folder?
//
The client folder contains EVERYTHING client-side.
within client there are the subfolders app, and component.
app contains our javascript and HTML files for the GPA calculator app.
components contains the css, html, and js for both the NAVBAR and the structure of the main website
The server file contains the mongodb server files and the mongoose schema files, this is our database that stores all of the information that the system needs to keep track of.

* What are models? Where are they located? What does the current model describe?
//
Models are located in the api folder in the server folder.  The models are the mongoose schema files which describe what data that the server will be expected to hold.
The current model for movies is course name, grade, value (GPA value), and credit.

* What are views? Where are they located? What is a layout? What is a partial? Identify places where a layout renders partials.
@@@@@@@@@@@@@@@@@@@@@@@@FINISH TO THIS@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


* schemas describe mongodb database schemas. What schema does your project have? What gets stored in the database?
@@@@@@@@@@@@@@@@@@@@@@@@FINISH TO THIS@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

The information we wish to get stored in our schema is stored there, so grade, credit, course name, and value (GPA value).

* What are routes? Open the route. Explain how each type of request gets processed. How does the resulting page change? How does the data in the database change?
@@@@@@@@@@@@@@@@@@@@@@@@FINISH TO THIS@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

* Explain how the result GPA result is calculated and how it gets rendered on the page.
Whenever you add a value, that gets stored into the database.  We then pull that and store in into an array.  We then pulled the information from the array and calculated the GPA in a function.  This passes it to the HTML using angular, so it automatically updates.
//
When a new class is added, it's credit value and grade value are stored into an array.  The GPA is then calculated by multiplying the grade values with the credits 
for each class, summing them, and then dividing the sum of credits for all classes.  This is displayed by a reference to a function which calculates and returns the GPA value.
The array which contains added grades is pushed to an identical array on mongoDB so that they do not disappear.

