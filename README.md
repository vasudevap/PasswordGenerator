# 03 JavaScript: Password Generator

## Application Location

[PASSWORD GENERATOR appilcation](https://vasudevap.github.io/PasswordGenerator/)

## Application Source Repository

[GitHub Repository](https://github.com/vasudevap/PasswordGenerator.git)

## The Task

This application enables employees to generate random passwords based on criteria that they’ve selected. This app runs in the browser and will dynamically update the HTML and CSS powered by the JavaScript code included in "Assets/js/script.js". This is a responsive user interface that adapts to multiple screen sizes.

The password can include special characters such as the ones listed here -> (https://www.owasp.org/index.php/Password_special_characters) from the OWASP Foundation.

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Mockup

![Application Mockup Image](<Assets/img/Password Generator.png>)

© 2023 Prashant Vasudeva. Use at will.
