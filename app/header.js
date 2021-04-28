var body =  document.querySelector('body')


    // console.log(window.pageYOffset)
    // console.log(body.scrollHeight)
    // console.log(body.scrollHeight - 2200)

var scrollB = window.pageYOffset
window.onscroll = ()=>{

    var scrollT = window.pageYOffset

    if(scrollB > scrollT || scrollB > body.scrollHeight - 900){

        document.querySelector('nav').style.top = "0px"
    }else{
        document.querySelector('nav').style.top = "-60px"
    // console.log(scrollT)
    }
    scrollB = scrollT
}

