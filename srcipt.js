let cards=document.querySelectorAll(".card");

let count =0;

cards.forEach(function(slide,index){
    slide.style.left=`${index*100}%`
})

function myfun(){
    cards.forEach(function(cunvalue){
        cunvalue.style.transform=`translateX(-${count*100}%)`
    })
}

setInterval(function(){
    count++;
    if(count==cards.length){
        count=0;
    }
    myfun()
},2000);