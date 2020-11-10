# Home Assignment

I opted to go for extra credits and try to combine the two assignments into one application.

## BACKEND
I started by creating the API from the backend assignment, opting for a graphql solution.

## Installation instructions:
Go to /apollo-gql and run `npm i`
To run the tests run `npm t`
To do manual queries and mutations run `npm run dev` and navigate to http://localhost:4000/

## FRONTEND
I then started the front end assignment, creating the frontend solution using popular frameworks and tools such as NextJS, styled-components and Formik. NextJS since it is an easy to use framework for a react server, styled-components since they provide easy styling for components and Formik for simple validation and form creation. I've added simple stylish css and a few animations to make the front end look nice.

## Installation instructions:
Go to /home-next and run `npm i`
To start the application run `npm run dev`
Navigate to http://localhost:3000 to test the application.

At the end of the signup form there is a link to the payments. This will lead to the http://localhost:3000/payments page, where one can view the payments loaded from the graphql and remove individual payments.
I would have liked to add more of the mutations to the frontend to be able to add and update payments, and also fixed the apollo client cache update after mutations.
