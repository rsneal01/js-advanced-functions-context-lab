/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

const createEmployeeRecord = function(src){
    return {
        firstName: src[0],
        familyName: src[1],
        title: src[2],
        payPerHour: src[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployeeRecords = function(employeeArray){
    return employeeArray.map(function(e){
        return createEmployeeRecord(e)
    })
    
}

const createTimeInEvent = function(dateStamp){
    let [date, hour] = dateStamp.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour),
        date: date
    })

    return this
}

const createTimeOutEvent = function(dateStamp){
    let [date, hour] = dateStamp.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour),
        date: date
    })

    return this
}

const hoursWorkedOnDate = function(dateStamp){
    let soughtTimeInEvent = this.timeInEvents.find(function(e){
        return e.date === dateStamp
    })

    let soughtTimeOutEvent = this.timeOutEvents.find(function(e){
        return e.date === dateStamp
    })

    return (soughtTimeOutEvent.hour - soughtTimeInEvent.hour) * .01
}

const wagesEarnedOnDate = function(dateStamp){
   let wagesOnDate = hoursWorkedOnDate.call(this, dateStamp) * this.payPerHour;
    return wagesOnDate
}

const calculatePayroll = function(employeeArray){
    let totalPayroll = employeeArray.reduce(function(memo, e){
        return memo + allWagesFor.call(e)
    }, 0)
return totalPayroll
}

const findEmployeeByFirstName = function(srcArray, firstName){
    return srcArray.find(function(employee){
        return employee.firstName = firstName
    })
}