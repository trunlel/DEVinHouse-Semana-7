import "./section.css";

export const Section = ({ nome, produtos }) => {
  return (
    <>
      <h1>{nome}</h1>
      <ul className="ul">
        {produtos.map((produto) => (
          <li key={produto.id}>
            <h2>{produto.nome}</h2>
            <p>{produto.descricao}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
