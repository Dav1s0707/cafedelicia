import  { useState } from "react";
import { Button } from "react-bootstrap";
import "./ProductForm.css"; 

const ProductForm = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [dessert, setdessert] = useState("");
  const [date, setdate] = useState("");
  const [stock, setstock] = useState("");

  const cadastrarProduto = (e) => {
    e.preventDefault();
    console.log("Nome do Produto: " + productName);
    console.log("Descrição do Produto: " + productDescription);
    console.log("Sobremesa: " + dessert);
    console.log("Validade:  " + date);
    console.log("Estoque: " + stock);
  };

  return (
    <div className="product-form-container">
      <h2>Cadastrar Produto</h2>
      <form onSubmit={cadastrarProduto}>
        <label>
          <span>Nome do Produto</span>
          <input
            type="text"
            value={productName}
            onChange={(e) => {
              setProductName(e.target.value);
            }}
            className="form-control"
          />
        </label>
        <label>
          <span>Descrição do Produto</span>
          <textarea
            value={productDescription}
            onChange={(e) => {
              setProductDescription(e.target.value);
            }}
            className="form-control"
          />
        </label>
        <label>
          <span>Sobremesa</span>
          <input
            type="text"
            value={dessert}
            onChange={(e) => {
              setdessert(e.target.value);
            }}
            className="form-control"
          />
        </label>
        <label>
          <span>Data de validade</span>
          <input
            type="date"
            value={date}
            onChange={(e) => {
              setdate(e.target.value);
            }}
            className="form-control"
          />
        </label>
        <label>
          <span>Estoque</span>
          <input
            type="number"
            value={stock}
            onChange={(e) => {
              setstock  (e.target.value);
            }}
            className="form-control"
          />
        </label>
        <Button type="submit" className="btn btn-primary">Cadastrar Produto</Button>
      </form>
    </div>
  );
};

export default ProductForm;
