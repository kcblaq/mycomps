
// this function shields the first, second letters of an email, and @ plus letter after @

export function ShieldEmail(email) {
    let index = email.indexOf("@");
    let result = "";
    for (let i = 0; i < email.length; i++){
        if (i != 0 && i != 1 && i != index && i != index + 1) {
            result += "*";
            continue;
        } else {
            result+= email[i];
        }
    }
    return result;
}

console.log(ShieldEmail("amaka@gmail.com"))