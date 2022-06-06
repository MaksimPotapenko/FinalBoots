class Home{ 
    printHomeForm(){
        document.getElementById('content').innerHTML =
    `
    <div class="container-my" data-aos="zoom-in-down" data-aos-duration="2000">
                <div class="row">
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active pic_home" data-bs-interval="5000">
                  <img src="pics/erty.png" class="d-block w-100" alt="...">
                  <div class="carousel-caption d-none d-md-block">
                    <h5>The best shop</h5>
                    <p>The website of the sneaker shop wtitten in JS by Deniss</p>
                  </div>
                </div>
                <div class="carousel-item pic_home" data-bs-interval="5000">
                  <img src="pics/timb.png" class="d-block w-100" alt="...">
                  <div class="carousel-caption d-none d-md-block">
                    <h5>The best shop</h5>
                    <p>The website of the sneaker shop wtitten in JS by Deniss</p>
                  </div>
                </div>
                <div class="carousel-item pic_home" data-bs-interval="5000">
                  <img src="pics/nike.png" class="d-block w-100" alt="...">
                  <div class="carousel-caption d-none d-md-block">
                    <h5>The best shop</h5>
                    <p>The website of the sneaker shop wtitten in JS by Deniss</p>
                  </div>
                </div>
              </div>
            </div>
                </div>
                </div>
`
       ;
    }
    }
let home = new Home (); 
export { home };



