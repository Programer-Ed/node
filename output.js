// working wit standard input
process.stdout.write("Hello \n\n") // output hello

const questions = [
    "What is you name?",
    "What would you rather be doing?",
    "What is your preferred coding language"
];
const answers = []

function ask(i = 0) {
    process.stdout.write(`\n\n\n ${questions[i]}`)
    process.stdout.write(`>`)
}

ask();

process.stdin.on("data", function (data) {
    answers.push(data.toString().trim())
    if(answers.length < questions.length){
        ask(answers.length);
    } else {
        process.exit()
    }
});

process.on("exit", function() {
    process.stdout.write("\n\n\n\n");
    process.stdout.write(
        `Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later`
    )
})