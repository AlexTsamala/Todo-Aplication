# Getting Started with Create React App

## Table of contents
- [How to run project](#How-to-run-project)
  - [Available Scripts](#Available-Scripts)
  - [`npm start`](#npm-start)
  - [`npm test`](#npm-test)
  - [`npm run build`](#npm-run-build)
  - [`npm run eject`](#npm-run-eject)
- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run project
- this is mini project where customers can create, read, update and delete comments.Also they can do replies to others and then also delete and update this info.

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Overview
- This is a full stuck Todo application where customers can add todo list ,mark as done ,delete ,filter by all active complete and clear all completed todos.

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- React
- Node.js
- useState
- responsive
- useEffect
- functions
- hover
- axios
- Dom
- Json
- findIndex
### What I learned

I learned 2 main thinks in web programming React and node.js.Also i learned how to use axios ,jsx, react functions,react hooks,postgresql,React components and http requests.


```Javascript
const [enter,setEnter] = useState("")
    const enterButton = async (event) => {
        if(event.keyCode === 13 && enter !== "") {
            const response = await axios.post("http://localhost:4001", {
                todoText: enter,
                status: status,
                });
                console.log(response)
                addList();
                setEnter("");
        }
    }

```


### Continued development
 
It was most important project for me because i used React ,node.js and data base to build project .I am looking forward to learn tailwind to write css more easily and also learn how to attach node.js to server.

### Useful resources

- [Example resource 1](https://www.youtube.com/watch?v=gv9ugDJ1ynU&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=25) -Great tutorial to learn all important details in React.
- [Example resource 2](https://www.w3schools.com/sql/sql_create_table.asp) - Learn how to write SQL orders; 

## Author

- Website - [Alexander Tsamalashvili](https://github.com/AlexTsamala)
- Frontend Mentor - [Otar Zakalashvili](https://www.linkedin.com/in/otarza/)
- Linkdin - [myLinkdin](https://www.linkedin.com/in/aleksandre-tsamalashvili-40501a1a0/)


## Acknowledgments

I got huge help from my mentors Nika Nozadze and Beka Zandukeli.