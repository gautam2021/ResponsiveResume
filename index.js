const bars=document.querySelectorAll(".progress-bar");
// console.log(bars);
bars.forEach(function(bar){
    let percentage=bar.dataset.percent;
    let tooltip=bar.children[0];
    tooltip.innerText=percentage+"%";
    bar.style.width=percentage+"%";

})

const counters=document.querySelectorAll(".counter");
// console.log(counters);
const speed=5000;

counters.forEach(counter=>{
    const updateCount=()=>{
        const target=+counter.getAttribute('data-count');
        // console.log(target);
        const count=+counter.innerText;
        // console.log(count);
        const inc=target/speed;
        // console.log(inc);
        if(count<target){
            counter.innerText=Math.ceil(count+inc);
            setTimeout(updateCount,1);
        }else{
            count.innerText=target;
        }
    }

    let counterSection=document.querySelector('.counter-wrapper');
    let options={
        rootMargin:'0px 0px -200px 0px'
    }
    let done=0;
    const sectionObserver=new IntersectionObserver(function(entries){
        if(entries[0].isIntersecting && done!==1){
            done=1;
            updateCount();
        }
    },options)

    sectionObserver.observe(counterSection);
    
});

// image filter

var $wrapper=$('.portfolio-wrapper');

$wrapper.isotope({
    filter:'*',
    layoutMode:'masonry',
    animationOptions:{
        duration:750,
        easing:'linear',
    }
})



// slider

$('.slider').slick({
    arrows:false,
    autoplay:true,
});