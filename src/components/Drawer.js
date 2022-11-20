{/* Корзина */}
function Drawer(){
    return(
        <div style={{display:'none'}} className="overlay">
       <div className="drawer"> 
        <h2 className="mb-30 justify-between d-flex">Корзина <img className="remove_btn cu-p" width={35} height={35} src="/imgs/remove.png" alt="close" /></h2>
        <div className="items" style={{flex:1}}>
          <div className="cartItem d-flex alighn-center">
          {/* <img className="mr-20" width={70} height={70} src="https://www.superplanshet.ru/images/xps-13-2-in-1-ces-2017-5-2-1500x1000.jpg" alt="Laptop" /> */}
          <div style={{backgroundImage:"url(https://www.superplanshet.ru/images/xps-13-2-in-1-ces-2017-5-2-1500x1000.jpg)"}} className="cart_item_img">
    
          </div>
          <div className="mr-20 flex">
            <p className="mn-5">Tрансформируемый ноутбук Dell XPS 13</p>
            <b>230 000 тг</b>
          </div>
          <img className="remove_btn" width={35} height={35} src="/imgs/remove.png" alt="" />
        </div>
        <div className="cartItem d-flex alighn-center mb-20">
          {/* <img className="mr-20" width={70} height={70} src="https://www.superplanshet.ru/images/xps-13-2-in-1-ces-2017-5-2-1500x1000.jpg" alt="Laptop" /> */}
          <div style={{backgroundImage:"url(https://www.superplanshet.ru/images/xps-13-2-in-1-ces-2017-5-2-1500x1000.jpg)"}} className="cart_item_img">    
          </div>
          <div className="mr-20 flex mb-20">
            <p className="mn-5">Tрансформируемый ноутбук Dell XPS 13</p>
            <b>230 000 тг</b>
          </div>
          <img className="remove_btn" width={35} height={35} src="/imgs/remove.png" alt="" />         
        </div>        
    </div>
        <div className="cart_total_block">
          <ul>
            <li>
              <span>Итого</span>
              <div></div>
              <b>230 000 тг.</b>
            </li>
            <li>
              <span>Налог 5%</span>
              <div></div>
              <b>1050 тг.</b>
            </li>
          </ul> 
          <button className="green_button">Оформить заказ <i class="fa-solid fa-arrow-right-long"></i></button>
        </div>              
      </div>
    </div>
    )
}


export default Drawer;