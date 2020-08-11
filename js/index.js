// Iteration 1: Names and Input

let hacker1 = 'Daniel';

console.log(`The driver's name is ${hacker1}.`)

let hacker2 = 'Daniel';

console.log(`The navigator's name is ${hacker2}`);



// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
// Iteration 3: Loops
let upperCaseDriver = ""
for (i = 0; i < hacker1.length; i++) {
    upperCaseDriver += hacker1.charAt(i).toUpperCase() + ' ';
}
console.log(upperCaseDriver.trim());

let reverseNavigator = ' '
for (let j = hacker2.length - 1; j >= 0; j--) {
    reverseNavigator += hacker2[j]
}
console.log(reverseNavigator);


if (hacker1.localeCompare(hacker2) == -1) {
    console.log("The driver's name goes first")
} else if (hacker1.localeCompare(hacker2) == 1) {
    console.log('Yo, the navigator goes first definitely');
}
    else {
        console.log('What?! You both have the same name?')
    }

let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum nisi ut sem facilisis ultrices. Fusce eget augue cursus, ultrices neque in, fermentum massa. Integer id hendrerit nisi. Morbi euismod, eros id sagittis dapibus, metus orci hendrerit mauris, eu efficitur nulla libero ut orci. Integer suscipit erat ut tortor maximus accumsan. Ut viverra placerat maximus. Aliquam viverra nisl odio, sed porta erat bibendum ut. Cras vulputate consequat purus non dignissim. Etiam facilisis, magna sed pulvinar tristique, arcu tortor condimentum ex, nec vestibulum nisi est tincidunt magna. In vulputate tincidunt lectus, ut euismod tellus sagittis a. Nam consectetur nec leo sed luctus. Quisque eget aliquet mi, non eleifend sapien. Aenean magna mi, semper sit amet leo eu, eleifend finibus sem. Etiam rhoncus erat non sapien venenatis fermentum. Quisque non mollis tellus, in lobortis elit. Nam volutpat vehicula ex, tincidunt ornare orci imperdiet in. Donec quis nulla sem. Phasellus tincidunt neque vel sollicitudin congue. Sed vel accumsan lectus, eget viverra arcu. Sed pellentesque tempus diam a mollis. Duis pellentesque at elit et varius. Duis ornare imperdiet mauris, eu ultrices felis molestie in. Curabitur dictum aliquet convallis. Maecenas sed urna vulputate, congue mauris nec, blandit massa. Cras euismod lobortis massa eu tempor. Duis interdum ultricies ipsum. Donec mauris elit, dictum nec magna et, ullamcorper tincidunt tortor. Quisque enim magna, faucibus id lectus at, commodo finibus nibh. Ut mollis rhoncus nulla ac elementum. Suspendisse ultrices porta arcu, at pulvinar metus. In molestie malesuada vehicula. Ut non convallis eros, eu blandit elit. Maecenas eu turpis vulputate, sollicitudin nisl vel, faucibus lectus. Morbi cursus venenatis sapien, auctor facilisis purus scelerisque a. Donec iaculis, lorem nec facilisis cursus, nunc orci porta metus, et mollis risus libero euismod est. Duis eu rutrum mi. Aliquam quis mattis ligula. Donec consectetur, quam at vulputate accumsan, lectus sem bibendum urna, in finibus risus ipsum vel diam. Quisque pharetra ipsum sit amet leo eleifend volutpat."

wordCount = 0;
for (i = 0; i < loremIpsum.length; i++) {
    if (loremIpsum[i] == " ") {
        wordCount += 1;
    }
}
console.log(wordCount + ' words');