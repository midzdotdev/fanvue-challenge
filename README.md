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

## My notes

I managed to implement each of the tasks, aside from the extension points.

I tried a new technique for showing skeletons while loading data this time. It's mentioned in the MUI docs that skeletons can infer the size of their loaded counterparts by specifying them inside text elements and boxes. While I didn't find that to always be the case, it was useful. Just modify the size of the skeleton where necessary. Having the skeletons within the components themselves, ensures that the layout of the skeletons is aligned well with the actual layout once loaded and rendered fully. I'm not 100% whether I'll continue to use this pattern in the future, but it was certainly interesting.

Something that took way too much time was being too smart, lazy loading the comments counter for each post. The structure of the json placeholder endpoints weren't exactly ideal for counting the comments. For this particular challenge, it would have been better to get all comments and reduce to get the count, grouping by `postId`. The result here is more network requests which is not ideal. In a production app with a backend, we'd instead pass in the comments count (or the first page of comments) within each post of the first posts result page.

That moves us onto pagination, which would have to be implemented for a production app. We would have an infinite scroll (ideally virtualised), which would fetch more pages as we scrolled and neared the end of the rendered results. I've implemented this in the past but it would have been too taxing for this challenge unfortunately.

In response to "Touch base on the following":

- I didn't have time to implement SSR, but since all the endpoints are static in this example it would be feasible. Hypothetically if the remote data was changing then it would be worth looking at ISR. Prerendering is always a good idea for rapid response times.
- The API calls are typed.
- Meaningful tags could apply the relevant meta tags to the head of each page
  - Consider using schema.org-compliant metadata via JSON-LD for good SEO
  - Use OpenGraph for meaningful link previews with a thumbnail, title, description etc.
- Added Fanvue favicon
- As for accessibility:
  - ensure aria labels for icon buttons and any non-text elements
  - add keyboard navigation where appropriate
  - ensure the correct aria-roles for each element on the page
  - ensure any decoration on the website has aria-role "presentation"
  - for visual impairments, ensure contrast between elements respects WCAG at the chosen level
  - respect the user's 'reduced motion' preference in any animations

I think that's it! I was 20 minutes or so overtime by writing this addendum so apologies for that.

The code is a bit messy, like inconsistency of location `useQuery` bits in the components and in the `jsonplaceholder` dir, but I made the decision to submit this sooner rather than go further over my time.

Thanks for the challenge, I look forward to hearing back! 🤙
