import {authModule} from './AuthModule.js';
import {adminDeepModule} from './AdminDeepModule.js';
import {listsModule} from './ListsModule.js';

class AdminModule{
    printAdminChooseFunction(){
        document.getElementById('content').innerHTML =
        `
            <div class="container menu">
            <div class="row fadeInDown">
            <div class="four col-md-2">
            <div id="addSneaker" class="counter-box">
          <i class="fa-solid fa-plus plus"></i>
          <p>Add sneaker</p>
        </div>
      </div>
      <div class="four col-md-2">
                    <div id="setQuantity" class="counter-box">
                            <i class="fa-solid fa-file-circle-plus"></i>
                            <p>Order sneaker</p>
                    </div>
            </div>
      <div class="four col-md-2">
                    <div id="setLink" class="counter-box">
                            <i class="fa-solid fa-image"></i>
                            <p>Upload cover</p>
                    </div>
            </div>
            <div class="four col-md-2">
                    <div id="getUsers" class="counter-box">
                            <i class="fa  fa-user"></i>
                            <p>Users list</p>
                    </div>
            </div>
            <div class="four col-md-2">
                    <div id="getIncome" class="counter-box">
                            <i class="fa-solid fa-dollar-sign"></i>
                            <p>Shop income</p>
                    </div>
            </div>
            <div class="four col-md-2">
                    <div id="changeRole" class="counter-box">
                            <i class="fa-solid fa-person-booth"></i>
                            <p>Change role</p>
                    </div>
            </div>
      </div>	
    </div>
    `
        const addSneaker = document.getElementById('addSneaker');
        addSneaker.addEventListener('click', (e)=>{
            e.preventDefault();
            adminModule.printAddSneaker();
        })
        const setQuantity = document.getElementById('setQuantity');
        setQuantity.addEventListener('click', (e)=>{
            e.preventDefault();
            adminModule.printSetQuantity(adminDeepModule.getSneakers());
        })
        const changeRole = document.getElementById('changeRole');
        changeRole.addEventListener('click', (e)=>{
            e.preventDefault();
            adminModule.printChangeRole(adminDeepModule.getUsersMap(), adminDeepModule.getRoles());
        })
        const setLink = document.getElementById('setLink');
        setLink.addEventListener('click', (e)=>{
            e.preventDefault();
            adminModule.printSetImg(adminDeepModule.getSneakers());
        })
        const getUsers = document.getElementById('getUsers');
        getUsers.addEventListener('click', (e)=>{
            e.preventDefault();
            listsModule.getBuyersList();
        })
        const getIncome = document.getElementById('getIncome');
        getIncome.addEventListener('click', (e)=>{
            e.preventDefault();
            adminModule.printGetIncome();
        })
      
    }
    printAddSneaker(){
        document.getElementById('content').innerHTML =
                `
                <div class="fadeInDown container-redactor">
                  <div class="redactor">
                    <header>
                    <i id="back" class="fa-solid fa-xmark"></i>
                    <p>Add new sneaker</p>
                    </header>
                    <form id="newSneakerForm">
                      <div class="dbl-field">
                        <div class="field">
                          <input id="firm" type="text" name="firm" class="fadeIn second" placeholder="Firm">
                          <i class="fa-solid fa-icons fadeIn second"></i>
                        </div>
                        <div class="field">
                          <input id="model" type="text" name="model" class="fadeIn second" placeholder="Model">
                          <i class="fa-solid fa-socks fadeIn second"></i>
                        </div>
                      </div>
                      <div class="dbl-field">
                        <div class="field">
                          <input id="size" type="number" name="size" class="fadeIn second" placeholder="Size">
                          <i class="fa-solid fa-ruler fadeIn second"></i>
                        </div>
                        <div class="field">
                          <input id="price" type="number" step="0,01" name="price" class="fadeIn second" placeholder="Price">
                          <i class="fa-solid fa-coins fadeIn second"></i>
                        </div>
                      </div>
                      <div class="message">
                        <textarea id="description" placeholder="Description" class="fadeIn third" name="description"></textarea>
                        <i class="fa-solid fa-file-lines fadeIn third"></i>
                      </div>
                      <div class="button-area">
                        <button id="submitNewSneaker" type="submit" class="fadeIn fourth">Add sneaker</button>
                        <p id="error" class="error fadeIn fourth" >&nbsp</p>
                      </div>
                    </form>
                  </div>
                </div>
            `;
        document.getElementById('submitNewSneaker').addEventListener('click',(e)=>{
            e.preventDefault();
            adminDeepModule.createNewSneaker();
        });
        document.getElementById('back').onclick=function(){
        adminModule.printAdminChooseFunction();}
    }
    printSetQuantity(){
        document.getElementById('content').innerHTML =
                `
                <div class="fadeInDown container-redactor">
                  <div class="redactor">
                    <header>
                    <i id="back" class="fa-solid fa-xmark"></i>
                    <p>Take an order from a supplier</p>
                    </header>
                    <form id="newSneakerForm">
                      <div class="dbl-field">
                        <div class="field">
                          <select id="listSneakers" type="text" name="sneaker" class="fadeIn second">
        
                  </select>
                          <i class="fa-solid fa-socks fadeIn second"></i>
                        </div>
                        <div class="field">
                          <input id="quantity" type="number" name="quantity" class="fadeIn second" placeholder="Quantity">
                          <i class="fa-solid fa-arrow-down-1-9 fadeIn second"></i>
                        </div>
                      </div>
                      <div class="button-area">
                        <button id="submitAddQuantity" type="submit" class="fadeIn third">Add</button>
                        <p id="error" class="error fadeIn fourth" >&nbsp</p>
                      </div>
                    </form>
                  </div>
                </div>
            `;
        document.getElementById('back').onclick=function(){
        adminModule.printAdminChooseFunction();
    }
        document.getElementById('submitAddQuantity').addEventListener('click',(e)=>{
            e.preventDefault();
            adminDeepModule.setQuantity();
        });
    }
    printSetImg(){
        document.getElementById('content').innerHTML =
                `
                <div class="fadeInDown container-redactor">
                  <div class="redactor">
                    <header>
                    <i id="back" class="fa-solid fa-xmark"></i>
                    <p>Set image to sneaker</p>
                    </header>
                    <form id="newSneakerForm">
                      <div class="dbl-field">
                        <div class="field">
                          <select id="listSneakers" type="text" name="sneaker" class="fadeIn second">
        
                  </select>
                          <i class="fa-solid fa-socks fadeIn second"></i>
                        </div>
                        <div class="field">
                          <input id="link" type="text" name="quantity" class="fadeIn second" placeholder="Link">
                          <i class="fa-solid fa-link fadeIn second"></i>
                        </div>
                      </div>
                      <div class="button-area">
                        <button id="submitAddLink" type="submit" class="fadeIn third">Add</button>
                        <p id="error" class="error fadeIn fourth" >&nbsp</p>
                      </div>
                    </form>
                  </div>
                </div>
            `;
        document.getElementById('back').onclick=function(){
        adminModule.printAdminChooseFunction();
    }
        document.getElementById('submitAddLink').addEventListener('click',(e)=>{
            e.preventDefault();
            adminDeepModule.setLink();
        });
    }
    printGetIncome(){
        document.getElementById('content').innerHTML =
                `
                <div class="fadeInDown container-redactor">
                  <div class="redactor">
                    <header>
                    <i id="back" class="fa-solid fa-xmark"></i>
                    <p>Get shop income</p>
                    </header>
                    <form id="newSneakerForm">
                      <div class="dbl-field">
                        <div class="field">
                          <select id="listMonth" type="text" name="sneaker" class="fadeIn second">
                          <option value="1">1. Январь</option> <option value="2">2. Февраль</option>
                          <option value="3">3. Март</option> <option value="4">4. Апрель</option>
                          <option value="5">5. Май</option> <option value="6">6. Июнь</option>
                          <option value="7">7. Июль</option> <option value="8">8. Август</option>
                          <option value="9">9. Сентябрь</option> <option value="10">10. Октябрь</option>
                          <option value="11">11. Ноябрь</option> <option value="12">12. Декабрь</option>
                  </select>
                            <i class="fa-regular fa-calendar-days fadeIn second"></i>
                        </div>
                        <div class="field">
                          <input id="link" type="text" name="quantity" class="fadeIn second" placeholder="Year">
                          <i class="fa-solid fa-calendar fadeIn second"></i>
                        </div>
                      </div>
                      <div class="button-area">
                        <button id="submitGetIncome" type="submit" class="fadeIn third">Get</button>
                        <p id="error" class="error fadeIn fourth" >&nbsp</p>
                      </div>
                    </form>
                  </div>
                </div>
            `;
        document.getElementById('back').onclick=function(){
        adminModule.printAdminChooseFunction();
    }
    }
    printChangeRole(){
        document.getElementById('content').innerHTML =
                `
                <div class="fadeInDown container-redactor">
                  <div class="redactor">
                    <header>
                    <i id="back" class="fa-solid fa-xmark"></i>
                    <p>Change the role</p>
                    </header>
                    <form id="newSneakerForm">
                      <div class="dbl-field">
                        <div class="field">
                          <select id="select_users" type="text" name="sneaker" class="fadeIn second">
        
                  </select>
                          <i class="fa-solid fa-socks fadeIn second"></i>
                        </div>
                        <div class="field">
                          <select id="select_roles" type="text" name="sneaker" class="fadeIn second">
        
                  </select>
                          <i class="fa-solid fa-arrow-down-1-9 fadeIn second"></i>
                        </div>
                      </div>
                      <div class="button-area">
                        <button id="submitChangeRole" type="submit" class="fadeIn third">Change</button>
                        <p id="error" class="error fadeIn fourth" >&nbsp</p>
                      </div>
                    </form>
                  </div>
                </div>
            `;
        document.getElementById('back').onclick=function(){
        adminModule.printAdminChooseFunction();
    }
        document.getElementById('submitChangeRole').addEventListener('click',(e)=>{
            e.preventDefault();
            adminDeepModule.setNewRole();
        });
    }
    
    } 

const adminModule = new AdminModule();
export {adminModule};

