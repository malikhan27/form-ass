function getValue(){
    var city = document.getElementById('City')
    var course= document.getElementById('Course')
    var campus= document.getElementById('campus')
    var class_preferences=document.getElementById('Class')
    var username = document.getElementById('name')
    var userfathername = document.getElementById('father-name')
    var email= document.getElementById('email')
    var number= document.getElementById('number')
    var cnic= document.getElementById('cnic')
    var father_cnic= document.getElementById('fathers-cnic')
    var dob= document.getElementById('DOB')
    var address= document.getElementById('Address')
    var qualification=document.getElementById("LstQualf")
    var laptopQ=document.getElementById('Question')

    console.log("CITY"+" "+city.value)
    console.log("COURSE"+" "+course.value)
    console.log("CAMPUS"+" "+campus.value)
    console.log("CLASS"+" "+class_preferences.value)
    console.log("NAME"+" "+username.value)
    console.log("FATHER NAME"+" "+userfathername.value)
    console.log("EMAIL"+" "+email.value)
    console.log("NUMBER"+" "+number.value)
    console.log("CNIC"+" "+cnic.value)
    console.log("FATHER CNIC"+" "+father_cnic.value)
    console.log("DATE OF BIRTH"+" "+dob.value)
    console.log("ADDRESS"+" "+address.value)
    console.log("QUALIFICATION"+" "+qualification.value)
    console.log("DO YOU HAVE LAPTOP?"+" "+laptopQ.value)

}