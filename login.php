<?php
$loginError='';
if (!empty($_POST['username']) && !empty($_POST['pwd'])) {
    include ('Chat.php');
    $chat = new Chat();
    $user = $chat->loginUsers($_POST['username'], $_POST['pwd']);
    if (!empty($user)) {
        $_SESSION['username'] = $user[0]['username'];
        $_SESSION['userid'] = $user[0]['userid'];
        $lastInsertId = $chat->insertUserLoginDetails($user[0]['userid']);
        $_SESSION['login_details_id'] = $lastInsertId;
        header("Location: index.php");
    }
    else{
        $loginError = "Pseudo ou mot de passe incorrect";
    }
}
?>

<div class="row">
    <div class="col-sm-4">
        <h4>Connexion:</h4>
        <form method="post">
            <div class="form-group">
                <?php if ($loginError ) { ?>
                    <div class="alert alert-warning"><?php echo $loginError; ?></div>
                <?php } ?>
            </div>
            <div class="form-group">
                <label for="username">Pseudo:</label>
                <input type="username" class="form-control" name="username" required>
            </div>
            <div class="form-group">
                <label for="pwd">Mot de passe:</label>
                <input type="password" class="form-control" name="pwd" required>
            </div>
            <button type="submit" name="login" class="btn btn-info">Connexion</button>
        </form>
    </div>
</div>