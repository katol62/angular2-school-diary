<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <title>${title}</title>
    <style>
        body{
            font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;
        }
        #header{
            background-color: rgb(65,173,72);
            text-align: center;
            text-transform: uppercase;
            color: white;
        }
        #header td{
            height: 60px;
            border-radius: 6px 6px 0 0;
            font-size: 25px;
            vertical-align: middle;
        }
        img{
            width: 100px;
            height: 100px;
            object-fit: cover;
        }
        #reg-compl{
            font-size: 28px;
            font-weight: bold;
            padding-right: 10px;
        }
        #hello{
            font-weight: 600;
        }
        #hello td{
            padding: 15px 0;
        }
        #thanks td{
            padding: 20px 0 30px 10px;
        }
        #hello, #activate, #thanks{
            font-size: 17px;
        }
        #activate td{
            padding: 20px 0;
            background-color: rgb(65,173,72);
            border-radius: 0 0 6px 6px;
        }
        #activate td a{
            text-decoration: none;
            background-color: #1AE01B;
            padding: 10px;
            color: white;
            transition: .2s;
            border-radius: 4px;
            text-transform: uppercase;
            font-weight: bold;
        }
        #activate td a:hover{
            background-color: #17FD31;
        }
    </style>
</head>
<body>
    <table align="center" border="0" cellpadding="0" cellspacing="0" width="640">
        <tr id="header">
            <td>спасибо за регистрацию</td>
        </tr>
        <tr>
            <td>
                <table width="100%" style="padding: 20px 0">
                    <tr>
                        <td><img src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Tick_Mark_Dark-512.png"></td>
                        <td align="right" id="reg-compl">Регистрация прошла успешно</td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr id="hello">
            <td>Приветствуем, ${username}! </td>
        </tr>
        <tr id="thanks">
            <td>Благодарим за регистрацию на сайте SchoolarLife. <br> Теперь Вам доступен доступ к библиотекам, и тд... <br> Активируйте свой аккаунт</td>
        </tr>
        <tr id="activate">
            <a href="#">Активировать аккаунт</a>
        </tr>
    </table>
</body>
</html>