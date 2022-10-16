#web
First we created an app named web.
Then we installed bootstrap in it using the code "npm install".
Inside the app we then created three components globally using "ng g c componentname".
Then we designed these components using html and css and added functions in respective typescript files and called these fuctions inside respective html files inside a button tag.
Atlast we called these three components inside app.component.html file which created by default.

Along with this we used the concept called 'service' in this project.
Service is any piece of code that is shared by controller, which can be used anywhere we need.
In this , we created a folder named service inside the app and inside it we created a file named 'info-service.ts'.Instead of this we can create a service using 'ng g service servicename'.
inside this file we made a class named 'myservice' and inside the class we made a function named 'onclickbtn'.Now we can use the fuction 'onclickbtn'(which is a piece of code) anywhere 
the app.Here we injected the function 'onclickbtn' inside the ts file of component named 'Iot' using the service concept.
