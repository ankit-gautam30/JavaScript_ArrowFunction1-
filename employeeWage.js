// Constants
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const WAGE_PER_HOUR = 20;
const NUM_WORKING_DAYS = 20;

// Function to get work hours
const getWorkHours = (empCheck) => {
    return empCheck === 1 ? FULL_TIME_HOURS : empCheck === 2 ? PART_TIME_HOURS : 0;
};

// Generate daily wages using Map
let empDailyWageMap = new Map();
let empDailyHoursMap = new Map();
let totalWage = 0;
let totalDaysWorked = 0;

for (let day = 1; day <= NUM_WORKING_DAYS; day++) {
    let empCheck = Math.floor(Math.random() * 3);
    let workHours = getWorkHours(empCheck);
    let dailyWage = workHours * WAGE_PER_HOUR;
    
    if (workHours > 0) totalDaysWorked++;
    
    empDailyWageMap.set(day, dailyWage);
    empDailyHoursMap.set(day, workHours);
    totalWage += dailyWage;
}

// a. Calc total Wage
console.log("Total Wage: ", totalWage);

// b. Show the Day along with Daily Wage
console.log("Day-wise Wage:");
empDailyWageMap.forEach((wage, day) => console.log(`Day ${day}: ${wage}`));

// c. Show Days when Full-time wage of 160 was earned
let fullTimeDays = [...empDailyWageMap.entries()].filter(([day, wage]) => wage === 160).map(([day]) => day);
console.log("Days with Full Time Wage of 160:", fullTimeDays);

// d. Find first occurrence when Full Time Wage was earned
let firstFullTimeDay = fullTimeDays.length > 0 ? fullTimeDays[0] : -1;
console.log("First occurrence of Full Time Wage on Day:", firstFullTimeDay);

// e. Check if every element of Full Time Wage array holds Full Time Wage
let allFullTime = fullTimeDays.every(day => empDailyWageMap.get(day) === 160);
console.log("All Full Time Days hold 160 wage:", allFullTime);

// f. Check if there is any Part Time Wage
let anyPartTime = [...empDailyWageMap.values()].some(wage => wage === PART_TIME_HOURS * WAGE_PER_HOUR);
console.log("Is there any Part Time Wage?:", anyPartTime);

// g. Find the number of days the Employee Worked
console.log("Number of days Employee Worked:", totalDaysWorked);
