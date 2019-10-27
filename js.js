var a1, b1, c1, d1, e1, a2, b2, c2, d2, e2, a3, b3, c3, d3, e3, a4, b4, c4, d4, e4;
		var valiny;

			function kajy()
				{
					a1=document.forms["apidiro"]["a1"].value;
					b1=document.forms["apidiro"]["b1"].value;
					c1=document.forms["apidiro"]["c1"].value;
					d1=document.forms["apidiro"]["d1"].value;
					e1=document.forms["apidiro"]["e1"].value;

					a2=document.forms["apidiro"]["a2"].value;
					b2=document.forms["apidiro"]["b2"].value;
					c2=document.forms["apidiro"]["c2"].value;
					d2=document.forms["apidiro"]["d2"].value;
					e2=document.forms["apidiro"]["e2"].value;

					a3=document.forms["apidiro"]["a3"].value;
					b3=document.forms["apidiro"]["b3"].value;
					c3=document.forms["apidiro"]["c3"].value;
					d3=document.forms["apidiro"]["d3"].value;
					e3=document.forms["apidiro"]["e3"].value;

					a4=document.forms["apidiro"]["a4"].value;
					b4=document.forms["apidiro"]["b4"].value;
					c4=document.forms["apidiro"]["c4"].value;
					d4=document.forms["apidiro"]["d4"].value;
					e4=document.forms["apidiro"]["e4"].value;

					//Determinant
					var det = a1*b2 * (c3*d4 - c4*d3) - a1*c2 * (b3*d4 - b4*d3) + a1*d2 * (b3*c4 - b4*c3) - b1*a2 * (c3*d4 - c4*d3) + b1*c2 * (a3*d4 - a4*d3) - b1*d2 * (a3*c4 - a4*c3) + c1*a2 * (b3*d4 - b4*d3) - c1*b2 * (a3*d4 - a4*d3) + c1*d2 * (a3*b4 - a4*b3) - d1*a2 * (b3*c4 - b4*c3) + d1*b2 * (a3*c4 - a4*c3) - d1*c2 * (a3*b4 - a4*b3);

					//Affichage des valeurs inserees
					var affichea1;

                            if (a1==1)
                                {
                                    affichea1 = "x ";
                                }

                            else
                                {
                                    if (a1==0)
                                        {
                                            affichea1 = "";
                                        }

                                    else if (a1==-1)
                                        {
                                            affichea1 = "-x";
                                        }

                                    else
                                        {
                                            affichea1 = a1+"x ";
                                        }
                                }

					var afficheb1;

                            if (b1==1)
                                {
                                    afficheb1 = "+ y ";
                                }

                            if (b1>1)
                                {
                                    afficheb1 = "+ " + b1 + "y ";
                                }

                            if (b1<1)
                                {
                                    afficheb1 = "- " + (-b1) + "y ";
                                }

                            if (b1==-1)
                                {
                                    afficheb1 = "- y ";
                                }

                            if (b1==0)
                                {
                                    afficheb1 = "";
                                }

                        var affichec1;

                            if (c1==1)
                                {
                                    affichec1 = "+ z ";
                                }

                            if (c1>1)
                                {
                                    affichec1 = "+ " + c1 + "z ";
                                }

                            if (c1<1)
                                {
                                    affichec1 = "- " + (-c1) + "z ";
                                }

                            if (c1==-1)
                                {
                                    affichec1 = "- z ";
                                }

                            if (c1==0)
                                {
                                    affichec1 = "";
                                }
                        var affiched1;

                            if (d1==1)
                                {
                                    affiched1 = "+ m ";
                                }

                            if (d1>1)
                                {
                                    affiched1 = "+ " + d1 + "m ";
                                }

                            if (d1<1)
                                {
                                    affiched1 = "- " + (-d1) + "m ";
                                }

                            if (d1==-1)
                                {
                                    affiched1 = "- m ";
                                }

                            if (d1==0)
                                {
                                    affiched1 = "";
                                }

                        var affichea2;

                            if (a2==1)
                                {
                                    affichea2 = "x ";
                                }

                            else
                                {
                                    if (a2==0)
                                        {
                                            affichea2 = "";
                                        }

                                    else if (a2==-1)
                                        {
                                            affichea2 = "-x";
                                        }

                                    else
                                        {
                                            affichea2 = a2+"x ";
                                        }
                                }

						var afficheb2;

                            if (b2==1)
                                {
                                    afficheb2 = "+ y ";
                                }

                            if (b2>1)
                                {
                                    afficheb2 = "+ " + b2 + "y ";
                                }

                            if (b2<1)
                                {
                                    afficheb2 = "- " + (-b2) + "y ";
                                }

                            if (b2==-1)
                                {
                                    afficheb2 = "- y ";
                                }

                            if (b2==0)
                                {
                                    afficheb2 = "";
                                }

                        var affichec2;

                            if (c2==1)
                                {
                                    affichec2 = "+ z ";
                                }

                            if (c2>1)
                                {
                                    affichec2 = "+ " + c2 + "z ";
                                }

                            if (c2<1)
                                {
                                    affichec2 = "- " + (-c2) + "z ";
                                }

                            if (c2==-1)
                                {
                                    affichec2 = "- z ";
                                }

                            if (c2==0)
                                {
                                    affichec2 = "";
                                }
                        var affiched2;

                            if (d2==1)
                                {
                                    affiched2 = "+ m ";
                                }

                            if (d2>1)
                                {
                                    affiched2 = "+ " + d2 + "m ";
                                }

                            if (d2<1)
                                {
                                    affiched2 = "- " + (-d2) + "m ";
                                }

                            if (d2==-1)
                                {
                                    affiched2 = "- m ";
                                }

                            if (d2==0)
                                {
                                    affiched2 = "";
                                }

                        var affichea3;

                            if (a3==1)
                                {
                                    affichea3 = "x ";
                                }

                            else
                                {
                                    if (a3==0)
                                        {
                                            affichea3 = "";
                                        }

                                    else if (a3==-1)
                                        {
                                            affichea3 = "-x";
                                        }

                                    else
                                        {
                                            affichea3 = a3+"x ";
                                        }
                                }

						var afficheb3;

                            if (b3==1)
                                {
                                    afficheb3 = "+ y ";
                                }

                            if (b3>1)
                                {
                                    afficheb3 = "+ " + b3 + "y ";
                                }

                            if (b3<1)
                                {
                                    afficheb3 = "- " + (-b3) + "y ";
                                }

                            if (b3==-1)
                                {
                                    afficheb3 = "- y ";
                                }

                            if (b3==0)
                                {
                                    afficheb3 = "";
                                }

                        var affichec3;

                            if (c3==1)
                                {
                                    affichec3 = "+ z ";
                                }

                            if (c3>1)
                                {
                                    affichec3 = "+ " + c3 + "z ";
                                }

                            if (c3<1)
                                {
                                    affichec3 = "- " + (-c3) + "z ";
                                }

                            if (c3==-1)
                                {
                                    affichec3 = "- z ";
                                }

                            if (c3==0)
                                {
                                    affichec3 = "";
                                }
                        var affiched3;

                            if (d3==1)
                                {
                                    affiched3 = "+ m ";
                                }

                            if (d3>1)
                                {
                                    affiched3 = "+ " + d3 + "m ";
                                }

                            if (d3<1)
                                {
                                    affiched3 = "- " + (-d3) + "m ";
                                }

                            if (d3==-1)
                                {
                                    affiched3 = "- m ";
                                }

                            if (d3==0)
                                {
                                    affiched3 = "";
                                }

                        var affichea4;

                            if (a4==1)
                                {
                                    affichea4 = "x ";
                                }

                            else
                                {
                                    if (a4==0)
                                        {
                                            affichea4 = "";
                                        }

                                    else if (a4==-1)
                                        {
                                            affichea4 = "-x";
                                        }

                                    else
                                        {
                                            affichea4 = a4+"x ";
                                        }
                                }

						var afficheb4;

                            if (b4==1)
                                {
                                    afficheb4 = "+ y ";
                                }

                            if (b4>1)
                                {
                                    afficheb4 = "+ " + b4 + "y ";
                                }

                            if (b4<1)
                                {
                                    afficheb4 = "- " + (-b4) + "y ";
                                }

                            if (b3==-1)
                                {
                                    afficheb4 = "- y ";
                                }

                            if (b4==0)
                                {
                                    afficheb4 = "";
                                }

                        var affichec4;

                            if (c4==1)
                                {
                                    affichec4 = "+ z ";
                                }

                            if (c4>1)
                                {
                                    affichec4 = "+ " + c4 + "z ";
                                }

                            if (c4<1)
                                {
                                    affichec4 = "- " + (-c4) + "z ";
                                }

                            if (c4==-1)
                                {
                                    affichec4 = "- z ";
                                }

                            if (c4==0)
                                {
                                    affichec4 = "";
                                }

                        var affiched4;

                            if (d4==1)
                                {
                                    affiched4 = "+ m ";
                                }

                            if (d4>1)
                                {
                                    affiched4 = "+ " + d4 + "m ";
                                }

                            if (d4<1)
                                {
                                    affiched4 = "- " + (-d4) + "m ";
                                }

                            if (d4==-1)
                                {
                                    affiched4 = "- m ";
                                }

                            if (d4==0)
                                {
                                    affiched4 = "";
                                }

						if (det==0) 
							{
								valiny = "Ekasiona:<br>"+ affichea1 + afficheb1 + affichec1 + affiched1 + " = " + e1 +"<br>"+ affichea2 + afficheb2 + affichec2 + affiched2 + " = " + e2 + "<br>" + affichea3 + afficheb3 + affichec3 + affiched3 + " = " + e3 + "<br>" + affichea4 + afficheb4 +affichec4 + affiched4 + " = " + e4 + "<br><br>Rehefa navadika Matirisy dia nahazo:<br><br><strong>Mpampafantatra = 0</strong><br><br>Tsy voaisa ireo vahaolana";
							}

						else 
							{
								var detx = e1*b2 * (c3*d4 - c4*d3) - e1*c2 * (b3*d4 - b4*d3) + e1*d2 * (b3*c4 - b4*c3) - b1*e2 * (c3*d4 - c4*d3) + b1*c2 * (e3*d4 - e4*d3) - b1*d2 * (e3*c4 - e4*c3) + c1*e2 * (b3*d4 - b4*d3) - c1*b2 * (e3*d4 - e4*d3) + c1*d2 * (e3*b4 - e4*b3) - d1*e2 * (b3*c4 - b4*c3) + d1*b2 * (e3*c4 - e4*c3) - d1*c2 * (e3*b4 - e4*b3);

                                var dety = a1*e2 * (c3*d4 - c4*d3) - a1*c2 * (e3*d4 - e4*d3) + a1*d2 * (e3*c4 - e4*c3) - e1*a2 * (c3*d4 - c4*d3) + e1*c2 * (a3*d4 - a4*d3) - e1*d2 * (a3*c4 - a4*c3) + c1*a2 * (e3*d4 - e4*d3) - c1*e2 * (a3*d4 - a4*d3) + c1*d2 * (a3*e4 - a4*e3) - d1*a2 * (e3*c4 - e4*c3) + d1*e2 * (a3*c4 - a4*c3) - d1*c2 * (a3*e4 - a4*e3);

                                var detz = a1*b2 * (e3*d4 - e4*d3) - a1*e2 * (b3*d4 - b4*d3) + a1*d2 * (b3*e4 - b4*e3) - b1*a2 * (e3*d4 - e4*d3) + b1*e2 * (a3*d4 - a4*d3) - b1*d2 * (a3*e4 - a4*e3) + e1*a2 * (b3*d4 - b4*d3) - e1*b2 * (a3*d4 - a4*d3) + e1*d2 * (a3*b4 - a4*b3) - d1*a2 * (b3*e4 - b4*e3) + d1*b2 * (a3*e4 - a4*e3) - d1*e2 * (a3*b4 - a4*b3);

                                var detm= a1*b2 * (c3*e4 - c4*e3) - a1*c2 * (b3*e4 - b4*e3) + a1*e2 * (b3*c4 - b4*c3) - b1*a2 * (c3*e4 - c4*e3) + b1*c2 * (a3*e4 - a4*e3) - b1*e2 * (a3*c4 - a4*c3) + c1*a2 * (b3*e4 - b4*e3) - c1*b2 * (a3*e4 - a4*e3) + c1*e2 * (a3*b4 - a4*b3) - e1*a2 * (b3*c4 - b4*c3) + e1*b2 * (a3*c4 - a4*c3) - e1*c2 * (a3*b4 - a4*b3);

                                //Les reponses finales
                                var x = detx/det;
                                var y = dety/det;
                                var z = detz/det;
                                var m = detm/det;

								valiny = "Ekasiona:<br>"+ affichea1 + afficheb1 + affichec1 + affiched1 + " = " + e1 +"<br>"+ affichea2 + afficheb2 + affichec2 + affiched2 + " = " + e2 + "<br>" + affichea3 + afficheb3 + affichec3 + affiched3 + " = " + e3 + "<br>" + affichea4 + afficheb4 +affichec4 + affiched4 + " = " + e4 + "<br><br>Rehefa navadika Matirisy dia nahazo:<br><br><strong>Mpampafantatra = </strong>" + det +"<br><br>" + "x = " + x + "<br> y = " + y + "<br> z = " + z + "<br> m = "+ m + "<br><br>";
							}

					document.getElementById('fivoahana').innerHTML = valiny;
				}

			function mamafa()
				{
                    if(confirm("Ho fafaina tokoa ve ireo kajy natao?"))
                    {
                        $(".kajy").val("");
                        valiny = "";
                        document.getElementById('fivoahana').innerHTML = valiny;
                    }
                }
                
                //responsive
                var btn = document.querySelector('.btn1');
                var nav = document.querySelector('.nav_c');
                    btn.onclick = function(){
	                nav.classList.toggle('nav_c1');
                }



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
                
                $('#change').css('background', fond[i]);
                $('#change').css('background-size', 'cover');
                i++;
                if (i==5) {i=0;}

            }, 7500);
    });


                                                                ///////// INDEX SLIDER ///////
                                                                  //////////////////////////
                                                                    //////////////////////
                                                                      //////////////////  


const migorisa = document.querySelector('#migorisa');
const sary = document.querySelectorAll('.migorisa');

const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
var pp = document.querySelector('#pp');

let counter = 1;
const size = sary[0].clientWidth;

migorisa.style.transform = 'translateX(' + (-size * counter) + 'px)';

next.addEventListener('click', ()=>
    {
        migorisa.style.transition = "transform 0.4s ease-in-out";
        counter++;
        migorisa.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });
prev.addEventListener('click', ()=>
    {
        migorisa.style.transition = "transform 0.4s ease-in-out";
        counter--;
        migorisa.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

elanelana = setInterval(function()
                    {
                        migorisa.style.transition = "transform 0.4s ease-in-out";
                        counter++;
                        migorisa.style.transform = 'translateX(' + (-size * counter) + 'px)';
                    }, 3000);

$("#pp").click(function()
    {
        if ($("#pp").text() == "Play")
            {
                elanelana = setInterval(function()
                    {
                        migorisa.style.transition = "transform 0.4s ease-in-out";
                        counter++;
                        migorisa.style.transform = 'translateX(' + (-size * counter) + 'px)';
                    }, 3000);

                $("#pp").text("Pause");
            }

        else
            {
                clearInterval(elanelana);

                $("#pp").text("Play");
            }
    });

migorisa.addEventListener('transitionend', ()=>
    {
        if (counter == 0)
            {
                migorisa.style.transition = 'none';
                counter = 5;
                migorisa.style.transform = 'translateX(' + (-size * counter) + 'px)';
            }
        if (counter == 6)
            {
                migorisa.style.transition = 'none';
                counter = 7 - counter;
                migorisa.style.transform = 'translateX(' + (-size * counter) + 'px)';
            }
    })