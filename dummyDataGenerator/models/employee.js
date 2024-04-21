    // {
    //     name: "Harry",
    //     salary: 45000000,
    //     language: "Python",
    //     city: "New York",
    //     isManager: true
    // }
    import mongoose from 'mongoose';
    
    const employeeSchema = new mongoose.Schema({
        name : String,
        salary : Number,
        language : String,
        city : String,
        isManager :Boolean
    })

    export const employee = mongoose.model('employee' , employeeSchema);
