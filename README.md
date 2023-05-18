# contactBookApp
the **contactBookApp** repo is a phone book app developed using python django rest framework as it backend with angularjs as it frontend with mysql as it underlying database structure. with this app user can add new contact,update contact ,delete contact,search and view contacts

the repository contains two branches. They are the **main** branch which contains the python django framework (banckend) and the **master** branch which contains the angularjs(frontend)

To access the project, download the zip folder of each branch respectively.
contactBookApp-main.zip
contactBookApp-master.zip

#INSTALLATIONS
## xampp server
download a [xampp server](https://www.apachefriends.org/) 

## database creation
create database called contacts
```
  CREATE DATABASE contacts
```
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
 
 the change directory into the contractproject 
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
 #extract contactBookApp-master copy it content paste it into a new  folder callend frontend
  change directory into the frontend folder
  ``` cd ./frontend
  ```
  run npm intall to download node modules
  ```
   npm install
  ```
 #start the angular server
 ```
   ng serve --open
 ```
