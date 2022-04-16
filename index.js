/* Your Code Here */
function createEmployeeRecord(employeeInfo) {
    let employeeObjectInfo = {
        firstName: employeeInfo[0],
        familyName: employeeInfo[1],
        title: employeeInfo[2],
        payPerHour: employeeInfo[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employeeObjectInfo
}
function createEmployeeRecords(arrayofEmployees) {
    let newEmployeeArray = []
    arrayofEmployees.forEach(element => {
        newEmployeeArray.push(createEmployeeRecord(element))
    });
    return newEmployeeArray
 }
 
 function createTimeInEvent(dateTime) {
    const [date, hour] = dateTime.split(' ')
    const inEvent = {
        type: "TimeIn",
        hour: parseInt(hour),
        date: date
    }
    this.timeInEvents.push(inEvent)
    return this
 }
 
 function createTimeOutEvent(dateTime) {
    const [date, hour] = dateTime.split(' ')
    const outEvent = {
        type: "TimeOut",
        hour: parseInt(hour),
        date: date
    }
    this.timeOutEvents.push(outEvent)
    return this
 }
 
 function hoursWorkedOnDate(date) {
     const inEvent = this.timeInEvents.find(inEvent => inEvent.date === date)
     const outEvent = this.timeOutEvents.find(outEvent => outEvent.date === date)
     return (outEvent.hour - inEvent.hour) / 100
 }
 
 function wagesEarnedOnDate(date) {
     return hoursWorkedOnDate.call(this, date) * this.payPerHour
 }

 function findEmployeeByFirstName(srcArray, frstName) {
     return srcArray.find(rec => rec.firstName === frstName)
 }

 function calculatePayroll(arrayRecords) {
     return arrayRecords.reduce((total, rec) => {
         return total + allWagesFor.call(rec)
     },0)
 }

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

