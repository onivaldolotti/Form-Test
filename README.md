# Documentation

## Problem

  Implement a stylish login screen with email validation

## Test Requirements

### 1 - Create input “Email”. Stylize it

  Input with an inline styling has been implemented.

### 2 - Create input “Password”. Stylize it

  Input with an inline styling has been implemented.

### 3 - Create button “Login”. Stylize it (button should look like “live”: some changes on hover and when it is pressed)

  Button with an inline styling has been implemented. I'm not used to working on front-end styling, so I found a lock on this action to make the button look "live".

### 4 - Simple validation: Login button should be disabled until email and password are filled up

  Login button disabled while all data is not filled. Done with a validation of true or false, as long as both inputs are not filled, the button remains disabled.

### 5 - Email validation: when press Login button, show red colored warning below the Email input, if email is not valid (“Email is not valid”)

  Implemented an action to show a spam containing the invalid email message in red.

### 6 - Provide a custom method for email validation. Requirements for email to be valid: it should be like “x@x” at least (only one @ and at least one character before and one character after it). Don’t use Regex for email validation

  As the use of regex was not allowed, I chose to validate the contents of the email field by separating it into two parts, one before the first @ (I called it user) and the second after the first @ (I called it domain).
  The user must contain more than 3 characters, cannot be a blank space or have an @.
  The domain of having a period, the first character cannot be an @ and must have 3 characters after the period.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


