    
     window.onscroll = function()  {
         if (document.documentElement.scrollTop == 500) {   
        var i = 0;                 

        function myLoop1() {         
        setTimeout(function() {   
            document.getElementById("p1").innerHTML= i +"+"; 
            i++;
            if (i < 16) {
            myLoop1(); 
            }
        }, 100)
        }
        myLoop1(); 

        var j = 0;
        function myLoop2() {         
            setTimeout(function() {   
            document.getElementById("p2").innerHTML= j +"+"; 
            j++;
            if (j < 81) {
                myLoop2(); 
            }
            }, 80)
        }
        myLoop2(); 

        var k = 0;
        function myLoop3() {         
            setTimeout(function() {   
            document.getElementById("p3").innerHTML= k ; 
            k++;
            if (k < 451) {
                myLoop3(); 
            }
            }, 10)
        }
        myLoop3(); 
        
        var m = 0
        function myLoop4() {         
            setTimeout(function() {   
            document.getElementById("p4").innerHTML= m +"k"; 
            m++;
            if (m < 49) {
                myLoop4(); 
            }
            }, 80)
        }
        myLoop4(); 

        var n = 0
        function myLoop5() {         
            setTimeout(function() {   
            document.getElementById("p5").innerHTML= n +"k"; 
            n++;
            if (n < 95) {
                myLoop5(); 
            }
            }, 60)
        }
        myLoop5(); 
    }
}

function openNav(x) {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("slid_bg").style.width = "100%";
    x.classList.toggle("change");
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("slid_bg").style.width = "0%";
    document.getElementById("aa").classList.remove("change");
  }