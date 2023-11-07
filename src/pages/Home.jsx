import CardC from "../components/CardC";
import CarouselC from "../components/CarouselC";

const cards = [
  { nome: "Café Amargo", descricao: "Amargo como sua vida", img: "/cafe1.jpg" },
  { nome: "Café Suave", descricao: "Suave como ", img:"/cafe2.jpg"},
  { nome: "Café Azedo", descricao: "Café com limão" ,img:"cafe3.jpg"},
 
];

const Home = () => {
  return (
    <div>
      <CarouselC />
      <div style={{ padding: "80px 0" }}>
        <h2>Nossos produtos</h2>
        <div className="card-group">
          {cards.map((card, i) => (
            <CardC data={card} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
