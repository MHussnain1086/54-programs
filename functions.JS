// 1- Write a js program to check whether a character is uppercase or lowercase alphabet.
const cek =()=>{
    const numbers =/^[0-9]+$/
    var j =0
    var uper = 0
    var lowe =0
   var get = document.getElementById(`get`).value
   for(let i=0 ; i < get.length; i++){
       var got = get.slice(j,j+1)
   if(get.match(numbers)){
       document.getElementById(`result`).innerHTML = `Please Enter ALPHABETS Only`
   }else if(got == got.toUpperCase()){
    uper+=1
   }else if(got == got.toLowerCase()){
    lowe+=1 
   }
   j++
   }
   
   document.getElementById(`result`).innerHTML =  `Your Characters are in Upper Case are [${uper}] and in Lower Case is [${lowe}]`
   if (get==""){
    document.getElementById(`result`).innerHTML =  `Please Enter Some Alphabets`
   }
}
// 2- Write a js program to input Week number and print week day.
const ce =()=>{
    var get = parseInt(document.getElementById(`get2`).value)
    if(get === 1){
        document.getElementById(`result2`).innerHTML = `According to Given Input Today is Monday`
    }else if(get === 2){
        document.getElementById(`result2`).innerHTML = `According to Given Input Today is Tuesday`
    }else if(get === 3){
        document.getElementById(`result2`).innerHTML = `According to Given Input Today is Wednesday`
    }else if(get === 4){
        document.getElementById(`result2`).innerHTML = `According to Given Input Today is Thrusday`
    }else if(get === 5){
        document.getElementById(`result2`).innerHTML = `According to Given Input Today is Friday`
    }else if(get === 6){
        document.getElementById(`result2`).innerHTML = `According to Given Input Today is Saturday`
    }else if(get === 7){
        document.getElementById(`result2`).innerHTML = `According to Given Input Today is Sunday`
    }else{
        document.getElementById(`result2`).innerHTML = `Please Enter Numbers Between 1-7 `
    }
}
// 3- Write a js program to input month number and print number of days in that month.
const month =()=>{
    var get = parseInt(document.getElementById(`get3`).value)
    if(get === 1 || get === 3 || get === 5||get === 7 ||get === 8||get === 10||get === 12 ){
        console.log(get);
        if(get === 1){
            document.getElementById(`result3`).innerHTML = `According to Your Given Input Month is January and Contains 31 Days`
        }else if(get === 3){
            document.getElementById(`result3`).innerHTML = `According to Your Given Input Month is March and Contains 31 Days`
        }else if(get === 5){
            document.getElementById(`result3`).innerHTML = `According to Your Given Input Month is May and Contains 31 Days`
        }else if(get === 7){
            document.getElementById(`result3`).innerHTML = `According to Your Given Input Month is July and Contains 31 Days`
        }else if(get === 8){
            document.getElementById(`result3`).innerHTML = `According to Your Given Input Month is August and Contains 31 Days`
        }else if(get === 10){
            document.getElementById(`result3`).innerHTML = `According to Your Given Input Month is October and Contains 31 Days`
        }else if(get === 12){
            document.getElementById(`result3`).innerHTML = `According to Your Given Input Month is December and Contains 31 Days`
        } 
    }else if(get === 2){
            document.getElementById(`result3`).innerHTML = `According to Your Given Input Month is Feburary and Contains 28 Days and 29 if the Year is leap`
        }else if(get === 4 || get ===6 || get=== 9 || get ===11){
            if(get === 4){
                document.getElementById(`result3`).innerHTML = `According to Your Given Input Month is April and Contains 30 Days`
            }else if(get === 6){
                document.getElementById(`result3`).innerHTML = `According to Your Given Input Month is June and Contains 30 Days`
            }else if(get === 9){
                document.getElementById(`result3`).innerHTML = `According to Your Given Input Month is September and Contains 30 Days`
            }else if(get === 11){
                document.getElementById(`result3`).innerHTML = `According to Your Given Input Month is November and Contains 30 Days`
            }
        }else{
                document.getElementById(`result3`).innerHTML = `Please Enter Number Between 1-12`
            
        }
}
// 4- Write a js program to count total number of notes in given amount.
const show =()=>{
var get= parseInt(document.getElementById(`get4`).value)
var get2 = parseInt(prompt(`Please Enter Amount of Note That You Want to Check its Number in Given Amount`))
var ru = 0
if (get2 === 10){
   ru = get/get2
   document.getElementById(`result4`).innerHTML = `Your Given Amount Contain ${ru} Notes of 10 Rupees`
}else if (get2 ===20){
    ru = get/get2
    document.getElementById(`result4`).innerHTML = `Your Given Amount Contain ${ru} Notes of 20 Rupees`
}else if (get2 ===50){
    ru = get/get2
    document.getElementById(`result4`).innerHTML = `Your Given Amount Contain ${ru} Notes of 50 Rupees`
}else if (get2 ===100){
    ru = get/get2
    document.getElementById(`result4`).innerHTML = `Your Given Amount Contain ${ru} Notes of 100 Rupees`
}else if (get2 ===500){
    ru = get/get2
    document.getElementById(`result4`).innerHTML = `Your Given Amount Contain ${ru} Notes of 500 Rupees`
    if(get >= 1000){
} if (get2 === 1000){
    ru = get/get2
    document.getElementById(`result4`).innerHTML = `Your Given Amount Contain ${ru} Notes of 1000 Rupees`
}else if (get2 ===5000){
    ru = get/get2
    document.getElementById(`result4`).innerHTML = `Your Given Amount Contain ${ru} Notes of 5000 Rupees`
}else {
    document.getElementById(`result4`).innerHTML = `Amount of Notes Should be Less Than Given Amount`  
}
}else{
    alert(`Please Enter Amount Of Notes According to Pakistani Currency`)
}
}
// 5- Write a js program to input angles of a triangle and check whether triangle is valid or not.
const kof =()=> {
var get =parseInt(document.getElementById(`get5`).value)
var get2 = parseInt(prompt(`Enter 2nd Side of Triangle`))
var get3 = parseInt(prompt(`Enter 3rd Side of Triangle`))
if (get + get2 > get3 && get + get3 > get2 && get2 + get3 > get){
    document.getElementById(`result5`).innerHTML = `Your Triangle is VALID According to All Sides`
}else{
    document.getElementById(`result5`).innerHTML = `Your Triangle is INVALID According to All Sides`   
}

}
// 6-. Write a js program to input all sides of a triangle and check whether triangle is valid or not.
const kof2=()=>{
    var get =parseInt(document.getElementById(`get6`).value)
    var get2 = parseInt(prompt(`Enter 2nd Angle of Triangle`))
    var get3 = parseInt(prompt(`Enter 3rd Angle of Triangle`))
    if (get + get2 + get3 === 180){
        document.getElementById(`result6`).innerHTML = `Your Triangle is VALID According to All Angles`
    }else{
        document.getElementById(`result6`).innerHTML = `Your Triangle is INVALID According to All Angles`   
    } 
}
// 7- Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle.
const bah =()=>{
    var get =  parseInt(document.getElementById(`get7`).value)
    var get2 = parseInt(prompt(`Enter 2nd  Side of Triangle`))
    var get3 = parseInt(prompt(`Enter 3rd  Side of Triangle`))
    if(get === get2 && get2=== get3){
        document.getElementById(`result7`).innerHTML =`According to Your Given Data This is EQUILATERAL Triangle`
    }else if(get===get2 || get2===get3 || get===get3 ){
        document.getElementById(`result7`).innerHTML =`According to Your Given Data This is ISOSCELES Triangle`
    }else{
        document.getElementById(`result7`).innerHTML =`According to Your Given Data This is SCALENE Triangle`
    } 
}
// 8- Write a js program to find all roots of a quadratic equation.
const eqa =()=>{
    var gote =0
    var a =  parseInt(document.getElementById(`get8`).value)
    var b = parseInt(prompt(`Enter value of b`))
    var c= parseInt(prompt(`Enter value of c`))
    var sol = (b*b - 4*a*c)
    if(c > b && a >=2){
          gote = sol * -1
        console.log(`gote`,gote);}
        else{
            gote =sol
        }
    var sli = Math.sqrt(gote)
    var ro = Math.round(sli)
    var slo = b + ro 
    var k = 2*a
    var slk = slo/k
    var round = Math.round(slk)
    console.log(slk);
     
    var solo = b - ro
    var solk = solo/ k
    var round2 = Math.round(solk)
    console.log(solk);

    document.getElementById(`result8`).innerHTML =`x = ${slk} and x = ${solk}`

}
// 9- Write a js program to calculate profit or loss.
const pl = ()=>{
    var result = 0
    var get =document.getElementById(`get9`).value
    var get2 = parseInt(prompt(`Please Enter Original Prize`))
    var tax = get / 100 * 5 
    console.log(tax);
    if(get > get2){
       result = (get - get2) - tax
       document.getElementById(`result9`).innerHTML = `According to Given Amount Your Profit is ${result} Rupees`
    }else {
        result = (get2- get) - tax
        document.getElementById(`result9`).innerHTML = `According to Given Amount Your Loss is ${result} Rupees`
    }
}
// 10- Write a js program to search all occurrences of a character in given string.
const OC = ()=>{
    var get = document.getElementById(`get10`).value
    var get2 = prompt(`Enter a Character to Check its Occurrence in Given String`)
    var result = ""
    var j = 0
    for(let i=0; i < get.length ; i++){
    var got = get.slice(j,j+1)
    if(got == get2){
        console.log(j);
        result += j + ","
    }
   j++ 
}
document.getElementById(`result10`).innerHTML = `Your Character in Given String Occure at the Indexs of [${result}]`
}
//11- Write a js program to count occurrences of a character in given string.
const pl0 =()=>{
    var get = document.getElementById(`get11`).value
    var get2 = prompt(`Enter a Character to Count its Occurrence in Given String`)
    var result = 0
    var j = 0
    for(let i=0; i < get.length ; i++){
    var got = get.slice(j,j+1)
    if(got == get2){
        // console.log(j);
        result += 1
    }
   j++ 
}
document.getElementById(`result11`).innerHTML = `Your Character  Occure [${result}] Times in a Given String `
}
// 12- Write a js program to find highest frequency character in a string.and  //14- Write a js program to count frequency of each character in a string. and // 12- Write a js program to find lowest frequency character in a string.
const freq =()=>{
    var r = 0
    var ar =[]
    var b ={}

    var get = document.getElementById(`get12`).value
    
    for(let i=0;i< get.length; i++){
      let got = get.slice(r,r+1)
      ar[i]= got
      b[got]=0
     
    r++}
    console.log(ar);
    ar.forEach((got)=>{
    b[got]+= 1
    });
    var gotr = JSON.stringify(b)
    console.log(gotr)
    document.getElementById(`result12`).innerHTML=`You can Check Highest Frequencey Character ,Lowest Frequency Character in this Simple Array of Objects [${gotr}]`
    }
    // 15- Write a js program to remove first occurrence of a character from string.
    const ococ=()=>{
        var get = document.getElementById(`get13`).value
        var get2 = prompt(`Please Enter Character That You want to remove its First Occurrence`)
    
        var ho = get.replace(get2,"")
        console.log(ho);
        document.getElementById(`result13`).innerHTML =`By Removing First Occurrence of Given Character in Given String We Got 
        Final String [${ho}]`

    }
    // 16- Write a js program to remove last occurrence of a character from string.
    const coco=()=>{
        var arr = []
        var j=0
        var get = document.getElementById(`get14`).value
        var get2 = prompt(`Please Enter Character That You want to remove its last Occurrence`)
        for(let i = 0 ; i< get.length; i++){
            var fog = get.slice(j,j+1)
            arr[i] = fog
        j++}

    console.log(arr);
         var foo =  arr.reverse()
         console.log(foo);
         for(let k = 0 ; k< foo.length; k++ ){
             if(foo[k]===get2){
                 foo[k] =''
                 break;
             }

         }
        console.log(foo);
       var str= foo.reverse().join('')
        console.log(str);
        document.getElementById(`result14`).innerHTML =`By Removing Last Occurrence of Given Character in Given String We Got 
        Final String [${str}]`
    }
    // 17- Write a js program to remove all occurrences of a character from string.
    const coc =()=>{
        var get = document.getElementById(`get15`).value
        var get2 = prompt(`Please Enter Character That You want to remove its Occurrence Globally`)
        var ans = get.split(get2).join('')
        console.log(ans);
        document.getElementById(`result15`).innerHTML = `By Removing the All Occurrence of Given Character in given String We Got
        [${ans}]`
    }
    // 18- Write a js program to remove all repeated characters from a given string.
    const reo =()=>{
        var get = document.getElementById(`get16`).value
        var j = 0
        var ar = []
        for(let i = 0 ; i < get.length ; i++){
            var got = get.slice(j,j+1)
            ar[i] = got

      j++
        }
        const rep =(value,i,k)=>{
            return k.indexOf(value) === i 
        }
        var arr = ar.filter(rep)
        var cc = arr.join("")
        console.log(arr);
        document.getElementById(`result16`).innerHTML = `By Removing the Repeated Characters in String We Got [${cc}]`

    }
    // 19- Write a js program to replace first occurrence of a character with another in a string.
    const o1 =()=>{
        var get = document.getElementById(`get17`).value
        var get2 = prompt(`Please Enter a Character of which You want to Replace its First Occurrence`)
        var get3 = prompt(`Please Enter Character that You want to Replace With`)

        var ans = get.replace(get2,get3)
        console.log(ans);
        document.getElementById(`result17`).innerHTML =`By Replaceing the First Occurrence of Given Character We Got [${ans}]`
    }
    // 20- Write a js program to replace last occurrence of a character with another in a string.
    const o11 =()=>{
        var arr = []
        var j=0
        var get = document.getElementById(`get18`).value
        var get2 = prompt(`Please Enter Character That You want to Replace its last Occurrence`)
        var get3 = prompt(`Enter the Character that You Want Replace With`)
        for(let i = 0 ; i< get.length; i++){
            var fog = get.slice(j,j+1)
            arr[i] = fog
        j++}

    console.log(arr);
         var foo =  arr.reverse()
         console.log(foo);
         for(let k = 0 ; k< foo.length; k++ ){
             if(foo[k]===get2){
                 foo[k] = get3
                 break;
             }

         }
        console.log(foo);
        var str=foo.reverse().join('')
        console.log(str);
        document.getElementById(`result18`).innerHTML =`By Replace Last Occurrence of Given Character in Given String We Got 
        Final String [${str}]`
    }
    // 21- Write a js program to replace all occurrences of a character with another in a string.
    const o111 =()=>{
        var get = document.getElementById(`get19`).value
        var get2 = prompt(`Please Enter Character That You want to Replace its Occurrence Globally`)
        var get3 = prompt(`Enter the Character that You Want Replace With`)
            var got = get.split(get2).join(get3)
            console.log(got);
            document.getElementById(`result19`).innerHTML =`By Replace Last Occurrence of Given Character in Given String We Got 
            Final String [${got}]`
    }
    // 22- Write a js program to find first occurrence of a word in a given string.
    const wed=()=>{
        var get =document.getElementById(`get20`).value
        var get2 = prompt(`Please Enter Word to check its first Occurrence`)
        var got = get.indexOf(get2)
        console.log(got);
        document.getElementById(`result20`).innerHTML = `The Occurrence of Given word In Given String is at the index of [${got}]`
    }
    // 23- Write a js program to find last occurrence of a word in a given string. 
    const lass =()=>{
       var get =document.getElementById(`get21`).value
       var get2 = prompt(`Please Enter the Word to Find Its Last Occurrence`)

       var got = get.lastIndexOf(get2)
       console.log(got);
       document.getElementById(`result21`).innerHTML = `The Last Occurrence of Given Word  in Given String is at Index of [${got}]`
    }
    // 24- Write a js program to search all occurrences of a word in given string.
    const las=()=>{
        var get = document.getElementById(`get22`).value
        var get2 = prompt(`Please Enter Word To Check its Occurrence`)
        for(let i = 0 ; i<get.length ; i++){
         var got = parseInt(get.indexOf(get2))
         var got2 = parseInt(get.indexOf(get2,got+1))
         var got3 = parseInt(get.indexOf(get2,got2+1))
         var got4 = parseInt(get.indexOf(get2,got3+1))
         var got5 = parseInt(get.indexOf(get2,got4+1))
    }if(got == -1 || got2 == -1){
        document.getElementById(`result22`).innerHTML =`Please Enter Some Words`
    }

    document.getElementById(`result22`).innerHTML =`Your Given Word Occure At the index of [${got},${got2},${got3}]`
} 
// 25- Write a js program to count occurrences of a word in a given string.
const la3=()=>{
    var get =document.getElementById(`get23`).value
    var get2 = prompt(`Please Enter The Word of Which You Want to Count Its Occurrence`)
     var re= get.split(" ").join("")
    console.log(re);
    var leng = re.length / get2.length
    var rleng = Math.round(leng)
    console.log("loop lenth",rleng)
    var count = 0
    var j =0
    for(let i =0 ; i<rleng; i++){
        var got = re.slice(j,j+get2.length )
        console.log("cuted piece",got);
        if(got == get2){
            count+=1
        }
        j+=get2.length
    }
    console.log(count)
    document.getElementById(`result23`).innerHTML = `Your Given Word [${get2}] occure [${count}] Times in Given String `
}
// 26- Write a js program to remove first occurrence of a word from string.
const lo =()=>{
    var get = document.getElementById(`get24`).value
    // var got = toString(get)
    var get2 = prompt(`Please Enter Word Of which You want to remove its first Occurrence`)
    var ans = get.replace(get2,"")
    console.log(ans);
    document.getElementById(`result24`).innerHTML = `By Removing the First Occurrence of word [${get2}] from given String We Got [${ans}]`   
}
// 27- Write a js program to remove last occurrence of a word in given string.
const lo0=()=>{
    var arr =[]
    var arr2 =[]
    var arr3=[]
    var get = document.getElementById(`get25`).value
    var get2 = prompt(`Please Enter Word Of which You want to remove its last Occurrence`)
    var j=0
    var k =0
    var m=0
    for(let i = 0; i < get.length ; i++){
       var got = get.slice(j,j+1)
       arr[i] = got
       j++
    }
    for(let c = 0; c < get2.length ; c++){
     var du = get2.slice(k,k+1)
     arr2[c] = du
     k++
    }
    var fot =arr.reverse().join("");
    var foot = arr2.reverse().join("");

    console.log(foot);
    console.log(fot);
    var goot = fot.replace(foot,"")
    for(let n = 0; n < goot.length ; n++){
        var si = goot.slice(m,m+1)
        arr3[n] =si
        m++
    }
    var sot = arr3.reverse().join("");
    console.log(sot);

document.getElementById(`result25`).innerHTML = `By Removing Last Occurrence of word [${get2}] from String We Got [${sot}]`
}
// 28- Write a js program to remove all occurrence of a word in given string.
const kot =()=>{
    var get = document.getElementById(`get26`).value
    var get2 = prompt(`Please Enter Word Of which You want to remove its  Occurrence`)

    var got = get.split(get2).join("")
    console.log(got);
    document.getElementById(`result26`).innerHTML =`By Removing All Occurrence of Given Word [${get2}] from String We Got [${got}]`
}
// 29- Write a js program to trim leading white space characters from given string.// 30- Write a js program to trim trailing white space characters from given string. //31- Write a js program to trim both leading and trailing white space characters from given string.

const koo = ()=>{
    var get =document.getElementById(`get27`).value
    var got = get.trim()
    console.log(got);
    document.getElementById(`result27`).innerHTML =`By Removing the Leading Space From Given String We Got [${got}]`

}
// 32- Write a js program to remove all extra blank spaces from given string.
const sokk = ()=>{
    var get = document.getElementById(`get28`).value
    var got = get.split(" ").join("");
    document.getElementById(`result28`).innerHTML = `By Removing All Blank Spaces From String We Got Original String [${got}]`

}
// 33- Write a js program to count frequency of each element in an array
const sok =()=>{
    var ar =[]
    var b ={}

    var get =  document.getElementById(`get29`).value
    var get2 = prompt(`please Enter 2nd Element of an Array`)
    var get3 = prompt(`please Enter 3rd Element of an Array`)
    var get4 = prompt(`please Enter 4th Element of an Array`)
    var get5 = prompt(`please Enter 5th Element of an Array`)
    var ar =[get,get2,get3,get4,get5]
    var i = 0
    for( i=0;i< ar.length; i++){
      b[ar[i]] = 0
      console.log(b[ar[i]]);
     }
    console.log(ar);
    ar.forEach((ar) => {
    b[ar]+= 1
    });
    var gotr = JSON.stringify(b)
    console.log(gotr)
    document.getElementById(`result29`).innerHTML=`You can Check Highest Frequencey Character ,Lowest Frequency Character of Each Element in this Simple Array of Objects [${gotr}]`
}
// 34- Write a js program to print all unique elements in the array.
const cokk =()=>{
    var get =document.getElementById(`get30`).value
    var get2 = prompt(`please Enter 2nd Element of an Array`)
    var get3 = prompt(`please Enter 3rd Element of an Array`)
    var get4 = prompt(`please Enter 4th Element of an Array`)
    var get5 = prompt(`please Enter 5th Element of an Array`)
    var arry = [get,get2,get3,get4,get5]
    const dis = (m,l,k) =>{
        return k.indexOf(m) === l
    }

    var res = arry.filter(dis)
    console.log(res);
    document.getElementById(`result30`).innerHTML =`Unique Characters in Given Array Are [${res}]`

    }
    // 35- Write a js program to count total number of duplicate elements in an array.
    const ddl =()=>{
        var ar=[]
        var b ={}
        var get =  document.getElementById(`get31`).value
    var get2 = prompt(`please Enter 2nd Element of an Array`)
    var get3 = prompt(`please Enter 3rd Element of an Array`)
    var get4 = prompt(`please Enter 4th Element of an Array`)
    var get5 = prompt(`please Enter 5th Element of an Array`)
    var ar =[get,get2,get3,get4,get5]
    var i = 0
    for( i=0;i< ar.length; i++){
      b[ar[i]] = 0
      console.log(b[ar[i]]);
     }
    console.log(ar);
    ar.forEach((ar) => {
    b[ar]+= 1
    });
    var gotr = JSON.stringify(b)
    console.log(gotr)
    document.getElementById(`result31`).innerHTML=`You can Check Count of Duplicated Elements in this Simple Array of Objects [${gotr}]`
}
// 36- Write a js program to delete all duplicate elements from an array.
const lax = ()=>{
    var get =document.getElementById(`get32`).value
    var get2 = prompt(`please Enter 2nd Element of an Array`)
    var get3 = prompt(`please Enter 3rd Element of an Array`)
    var get4 = prompt(`please Enter 4th Element of an Array`)
    var get5 = prompt(`please Enter 5th Element of an Array`)
    var arry = [get,get2,get3,get4,get5]
    const dis = (m,l,k) =>{
        return k.indexOf(m) === l
    }

    var res = arry.filter(dis)
    console.log(res);
    document.getElementById(`result32`).innerHTML =`By Deleting Duplicate Characters in Given Array We Got  [${res}]`
}
// 37- Write a js program to merge two array to third array.
const lak =()=>{
    var get = document.getElementById(`get33`).value
    var get2 = prompt(`Please Enter 2nd Element Of 1st Array`)
    var get3 = prompt(`Please Enter 3rd Element Of 1st Array`)
    var get4 = prompt(`Please Enter 4th Element Of 1st Array`)
    var get5 = prompt(`Please Enter 5th Element Of 1st Array`)

    var aarr11 = [get,get2,get3,get4,get5]

    alert(`Elements of 1st Array are Complete`)

    var get6 = prompt(`Please Enter 1st Element Of 2nd Array`)
    var get7 = prompt(`Please Enter 2nd Element Of 2nd Array`)
    var get8 = prompt(`Please Enter 3rd Element Of 2nd Array`)
    var get9 = prompt(`Please Enter 4th Element Of 2nd Array`)
    var get10 = prompt(`Please Enter 5th Element Of 2nd Array`)
    var aarr22  = [get6,get7,get8,get9,get10]

    alert (`Elements of 2nd Array are Complete`)



    var arry3 =[get,get2,get3,get4,get5,get6,get7,get8,get9,get10]

    document.getElementById(`result33`).innerHTML = `By Merging Two Arrays We Got Third Array [${arry3}]`



}

// 38- Write a js program to find reverse of an array.

const ree =()=>{
    var get = document.getElementById(`get34`).value
    var get2 = prompt(`Please Enter 2nd Element Of  Array`)
    var get3 = prompt(`Please Enter 3rd Element Of  Array`)
    var get4 = prompt(`Please Enter 4th Element Of  Array`)
    var get5 = prompt(`Please Enter 5th Element Of  Array`)

    var aarr11 = [get,get2,get3,get4,get5]
    aarr11.reverse()
    document.getElementById(`result34`).innerHTML = `By Reversing the Given Array We Got [${aarr11}]`
}
//39- Write a js program to put even and odd elements of array in two separate array.
const rke=()=>{
    var even = []
    var odd  = []
    var get = document.getElementById(`get35`).value
    if(get%2 == 0 ){
        even[6] = get
    }else {
        odd[6] =get
    }
    for(let i=2;i<=10;i++){
    var get2 = parseInt(prompt(`Please Enter ${i} Element Of Array`))
    if(get2 % 2 == 0){
        even[i] = get2
    }else{
        odd[i] =get2
    }  
}
console.log(`even`,even);
console.log(`odd`,odd);
document.getElementById(`result35`).innerHTML = `Array Of Even Numbers is [${even}] and Array Of Odd Numbers is [${odd}]`

}
// 40- Write a js program to search an element in an array.
const eke=()=>{
    var get = document.getElementById(`get36`).value
    var get2 = prompt(`Please Enter 2nd Element Of  Array`)
    var get3 = prompt(`Please Enter 3rd Element Of  Array`)
    var get4 = prompt(`Please Enter 4th Element Of  Array`)
    var get5 = prompt(`Please Enter 5th Element Of  Array`)
    var a1 = [get,get2,get3,get4,get5]

    alert(`Elements of Arrays are Complete`)


    var got = prompt(`NOW! Please Enter Element that You want To Search in Given Array`)
var greet = a1.indexOf(got)
var ggt =a1.lastIndexOf(got)
console.log(greet);
document.getElementById(`result36`).innerHTML = `Your Searched Element is at indexs of [${greet}] and [${ggt}]`

}
// 41- Write a js program to sort array elements in ascending or descending order.
const e00 =()=>{
    var ss = []
    var get =document.getElementById(`get37`).value
    for (let i  = 0; i < 5 ;i++){
       var got= prompt(`Enter ${i} Element Of Array`)
       ss[i] = got
    }
    console.log(ss );
    var sott = ss.sort(function(a,b){return a-b})
    console.log(sott);
    document.getElementById(`result37`).innerHTML =`Numbers In Ascanding Order 
    [${sott}]`
}
const e0 =()=>{
    var ss = []
    var get =document.getElementById(`get37`).value
    for (let i  = 0; i < 5 ;i++){
       var got= prompt(`Enter ${i} Element Of Array`)
       ss[i] = got
    }
    console.log(ss);
    var sott = ss.sort()
    console.log(sott);
    document.getElementById(`result37`).innerHTML =`Alphabets In Ascanding Order 
    [${sott}]`
}
// 42- Write a js program to sort even and odd elements of array separately.
const jo=()=>{
    var even = []
    var odd  = []
    var get = document.getElementById(`get38`).value
    if(get%2 == 0 ){
        even[0] = get
    }else {
        odd[0] =get
    }
    for(let i=2;i<=10;i++){
    var get2 = parseInt(prompt(`Please Enter ${i} Element Of Array`))
    if(get2 % 2 == 0){
        even[i] = get2
    }else{
        odd[i] =get2
    }  
}
console.log(`even`,even);
console.log(`odd`,odd);
document.getElementById(`result38`).innerHTML = `Array Of Even Numbers is [${even}] and Array Of Odd Numbers is [${odd}]`
}
// 43- Write a js program to left rotate an array.
const j =()=>{
    var j = 0
    var get = document.getElementById(`get39`).value
    var get2 = prompt(`Please Enter 2nd Element Of  Array`)
    var get3 = prompt(`Please Enter 3rd Element Of  Array`)
    var get4 = prompt(`Please Enter 4th Element Of  Array`)
    var get5 = prompt(`Please Enter 5th Element Of  Array`)
    var a1 = [get,get2,get3,get4,get5]
   
    

    console.log(a1);


    var a2 =[get2,get3,get4,get5,get]
    console.log(a2);
    document.getElementById(`result39`).innerHTML =`By Rotating the Array [${a1}] to the Left we Got New Array [${a2}]`

}
// 44- Write a js program to right rotate an array.
const jk =()=>{
    var get = document.getElementById(`get40`).value
    var get2 = prompt(`Please Enter 2nd Element Of  Array`)
    var get3 = prompt(`Please Enter 3rd Element Of  Array`)
    var get4 = prompt(`Please Enter 4th Element Of  Array`)
    var get5 = prompt(`Please Enter 5th Element Of  Array`)
    var a1 = [get,get2,get3,get4,get5]
   
    

    console.log(a1);


    var a2 =[get5,get,get2,get3,get4]
    console.log(a2);
    document.getElementById(`result40`).innerHTML =`By Rotating the Array [${a1}] to the Right we Got New Array [${a2}]`
}
// 45- Write a js program to find sum of all natural numbers between 1 to n.
const bk =()=>{
    var j = 0
    var get =document.getElementById(`get41`).value
    for(let i = 1 ; i <= get ; i++){
      j+=i
    }
    console.log(j);
    document.getElementById(`result41`).innerHTML =`According to Limit The Sum of Natural Numbers is [${j}]`
}
// 46- Write a js program to find sum of all even numbers between 1 to n.
const dm =()=>{
    var j = 0
    var get =document.getElementById(`get42`).value
    for(let i = 1 ; i <= get ; i++){
        if(i%2 === 0){
      j+=i
    }
}
    console.log(j);
    document.getElementById(`result42`).innerHTML =`According to Limit The Sum of Natural Numbers is [${j}]`
}
// 47- Write a js program to find sum of all odd numbers between 1 to n.
const dc=()=>{
    var j = 0
    var get =document.getElementById(`get43`).value
    for(let i = 1 ; i <= get ; i++){
        if(i%2 === 0){
    }else{
        j+=i
    }
}
    console.log(j);
    document.getElementById(`result43`).innerHTML =`According to Limit The Sum of Natural Numbers is [${j}]`
} 
// 48- Write a js program to print multiplication table of any number.
const vk =()=>{
    var output = ``
 var get = document.getElementById(`get44`).value
 for(let i = 1 ; i <= 10 ; i++){
     output = output + `<table><tr><td>${get}</td><td>*</td><td>${i}</td><td>=</td><td>${get * i}</td></tr></table>`
     console.log(output);
 }
 var gott = document.getElementById(`result44`)
 gott.innerHTML = output
}
// 49- Write a js program to count number of digits in a number.
const count=()=>{
    var get = document.getElementById(`get45`).value
    var got = get.length
    console.log(got);
    document.getElementById(`result45`).innerHTML =`Total Number of Digits in given Number is [${got}]`
}
// 50- Write a js program to find first and last digit of a number.
const fL = ()=>{
    var get =document.getElementById(`get46`).value
    var got= get.slice(0,1)
    var got2 = get.slice(get.length - 1 ,get.length)
    console.log(got);
    console.log(got2);
    document.getElementById(`result46`).innerHTML =`1st digit in Given Number is [${got}] and Last Digit in given Number is [${got2}]`
}
// 51- Write a js program to find sum of first and last digit of a number.
const Lkk =()=>{
    var get =document.getElementById(`get47`).value
    var got= parseInt(get.slice(0,1))
    var got2 = parseInt(get.slice(get.length - 1 ,get.length))
    console.log(got);
    console.log(got2);
    var ee = got + got2
    document.getElementById(`result47`).innerHTML =`Sum of 1st digit in Given Number [${got}] and Last Digit in given Number [${got2}] is [${ee}]`
}
// 52. Write a js program to swap first and last digits of a number.
const sw =()=>{
    var j =0
    var ar =[]
    var get =document.getElementById(`get48`).value
    var ggg = parseInt(get.length)
    console.log(ggg);
    var ff = get.slice(0,1)
    console.log(ff);
    for(let i = 0 ; i < ggg ; i++){
        var coc = get.slice(j,j+1)
        ar[i] = coc
        j++
    }
    console.log(ar);
    var cut = ar[ggg-1]
    console.log(cut);
    
   var got = ar.splice(0,1,cut)
   var got2 = ar.splice(ar[ggg-2],1,ff); 
   console.log(ar);
   var eee = ar.join("")
   console.log(`final`,eee);
    document.getElementById(`result48`).innerHTML =`By Swaping 1st digit and Last Digit in given Number  we got [${eee}]`
}
// 53. Write a js program to calculate sum of digits of a number.
const suum =()=>{
    var j=0
    var pluss =0
    var get =document.getElementById(`get49`).value
    for(let i = 0; i < get.length ; i++){
        var got = parseInt(get.slice(j,j+1))
        pluss+=got
j++
    }
    console.log(pluss);
    document.getElementById(`result49`).innerHTML =` Sum of Digits in the Numbers [${pluss}]`
}
// 54. Write a js program to calculate product of digits of a number.
const product =()=>{
    var j=0
    var pluss =1
    var get =document.getElementById(`get50`).value
    for(let i = 0; i < get.length ; i++){
        var got = parseInt(get.slice(j,j+1))
        pluss*=got
j++
    }
    console.log(pluss);
    document.getElementById(`result50`).innerHTML =` Product of Digits in the Numbers [${pluss}]` 
}











