// working wit standard input
process.stdout.write("Hello \n\n") // output hello

const questions = [
    "What is you name?",
    "What would you rather be doing?"
];
const answers = []

function ask(i) {
    process.stdout.write(`\n\n\n ${questions[i]}`)
    process.stdout.write(`>`)
}
process.stdin.on("data", function (data) {
    process.stdout.write(data.toString().trim())
});
ask(answers.length)