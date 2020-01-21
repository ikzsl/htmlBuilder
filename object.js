// const bag = [
//   'apple', 'banana', 'pear',
//   'apricot', 'apple', 'banana',
//   'apple', 'orange', 'pear',
// ];

// const fruitsCounter = (fuits) => {
//   const statisctics = {};
//   for (const fruit of bag) {
//     if (statisctics.hasOwnProperty(fruit)) {
//       statisctics[fruit] += 1; 
//     } else {
//       statisctics[fruit] = 1; 
//     }
//   }
//   return statisctics
// };

// console.log(fruitsCounter(bag));
// ----------------------------------------------------

// const firstSemestrSubjects = {
//   chemistry: {
//     faculty: 'Chemistry faculty',
//     teacher: 'Ivanov',
//   },
//   law: {
//     // какие-то характеристики
//   },
//   informatics: null,
//   microeconomics: {
//     // какие-то характеристики
//   },
// };

// const secondSemestrSubjects = {
//   microeconomics: null,
//   chemistry: {
//     faculty: 'Chemistry faculty',
//     teacher: 'Ivanov',
//   },
//   informatics: {
//     // какие-то характеристики
//   },
// };

// const getRemovedSubjects = (first, second) => {
//   const removedSubjects = [];
//   const firstSemestrSubjects = Object.keys(first);

//   for (const subject of firstSemestrSubjects) {
//     if (!second.hasOwnProperty(subject)) {
//       removedSubjects.push(subject);
//     }
//   }
//   return removedSubjects;
// }

// console.log(getRemovedSubjects(firstSemestrSubjects, secondSemestrSubjects))
// -----------------------------------------------------------------------------
// количество вхождений каждого слова в предложение
// const content = 'cat dog cat eye see cat dog';

// const getWordsCount = (content) => {
//   const result = {};
//   const words = content.split(' ');
//   for (const word of words) {
//     if (!result.hasOwnProperty(word)) {
//       result[word] = 1;
//     } else {
//       result[word] += 1;
//     }
//   }

//   return result;
// }

// console.log(getWordsCount(content))
//-------------------------------------------------------------------------------

// const data = {
//   user: 'ubuntu',
//   hosts: {
//     0: {
//       name: 'web1',
//     },
//     1: {
//       name: 'web2',
//       null: 3,
//     },
//   },
// };

// console.log(data['hosts']['0']['name'])


//-----------------spread-------------------------
// const user = {
//   name: 'Vasya',
//   married: {
//     ret: 33,
//   },
//   age: 25
// };

// const newUser = {...user};

// ------------------------------------------------

// const lessonMembers = {
//   syntax: 3,
//   using: 2,
//   foreach: 10,
//   operations: 10,
//   destructuring: 2,
//   array: 2,
// };

// const findKeys = (obj, expectedValue) => {
// const result = [];
// const values = Object.entries(obj);
// for (const [key, value] of values) {
//   if (value === expectedValue) {
//     result.push(key);
//   }
// }

// return result;
// }

// console.log(findKeys(lessonMembers, 2))
//-------------------------------------------------

const data = {
  user: 'ubuntu',
  cores: 4,
  os: 'linux',
};

const pick = (obj, keys) => {
  const result = {};
  const keysArr = Object.keys(obj);
  for (const key of keys) {
    if (!keysArr.includes(key)) {
      return result;
    }
    result[key] = obj[key];
  }
  return result;
};

 console.log(pick(data, ['user', 'os']))