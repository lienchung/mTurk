var answer1=0; 
var answer2=0;
var answer3=0;
var answer4=0;
var answer5=0;
var answer6=0;
var answer7=0;

$("document").ready(function() {
    
   
    
    //clickevent events   
    $("#pic1").click(function(e){
      
        answer1 = answer1 + 1;
        pic1Div = document.getElementById("pic1");
        document.getElementById("answer1").value = answer1;
        x = e.offsetX-2;
        y = e.offsetY-2;
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
    
        //clickevent events   
    $("#pic2").click(function(e){
      
        answer2 = answer2 + 1;
        pic2Div = document.getElementById("pic2");
        document.getElementById("answer2").value = answer2;
        x = e.offsetX-2;
        y = e.offsetY-2;
        var t = document.createElement("div");
        t.className="pic2Count";
        t.innerHTML=answer2;
        var setStyle = 'position:absolute; left:'+ x + 'px; top:' + y + 'px; font-size:25px; color:red';
        t.setAttribute('style', setStyle);
        pic2Div.appendChild(t); 
    });
    
    
    $("#pic2Reset").click(function(e){ 
        answer2=0;
        document.getElementById("answer2").value = answer2;
        $(".pic2Count").remove();
        
    });
    
    //clickevent events   
    $("#pic3").click(function(e){
      
        answer3 = answer3 + 1;
        pic3Div = document.getElementById("pic3");
        document.getElementById("answer3").value = answer3;
        x = e.offsetX-2;
        y = e.offsetY-2;
        var t = document.createElement("div");
        t.className="pic3Count";
        t.innerHTML=answer3;
        var setStyle = 'position:absolute; left:'+ x + 'px; top:' + y + 'px; font-size:25px; color:red';
        t.setAttribute('style', setStyle);
        pic3Div.appendChild(t); 
    });
    
    
    $("#pic3Reset").click(function(e){ 
        answer3=0;
        document.getElementById("answer3").value = answer3;
        $(".pic3Count").remove();
        
    });
    
    
     //clickevent events   
    $("#pic4").click(function(e){
      
        answer4 = answer4 + 1;
        pic4Div = document.getElementById("pic4");
        document.getElementById("answer4").value = answer4;
        x = e.offsetX-2;
        y = e.offsetY-2;
        var t = document.createElement("div");
        t.className="pic4Count";
        t.innerHTML=answer4;
        var setStyle = 'position:absolute; left:'+ x + 'px; top:' + y + 'px; font-size:25px; color:red';
        t.setAttribute('style', setStyle);
        pic4Div.appendChild(t); 
    });
    
    
    $("#pic4Reset").click(function(e){ 
        answer4=0;
        document.getElementById("answer4").value = answer4;
        $(".pic4Count").remove();
        
    });
    
    
     //clickevent events   
    $("#pic5").click(function(e){
      
        answer5 = answer5 + 1;
        pic5Div = document.getElementById("pic5");
        document.getElementById("answer5").value = answer5;
        x = e.offsetX-2;
        y = e.offsetY-2;
        var t = document.createElement("div");
        t.className="pic5Count";
        t.innerHTML=answer5;
        var setStyle = 'position:absolute; left:'+ x + 'px; top:' + y + 'px; font-size:25px; color:red';
        t.setAttribute('style', setStyle);
        pic5Div.appendChild(t); 
    });
    
    
    $("#pic5Reset").click(function(e){ 
        answer5=0;
        document.getElementById("answer5").value = answer5;
        $(".pic5Count").remove();
        
    });
    
    
     //clickevent events   
    $("#pic6").click(function(e){
      
        answer6 = answer6 + 1;
        pic6Div = document.getElementById("pic6");
        document.getElementById("answer6").value = answer6;
        x = e.offsetX-2;
        y = e.offsetY-2;
        var t = document.createElement("div");
        t.className="pic6Count";
        t.innerHTML=answer6;
        var setStyle = 'position:absolute; left:'+ x + 'px; top:' + y + 'px; font-size:25px; color:red';
        t.setAttribute('style', setStyle);
        pic6Div.appendChild(t); 
    });
    
    
    $("#pic6Reset").click(function(e){ 
        answer6=0;
        document.getElementById("answer6").value = answer6;
        $(".pic6Count").remove();
        
    });
    
    
      //clickevent events   
    $("#pic7").click(function(e){
      
        answer7 = answer7 + 1;
        pic7Div = document.getElementById("pic7");
        document.getElementById("answer7").value = answer7;
        x = e.offsetX-2;
        y = e.offsetY-2;
        var t = document.createElement("div");
        t.className="pic7Count";
        t.innerHTML=answer7;
        var setStyle = 'position:absolute; left:'+ x + 'px; top:' + y + 'px; font-size:14px; color:red';
        t.setAttribute('style', setStyle);
        pic7Div.appendChild(t); 
    });
    
    
    $("#pic7Reset").click(function(e){ 
        answer7=0;
        document.getElementById("answer7").value = answer7;
        $(".pic7Count").remove();
        
    });
    
    
    
    
    
    
    
    
    
});