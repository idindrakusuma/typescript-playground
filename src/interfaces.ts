// this basic sample of Interface
enum Gender {
  Men = 'L',
  Women = 'P',
}

interface PersonType {
  firstName: string
  lastName: string
  age: number
  gender: Gender
}

function showMyID(person: PersonType) {
  console.log(`Hi, ${person.firstName}!`)
  console.log(
    `Your ID is: ${person.gender}-${person.age}${person.lastName.toUpperCase()}`
  )
}

showMyID({
  firstName: 'Indra',
  lastName: 'Kusuma',
  age: 22,
  gender: Gender.Men,
})
