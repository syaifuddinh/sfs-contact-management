

# Contact Management

## How to install
- After pull from repository,  run : yarn install
- Open .env file, adjust API URL

## How to run
- After all installing procedures done, run : yarn dev
- This application would run on : http://localhost:3000
- You would see login page first, click "Don't have account ?" in order to register yourself
- Log-in with registered account

## Technologies
- Typescript
- React JS
- React Redux
- Firebase

## Routes
- /login = Login Page
- /registration = Registration
- / = Homepage or List Contact
- /contact/create  = Creating Contact Page
- /contact/:id = Detail Contact Page. You can edit and delete contact inside this page
- - /contact/:id/edit  = Updating Contact Page

## Directories
- src
    - assets
    - interfaces
    - layouts
    - models
    - pages
    - services
    - ui 
    - utils

### src
It contains main source code of this application
### assets
It contains CSS / SCSS file and images
### interfaces
It contains interfaces / data types for general components
### layouts
It contains layout component
### models
It contains reusable logics / central data processing
### services
It contains helper for calling API
### ui
It contains reusable basic component
### utils
It contains reusable logic, especially for simple task

## General description
Visit route "/" to see list product. You could see products and searching it. This page has pagination, each pagination contains max 10 products.
Visit route "/product/page" to create product. You could upload image, select category, fill title, fill measurement, and so on.
Visit route "/product/:id" to see detail product. You could update and delete contact inside this page
Visit route "/product/:id/edit" to update product
