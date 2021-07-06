function changeCont(i){
    document.getElementsByTagName("div")[0].style.display = "none"; 
    document.getElementsByTagName("div")[1].style.display = "none";
    document.getElementsByTagName("div")[2].style.display = "none";
    if (i == 1) document.getElementsByTagName("div")[0].style.display = "inline-block"; 
    else if (i == 2) document.getElementsByTagName("div")[1].style.display = "inline-block";
    else if (i == 3) document.getElementsByTagName("div")[2].style.display = "inline-block";
}