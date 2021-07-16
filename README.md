# Welcome to the Falendar App

![screenshot of Falendar](public/img/FalendarScreenShot.png)

### Technologies Used
Database Structure:
    Mongo/Mongoose
Server:
    Express
Front-end Language:
    React.js
Back-end Language:
    Node.js

### Installation

Fork and clone this repo

run npm i to install dependencies

.env.local will require a connection to your separate server repo 

You will need an API key from  [Open Weather](https://openweathermap.org/api)  

## Approach

The goal was to make a stripped down calendar which is easy to read at a glance. 
Your regular events are available at the click of a button, but your daily itinerary 
is immediately available, which is really what most people really want anyway to 
stay on top of the days activities. 

React was uniquely suited to this challenge with its component based framework. We 
were able to leverage this functionality to send the daily itinerary to multiple views 
to keep the viewer organized. Also, any kind of calendar will benefit from being broken 
into several parts to reduce the lines of code within any one file and also greatly 
improves organization. 

Luckily there is a library built into React that we were able to use for a large portion 
of the calendar functionality. We leveraged this heavily to create a functional calendar 
within the time frame we were given. Then pop in a little weather api so you know what to 
expect for any outdoor activities and you are good to go!

## Wireframes

![PDF of wireframes](public/img/Group7.pdf)

