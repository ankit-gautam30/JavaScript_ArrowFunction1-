// Function to validate Indian PIN code
const validatePinCode = (pinCode) => {
    return /^\d{6}$/.test(pinCode);
};

// Example usage of PIN code validation
console.log(validatePinCode("400088")); // true
console.log(validatePinCode("4008"));   // false
console.log(validatePinCode("4000888")); // false
console.log(validatePinCode("40A088"));  // false
