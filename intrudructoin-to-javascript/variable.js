// vari + able =variable



// numeric data types
// var age = 18;
// var tamparature = 38;
// var wait = 50;
// var price = 10;
// var pen = 10;

// //   string data type   
// var name = 'shah isarail';
// var father_name = 'shah poran';
// var mother_name = 'Roman Akter';
// var locatoin = 'sylhet';
// var location = 'Bharellah';
// var locatoin = 'Bharellah';

// // bolean data type

// var are_you_happy =true;
// var you_paased_in_your_final_Exam = true;




// var name = 'shah israil'
// var age = 18;
// var money = 200;
// var home = 'cumilla';
// var pen = 10



// // numeric data type
// var money = 210;
// var price = 1010;
// // string data type
// var name = 'shah israil'
// var home = 'cumilla burichong bharellah'
// // bollian data type
// var areYouSingale = false;
// var areYouPassedExam =  true;
// var areYouHappy = true;


function findAddress(obj) {
    const replaceMissing = (value) => value !== undefined ? value : '__';
    const street = replaceMissing(obj.street);
    const house = replaceMissing(obj.house);
    const society = replaceMissing(obj.society);
    const output = street + " ," + house + " ," + society;
    return output;
    }
    const findAddress