# AngularTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

/*
 * Exercise 1
 *
 * Implement 1 observable that when subscribed to will emit the following at the indicated times after subscription starts:
 *
 * 00:00:01 => A
 * 00:00:02 => BB
 * 00:00:02 => 10
 * 00:00:03 => CCC
 * 00:00:04 => DDDD
 * 00:00:04 => 20
 * 00:00:05 => EEEEE
 * 00:00:06 => FFFFFF
 * 00:00:06 => 30
 * ...
 */

Solution:
1.go to Services Folder and in that folder, we have a emitvalues.service.ts, it has this task logic.

/*
 * Exercise 2
 *
 * In an existing Angular app, please implement a solution to ensure that any existing (or future) http requests made will
 * automatically timeout after 15 seconds as an error.
 *
 * You can assume that all requests will be made using Angular's HttpClient
 *
 * Please use the minimal out-of-the-box Angular app setup (ng new my-app) to provide the needed changes. You can provide
 */

 Solution:
 1.go to Services Folder and in that folder, we have a retry.service.ts file, it has retry logic .
 2. change ID in API Url 1 to -1 it retry api call every 15 seconds.

/*
 * Exercise 3
 *
 * If you believe the class below can be refactored then please refactor it and explain why you felt it could/should
 * be refactored.
 *
 */

 Solution:
 1. go to Services Folder and in that folder, we have a Machine.ts file, I have modified that file  based on unnecessarycode, i have removes unnecessary code .
