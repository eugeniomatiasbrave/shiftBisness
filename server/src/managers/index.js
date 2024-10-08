import UsersManagers from "./mongo/UsersManagers.js";  // percistencia Mongo
import ShiftsManagers from "./mongo/ShiftsManagers.js";  // percistencia Mongo

export const usersService = new UsersManagers(); 
export const shiftsService = new ShiftsManagers(); 