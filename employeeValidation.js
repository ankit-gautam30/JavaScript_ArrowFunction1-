// Function to validate employee details using Regex
const validateEmployee = (empId, salary, gender, date) => {
    try {
        if (!/^\d+$/.test(empId) || empId <= 0) throw new Error("Invalid Employee ID");
        if (!/^\d+(\.\d+)?$/.test(salary) || salary <= 0) throw new Error("Invalid Salary");
        if (!/^[MF]$/.test(gender)) throw new Error("Invalid Gender");
        if (new Date(date) > new Date()) throw new Error("Invalid Date - Cannot be in the future");
        
        return "Employee details are valid";
    } catch (error) {
        return error.message;
    }
};

// Example usage of validation function
console.log(validateEmployee("101", "3000", "M", "2024-03-20")); // Valid case
console.log(validateEmployee("-5", "3000", "M", "2024-03-20")); // Invalid Employee ID
console.log(validateEmployee("101", "0", "M", "2024-03-20")); // Invalid Salary
console.log(validateEmployee("101", "3000", "X", "2024-03-20")); // Invalid Gender
console.log(validateEmployee("101", "3000", "M", "2025-12-01")); // Invalid Date
