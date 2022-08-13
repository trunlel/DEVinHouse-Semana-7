import "./section.css";

export const Section = ({ nome, produtos }) => {
  return (
    <>
      <h1>{nome}</h1>
      <hr />
      <br />
      <ul className="ul">
        {produtos.map((produto) => (
          <li key={produto.id}>
            <div className="li">
              <div>
                <h2>{produto.nome}</h2>
                <p>{produto.descricao}</p>
              </div>
              <div className="extra">
                <p>{produto.valor}</p>
                <p>{produto.tempo}</p>
              </div>
            </div>
            <br />
          </li>
        ))}
      </ul>
    </>
  );
};
