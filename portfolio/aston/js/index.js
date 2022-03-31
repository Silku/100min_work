// 새로고침시 스크롤 복원안함
history.scrollRestoration = "manual"

// 휠 전체 기본 이벤트 차단.
// passive는 이 함수가 작동하는지에 대해 능동적인 감시 수행, false로 두면 감시가 일어나지 않음.
window.addEventListener("wheel", function(e){
    e.preventDefault();
},{passive : false});

var mHtml = $("html");
var page = 1;
mHtml.animate({scrollTop : 0}, 1000);


$(window).on("wheel", function(e) {
    // 스크롤 애니메이팅 중일때 휠 애니메이션 리턴
    if(mHtml.is(":animated")) return;
    console.log("PageIdx : " + (page))
    // deltaY > 0 휠을 아래로 스크롤할때 , 
    // deltaY는 마우스휠을 어느방향으로 얼만큼 굴렸는지에 대한 값,
    // 양수이면 아래쪽, 음수이면 위쪽으로 굴린 상태.

    if(page == 3){
        let clientWidth = document.documentElement.clientWidth;
        let scrollWidth = document.documentElement.scrollWidth;
        let widthResult = ((clientWidth/scrollWidth)*100)
        // console.log(clientWidth + "클라위드")
        let wMin = (clientWidth-clientWidth);
        let wMax = (scrollWidth-clientWidth);

        let pageTheeeScrollIdx = 0;
        
        // console.log(wMin)
        // console.log(wMax)
        $(window).on("wheel", function(e) {
            if(mHtml.is(":animated")) return;
            if(e.originalEvent.deltaY > 0) {
                section3.style.transition = "2s ease-in-out";
                section3.style.transform = "translate3d(-" + wMax + "px, 0, 0)";
                pageTheeeScrollIdx = clientWidth+wMax;
                console.log(pageTheeeScrollIdx)
            }else if(e.originalEvent.deltaY < 0) {
                section3.style.transform = "translate3d("+wMin+"px, 0, 0)";
                // pageTheeeScrollIdx = wMin;
            }
        })
        return;
    }



    if(e.originalEvent.deltaY > 0) {

    if(page == 7) return;
    // if(page == 3) return;
    page++;

    }else if(e.originalEvent.deltaY < 0) {
    // deltaY < 0 휠을 위로 스크롤할때
        if(page == 1) return;
        // if(page == 3) return;
        page--;
    }

    pageMove(page);
    // 페이지 높이만큼 스크롤
    var posTop =(page-1) * $(window).height();
    mHtml.animate({scrollTop : posTop});


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

console.log("클라 가로 : " + clientWidth)
html.addEventListener('change', function(){
    console.log("바뀜")
})
console.log("스크롤 가로 : " + scrollWidth)
console.log("클라 세로 : " + clientHeight)
console.log("스크롤 세로 : " + scrollHeight)


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



// 메뉴 버튼 페이지
let asideMenu = document.querySelector('aside');
let menuBtn = document.querySelector('.menu_btn');
menuBtn.onclick = () =>{
    asideMenu.classList.toggle("on")
    menuBtn.classList.toggle("active")
}
