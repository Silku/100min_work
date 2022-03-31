<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
    String no = request.getParameter("no");
    String name = request.getParameter("name");
    String tel = request.getParameter("tel");
    String addr = request.getParameter("addr");
    String status = request.getParameter("status");
    String comment = request.getParameter("comment");
    String date = request.getParameter("date");
%>
 
[
{ "no":"<%=no %>",
"name":"<%=name %>", 
"tel":"<%=tel %>", 
"addr":"<%=addr %>", 
"status":"<%=status %>", 
"comment":"<%=comment %>", 
"date":"<%=date %>" }
]