function enterkey() { //사용자가 키보드의 키를 눌렀다가 뗐을때 이벤트 발생
    if (window.event.keyCode == 13) { //윈도우의 'Enter'키가 눌러졌을 경우
        let sendData = {barcode:$('input[name=barcode]').val()};
        $.ajax({   
            type:'post',    //post방식
            url:'data',
            data:sendData,
            //input태그의 name=barcode에 입력된 value값 
            //data: {barcode : $('#barcode').val()},
            contentType:"application/json",
            success : function(data){
                //받은 data가 input 일 경우 아래와 같은 ajax 통신을 실행
               // $('.table_body').empty();
                console.log('post요청 성공');
                console.log(data);
                if (data == 'input'){
                    $.ajax({
                        type:'post',
                        url:'data2',
                        data: {barcode : $('#barcode').val()},
                        contentType:"application/json",
                        success : function(data){
                            console.log('data input 문에서 ajax 통신 성공')
                            $('#barcodeList').empty();
                            let res = JSON.parse(data);
                              console.log(res);
                                str='<tr>';
                          $.each(res , function(i){
                                str += '<TD>' + res[i].no + '</TD><TD>' + res[i].data + '</TD><TD>' + res[i].status + '</TD><TD>' + res[i].regat + '</TD>';
                                str += '</TR>';
                          });
                            $("#barcodeList").append(str);

                        }
                        ,error:function(){
                          console.log('data input문에서 ajax 에러발생')
                        }       
                    });
                }else{
                    $.ajax({
                        type:'post',
                        url:'data2',
                        data: {barcode : $('#barcode').val()},
                        contentType:"application/json",
                        success : function(data){
                            console.log('data2의 json 가져옵니다.')

                            //$( '#barcodeList').empty();

                            let res = JSON.parse(data);
                                str='<tr>';
                          $.each(res , function(i){
                                str += '<TD>' + res[i].no + '</TD><TD>' + res[i].data + '</TD><TD>' + res[i].status + '</TD><TD>' + res[i].regat + '</TD>';
                                str += '</TR>';
                          });
                            $("#barcodeList").append(str);

                        }
                        ,error:function(){
                        console.log('data2의 json 못 가져옵니다...')
                        }       
                    });
                } 
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