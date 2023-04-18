<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <style> 
       body{
        background-color: #c7b015;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
       }
       *{
        box-sizing: border-box;
       }
       form{
        background-color: white;
        width:  500px;
        border: 2px solid black;
        padding: 30px;
        border-radius: 15px;

       }


       h2 {
        text-align: center;
        margin-bottom: 40px;

       }
       input{
            display: block;
            border:  2px solid black;
            width: 95%;
            padding: 10px;
            margin: 10px auto;
            border-radius: 5px;
       }
       .error{
        color: red;

       }
       

    </style>  
    <form action=login.php method="post">
       <h2> Bejelentkezes </h2>
       <?php if (isset($_GET['error'])) { ?>
        <p class="error"><?php echo $_GET['error']; ?></p>
    <?php } ?> 
        <label> Felhasznalonev </label>
       <input type="text" name=uname><br>
       <label> Jelszo</label>
       <input type="password" name="password">
       <button type="submit">Login</button>
    </form>
       

    


</body>
</html>