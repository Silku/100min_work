<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <title>Document</title>
</head>
<body>
    <table>
        <thead>
            <tr>
                <td>번호</td>
                <td>이름</td>
                <td>전화번호</td>
                <td>주소</td>
                <td>상태</td>
                <td>비고</td>
                <td>날짜</td>
            </tr>
        </thead>
        <tbody class="table_body">
            <tr>
                <td>
                    <input name="no">
                </td>
                <td>
                    <input name="name">
                </td>
                <td>
                    <input name="tel">
                </td>
                <td>
                    <input name="addr">
                </td>
                <td>
                    <input name="status">
                </td>
                <td>
                    <input name="comment">
                </td>
                <td>
                    <input name="date">
                </td>
            </tr>

        </tbody>
        <button type="button" onclick="getJSON()">있는 json 가져오는 버튼</button>
        <button type="button" onclick="getInput()">input 박스값 바로 받아오는 버튼</button>
        <button type="button" onclick="sendInput()">input 박스값 보내서 저장하는 버튼</button>
    </table>
    <script>

        function getJSON() {
                $.ajax({
                type:"get",
                url:"data.json",
                dataType:"json",
                success: function(data){
                    console.log("통신성공");
                    console.log(data);
                    str = '<TR>'; 
                        $.each(data , function(i){
                            str += '<TD>' + data[i].no + '</TD><TD>' + data[i].name + '</TD><TD>' + data[i].tel + '</TD><TD>' + data[i].addr + '</TD>' +
                                        '<TD>' + data[i].status + '</TD><TD>' + data[i].comment + '</TD><TD>'+ data[i].date + '</TD>';
                            str += '</TR>';
                        });
                    $('.table_body').append(str);
                },
                error:function(){
                    console.log("아작남");
                }
            })
        }

        function getInput() {
                $.ajax({
                type:"post",
                url:"http://localhost:8080/newbox/data2",
                data:{
                    no : $('input[name=no]').val(),
                    name : $('input[name=name]').val(),
                    tel : $('input[name=tel]').val(),
                    addr : $('input[name=addr]').val(),
                    status : $('input[name=status]').val(),
                    comment : $('input[name=comment]').val(),
                    date : $('input[name=date]').val(),
                },
                header:{
					"Content-Type":"application/json",	//Content-Type 설정
					"X-HTTP-Method-Override":"POST"
                },
                success: function(result){
                    console.log("통신성공");
                    console.log(result);
                    let data = JSON.parse(result)
                    str = '<TR>'; 
                        $.each(data , function(i){
                            str += '<TD>' + data[i].no + '</TD><TD>' + data[i].name + '</TD><TD>' + data[i].tel + '</TD><TD>' + data[i].addr + '</TD>' +
                                        '<TD>' + data[i].status + '</TD><TD>' + data[i].comment + '</TD><TD>'+ data[i].date + '</TD>';
                            str += '</TR>';
                        });
                    $('.table_body').append(str);
                },
                error:function(){
                
                    console.log("아작남");
                }
            })
        } 
        
        function sendInput(){
            $.ajax({
                type:"post",
                url:"http://localhost:8080/newbox/data2",
                data:{
                    no : $('input[name=no]').val(),
                    name : $('input[name=name]').val(),
                    tel : $('input[name=tel]').val(),
                    addr : $('input[name=addr]').val(),
                    status : $('input[name=status]').val(),
                    comment : $('input[name=comment]').val(),
                    date : $('input[name=date]').val(),
                },
                header:{
					"Content-Type":"application/json",	//Content-Type 설정
					"X-HTTP-Method-Override":"POST"},
                success:function(data){
                    console.log("보내기성공");
                    console.log(data);
                    let sort = sort(data);
                    console.log(sort);
                },
                error:function(){
                    console.log("아작났음..")
                }
            })
        }
    </script>
</body>
</html>
        