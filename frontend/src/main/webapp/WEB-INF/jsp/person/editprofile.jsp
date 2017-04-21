<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<c:set var="contextPath" value="${pageContext.request.contextPath}"/>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Редактирование профиля</title>

    <link href="${contextPath}/resources/css/bootstrap.min.css" rel="stylesheet">
    <link href="${contextPath}/resources/css/common.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
<!--   http://localhost:8080/addprofile/0  -->
    <script type="text/javascript" src="//code.jquery.com/jquery-1.11.2.min.js"></script>
    <script type="text/javascript" src="/resources/js/form2js.js"></script>




</head>

<body>

<div align="center">

    <div id="result"></div>

</div>

<div class="container">

    <!--  <div class="form-signin" id="avatar-upload">
          <div class="text">Выберите аватар</div>
          <label for="avatar">
              <img src="http://www.ukm.my/portal/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png" id="imgupload">
          </label>
          <div class="upload">
              <input type="file" name="avatar" id="avatar">
          </div>
      </div>-->


    <form:form id="upload-file-form" class="form-signin">
        <div class="text">Выберите аватар</div>
        <label class="form-signin-heading" for="upload-file-input">
            <img src="https://s-media-cache-ak0.pinimg.com/originals/5b/1c/1f/5b1c1fd9010f0f009bbfdb11441f865c.png" id="imgupload">
        </label>
        <div class="upload">
            <input id="upload-file-input" type="file" name="uploadfile" accept="*" />
        </div>

        <%--<input type="image" src="/resources/images/user.png" onclick="chooseFile();" />--%>
    </form:form>

    <form:form id="profileForm" name="profile" method="POST" modelAttribute="userProfile" class="form-signin" action="/addprofile">
        <!--<h2 class="form-signin-heading">Ваши персональные данные</h2>-->
        <spring:bind path="firstName">
            <div class="form-group ${status.error ? 'has-error' : ''}">
                <form:input type="text" path="firstName" class="form-control" placeholder="Имя"
                            ></form:input>
                <form:errors path="firstName"></form:errors>
            </div>
        </spring:bind>

        <spring:bind path="lastName">
            <div class="form-group ${status.error ? 'has-error' : ''}">
                <form:input type="text" path="lastName" class="form-control" placeholder="Фамилия"
                ></form:input>
                <form:errors path="lastName"></form:errors>
            </div>
        </spring:bind>

        <spring:bind path="middleName">
            <div class="form-group ${status.error ? 'has-error' : ''}">
                <form:input type="text" path="middleName" class="form-control" placeholder="Отчество"
                           ></form:input>
                <form:errors path="middleName"></form:errors>
            </div>
        </spring:bind>

        <label for="sex">Пол</label>
        <div class="radio">
            <input id="male" type="radio" name="gender" value="male">
            <label class="gender male" for="male">Мужской</label>
            <input id="female" type="radio" name="gender" value="female">
            <label class="gender female" for="female">Женский</label>
        </div>

        <input id="age" type="date" min="1920-01-01" max="2000-01-01" placeholder="Дата рождения">

        <button class="btn btn-lg btn-primary btn-block" type="submit" id="save-button">Сохранить</button>
    </form:form>

</div>

<c:if test="${savefailed != null}">
    <div class="form-signin-error">
        <h2 class="has-error">${savefailed}</h2>
    </div>
</c:if>

<!-- /container -->

<script type="text/javascript">
    // bind the on-change event for the input element (triggered when a file
    // is chosen)
    /*  function chooseFile() {
     $("input[id='upload-file-input']").click();
     }*/
    $(document).ready(function() {
        $("#upload-file-input").on("change", uploadFileOnServer);
    });
    /**
     * Upload the file sending it via Ajax at the Spring Boot server.
     */
    function uploadFileOnServer() {

        if (this.files && this.files[0]) {
            var FR= new FileReader();
            FR.onload = function(e) {
                document.getElementById("imgupload").src = e.target.result;
                document.getElementById("imgupload").style.width = "150px";

            };
            FR.readAsDataURL( this.files[0] );
        }
        // alert("Hello");
        /*var formData = form2js('upload-file-form', null, false);
         var entityJsonStr = JSON.stringify(formData);
         alert(entityJsonStr);*/
        $.ajax({
            url: "/uploadFile?${_csrf.parameterName}=${_csrf.token}",
            type: "POST",
            data: new FormData($("#upload-file-form")[0]),
            enctype: 'multipart/form-data',
            processData: false,
            contentType: false,
            cache: false,
            success: function (response) {
                // Handle upload success
                //alert(response);
                $("#upload-file-message").text("File succesfully uploaded");
            },
            error: function () {
                // Handle upload error
                $("#upload-file-message").text(
                    "File not uploaded (perhaps it's too much big)");
            }
        });
    } // function uploadFile
</script>



</body>
</html>