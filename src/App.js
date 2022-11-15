
function App() {
  return (
    <div className="wrapper clear">
        <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
            <img width={50} height={50} src="/imgs/logo3.png" />
         <div>
            <h3 className="text-uppercase">React sneakers</h3>
            <p className="opacity-5">Магазин кросовок</p>
          </div> 
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img  width={15} height={15} src="/imgs/delete.png" />
            <span>1205rub.</span>
            </li>
          <li>
          <img width={15} height={15} src="/imgs/user.png" />
          </li>
        
        </ul>
        </header>
        <div className="content p-40">
          <h1 className="mb-40">Все кроссовки</h1>
          <div className="sneakers d-flex">
          <div className="card">
            <img width={130} height={120} src="https://avatars.mds.yandex.net/i?id=058337e42ff71a94ed04582cbbe48bf4d440f7cd-4077540-images-thumbs&n=13" alt="prod" />
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column align-center">
                <span>Цена: </span>
                <b>12 999r</b>
              </div>
              <button className="button">
                <img width={12} height={12} src="/imgs/close.png" alt="X" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={130} height={120} src="https://avatars.mds.yandex.net/i?id=058337e42ff71a94ed04582cbbe48bf4d440f7cd-4077540-images-thumbs&n=13" alt="prod" />
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column align-center">
                <span>Цена: </span>
                <b>12 999r</b>
              </div>
              <button className="button">
                <img width={12} height={12} src="/imgs/close.png" alt="X" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={130} height={120} src="https://avatars.mds.yandex.net/i?id=058337e42ff71a94ed04582cbbe48bf4d440f7cd-4077540-images-thumbs&n=13" alt="prod" />
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column align-center">
                <span>Цена: </span>
                <b>12 999r</b>
              </div>
              <button className="button">
                <img width={12} height={12} src="/imgs/close.png" alt="X" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={130} height={120} src="https://avatars.mds.yandex.net/i?id=058337e42ff71a94ed04582cbbe48bf4d440f7cd-4077540-images-thumbs&n=13" alt="prod" />
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column align-center">
                <span>Цена: </span>
                <b>12 999r</b>
              </div>
              <button className="button">
                <img width={12} height={12} src="/imgs/close.png" alt="X" />
              </button>
            </div>
          </div>
        </div>
          </div>

    </div>
  );
}

export default App;
