                //\\            |||                 ||\\\\\\\\\               ,,????""????.,,
               ///\\\           |||                 |||      \\\\            ???           ???  
              ///  \\\          |||                 |||       \\\\          ///             \\\
             ///    \\\         |||                 |||        \\\\         |||             |||
            ///      \\\        |||                 |||         \\\\        ???             ???
           ///////\\\\\\\       |||                 |||         \\\\        ???            ???
          ///          \\\      |||          /\     |||        ////           ???         ???
         ///            \\\     ||||||||||||///     |||||||///////              **???..???**


   
   //2nd degre JS

var a, b, c, d;
var outputText;
function solution() {
    //declaration
    a = document.forms["input_form"]["a1"].value;
    b = document.forms["input_form"]["b1"].value;
    c = document.forms["input_form"]["c1"].value;
    //calcule x1 et x2
    if (isNaN(a))
    {
        outputText="<p>Tsy maintsy atao isa ny <strong>a</strong></p>";
    }
    else if (isNaN(b))
    {
        outputText="<p>Tsy maintsy atao isa ny <strong>b</strong></p>";
    }
    else if (isNaN(c))
    {
        outputText="<p>Tsy maintsy atao isa ny <strong>c</strong></p>";
    }
    else if (a==0) { 
        if (b==0) {
            if(c==0){
                outputText = "<p>Ekasiao: <strong> 0 = 0 </strong><br> Hamarino tsara ny ekasiao fa tsy misy miovaova !</p>";
            }
            else{
                outputText = "<p>Ekasiao: <strong>" + c + " = 0</strong><br> Hamarino tsara ny ekasiao fa tsy mitombona !</p>";
            }
            
        }
        else {
            if (c==0) {
                outputText = "<p>Ekasiao: <strong>"+ ( b== 1 ? "" : ""| b==- 1? "-":b) + "x = 0<br> Valiny tokana:<br> x= 0</p>";
            }
            else {
                var x4 = (-c)/(b);
                outputText = "<p>Ekasiao: <strong>"+ ( b== 1 ? "" : ""| b==- 1? "-":b) + "x " + (c>=0 ? "+ "+ c +"" : ""| c<0 ? "- "+ -c +"" : c) + " = 0</strong><br>Valiny tokana:<br> <strong>x= " + x4 + "</strong></p>";
            }
        }
    }
    else if (b==0) {
        if (c==0){
            outputText = "<p>Ekasiao: <strong>" + ( a== 1 ? "" : ""| a==- 1? "-":a) + "x\u00b2 = 0<br> Valiny tokana:<br> x= 0</p>";
        }
        else {
            d = (Math.pow(b, 2) - 4 * a * c);
            if (d<0){
                outputText = "<p>Ekasiao: <strong>" + ( a== 1 ? "" : ""| a==- 1? "-":a) + "x\u00b2  " + (c>=0 ? "+ "+ c +"" : ""| c<0 ? "- "+ -c +"" : c) + " = 0</strong><br><strong>Delta d= "+ d +"</strong><br>Tsy misy vahaolana io ao amin'ny R </p>";
            }
            else if (d==0){
                var x3 = (-b) / (2 * a);
                outputText = "<p>Ekasiao: <strong>" + ( a== 1 ? "" : ""| a==- 1? "-":a) + "x\u00b2  " + (c>=0 ? "+ "+ c +"" : ""| c<0 ? "- "+ -c +"" : c) + " = 0</strong><br><strong>Delta d= "+ d +"</strong><br>Valiny tokana:<br> <strong>x= " + x3 + "</strong></p>";
            }
            else {
                var x1 = (-b - Math.sqrt(d)) / (2 * a);
                var x2 = (-b + Math.sqrt(d)) / (2 * a);
                outputText = "<p>Ekasiao: <strong>" + ( a== 1 ? "" : ""| a==- 1? "-":a) + "x\u00b2   " + (c>=0 ? "+ "+ c +"" : ""| c<0 ? "- "+ -c +"" : c) + " = 0</strong><br><strong>Delta d= "+ d +"</strong><br>Valiny roa samy hafa: <br><strong>x₁= " + x1 + "</strong><br><strong> x₂= " + x2 + "</strong></p>";
            }
        }
    }
    else if (c==0) {
        d = (Math.pow(b, 2) - 4 * a * c);
        if (d<0){
            outputText = "<p>Ekasiao: <strong>" + ( a== 1 ? "" : ""| a==- 1? "-":a) + "x\u00b2  "+ (b== 1 ? "+ " : ""| b== -1 ? "- " : ""|b>=0 ? "+ "+ b +"" : ""| b<0 ? "- "+ -b +"" : b ) + "x = 0</strong><br><strong>Delta d= "+ d +"</strong><br>Tsy misy vahaolana io ao amin'ny R !</p>";
        }
        else if (d==0){
            var x3 = (-b) / (2 * a);
            outputText = "<p>Ekasiao: <strong>" + ( a== 1 ? "" : ""| a==- 1? "-":a) + "x\u00b2  "+ (b== 1 ? "+ " : ""| b== -1 ? "- " : ""|b>=0 ? "+ "+ b +"" : ""| b<0 ? "- "+ -b +"" : b ) + "x = 0</strong><br><strong>Delta d= "+ d +"</strong><br>Valiny tokana:<br> <strong>x = " + x3 + "</strong></p>";
        }
        else {
            var x1 = (-b - Math.sqrt(d)) / (2 * a);
            var x2 = (-b + Math.sqrt(d)) / (2 * a);
            outputText = "<p>Ekasiao: <strong>" + ( a== 1 ? "" : ""| a==- 1? "-":a) + "x\u00b2  "+ (b== 1 ? "+ " : ""| b== -1 ? "- " : ""|b>=0 ? "+ "+ b +"" : ""| b<0 ? "- "+ -b +"" : b ) + "x = 0</strong><br><strong>Delta d= "+ d +"</strong><br>Valiny roa samy hafa: <br><strong>x₁= " + x1 + "</strong><br><strong> x₂= " + x2 + "</strong></p>";
        }
    }
    else {
        d = (Math.pow(b, 2) - 4 * a * c);
        if (d<0){
            outputText = "<p>Ekasiao: <strong>" + ( a== 1 ? "" : ""| a==- 1? "-":a) + "x\u00b2  "+ (b== 1 ? "+ " : ""| b== -1 ? "- " : ""|b>=0 ? "+ "+ b +"" : ""| b<0 ? "- "+ -b +"" : b ) + "x " + (c>=0 ? "+ "+ c +"" : ""| c<0 ? "- "+ -c +"" : c) + " = 0</strong><br><strong>Delta d= "+ d +"</strong><br>Tsy misy vahaolana io ao amin'ny R !</p>";
        }
        else if (d==0){
            var x3 = (-b) / (2 * a);
            outputText = "<p>Ekasiao: <strong>" + ( a== 1 ? "" : ""| a==- 1? "-":a) + "x\u00b2  "+ (b== 1 ? "+ " : ""| b== -1 ? "- " : ""|b>=0 ? "+ "+ b +"" : ""| b<0 ? "- "+ -b +"" : b ) + "x " + (c>=0 ? "+ "+ c +"" : ""| c<0 ? "- "+ -c +"" : c) + " = 0</strong><br><strong>Delta d= "+ d +"</strong><br>Valiny tokana:<br> <strong>x= " + x3 + "</strong></p>";
        }
        else {
            var x1 = (-b - Math.sqrt(d)) / (2 * a);
            var x2 = (-b + Math.sqrt(d)) / (2 * a);
            outputText = "<p>Ekasiao: <strong>" + ( a== 1 ? "" : ""| a==- 1? "-":a) + "x\u00b2  "+ (b== 1 ? "+ " : ""| b== -1 ? "- " : ""|b>=0 ? "+ "+ b +"" : ""| b<0 ? "- "+ -b +"" : b ) + "x " + (c>=0 ? "+ "+ c +"" : ""| c<0 ? "- "+ -c +"" : c) + " = 0</strong><br><strong>Delta d= "+ d +"</strong><br>Valiny roa samy hafa: <br><strong>x₁= " + x1 + "</strong><br><strong> x₂= " + x2 + "</strong></p>";
        }
    }

    //resultat*/
    document.getElementById("valiny").innerHTML = outputText;
}

            // debut 2nd jquery

function solution2() 
{
    a = $("#abca").val();
    b = $("#abcb").val();
    c = $("#abcc").val();
    d = (Math.pow(b, 2) - 4 * a * c);
    x1 = (-b - Math.sqrt(d)) / (2 * a);
    x2 = (-b + Math.sqrt(d)) / (2 * a);
    
    if (a==0)
    {
        if(b==0)
        {
            if(c==0)
            {
                $("p1").text("Ekasiao: 0 = 0 ");
                $("p2").text("Hamarino tsara ny Ekasiao fa tsy misy miovaova !");
                $("p3").hide();
                $("p4").hide();
                $("p5").hide();
            }
            else
            {
                $("p1").text("Ekasiao: "+ c +" = 0 ");
                $("p2").text("Hamarino tsara ny Ekasiao fa tsy mitombona !");
                $("p3").hide();
                $("p4").hide();
                $("p5").hide();
            }
        }
        else{
            if(c==0){
                $("p3").show();
                $("p1").text("Ekasiao: "+ ( b== 1 ? "" : ""| b==- 1? "-":b) + "x = 0");
                $("p2").text("valiny tokana: ");
                $("p3").text("x = 0");
                $("p4").hide();
                $("p5").hide();
            }
            else{
                $("p3").show();
                $("p1").text("Ekasiao: "+ ( b== 1 ? "" : ""| b==- 1? "-":b) + "x " + (c>=0 ? "+ "+ c +"" : ""| c<0 ? "- "+ -c +"" : c) + " = 0");
                $("p2").text("valiny tokana: ");
                $("p3").text("x = "+ -c/b +"");
                $("p4").hide();
                $("p5").hide();
            }
        }
    }
    else if (b==0){
        if (c==0){
            $("p3").show();
            $("p1").text("Ekasiao: " + ( a== 1 ? "" : ""| a==- 1? "-":a) + "x\u00b2 = 0");
            $("p2").text("valiny tokana:");
            $("p3").text("x = 0");
            $("p4").hide();
            $("p5").hide();
        }
        else{
            if (d<0){
                $("p3").show();
                $("p1").text("Ekasiao: " + ( a== 1 ? "" : ""| a==- 1? "-":a) + "x\u00b2  " + (c>=0 ? "+ "+ c +"" : ""| c<0 ? "- "+ -c +"" : c) + " = 0 ");
                $("p2").text("Delta d = "+d+"");
                $("p3").text("Tsy misy vahaolana io ao amin'ny R");
                $("p4").hide();
                $("p5").hide();
            }
            else if (d==0){
                $("p3").show();
                $("p4").show();
                $("p1").text("Ekasiao: " + ( a== 1 ? "" : ""| a==- 1? "-":a) + "x\u00b2  " + (c>=0 ? "+ "+ c +"" : ""| c<0 ? "- "+ -c +"" : c) + " = 0 ");
                $("p2").text("Delta d = 0");
                $("p3").text("Valiny tokana: ");
                $("p4").text(" x = "+ -b/(2*a) +"");
                $("p5").hide();
            }
            else{
                $("p3").show();
                $("p4").show();
                $("p5").show();
                $("p1").text("Ekasiao: " + ( a== 1 ? "" : ""| a==- 1? "-":a) + "x\u00b2  " + (c>=0 ? "+ "+ c +"" : ""| c<0 ? "- "+ -c +"" : c) + " = 0 ");
                $("p2").text("Delta d = "+d+"");
                $("p3").text("Valiny roa samy hafa: ");
                $("p4").text("x₁= " + x1 + "");
                $("p5").text(" x₂= " + x2 + "");
            }
        }
    }
    else if (c==0){
        if (d<0){
            $("p1").text("Ekasiao: " + ( a== 1 ? "" : ""| a==- 1? "-":a) + "x\u00b2  "+ (b== 1 ? "+ " : ""| b== -1 ? "- " : ""|b>=0 ? "+ "+ b +"" : ""| b<0 ? "- "+ -b +"" : b ) + "x = 0 ");
            $("p2").text("Delta d = "+d+"");
            $("p3").text("Tsy misy vahaolana io ao amin'ny R");
            $("p3").show();
            $("p4").hide();
            $("p5").hide();
        }
        else if (d==0){
            $("p3").show();
            $("p4").show();
            $("p1").text("Ekasiao: " + ( a== 1 ? "" : ""| a==- 1? "-":a) + "x\u00b2  "+ (b== 1 ? "+ " : ""| b== -1 ? "- " : ""|b>=0 ? "+ "+ b +"" : ""| b<0 ? "- "+ -b +"" : b ) + "x = 0 ");
            $("p2").text("Delta d = 0");
            $("p3").text("Valiny tokana: ");
            $("p4").text(" x = "+ -b/(2*a) +"");
            $("p5").hide();
        }
        else{
            $("p3").show();
            $("p4").show();
            $("p5").show();
            $("p1").text("Ekasiao: " + ( a== 1 ? "" : ""| a==- 1? "-":a) + "x\u00b2  "+ (b== 1 ? "+ " : ""| b== -1 ? "- " : ""|b>=0 ? "+ "+ b +"" : ""| b<0 ? "- "+ -b +"" : b ) + "x = 0 ");
            $("p2").text("Delta d = "+d+"");
            $("p3").text("Valiny roa samy hafa: ");
            $("p4").text("x₁= " + x1 + "");
            $("p5").text(" x₂= " + x2 + "");
        }
    }
    else{
        if (d<0){
            $("p3").show();
            $("p1").text("Ekasiao: " + ( a== 1 ? "" : ""| a==- 1? "-":a) + "x\u00b2  "+ (b== 1 ? "+ " : ""| b== -1 ? "- " : ""|b>=0 ? "+ "+ b +"" : ""| b<0 ? "- "+ -b +"" : b ) + "x " + (c>=0 ? "+ "+ c +"" : ""| c<0 ? "- "+ -c +"" : c) + " = 0 ");
            $("p2").text("Delta d = "+d+"");
            $("p3").text("Tsy misy vahaolana io ao amin'ny R");
            $("p4").hide();
            $("p5").hide();
        }
        else if (d==0){
            $("p3").show();
            $("p4").show();
            $("p1").text("Ekasiao: " + ( a== 1 ? "" : ""| a==- 1? "-":a) + "x\u00b2  "+ (b== 1 ? "+ " : ""| b== -1 ? "- " : ""|b>=0 ? "+ "+ b +"" : ""| b<0 ? "- "+ -b +"" : b ) + "x " + (c>=0 ? "+ "+ c +"" : ""| c<0 ? "- "+ -c +"" : c) + " = 0 ");
            $("p2").text("Delta d = 0");
            $("p3").text("Valiny tokana: ");
            $("p4").text(" x = "+ -b/(2*a) +"");
            $("p5").hide();
        }
        else{
            $("p3").show();
            $("p4").show();
            $("p5").show();
            $("p1").text("Ekasiao: " + ( a== 1 ? "" : ""| a==- 1? "-":a) + "x\u00b2  "+ (b== 1 ? "+ " : ""| b== -1 ? "- " : ""|b>=0 ? "+ "+ b +"" : ""| b<0 ? "- "+ -b +"" : b ) + "x " + (c>=0 ? "+ "+ c +"" : ""| c<0 ? "- "+ -c +"" : c) + " = 0 ");
            $("p2").text("Delta d = "+d+"");
            $("p3").text("Valiny roa samy hafa: ");
            $("p4").text("x₁= " + x1 + "");
            $("p5").text(" x₂= " + x2 + "");
        }
    }
    
}


        //clear
function madioabc()
{
    if(confirm("Ho fafaina tokoa ve ireo kajy natao?"))
    {
        $("p1").hide();
        $("p2").hide();
        $("p3").hide();
        $("p4").hide();
        $("p5").hide();
        $(".abc").val("");
        outputText = "";
        document.getElementById("valiny").innerHTML = outputText;
    }
}


        ///calculatrice\\\


function kajy(num) 
{
    $(".affiche").val($(".affiche").val() +num); 
}
function valiny()
{
    $(".affiche02").val("="+eval($(".affiche").val()));
}
function madio() 
{
    $(".affiche").val("");
    $(".affiche02").val("");
}
function mamafa() 
{
    value = $(".affiche").val();
    $(".affiche").val(value.substring(0, value.length -1));   
}

//responsive
var btn = document.querySelector('.btn1');
var nav = document.querySelector('.nav_c');
    btn.onclick = function(){
    nav.classList.toggle('nav_c1');
}
                ///\\\\\\\\\|||       ||\\\            |||       \\\\\|/////
                ///                   ||| \\\          |||           |||
                ///                   |||   \\\        |||           |||
                ///                   |||     \\\      |||           |||
                ///                   |||       \\\    |||           |||
                ///|||||||||          |||         \\\ .|||           |||
                ///                   |||           \\\|||           |||
                ///                   |||            **|||           |||
                ///                   |||             '|||           |||
                ///                   |||              |||           |||
                ///\\\\\\\\\\|||     /|||\             \\\       /////|\\\\\





                                                                ///////// HEADER SLIDER ///////
                                                                  //////////////////////////
                                                                    //////////////////////
                                                                      //////////////////


var fond = ["url('img/fond1.jpg')", "url('img/fond2.jpg')", "url('img/fond3.jpg')", "url('img/fond4.jpg')", "url('img/fond.jpg')"];
var i=0;

$('document').ready(function()
    {
        setInterval(function()
            {
                console.log(fond[i]);
                
                $('#change').css('background', fond[i]);
                $('#change').css('background-size', 'cover');
                i++;
                if (i==5) {i=0;}

            }, 7500);
    });