import {adminModule} from './AdminModule.js';

class ListsModule{
    getSneakersList(){
        let promiseSneaker = fetch('getSneakers',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset:utf8'
            },
            credentials: 'include',
        });
        promiseSneaker.then(response => response.json())
                    .then(response => {
                        if(response.status){
                            listsModule.insertSneakersList(response.sneaker);
                        }else{
                            document.getElementById('info').innerHTML = 'Список кроссовок пуст';
                        }
                    })
                    .catch(error =>{
                       document.getElementById('info').innerHTML = 'Ошибка сервера (getSneakers): '+error
                        
                    })
    }
    insertSneakersList(sneaker){
        document.getElementById('content').innerHTML =
                `
                  <div class="container listContainer">
                    <div id="cards" class="row">
                `;
        const cards = document.getElementById('cards');
        for (var i = 0, max = sneaker.length; i < max; i++) {
            cards.insertAdjacentHTML('afterbegin',
            `
                <div class="col-3 fadeInDown">
                <div id='printBuyMenu${sneaker[i].id}' class="product-wrap">
                <div class="product-image">
                  <a>
                    <img src="${sneaker[i].imgLink}">
                    <div class="shadow"></div>
                  </a>
                  <a id="id${sneaker[i].id}" class="detail-link" title="More"></a>
                </div>
                <div class="product-list">
                  <h3 id="nameSneak">${sneaker[i].sneakerFirm} ${sneaker[i].sneakerModel}</h3>
                  <div class="price">${sneaker[i].sneakerPrice}€</div>

                </div>
              </div>
              </div>
            `         
            );
        }
            $(document).on('click', 'a[id^="id"]', function(e) {
            e.preventDefault();
            var id = this.id;
            id = id.replace(/[a-zа-яё]/gi, '');
            listsModule.getSneakerExactly(id);
        });   
    }
    getSneakerExactly(sneakerId){
        let promiseSneaker = fetch('getSneakers',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset:utf8'
            },
            credentials: 'include',
        });
        promiseSneaker.then(response => response.json())
                    .then(response => {
                        if(response.status){
                            listsModule.insertSneakerExactly(response.sneaker, sneakerId);
                        }else{
                            document.getElementById('info').innerHTML = 'Список кроссовок пуст';
                        }
                    })
                    .catch(error =>{
                       document.getElementById('info').innerHTML = 'Ошибка сервера (getSneakers): '+error
                        
                    })
    }
    insertSneakerExactly(sneaker, sneakerId){
        document.getElementById('content').innerHTML =
                `
                  <div class="container listContainer">
                    <div id="cards" class="row">
                `;
        const cards = document.getElementById('cards');
            cards.insertAdjacentHTML('afterbegin',
            ` 
                <div class="container I fadeInDown">
                <div class="wrapperI">
                  <div class="productI-img">
                    <img src="${sneaker[sneakerId-1].imgLink}" height="420" width="420">
                  </div>
                  <div class="productI-info fadeIn second">
                    <div class="productI-text">
                      <i id="back" class="fa-solid fa-xmark"></i>
                      <h1>${sneaker[sneakerId-1].sneakerFirm} ${sneaker[sneakerId-1].sneakerModel}</h1>
                      <p>${sneaker[sneakerId-1].sneakerDescription}<br>&nbsp</p>
                      <p class="moreInf"><strong>Size: ${sneaker[sneakerId-1].sneakerSize}</strong></p>
                      <p class="moreInf"><strong>Quantity: ${sneaker[sneakerId-1].sneakerQuantity}</strong></p>
                    </div>
                    <div class="productI-price-btn fadeIn third">
                      <p>${sneaker[sneakerId-1].sneakerPrice}€</p>
                      <button type="button">buy now</button>
                    </div>
                  </div>
                </div>
              </div>
            `         
            );
            document.getElementById('back').onclick=function(){
            listsModule.getSneakersList();
        }
        }
    getBuyersList(){
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
                            listsModule.insertBuyersList(response.buyer);
                        }else{
                            document.getElementById('info').innerHTML = 'Список покупателей пуст';
                        }
                    })
                    .catch(error =>{
                       document.getElementById('info').innerHTML = 'Ошибка сервера (getBuyers): '+error
                        
                    })
    }
    insertBuyersList(buyer){
        document.getElementById('content').innerHTML =
                `
                  <div class="container-table fadeInDown">
                    <ul class="responsive-table">
                      <li class="table-header">
                        <div class="col col-1">User Id</div>
                        <div class="col col-2">Customer Name</div>
                        <div class="col col-3">Balance</div>
                        <div class="col col-4">Phone</div>
                        <div class="col col-5"><i id="back" class="fa-solid fa-xmark"></i></div>
                      </li>
                      <div id="tables"></div>
                    </ul>
                  </div>
                `;
        const cards = document.getElementById('tables');
        for (var i = 0, max = buyer.length; i < max; i++) {
            cards.insertAdjacentHTML('afterbegin',
            `
                <li class="table-row">
                   <div class="col-1">${buyer[i].id}</div>
                   <div class="col-2">${buyer[i].firstName} ${buyer[i].lastName} (${buyer[i].login})</div>
                   <div class="col-3">${buyer[i].money}</div>
                   <div class="col-4">${buyer[i].phone}</div>
                   <div class="col-5">&nbsp</div>
                </li>
            `         
            );
        }
    document.getElementById('back').onclick=function(){
        adminModule.printAdminChooseFunction();
    }
    }
}

const listsModule = new ListsModule();
export {listsModule};
