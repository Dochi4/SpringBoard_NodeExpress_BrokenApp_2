### Conceptual Exercise

Answer the following questions below:

- What is a JWT?

  JWT is also known as Json Web tokens. These are used in security and authentication.

- What is the signature portion of the JWT? What does it do?

  A JWT signature is a component that insures a users authentication. It created with 3 parts the encoded header, the encoded playout and the serect key. then these are applied to an algorithm. if the signautre varification failed this often mean that the JWT has been alterened and the process should reject a user.

- If a JWT is intercepted, can the attacker see what's inside the payload?

  Yes an attacker can decoded JWT with a JWT decoder() method.

- How can you implement authentication with a JWT? Describe how it works at a high level.

  A JWT authentication works by creating a signature with relevant information from a user, like a username. From there, a token is generated using a secret key. This is often used when registering and/or logging in. It is then used throughout the application to verify if a user can access specific materials. At times, the JWT token can be stored in the session for continued use over a short period. If the token is valid, the user can continue.

- Compare and contrast unit, integration and end-to-end tests.

  Compare:
  All three types of tests are used to accomplish the same goal: to test the code one has written to determine if everything is functioning correctly.
  Constrast :
  Unit tests, are designed to test indiviual aspects of your code in isolation. These are quickly written through out the development process.
  Integration tests, are designed to test portions of the code during the development process. These tests check chunks of the code, such as user functionality or the messaging system.
  End-to-end tests, on the other hand, test the entire application, allowing a test to flow through many parts of the app to see if separate systems work together. These are often written near the end of development.

- What is a mock? What are some things you would mock?

  A mock, in this context, is test data or a simulated component used during testing. It allows you to create multiple variations for testing purposes, often within a test server. Mocks let you manipulate data or system behavior without affecting or breaking real data. Things you might mock include usernames, authentication systems, messaging systems, and anything responsible for displaying or modifying dat

- What is continuous integration?

  Continuous integration is the process of regularly merging new code with the existing codebase to test the integration of new features throughout the development process. This helps catch errors early that may arise from adding new functionality and allows for steady, consistent progress.

- What is an environment variable and what are they used for?

  Environment variables are dynamic key-value pairs that can influence how code runs on a computer. They are commonly used to configure settings like database credentials , and API keyswithout hardcoding that information into the source code.

- What is TDD? What are some benefits and drawbacks?

  TDD, or Test-Driven Development, is a method of writing code where one writes the tests first before writing the actual code. The benefit of this approach is that it encourages developers to be more conscious of the code they are writing and the expected output. This can deepen understanding. However, working this way can slow down production time, as it often involves going back and forth between the test and the code.

- What is the value of using JSONSchema for validation?

  The value of using JSONSchema for validation is that it forces inputs to conform to a structure. this means a person can not change or add data without knowing the structer and allows one to make sure the data is more difficult to alter.

- What are some ways to decide which code to test?

  Ther are a few ways to decide which code to test. First ebing if the code is critial to the functionality of the project. This includes many fetchers and interactions. Another thing is you should test anything that could have the possibility of failure. Such as api calls or extranal data in cause something happens.

- What does `RETURNING` do in SQL? When would you use it?

  RETURNING will return the previous query. You can specify what you would like it to return. A common use for RETURNING is when information is being updated with a post, delete, update route. This allows us to see if the changes truly went through.

- What are some differences between Web Sockets and HTTP?

  HTTP and Web Sockets are two methods computers can interact with one another. HTTP gets information from one computer to the other by requesting that information and then closing the connection. Web Sockets connect the computers and allow for continuous communication allowing for real-time transfer of information often used in online games and other platforms.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?

  A preference is hard to say, to be honest. Overall, I feel like I have more experience with Flask due to the bulk of projects and the capstone being written in Flask. I know how to import APIs in Flask. However, I like how we were taught in Express. I think working with asynchronous websites will help me a lot in the future, and I also liked how we constructed the apps—working with models, routes, middleware, and writing tests. Overall, I am not sure which I prefer.
