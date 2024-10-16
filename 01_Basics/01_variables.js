const accountId = 2401
let accountEmail = "ravin.kanzariya@test.com"
var accountPassword = "12345"
accountCity = "Ahm"

// accountId = 2 // Const variable are not allowed to redeclare and update
accountEmail = "ravin@google.com"
accountPassword = "Test@123"
accountCity = "Surat"
let accountState; // Semicolon use or not use does not matter
/*
Prefered not to use "var" 
Because of issue in Block and functional scope
*/

console.log("================ Method 1 for console multiple logs ===============")
console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.log("================ Method 2 for console multiple logs: Table ===============")
console.table([accountId,accountEmail,accountPassword, accountCity,accountState])

