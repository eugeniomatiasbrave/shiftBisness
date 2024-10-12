import { writeFileSync } from 'fs';


// Function to get the name of the day
function getDayName(date) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[date.getDay()];
}

// Function to generate shifts
function generateShifts(startDate, endDate) {
  const shifts = [];
  const currentDate = new Date(startDate);

  while (currentDate <= endDate) {
      for (let hour = 8; hour <= 18; hour++) {
          const shift = {
              userId: "",
              date: new Date(currentDate),
              hour: `${hour.toString().padStart(2, '0')}:00`,
              duration: 60,
              status: currentDate.getDay() === 6 || currentDate.getDay() === 0 ? "Reserved" : "Vacant",
              description: "Terapia individual",
              price: 30000,
              dayOfWeek: getDayName(currentDate),
              __v: 0
          };
          shifts.push(shift);
      }
      currentDate.setDate(currentDate.getDate() + 1);
  }

  return shifts;
}

// Generate shifts from 11-10-2024 to 11-10-2025
const shifts_2 = generateShifts(new Date('2024-10-11'), new Date('2025-10-11'));

// Save shifts to a JSON file
writeFileSync('shifts.json', JSON.stringify(shifts_2, null, 2), 'utf-8');
console.log('Shifts generated and saved to shifts.json');