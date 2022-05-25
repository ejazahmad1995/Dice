document.querySelector("#roll").addEventListener("click",myfunction)

function myfunction(){
    var m1=Math.floor(Math.random()*6)+1;

    var m2=Math.floor(Math.random()*6)+1;

    var m3=Math.floor(Math.random()*6)+1;
    console.log(m1);

    

    document.querySelector("#member-1>h1").innerHTML=m1

    document.querySelector("#member-2>h1").innerHTML=m2

    document.querySelector("#member-3>h1").innerHTML=m3

    if(m1>m2 && m1>m3)
    {
        document.querySelector("#display").innerHTML="Member-1"
    }
    else if(m2>m3 && m2>m1)
    {
        document.querySelector("#display").innerHTML="Member-2"
    }
    else if(m3>m1 && m3>m2)
    {
        document.querySelector("#display").innerHTML="Member-3"
    }
    else
    {
        document.querySelector("#display").innerHTML="Draw"
    }

    if(m1>m2 && m1>m3)
    {
        document.querySelector("#member-1>h1").id="I"
    }
    else if(m1>m2 && m1<m3 ||m1>m3 && m1<m2){
        document.querySelector("#member-1>h1").id="II"
    }
    else if(m1<m2 && m1<m3){
        document.querySelector("#member-1>h1").id="III"
    }

    if(m2>m1 && m2>m3)
    {
        document.querySelector("#member-2>h1").id="I"
    }
    else if(m2>m1 && m2<m3 ||m2>m3 && m2<m1){
        document.querySelector("#member-2>h1").id="II"
    }
    else if(m2<m1 && m2<m3){
        document.querySelector("#member-2>h1").id="III"
    }

    if(m3>m2 && m3>m1)
    {
        document.querySelector("#member-3>h1").id="I"
    }
    else if(m3>m2 && m3<m1 ||m3>m1 && m3<m2){
        document.querySelector("#member-3>h1").id="II"
    }
    else if(m3<m2 && m3<m1){
        document.querySelector("#member-3>h1").id="III"
    }


    if(m1===m2){
        document.querySelector("#member-1>h1").id="draw"

        document.querySelector("#member-2>h1").id="draw"
    }
    
    else if(m1===m3){
        document.querySelector("#member-1>h1").id="draw"

        document.querySelector("#member-3>h1").id="draw"
    }

    else if(m2===m3){
        document.querySelector("#member-2>h1").id="draw"

        document.querySelector("#member-3>h1").id="draw"
    }
    else if(m2===m1){
        document.querySelector("#member-2>h1").id="draw"

        document.querySelector("#member-1>h1").id="draw"
    }

    if(document.querySelector("#display").innerHTML=="Draw")
    {
        document.querySelector("#member-1>h1").id="draw"

        document.querySelector("#member-2>h1").id="draw"

        document.querySelector("#member-3>h1").id="draw"
    }
    

}