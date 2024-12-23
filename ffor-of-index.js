
let students = [
    { id: 1, s_name: "pavan", city: "hyd" },
    { id: 2, s_name: "arjun", city: "sec" },
    { id: 3, s_name: "meena", city: "vizag" },
    { id: 4, s_name: "rahul", city: "bengaluru" },
    { id: 5, s_name: "sita", city: "chennai" },
    { id: 6, s_name: "vijay", city: "mumbai" },
];

let NameToCity = {}; 

for (let student of students) {
    NameToCity[student.s_name] = student.city; 
    console.log(`${student.s_name} from ${student.city}`); 
}

console.log(NameToCity);