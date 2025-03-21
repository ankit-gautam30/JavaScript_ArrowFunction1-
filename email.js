// Function to validate email address
const validateEmail = (email) => {
    return /^abc(\.\w+)?@bridgelabz\.(co(\.\w{2})?|com)$/.test(email); // Ensures '@' is present and 'bridgelabz' is mandatory
};

// Example usage of email validation
console.log(validateEmail("abc@bridgelabz.co")); // true
console.log(validateEmail("abc.xyz@bridgelabz.co.in")); // true
console.log(validateEmail("abc@bridgelabz.com")); // true ✅ Now valid
console.log(validateEmail("xyz@bridgelabz.co.in")); // false
console.log(validateEmail("abc@xyz.co.in")); // false
console.log(validateEmail("abc@bridge.co.in")); // false ❌ 'bridgelabz' is mandatory
console.log(validateEmail("abc@bridgelabz")); // false ❌ Missing '.co' or '.com'
