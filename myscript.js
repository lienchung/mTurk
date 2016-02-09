var answer1=0; 
$("document").ready(function() {
    
   
    
    //clickevent    
    $("#pic1").click(function(e){
        console.log ("pic1 div clicked");
        answer1 = answer1 + 1;

        pic1Div = document.getElementById("pic1");

        document.getElementById("answer1").value = answer1;

        x = e.offsetX;
        y = e.offsetY;

        var t = document.createElement("div");
        t.className="pic1Count";

        t.innerHTML=answer1;

        var setStyle = 'position:absolute; left:'+ x + 'px; top:' + y + 'px; font-size:25px; color:red';

        t.setAttribute('style', setStyle);

        pic1Div.appendChild(t); 



    });
    
    
    $("#pic1Reset").click(function(e){ 
        answer1=0;
        document.getElementById("answer1").value = answer1;
        $(".pic1Count").remove();
        
    });
    
    
});