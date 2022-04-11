const url = 'https://willowy-alfajores-9f7c15.netlify.app/'

function setShare(){
    let resultImg = document.querySelector("#resultImg")
    let resultAlt = resultImg.firstElementChild.alt;
    const shareTitle = '백의민족 직업만족도 설문결과';
    const shareDesc = infoList[resultAlt].name;
    // const shareImage = url + 'img/image_' + resultAlt + '.jpg';
    // const shareURL = url + 'page/result' + resultAlt + '.html';

    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
            title: shareTitle,
            description: shareDesc,
            // imageUrl: shareImage,
            link: {
            mobileWebUrl: 'shareURL',
            webUrl: 'shareURL', 
            },
        },
        itemContent: {
            profileText: 'Kakao',
            profileImageUrl: 'https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
            titleImageUrl: 'https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
            titleImageText: 'Cheese cake',
            titleImageCategory: 'Cake',
            items: [
            {
                item: 'Cake1',
                itemOp: '1000원',
            },
            {
                item: 'Cake2',
                itemOp: '2000원',
            },
            {
                item: 'Cake3',
                itemOp: '3000원',
            },
            {
                item: 'Cake4',
                itemOp: '4000원',
            },
            {
                item: 'Cake5',
                itemOp: '5000원',
            },
            ],
            sum: '총 결제금액',
            sumOp: '15000원',
        },
        social: {
            likeCount: 10,
            commentCount: 20,
            sharedCount: 30,
        },
        buttons: [
            {
            title: '결과 확인하기',
            link: {
                mobileWebUrl: shareURL,
                webUrl: shareURL,
            },
            },
        ]
        });
}
