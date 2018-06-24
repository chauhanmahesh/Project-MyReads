# MyReads Project

My submission of the project "MyReads" where I tried to use thr React concepts which I learned as part of "React Fundamentals".
The concepts which I tried to use in this projects are as follows:
* Composition (Rendering UI by composing different React components)
* State Management
* Lifecycle Events (Used constructor and componentDidMount)
* React Route (To route to different page like '/search')
* PureComponent (To avoid component to rerender multiple times even if there is no change in props and states)

## Features
* Home page displays a list of 3 shelves "CurrentlyReading", "Want to Read" and "Read".
* Each shelf lists the books which belongs to that shelf. So if you are currently reading a book, it will be present in "Currently Reading".
* If there is no books in a shelf, it displays a message to user explaining why's that.
* User can move books in between the shelf by clicking on the dropdown menu (present with each book) and select appropriate shelf.
* Dropdown shows the shelf as ticket where the book is currently placed.
* If user wants to remove the books from all shelves, they can select 'None' in the shelf changer menu.
* User can tap '+' icon on the bottom right to move to Search page.
* Search page let's user to search based on title or author (Please note only these search terms are supported right now [SEARCH_TERMS.md](SEARCH_TERMS.md)
* If search results contains a book which is currently on any shelf, it displays that shelf as ticked in the shelf change dropdown menu.
* User can move books from search page to any shelf using the dropdown menu.
* To clear the search text, user can also tap on "close" icon which is visible on the right side of search input.
* User can press back on browser or "back" icon on the top left to go back to shelves page.

## Installation and Launching

To launch this "MyReads" app:
* install all project dependencies with `npm install`
* start the development server with `npm start`

Note: You can also use `yarn install` and `yarn start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app.
    ├── App.js # This is the root of your app.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── Author.js # To render author of a book.
    ├── Book.js # To render single book in bookshelf and in Search page.
    ├── Books.js # To render collection of books in shelf and in Search page.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── Bookshelf.js # To render a single bookshelf. There are different types of bookshelf which includes 'Currently Reading', 'Want to read' and 'Read'.
    ├── BookShelfChanger.js # To render a UI which let user to update the book shelf where it belongs.
    ├── Bookshelves.js # To render collection of Bookshelf. There are 3 shelf in this app which includes 'Currently Reading', 'Want to read' and 'Read'.
    ├── SearchBooks.js # To render the search page where user can search any books.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    │   └── cancel.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Backend Server

The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods to do necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in the app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing
For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
