# Fanvue's Fullstack challenge

Setup the project:

Make sure you install all the dependencies (currently yarn, but you can opt-out) and start the solution in dev mode.

There is a simple homepage with links to the tasks below.

First Task:

- in the "feed" page, show a centered column of posts (use https://jsonplaceholder.typicode.com/ to get the data) which are simple boxes with the title and body properties returned
- for each post, fetch its relative comments and show the counter, or nothing if there are no comments
- when clicking on the comment counter, the comments appear below it

Second Task:

- create a "vault" page, showing a responsive grid of square pictures (use https://jsonplaceholder.typicode.com/ to get the data) which are simple thumbnails
- when clicking on a thumbnail, the fullscreen image opens

Touch base on the following:

- SSR considerations, if you have time, implement a simple server-side rendering
- Type the responses from the API calls
- create meaningful tags in the head of each page, or any other SEO consideration
- add the favicon stealing it from fanvue.com ;)
- a11y considerations

Note:

- Styling is not required, you should use MUI5 components out-of-the box, check docs here https://mui.com/material-ui/
- You can install your favourite fetch library, but you can also use the built-in fetch API
