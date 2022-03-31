/*
메모




*/
// https://www.youtube.com/watch?v=FN_D4Ihs3LE&t=1044s
// JSON.parse
// JSON.stringify


// 1.object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'orange']);
console.log(json);


const dog = {
    name: 'jindo',
    color:'brown',
    size:null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} it can jump!`);
    },
};
console.log(dog)
  


// 배열에서 name을 가진 값만 가져오기
const json1 = JSON.stringify(dog ,['name'])
console.log(json1);

//replacer 콜백함수를 사용한 제어
const json2 = JSON.stringify(dog ,(key, value) =>{
    console.log(`${key}, value : ${value}`);
    return key === 'name' ? '100min' : value;
});
console.log(json2);

// =========================================
// 2.JSON to Object
    console.clear();
    json = JSON.stringify(dog);
    const obj = JSON.parse(json);
    console.log(obj);
    dog.jump();
    // obj.jump();
    //dog를 -> json으로 변환할때는 함수가 포함되지않아서 
    //json을 -> obj로 바꾸게 되면 obj는 함수기능이 실행되지 않음!

    console.log(
        dog.birthDate.getFullYear() +'년', 
        dog.birthDate.getMonth()+1 +'월', 
        dog.birthDate.getDate()+'일');
         
// console.log(dog);

