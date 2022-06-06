import {loginModule} from './LoginModule.js';

class ProfileModule{   
    getBuyersList(authId){
        let promiseSneaker = fetch('getBuyers',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset:utf8'
            },
            credentials: 'include',
        });
        promiseSneaker.then(response => response.json())
                    .then(response => {
                        if(response.status){
                            profileModule.insertAuthBuyer(response.buyer, authId);
                        }else{
                            document.getElementById('info').innerHTML = 'Список покупателей пуст';
                        }
                    })
                    .catch(error =>{
                       document.getElementById('info').innerHTML = 'Ошибка сервера (getBuyers): '+error
                        
                    })
    }
    insertAuthBuyer(buyer, authId){
        document.getElementById('content').innerHTML =
                `
                  <div id="containerProfile" class="containerProfile">
                  
                </div>
                `;
        const cards = document.getElementById('containerProfile');
            cards.insertAdjacentHTML('afterbegin',
            `
                <aside class="profile-card">
                <header>
                  <img src="pics/logo.png" style="width: 70px; height: 70px;">
                  <i id="logOut" class="fa-solid fa-right-from-bracket"></i>
                  </a>
                  <h1>${buyer[authId-1].firstName} ${buyer[authId-1].lastName}</h1>
                  <h2>${buyer[authId-1].login}</h2>
                </header>

                <div class="profile-bio">
                    <p>Balance: ${buyer[authId-1].money}€</p>
                </div>

                <ul class="profile-social-links">
                  <button id="addMoney">Top up balance</button>
                </ul>
              </aside>
            `         
            );
            document.getElementById('logOut').onclick=function(){
            loginModule.sendLogout();
}
    }
}

const profileModule = new ProfileModule();
export {profileModule};

