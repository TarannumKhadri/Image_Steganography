myID1 = document.getElementById("back1");
myID2 = document.getElementById("back2");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 100) {
    myID1.style.display='block';
    myID2.style.display='block';
  } else {
    myID1.style.display = 'none';
    myID2.style.display = 'none';
  }
};

window.addEventListener("scroll", myScrollFunc);

function open(id){
    document.getElementById(id).style.display='block';
}

function close(id){
    document.getElementById(id).style.display='none'
}

function close_s(){
    close('s1');close('s2');close('s3');close('s4')
}

function close_h(){
    close('h1');close('h2');close('h3');
}

function scrollto(num){
    window.scrollTo(0,window.screen.height*num)
}

function check_empty(id) {
    if(document.getElementById(id).value==''){
        return 0
    }
    else{
        return 1
    }
}

function neutral(){
    document.getElementById('alert_text').style.visibility='hidden'
}

function success(id,num){
    document.getElementById('alert_text').style.backgroundColor='#39ac39';
    document.getElementById('alert_text').value="Success !"
    document.getElementById('alert_text').style.visibility='visible';
    open(id)
    scrollto(num)
    setTimeout(neutral,2000)
}

function failure(){
    document.getElementById('alert_text').style.backgroundColor='#ff4d4d';
    document.getElementById('alert_text').value="Failed !"
    document.getElementById('alert_text').style.visibility='visible';
    setTimeout(neutral,2000)
}
function req(id2,num,flag,id,data){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response=this.responseText;
            if(flag==1){
                switch(id){
                        case 1: {switch(response){
                                case '0':success(id2,num);break;
                                case '-1':failure();break;
                            }
                        };break;
                        case 2: {switch(response){
                                case '0':success(id2,num);break;
                                case '-1':failure();break;
                                }
                        };break;
                        case 3: {switch(response){
                                case '0':success(id2,num);break;
                                case '-1':failure();break;
                                }
                        };break;
                        case 4: {switch(response){
                                case '0':success(id2,num);break;
                                case '-1':failure();break;
                                }
                        };break;
                        case 5: {switch(response){
                                case '0':success(id2,num);break;
                                case '-1':failure();break;
                                }
                        };break;

                    }
            }
            if(flag==2){
                if(id==1){
                    document.getElementById('alert_text').style.fontSize='1.25rem';
                    document.getElementById('alert_text').value=response;
                    document.getElementById('alert_text').style.visibility='visible';
                    document.getElementById('alert_text').style.backgroundColor='#304ffe';
                    back()
                    setTimeout(neutral,4500)
                }
                if(id==2){
                    document.getElementById('alert_text').style.fontSize='1.25rem';
                    document.getElementById('alert_text').value=response;
                    document.getElementById('alert_text').style.visibility='visible';
                    document.getElementById('alert_text').style.backgroundColor='#304ffe';
                    back()
                    setTimeout(neutral,4500)
                }
            }
       }
    };
    xhttp.open("POST","/handle",true)
    xhttp.send(data)
}

function hide(){
    close_s()
    open('h1')
    scrollto(1)
}
function hide_im(){
    close_s()
    req('h2',2,1,1,JSON.stringify({'hide':'im_path'}));
}
function hide_em(){
    close_s()
    req('h3',3,1,2,JSON.stringify({'hide':'em_path'}));
}
function show(){
    close_h()
    open('s1')
    scrollto(1)
}
function show_im(){
    close_h()
    req('s2',2,1,3,JSON.stringify({'show':'im_path'}));
}
function show_format(){
    close_h()
    if(check_empty('format')){
        var format_val=document.getElementById("format").value;
        req('s3',3,1,5,JSON.stringify({'format':format_val}));
    }
    else{
        document.getElementById('alert_text').backgroundColor='#ff4d4d'
        document.getElementById('alert_text').value="Format cannot be empty !"
        document.getElementById('alert_text').visibility='visible';
    }
}
function show_key(){
    close_h()
    check_empty('key')
    if(check_empty('key')){
        var key=document.getElementById("key").value;
        req('s4',4,1,4,JSON.stringify({'dec_key':key}));
    }
    else{
        document.getElementById('alert_text').backgroundColor='#ff4d4d'
        document.getElementById('alert_text').value="Key cannot be empty !"
        document.getElementById('alert_text').visibility='visible';
    }
}
function final_hide() {
    req(0,0,2,1,JSON.stringify({'init':'hide'}));
    document.getElementById('alert_text').style.fontSize='1.25rem';
    document.getElementById('alert_text').value="Embedding... Please Wait";
    document.getElementById('alert_text').style.visibility='visible';
    document.getElementById('alert_text').style.backgroundColor='#304ffe';
}
function final_show() {
    req(0,0,2,2,JSON.stringify({'init':'show'}))
    document.getElementById('alert_text').style.fontSize='1.25rem';
    document.getElementById('alert_text').value="Extracting... Please Wait";
    document.getElementById('alert_text').style.visibility='visible';
    document.getElementById('alert_text').style.backgroundColor='#304ffe';
}
function back(){
    window.scrollTo(0,0)
}
