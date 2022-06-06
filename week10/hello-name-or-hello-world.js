// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

//P: string of name or empty name, could be in any casing
//R: hello name if name is provided, otherwise hello world
//E: With `name` = "aliCE" => return "Hello, Alice!"
//With `name` not given 
  //or `name` = ""        => return "Hello, World!"
//P: take care of empty string or undefined
//use the template literal to adjust casing and input name

function hello(name) {
    if (name === '' || name === undefined){
    return "Hello, World!"
    } else{
    return `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`
    }
}

