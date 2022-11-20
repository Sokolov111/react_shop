function Header() {
    return ( 
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
    )
}

export default Header