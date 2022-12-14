
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
function App() {
  return (
    <div className="wrapper clear">
      <Drawer/>
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search_block">
            <img width={20} height={20} src="imgs/loupe.png" alt="Search" />
            <input placeholder="Поиск" />
          </div>
      </div>
        <div className="sneakers d-flex">
          <Card/>
        </div>
      </div>
   </div>
  );
}

export default App;
