import "./section.css";

export const Section = ({ nome, produtos, subCategorias }) => {
  return (
    <div>
      <h1>{nome}</h1>
      <hr />
      <br />

      {subCategorias?.length > 0 ? (
        subCategorias.map((sub) => {
          return (
            <>
              <h2 className="sub">{sub}</h2>
              <ul>
                {produtos
                  .filter((p) => p.subCategoria === sub)
                  .map((produto) => (
                    <li className="ul" key={produto.id}>
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
        })
      ) : (
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
      )}
    </div>
  );
};
