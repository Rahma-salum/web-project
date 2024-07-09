function ChangeInfo(){
    return(
        <><div class="container">
        <div class="center">
            <h1>Change Account</h1>
            <form action="" method="POST">
                <div class="txt_field">
                    <input type="email" name="text" required />
                    <span></span>
                    <label>Email</label>
                </div>
                <div class="txt_field">
                    <input type="text" name="text" required />
                    <span></span>
                    <label>Address</label>
                </div>
                <div class="txt_field">
                    <input type="password" name="password" required />
                    <span></span>
                    <label>Password</label>
                </div>
                <div class="pass">Forget Password?</div>
                <input name="submit" type="Submit" value="Change account" />
            </form>
        </div>
    </div></>

    );
}           
        export default ChangeInfo;