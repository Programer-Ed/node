// console.log(process.argv);
/* when this is ran it will bring the files and its directory you can edit like --user and --greeting in terminal it will print it */

function grab(flag) {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag]
}
let greeting = grab("--greeting");
let user = grab("-user")
console.log(greeting);
console.log(user);

// this will isolate the greeting and user