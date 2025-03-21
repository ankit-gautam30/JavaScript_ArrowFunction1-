// Function to validate Indian PIN code
const validatePinCode = (pinCode) => {
    return /^\d{3}\s?\d{3}$/.test(pinCode); // Allows both '400088' and '400 088'
};

// Example usage of PIN code validation
console.log(validatePinCode("400088"));  // true
console.log(validatePinCode("400 088")); // true
console.log(validatePinCode("4008"));    // false
console.log(validatePinCode("4000888")); // false
console.log(validatePinCode("40A088"));  // false
console.log(validatePinCode("A400088")); // false
console.log(validatePinCode("400088B")); // false
