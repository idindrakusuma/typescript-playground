# Basic Types

## Basic Understanding

`Typescript`, sesuai dengan namanya bahwa `typescript` adalah javascript versi _strong type_. atau istilahnya adalah javascript yang musti ada validasi `type`nya. `TypeScript` hanya sebuah penulisan saja, karena pada akhirnya, code yang kita tulis menggunakan TypeScript akan di*compile* menjadi JavaScript biasa.

Keuntungan dari penggunaan TypeScript ini adalah antara lain:
- Mengurangi kesalahan type variable di javascript.
- Karena `type` dari setiap variable ditulis dengan jelas, maka pengerjaan proyek sekala besar dan tim yang banyak akan jauh lebih mudah memahami *codebase*nya.
- Karena perlu melakukan *compile* terlebih dahulu, kesalahan penulisan code seperti `typo` bisa dihindarkan.
- Dukungan dari IDE, seperti Visual Studio Code yang sangat baik dalam validasi penulisan TypeScript.

Kekurangan
- Perlu effort lebih dan kurang tepat jika digunakan untuk proyek skala kecil dan dikerjakan dengan tim kecil (< 3 orang).

## Basic Types

Dalam penulisan variable pada typeScript, diperlukan `type` data dari variable tersebut. Berbeda dengan javascript pada umumnya yang hanya dibedakan dengan `scope` saja. Example:

```ts
// boolean
let isAccepted: boolean = true;
// number
const VERSION: number = 1.22223;
// string
let firstName: string = 'Indra';
// enum
enum Gender {
  man = 'Man',
  woman = 'Woman'
}
// array
let listName: string[] = ['Indra Kusuma'];
let listAge: number[] = [22, 23, 24];
// tuple
let thisTuple: [string, number];
```

More example: https://www.typescriptlang.org/docs/handbook/basic-types.html