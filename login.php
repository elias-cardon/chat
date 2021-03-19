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