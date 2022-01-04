function changeContent(i){
    document.querySelectorAll(".content")[0].style.display = "none"; 
    document.querySelectorAll(".content")[1].style.display = "none";
    document.querySelectorAll(".content")[2].style.display = "none";
    if (i === 1) document.querySelectorAll(".content")[0].style.display = "inline-block"; 
    else if (i === 2) document.querySelectorAll(".content")[1].style.display = "inline-block";
    else if (i === 3) document.querySelectorAll(".content")[2].style.display = "inline-block";
}