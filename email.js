// Function to validate email address
const validateEmail = (email) => {
    return /^abc([._+\-]\w+)?@bridgelabz\.co(\.\w{2})?$/.test(email); // Ensures '@' is present, 'bridgelabz' is mandatory, '.' follows 'bridgelabz', 'co' is mandatory, and TLD (2-char country code) is optional
};

// Example usage of email validation
console.log(validateEmail("abc@bridgelabz.co")); // true
console.log(validateEmail("abc.xyz@bridgelabz.co.in")); // true
console.log(validateEmail("abc_xyz@bridgelabz.co.in")); // true 
console.log(validateEmail("abc+xyz@bridgelabz.co.in")); // true 
console.log(validateEmail("abc-xyz@bridgelabz.co.in")); // true 
console.log(validateEmail("abc@bridgelabz.co.us")); // true
console.log(validateEmail("abc@bridgelabz.com")); // false 
console.log(validateEmail("xyz@bridgelabz.co.in")); // false 
console.log(validateEmail("abc@xyz.co.in")); // false 
console.log(validateEmail("abc@bridge.co.in")); // false 
console.log(validateEmail("abc@bridgelabz")); // false 