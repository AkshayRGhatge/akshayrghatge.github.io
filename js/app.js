const texts = ["A Software Developer","A Web Developer","A Full Stack Developer ","A Freelancer"];
let count =0;
let index =0;
let currentText ="";
let letter="";

(function type(){

    if(count=== texts.length){
        count = 0;
    }
    currentText =texts[count];
    letter = currentText.slice(0,++index);

    document.querySelector(".a").textContent = letter;
    if(letter.length === currentText.length)
    {
        count++;
        index = 0;
    }
    setTimeout(type,250);
}());
