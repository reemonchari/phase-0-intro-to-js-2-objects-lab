const employee = {
    name: 'monchari',
    streetAddress: 4262
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
   const updateEmployee = {...employee} 
   updateEmployee[key] = value
   return updateEmployee 
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const deleteEmployee = {...employee}
    delete deleteEmployee[key]
    return deleteEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}