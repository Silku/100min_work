window.addEventListener("wheel", function(e){
    e.preventDefault();
},{passive : false});

var mHtml = $("html");
var page = 1;
mHtml.animate({scrollTop : 0}, 1000);




$(window).on("wheel", function(e) {
    if(mHtml.is(":animated")) return;
    if(e.originalEvent.deltaY > 0) {
    // deltaY > 0 휠을 아래로 스크롤할때 , 
    // deltaY는 마우스휠을 어느방향으로 얼만큼 굴렸는지에 대한 값,
    // 양수이면 아래쪽, 음수이면 위쪽으로 굴린 상태.
    if(page == 3){
        let clientWidth = document.documentElement.clientWidth;
        let scrollWidth = document.documentElement.scrollWidth;
        let widthResult = ((clientWidth/scrollWidth)*100)
        let pageTheeeIdx = 0;
        $(window).on("wheel", function(e) {
            // if(mHtml.is(":animated")) return;
            if(e.originalEvent.deltaY > 0) {
                section3.style.transition = "2s ease-in-out";
                section3.style.transform = "translate3d(-" + ((clientWidth/2)-100) + "px, 0, 0)";
                section3.classList.add("end")
                if(section3.classList.contains("end")){
                    $(window).on("wheel", function(e) {
                        if(e.originalEvent.deltaY > 0) {
                            console.log(clientWidth)
                            console.log(scrollWidth)
                            page == 4;
                            return true;
                        }
                    })
                }
            }else if(e.originalEvent.deltaY < 0) {
                section3.style.transform = "translate3d(0px, 0, 0)";
                section3.classList.remove("end")
            }
        })
        return false;
    }


    if(page == 7) return;
    page++;

    }else if(e.originalEvent.deltaY < 0) {
    // deltaY < 0 휠을 위로 스크롤할때
        if(page == 1) return;
        if(page == 3) return;
        page--;
    }

    // function pageThreeScrollEvent(page){
    //     if(page==3){
    //         window.addEventListener('wheel', function(e){
    //             e.preventDefault();
    //             e.stopPropagation();
    //         },{passive : false})
    //         $(window).on("wheel", function(e) {
    //             if(e.originalEvent.deltaY > 0) {
    //                 section3.style.transition = "2s ease-in-out";
    //                 section3.style.transform = "translate3d(-650px, 0, 0)";
    //             }else if(e.originalEvent.deltaY < 0) {
    //                 section3.style.transform = "translate3d(650px, 0, 0)";
    //             }
    //         })
    //         if(mHtml.is(":animated")) return;
    //     }
    // }

    pageMove(page);
    // 페이지 높이만큼 스크롤
    var posTop =(page-1) * $(window).height();
    mHtml.animate({scrollTop : posTop});

    
    // console.log(posTop)
    let windowScrollTop = document.documentElement.scrollTop;
    let clientHeight = document.documentElement.clientHeight; //현재 화면 높이
    let scrollHeight = document.documentElement.scrollHeight; //총 스크롤 높이
    let clientWidth = document.documentElement.clientWidth;
    let scrollWidth = document.documentElement.scrollWidth;
    // let scrolled = (windowScrollTop / height) * 100;
    // progressGuage.style.height= (posTop/(clientHeight)*100)+"%"
    
    // console.log()
    // console.log($(window).height())
    // console.log(clientHeight)
    // console.log(scrollHeight)
    // console.log("포스탑" + (posTop/scrollHeight));

    // 가로 게이지 쓸때 참고
    // progressGuage.style.height= ((posTop/scrollHeight)*100)+"%"
})

let section3 = document.querySelector('.section_3');

let clientHeight = document.documentElement.clientHeight;
let scrollHeight = document.documentElement.scrollHeight;
let clientWidth = document.documentElement.clientWidth;
let scrollWidth = document.documentElement.scrollWidth;
let html = document.querySelector('html');

console.log(clientWidth)
html.addEventListener('change', function(){
    console.log("바뀜")
})
console.log(scrollWidth)
console.log(clientHeight)
console.log(scrollHeight)
console.log("뭐지")


// 사이드 프로그레스바
    let page_num = document.querySelector('.page_num');
    let circle_index = document.querySelector('.circle_wrapper');
    let n = page_num.childNodes;
    let c = circle_index.childNodes;
    // console.log(n)
    // console.log(c)
    let progressGuage = document.querySelector('.progress-bar')
    let progressBar = document.querySelector('.progress').childNodes;

    // 현재 페이지 번호 및 선택표시
    function pageMove(page){
        let startNum = 1
        let currentPageNum = n[startNum+(page*2)-2]
        let currentCircleIdx = c[startNum+(page*2)-2]
        let currentProgressIdx = progressBar[startNum+(page*2)-2]
        // console.log("현재페이지 : " + page)
        // console.log(currentPageNum)
        // console.log(currentCircleIdx)
        for(i=0;  i< n.length; i++){
            if(i%2 != 0){
                // console.log((n)[i])
                n[i].classList.remove("on")
                c[i].classList.remove("on")
                progressBar[i].classList.remove("on")
            }
            
        }
        
        if(page){
            currentPageNum.classList.add("on")
            currentCircleIdx.classList.add("on")
            currentProgressIdx.classList.add("on")
        }
        // currentPageNum.classList.remove("on")
        // currentCircleIdx.classList.remove("on")

        // for(i=0;  i< n.length; i++){
        //     if(i%2 != 0){
        //         // n[i].classList.add("on")
        //         // console.log(n[i])
        //         console.log((n)[i])
        //         // console.log(page)
        //         // n[i].style.display="none"
        //         // n[i].style.transform= "translateY(-100%)";
        //         // n[i].style.transform="translateY(0%)";
        //     }
        // }
        // for(i=0;  i< n.length; i++){
        //     if(i%2 != 0){
        //         // console.log(c[i])
        //     }
        // }
    }



// 메뉴페이지
let asideMenu = document.querySelector('aside');
let menuBtn = document.querySelector('.menu_btn');
menuBtn.onclick = () =>{
    asideMenu.classList.toggle("on")
    menuBtn.classList.toggle("active")
}
