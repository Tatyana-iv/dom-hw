const person = {
    name: 'Анатолий',
    age: 29,
    family: {
       mother: 'Елена',
       father: 'Антон',
       children: ['Варвара', 'Леонид']
   } 
 };

//  console.log(person.name); 
//  console.log(person.family.father); 
 
//  person.name = 'Иван'
//  console.log(person.name); 
 
//  console.log(person.family.children.join(' и ')); 
 person.family.children.push ("Сергей");
 console.log(`Дети: ${person.family.children.join(',')}`); 