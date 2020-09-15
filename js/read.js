var classRoom= {
    nameOfClass:'4th grade',
    studentNum : 3,
    studatAge : 15,
    "student name1": "nayrooz",/// key can be written like that
    "student name2": "rabee3",
    "student name3": "boby",
    greeting:function(){// this is a key called function or method
        console.log('goodmorning',classRoom["student name1"],this["student name2"],this["student name3"]);
        return (`goodmorning,${classRoom["student name1"]},${this["student name2"]},${this["student name3"]}.`)
        // this refer to the window if it  outside an object but it dose refer to the object which located inside it
    }

}
classRoom.greeting();// to call a finction inside the object you must declear the objectname firtst then you put the .name of  function();

classRoom.color="green";
console.log(classRoom);// because we want to see the result on the object not properity so this is the write way

delete classRoom["student name3"];
console.log(classRoom);

classRoom.goal= 'higher mark';
console.log(classRoom);

delete classRoom.goal; // just the nameof object.properityname withoutvalue
console.log(classRoom);

/// because of you will, have a dynamic section in your website  you will use the javascrirpt as away to create and write on html page.

var profileSection = document.getElementById('classPofile');/// link the js by document.getElementById
console.log(profileSection);

var h2EL= document.createElement('h2');/// CREATE AN ELEMENT
profileSection.appendChild(h2EL);/// TO claerify where this element belong >> to profileSection(section in html that had th id if class profile) >>appendChild its mean deppendclild /follow the parent
h2EL.textContent = this.nameOfClass;



//////////////////////////////////////////////////////

function person(){
    this.name ="mahmoud";
    // this.sayhi=function(){
    //     console.log('hi,this.name')
    }
    person.prototype.sayhi=function(){
        console.log('hi,this.name')
}
var person= new person('majkl')
    console.log(person)
var person1=new person('kmnmhj')
console.log(person) 



