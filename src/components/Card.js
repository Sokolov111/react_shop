function Card() {
    return ( 
        <div className="card">
        <div className="favorite">
          <img width={40} header={40} src="imgs/ch-.png" alt="Unliked" />
        </div>
        <img width={130} height={120} src="https://avatars.mds.yandex.net/i?id=058337e42ff71a94ed04582cbbe48bf4d440f7cd-4077540-images-thumbs&n=13" alt="prod" />
        <h5>ipsum dolor sit amet consectetur adipisicing elit.</h5>
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
    )
}

export default Card;