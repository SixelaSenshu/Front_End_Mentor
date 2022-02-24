function main(){

    var radioList = document.getElementsByName("choice");
    var answerList = document.getElementsByClassName("answer");
    var pList = document.getElementsByClassName("question");
    var currentcheck = -1;
    for(let i = 0 ; i< radioList.length ; i++){
        radioList[i].checked = false;
        radioList[i].addEventListener("click",changeAnswer);
        
    }

    function changeAnswer(){
        for(let i = 0 ; i< radioList.length ; i++){
            if(currentcheck == i){
                answerList[i].style.display = "flex";
                answerList[i].style.margin = "0% 0% 0% 0%";
                answerList[i].style.fontSize = "0px";
                answerList[i].style.opactity = "1%";
                pList[i].firstElementChild.style.fontWeight = "normal";
                radioList[i].previousElementSibling.style.transform = "rotate(0deg)";
            }else if (radioList[i].checked == true){
                answerList[i].style.display = "flex";
                answerList[i].style.margin = "2.5% 0% 0% 0%";
                answerList[i].style.fontSize = "12px";
                answerList[i].style.opactity = "100%";
                currentcheck = i;
                pList[i].firstElementChild.style.fontWeight = "bolder";
                radioList[i].previousElementSibling.style.transform = "rotate(180deg)";
                
            }else{
                answerList[i].style.display = "flex";
                answerList[i].style.margin = "0% 0% 0% 0%";
                answerList[i].style.fontSize = "0px";
                answerList[i].style.opactity = "1%";
                pList[i].firstElementChild.style.fontWeight = "normal";
                radioList[i].previousElementSibling.style.transform = "rotate(0deg)";
            }
        }
    }
}

window.onload = main;