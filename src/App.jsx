import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Produto from './assets/lista de produtos/item';

function App() {
  return (
    <>
      <Produto
        texto="Coca cola 2L"
        imagem="https://www.padariapampulha.com.br/wp-content/uploads/2023/12/56XXW1ipbsn8jTLDZC6dyPPMYheKU9B0i3ibE27d.jpg"
        preco="7,00"
      />

      <Produto
        texto="Caixa de Leite"
        imagem="https://ibassets.com.br/ib.item.image.large/l-c54acdc6d1da4f50a37252efe847bbd7.jpeg"
        preco="5,70"
      />

      <Produto
        texto="rainiki"
        imagem="https://images-americanas.b2w.io/produtos/01/00/img3/14592507/9/1459250767_1SZ.jpg"
        preco="7,00"
      />

      <Produto
        texto="rufles de churrasco"
        imagem="https://drogariaspacheco.vteximg.com.br/arquivos/ids/760055-1000-1000/367990---salgadinho-ruffles-churrasco-100g.jpg?v=637811306417370000"
        preco="10,00"
      />

      <Produto
        texto="barra de chocolate"
        imagem="https://casaevideonewio.vtexassets.com/arquivos/ids/395494/Bar--Choc-Lacta-Ao-Leite-165g-1670522.jpg?v=637690399418430000"
        preco="13,00"
      />
    </>
  );
}

export default App;
