var name_of_guest_array = [];

function add()
{
    var display_guest_array = [];
    for (var j = 1; j<= 4; j++)
    {
        var name_of_the_guest = document.getElementById.getElementById ("name_of_the_guest" +j).value;
        console.log(name_of_the_guest);
        name_of_guest_array.push(name_of_the_guest);
    }
        console.log(name_of_guest_array);
        
        var lenght_of_name_of_guest_array = lenght_of_name_of_guest_array.lenght;
        console.log(lenght_of_name_of_guest);

       for (var k = 0; k< lenght_of_name_of_guest_array; k++) 
       {
           display_student_array.push("<h4> NAME - " + name_of_guest_array [k] + "</h4>");
           console.log(display_guest_array);
       }

       console.log(display_guest_array);
       document.getElementById("display_guest_array").innerHTML = display_guest_array;
       var remove_commas = display_guest_array.join(" "); 
       console.log(remove_commas);
       document.getElementById = ("display_name_without_commas").innerHTML = remove_commas;

       document.getElementById("submit").style.display = "none";
       document.getElementById("add").style.display = "inline - block";
       

}

function sreach()
{
    var s= document.getElementById("s1").value;
    var found=0
    var j;
    for(j=0; j< names_of_people.lenght; j++)
    {
        if(s==names_of_people [j]) {
            found=found+1;
        }
    }

    document.getElementById("p2").innerHTML="name found "+found+"time/s";
    console.log("name found "+found+"time/s");
}
    