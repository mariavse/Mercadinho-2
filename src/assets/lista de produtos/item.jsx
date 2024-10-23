function Produto({ texto, imagem, preco }) {
  return (
    <>
      <h1>{texto}</h1>
      <img width="100" src={imagem} />
      <h3>{preco}</h3>
    </>
  );

}
export default Produto;
