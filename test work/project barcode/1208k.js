
function enterkey() { //사용자가 키보드의 키를 눌렀다가 뗐을때 이벤트 발생
    if (window.event.keyCode == 13) { //윈도우의 'Enter'키가 눌러졌을 경우
        $.ajax({    //ajax 통신 실행(제이쿼리)
            type:'post',    //post방식
            url:'data.php', //data.php로 부터 받아옴
            data: {barcode : $('input[name=barcode]').val(), chk : 'init'},
            //input태그의 name=barcode에 입력된 value값 
            //상태 : init
            success : function(data){
                //통신에 성공했을경우 실행되는 메서드, data를 매개변수로 받음
                if (data == 'input'){
                    //받은 data가 input 일 경우 아래와 같은 ajax 통신을 실행
                    $.ajax({
                        type:'post',
                        url:'data.php',
                        // data : {
                        //     "location":"Test"
                        // },
                        data: {barcode : $('#barcode').val(), chk : 'upload'},
                        //상태 : upload
                        success : function(data){
                            //통신에 성공했을 경우 아래와 같은 로직 실행
                            const music = new Audio('sound/ok.mp3');
                            music.play();
                            // Audio객체를 생성하고 play()메서드로 ok.mp3실행
                            $( '#barcodeList').empty();
                            // 테이블 안에있는 '내용'을 지움
                            var results = JSON.parse(data);
                            //'data' 매개변수로 들어온 값을 JSON으로 변환
                            str = '<TR>'; 
                            $.each(results , function(i){
                                //위에서 json으로 변환된 results를 매개변수로 받아 반복문 실행
                                // 반복문 : $.each(매개변수, function(index(또는 key값) , value
                                str += '<TD>' + results[i].no + '</TD><TD>' + results[i].data + '</TD><TD>' + results[i].status + '</TD><TD>' + results[i].regat + '</TD>';
                                str += '</TR>';
                                srt += '이름 : ' +'${data }' ;
                            });
                            // 받아온 results를 배열로 받아오고, json에서 no, data, status, regat라는 key값을 갖는 value값을 각각 <td> </td> 사이에 삽입 
                            $("#barcodeList").append(str);
                            let res = JSON.stringify(data);
                            let res = JSON.parse(data);
                            // 테이블에 str값을 받아와서 추가함.
                        }
                    });
                }
                    else if (data  == 'dupl'){
                    const music = new Audio('sound/alert.mp3');
                    music.play();
                }
                //받은 data가 dupl일 경우, Audio객체를 생성하고 play()메서드로 alert.mp3실행
                else if (data  == 'err'){
                    const music = new Audio('sound/err.mp3');
                    music.play();
                }
                //받은 data가 err이면 play()메서드로 err.mp3실행
                else if (data  == 'close'){
                    location.href='closing.php';
                }
                //받은 data가 close이면 closing.php로 이동
            },
            error:function(){
                console.log('ajax 통신실패');
            }
        });
    $('#barcode').val('');
    $('#barcode').focus();
    //input 박스의 value값을 공백으로 만들고, 커서 포커스를 맞춤.
    }
}



// let start = setInterval(load,2500);
