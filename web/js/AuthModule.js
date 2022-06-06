import {loginModule} from './LoginModule.js';

class AuthModule{ 
    printLoginForm(){
        document.getElementById('content').innerHTML =
    `
    <div class="fadeInDown wrapper">
  <div id="formContent">
    <!-- Tabs Titles -->
    <h2 id="log" class="active"> Sign In </h2>
    <h2 id="reg" class="inactive underlineHover">Sign Up</h2>

    <form>
      <input type="text" id="login" class="fadeIn second" name="login" placeholder="Login">
      <input type="password" id="password" class="fadeIn third" name="login" placeholder="Password">
      <input id="authBtn" type="submit" class="fadeIn fourth" value="Log In">
    </form>

    <div id="formFooter">
      <a id="infoLog">&nbsp</a>
    </div>

  </div>
</div>
`
        const authBtn = document.getElementById('authBtn');
        authBtn.addEventListener('click', (e)=>{
            e.preventDefault();
            loginModule.sendCredential();
        })
        
        const reg = document.getElementById('reg');
        reg.addEventListener('click', (e)=>{
            e.preventDefault();
            authModule.printRegestrationForm();
        })
    }
         
    printRegestrationForm(){
        document.getElementById('content').innerHTML =
    `
    <div class="fadeInDown wrapper">
  <div id="formContent">
    <!-- Tabs Titles -->
    <h2 id="log" class="inactive underlineHover"> Sign In </h2>
    <h2 class="active">Sign Up </h2>

    <form>
      <input type="text" id="firstName" class="fadeIn second" name="login" placeholder="Firstname">
      <input type="text" id="lastName" class="fadeIn second" name="login" placeholder="Lastname">
      <input type="text" id="phone" class="fadeIn second" name="login" placeholder="Contact phone">
      <input type="text" id="login" class="fadeIn second" name="login" placeholder="Login">
      <input type="password" id="password" class="fadeIn third" name="login" placeholder="Password">
      <input type="password" id="passwordcon" class="fadeIn third" name="login" placeholder="Confirm password">
      <input id="register" type="submit" class="fadeIn fourth" value="Sign up">
    </form>
        
    <div id="formFooter">
      <a id="infoLog">&nbsp</a>
    </div>

  </div>
</div>
`
     const register = document.getElementById('register');
        register.addEventListener('click', (e)=>{
            e.preventDefault();
            loginModule.registrationNewUser();
        })
     const log = document.getElementById('log');
        log.addEventListener('click', (e)=>{
            e.preventDefault();
            authModule.printLoginForm();
        })
    }
}
let authModule = new AuthModule (); 
export { authModule };

