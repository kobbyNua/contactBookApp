# contactBookApp
the **contactBookApp** repo is a phone book app developed using python django rest framework as it backend with angularjs as it frontend with mysql as it underlying database structure. with this app user can add new contact,update contact ,delete contact,search and view contacts

the repository contains two branches. They are the **main** branch which contains the python django framework (banckend) and the **master** branch which contains the angularjs(frontend)

To access the project, download the zip folder of each branch respectively.
contactBookApp-main.zip
contactBookApp-master.zip

#INSTALLATIONS
## xampp server
download a [xampp server](https://www.apachefriends.org/) 
after a successful download of xampp server install it your local machine; create a control panel on the desktop when xampp ask you if you want to create a control panel
then open the control panel and start apache server and mysql server after a succesful server

## database creation
open a web browser and enter 127.0.0.1/phpmyadmin or localhost/phpmyadmin to access mariadb intaerface
on the phpmyadmin select **SQL** from the menu nav links after the **DATABASES** links

When the **SQL** menu is clicked a panel is displayed to allow you enter sql command
create database called contacts
```
  CREATE DATABASE contacts
```
after typing the command click on the **GO** button to create the database
## python installation
install the latest [python version](https://www.python.org/)

#Open a command prompt

## virtualenv enviroment installation
install virtualenv on command prompt or terminal
```
pip install virtualenv
```

## creating virtualenv environment

```
virtualenv env
```

## invoke the virtualenv 
```
.\env\scripts\activate
```
## create a project directory and change from the parent to project create on command prompt
```
 mkdir projects
 cd ./projects
```
still the command prompt you opened
## install django latest version 
```
pip install django

```
## install mysqliclient 2.0.3
```
  pip instal mysqliclient==2.0.3
  
 ```
 in some cases you have to install mysql connector python first
 ```
 pip install mysql-connector-python
 ```
## install django rest framework and it dependencies
```
pip install djangorestframework
pip install markdown
pip install django-filter
```
##install django cors header
```
  pip install django-cors-headers
```
## extract the contactBookApp-main.zip
 in the contactBookApp-main folder copy the contractproject folder which contains two folders (contactproject and contactsApp) and a file (manage.py) and paste into the projects folder you created
 
 After copying the contractproject into you project directory, the cd into the contractproject 
 ```
  cd ./contractproject
 ```
 
 ##Run migrations
 on the command prompt run makemigrations
 
 ```
  python manage.py makemigrations
 ```
 when the run sqlmigrate on the contactsApp folder with label 0001 to create all datbase table
 ```
  python manage.py sqlmigrate contactsApp 0001
 ```
 the run the migrte command to load the database table to the database
 
 ```
   python manage.py migrate
 ```
 #finally runserver
 ```
 python manage.py runserver
 ```
 to have django project running.
 it will run on 127.0.0.1:8000
 
 #Before angular frontend will work
 first install [nodejs](https://nodejs.org/en/download) and to have access to node package manager(npm)
 open a new command prompt to intstall angualrjs  globally via command prompt
 ```
 npm install -g @angular/cli
 ```
 create a folder on your desktop and name it **frontend** or any name you wish to name it
 #extract contactBookApp-master.zip; copy its content and paste its content into the frontend folder or the folder you created
 
 #change directory into the frontend folder
  
  ``` 
     cd ./frontend
  ```
  run npm intall to download node modules
  ```
   npm install
  ```
 #start the angular server
 ```
   ng serve --open
 ```
 after a succesfull compilation the app is run on localhost:42000

 # run localhost:4200 in the browser to access the app

# N.B when data is added for the first time it might delay to appear on the browser so just refresh the page to see the results and also don't close the xampp control panel or stop apache and mysql on the xampp control panel while running the django app
