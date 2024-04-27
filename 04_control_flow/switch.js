const month = 3;
switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("feburary");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;

    default:
        console.log("please enter a valid month");
        break;
}
// here what break does is wherever key matches uske baad ka sara code run ho jata h EXCEPT DEFAULT . agar break nahi hota toh key match hone ke baad ke cases ko check hi nahi krta 
