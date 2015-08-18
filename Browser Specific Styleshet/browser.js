$( document ).ready(function() {
 if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
    {
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = //'insert path to browser specific css file'; 
    link.media = 'all';
    head.appendChild(link);
    }  
});

/*
if(navigator.userAgent.indexOf("Chrome") != -1 ) //CHROME
    {
        alert('Chrome');
    }
    else if(navigator.userAgent.indexOf("Opera") != -1 ) //OPERA
    {
     alert('Opera');
    }
    else if(navigator.userAgent.indexOf("Firefox") != -1 )   //FIREFOX
    {
         alert('Firefox');
    }
    else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
    {
      alert('IE'); 
    }  
    else 
    {
       alert('unknown');
    }
*/ 


//STYLE IN SCRIPT VS. IN STYLESHEET
/*$( document ).ready(function() {
    if(navigator.userAgent.indexOf("Chrome") != -1 ) 
    {
        //INSERT CODE HERE
    }
});*/