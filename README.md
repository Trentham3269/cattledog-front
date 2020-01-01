# cattledog-front

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## TODOs

### CreateUser.vue
+ Check db for existing user in back-end then return error to client(?)
+ Add password validation to form eg. do they match?
+ Hide password by default
+ Generate random password and email/sms

### General
+ Don't show Sign In/Sign Up forms at the same time
+ Don't show Sign In form after successful message returned
+ Only show Add Item button when user is logged in
+ Make the username present in the app bar?
+ Add logout button to Sign In div when user is logged in
+ Expand Add Category to Add Item eg. description too. Will require a dynamic select box based on all categories present in db


