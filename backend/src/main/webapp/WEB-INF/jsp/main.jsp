<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<c:set var="contextPath" value="${pageContext.request.contextPath}"/>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <title>Главная</title>
    <link rel="stylesheet" type="text/css" href="/resources/css/style.css">
    <!-- Font Awesome -->
    <link href="/vendors/font-awesome/css/font-awesome.min.css" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css?family=Neucha" rel="stylesheet">
</head>
<body>
<header>
    <div class="container center">
        <div class="logo left">
            <img src="/resources/images/yandex_logo.png">
        </div>
        <div class="buttons right">
            <a href="/security/login" class="logIn">Вход</a>
            <a href="/security/register" class="registration">Регистрация</a>
        </div>
    </div>
</header>
<section>
    <div class="container center">
        <ul class="libMenu">
            <li><a href="#"><i class="fa fa-tasks" aria-hidden="true"></i>Расписание</a></li><li><a href="#"><i class="fa fa-pencil" aria-hidden="true"></i>Уроки</a></li><li><a href="#"><i class="fa fa-book" aria-hidden="true"></i>Книги</a></li><li><a href="#"><i class="fa fa-video-camera" aria-hidden="true"></i>Видео</a></li>
        </ul>
    </div>
</section>
<section>
    <div class="container center content">
        <div class="ad left ib">
            <a href="#" class="adBlock">
                <img src="/resources/images/ad1.jpg">
                <span class="adTitle">Здесь могла быть ваша реклама!</span>
                <span class="site">shkola.ru</span>
                <hr>
                <span class="adInfo">Здесь могла быть ваша реклама! Здесь могла быть ваша реклама! Здесь могла быть ваша реклама! Здесь могла быть ваша реклама! Здесь могла быть ваша реклама! Здесь могла быть ваша реклама!</span>
            </a>
            <a href="#" class="adBlock">
                <img src="/resources/images/ad2.jpg">
                <span class="adTitle">Здесь могла быть ваша реклама!</span>
                <span class="site">shkola.ru</span>
                <hr>
                <span class="adInfo">Здесь могла быть ваша реклама! Здесь могла быть ваша реклама! Здесь могла быть ваша реклама! Здесь могла быть ваша реклама! Здесь могла быть ваша реклама! Здесь могла быть ваша реклама!</span>
            </a>
        </div>
        <div class="news ib right">
            <div class="newsBlock">
                <h1><a href="#">Заголовок темы</a></h1>
                <p><a href="#">На сегодняшний день, jQuery - это самая популярная JavaScirpt библиотека, решающая кучу проблем. Мы можем без особого труда манипулировать контентом - заменять, вставлять, удалять, создавать анимацию и т.д.</a></p>
                <p><a href="#">В этом уроке, мы рассмотрим каким образом мы можем вставлять новые элементы на страницу с помощью метода jQuery Append.</a></p>
            </div>
            <div class="newsBlock">
                <h1><a href="#">Заголовок темы</a></h1>
                <p><a href="#">На сегодняшний день, jQuery - это самая популярная JavaScirpt библиотека, решающая кучу проблем. Мы можем без особого труда манипулировать контентом - заменять, вставлять, удалять, создавать анимацию и т.д.</a></p>
                <p><a href="#">В этом уроке, мы рассмотрим каким образом мы можем вставлять новые элементы на страницу с помощью метода jQuery Append.</a></p>
            </div>
            <div class="newsBlock">
                <h1><a href="#">Заголовок темы</a></h1>
                <p><a href="#">На сегодняшний день, jQuery - это самая популярная JavaScirpt библиотека, решающая кучу проблем. Мы можем без особого труда манипулировать контентом - заменять, вставлять, удалять, создавать анимацию и т.д.</a></p>
                <p><a href="#">В этом уроке, мы рассмотрим каким образом мы можем вставлять новые элементы на страницу с помощью метода jQuery Append.</a></p>
            </div>
        </div>
    </div>
</section>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="../js/common.js"></script>
<script src="../js/jquery.validate.min.js"></script>
<script src='https://www.google.com/recaptcha/api.js'></script>
</body>
</html>
<%--
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Главная страница</title>

    <link href="${contextPath}/resources/css/bootstrap.min.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
<div class="container">

    <c:if test="${pageContext.request.userPrincipal.name != null}">
        <form id="logoutForm" method="POST" action="${contextPath}/logout">
            <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
        </form>

        <h2>Welcome &lt;%&ndash;${pageContext.request.userPrincipal.name} | <a onclick="document.forms['logoutForm'].submit()">Logout</a>&ndash;%&gt;</h2>

    </c:if>

</div>
<!-- /container -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="${contextPath}/resources/js/bootstrap.min.js"></script>
</body>
</html>--%>
