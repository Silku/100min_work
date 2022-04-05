let screen = document.querySelector('#main_screen');
let parallax = new Parallax(screen);

// 새로고침시 스크롤 복원안함
history.scrollRestoration = "manual"

// 휠 전체 기본 이벤트 차단.
// passive는 이 함수가 작동하는지에 대해 능동적인 감시 수행, false로 두면 감시가 일어나지 않음.
window.addEventListener("wheel", function(e){
    e.preventDefault();
},{passive : false});

let mHtml = $("html");
let page;
// let pageX = 1;


// const count = {
//     get number(){
//         return this._num || 0;
//     }
//     set number(num) {
//         this._num = num;
//         console.log(num); // 이렇게 일괄적으로 디버깅 가능.
//         document.querySelector('#count').textContent = this._num;
//     }
// }
let section3 = document.querySelector('.section_3');

let clientHeight = document.documentElement.clientHeight;
let scrollHeight = document.documentElement.scrollHeight;
let clientWidth = document.documentElement.clientWidth;
let scrollWidth = document.documentElement.scrollWidth;
let html = document.querySelector('html');

// console.log("클라 가로 : " + clientWidth)
// console.log("스크롤 가로 : " + scrollWidth)
// console.log("클라 세로 : " + clientHeight)
// console.log("스크롤 세로 : " + scrollHeight)

let wMin = (clientWidth-clientWidth);
let wMax = (scrollWidth-clientWidth);

// mHtml.animate({scrollTop : 0}, 1000);
// mHtml.animate({scrollLeft : 0}, 1000);

(function scrollEvent(){
    let stateIdx;
    let pageX;
    let flag = true;
    // let pageX;
    $(window).on("wheel", function(e) {  
        if(stateIdx == null){
            stateIdx = 1
        }
        if(mHtml.is(":animated")) return; 

        if(e.originalEvent.deltaY > 0) {
            if(stateIdx >  6) return;
            if(flag == true && stateIdx <3){
                scrollMoveY(++stateIdx, flag)
                if(stateIdx != 3){
                    flag = true
                }else if(stateIdx ==3){
                    flag = false
                    scrollMoveX(stateIdx, pageX)
                }
            }
            
        }else if(e.originalEvent.deltaY < 0) {
            if(stateIdx < 2) return;
            scrollMoveY(--stateIdx, flag)
            if(stateIdx == 3){
                flag = true;
                return flag
            }
        } 
        // console.log("PageIdx : " + page)
        console.log("flag : " + flag)
        console.log("Page-X-Idx : " +"pageX")
        console.log("stateIdx : " + stateIdx)
        console.log("끝날떄 " + flag)
        return flag
    })
}())

function scrollMoveX(stateIdx , pageX){
        if(mHtml.is(":animated")) return;
        page = pageX;
        // 페이지 가로만큼 스크롤 
        if(page < 1 || page > 2) return;
        var posLeft =(page-1) * $(window).width();
        mHtml.animate({scrollLeft : posLeft}); 
        // console.log("Page-X-Idx : " + pageX)
        // console.log(page)
        pageX = page
        return  pageX;   
}

function scrollMoveY(stateIdx, flag){
        page = stateIdx;
        pageMove(page);
        // 페이지 높이만큼 스크롤
        var posTop =(page-1) * $(window).height();
        mHtml.animate({scrollTop : posTop}); 
        if(stateIdx == 3){
            // flag = false
            console.log("현재 3페이지" + stateIdx)
            console.log("현재 3플래그" + flag)
        }
    return stateIdx, flag;
}

// function scrollMoveY(stateIdx){
//     $(window).on("wheel", function(e) {
//         // 스크롤 애니메이팅 중일때 휠 애니메이션 리턴
//         if(mHtml.is(":animated")) return;
//         // deltaY > 0 휠을 아래로 스크롤할때 , 
//         // deltaY는 마우스휠을 어느방향으로 얼만큼 굴렸는지에 대한 값,
//         // 양수이면 아래쪽, 음수이면 위쪽으로 굴린 상태.
//         if(e.originalEvent.deltaY > 0) {
//             if(stateIdx >  6) return;
//                 stateIdx++;
//         }else if(e.originalEvent.deltaY < 0) {
//         // deltaY < 0 휠을 위로 스크롤할때
//             if(stateIdx < 2) return;
//                 stateIdx--;
//         }
//         page = stateIdx;
//         //
//         pageMove(page);
//         // 페이지 높이만큼 스크롤
//         var posTop =(page-1) * $(window).height();
//         mHtml.animate({scrollTop : posTop}); 
//         console.log("PageIdx : " + (page))
//         console.log(stateIdx)
        
//     })
//     return stateIdx;
// }




// function scrollMoveX(){
//     if(mHtml.is(":animated")) return;
//     $(window).on("wheel", function(e) {
//         // deltaY > 0 휠을 아래로 스크롤할때 , 
//         // deltaY는 마우스휠을 어느방향으로 얼만큼 굴렸는지에 대한 값,
//         // 양수이면 아래쪽, 음수이면 위쪽으로 굴린 상태.
//         if(e.originalEvent.deltaY > 0) {
//             if(pageX >  1) return;
//             pageX++
//         }else if(e.originalEvent.deltaY < 0) {
//             if(pageX <  2) return;
//             pageX--
//         }
//         // 페이지 가로만큼 스크롤
//         var posLeft =(pageX-1) * $(window).width();
//         mHtml.animate({scrollLeft : posLeft}); 
//         console.log("Page-X-Idx : " + pageX)
//         console.log(page)   
//         // let ScrollX = (pageX-1)*wMax;
//         // section3.style.transition = "2s ease-in-out";
//         // section3.style.transform = "translate3d(-" + ScrollX + "px, 0, 0)";
//     })   
// }




// if(page == 3){
//     $(window).on("wheel", function(e) {
//         if(e.originalEvent.deltaY > 0) {
//             scrollEvent() return;
//             pageX++;
//             ScrollMoveX(pageX);
//         }else if(e.originalEvent.deltaY < 0) {
//             scrollEvent() return;
//             pageX == 0;
//             ScrollMoveX(pageX);
//         }
//     }
// }

// function ScrollMoveX(pageX){
                
//     let ScrollX = (pageX-1)*wMax;
//     section3.style.transition = "2s ease-in-out";
//     section3.style.transform = "translate3d(-" + ScrollX + "px, 0, 0)";
// }
// console.log("PageXIdx : " + (pageX))



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
    }



// 메뉴 버튼 페이지
let asideMenu = document.querySelector('aside');
let menuBtn = document.querySelector('.menu_btn');
menuBtn.onclick = () =>{
    asideMenu.classList.toggle("on")
    menuBtn.classList.toggle("active")
}
