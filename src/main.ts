import { Gender, BooleanToNumber } from './helpers/enum';

// basic example of interface
interface PersonType {
  firstName: string
  lastName: string
  age: number
  gender: Gender
  married: BooleanToNumber
}

// using interface on args function
function showMyID(person: PersonType) {
  console.log(`Hi, ${person.firstName}!`)
  console.log(
    `Your ID is: ${person.gender}-${person.age}${person.lastName.toUpperCase()}-${person.married}`
  )
}

showMyID({
  firstName: 'Indra',
  lastName: 'Kusuma',
  age: 22,
  gender: Gender.Man,
  married: BooleanToNumber.false
})
