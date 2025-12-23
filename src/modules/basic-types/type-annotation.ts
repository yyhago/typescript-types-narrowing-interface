// Type Annotation
let username: string = "Yhago";
let proffession: string = "Developer";


export function displayUserInfo(username: string, proffession: string){
    console.log(`Username: ${username}, Profession: ${proffession}`);
}

displayUserInfo(username, proffession)