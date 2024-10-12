
// percistencia Mongo
import UsersManagers from "./mongo/UsersManagers.js";  
import ShiftsManagers from "./mongo/ShiftsManagers.js"; 

export const usersService = new UsersManagers(); 
export const shiftsService = new ShiftsManagers(); 
