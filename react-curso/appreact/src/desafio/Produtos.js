import React from 'react'

const Produtos = () => {
    const produtos = [
        { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
        { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
    ];

    return (
        <main>
            {produtos.map(produto => (
                <section key={produto.nome} style={{ border: '1px solid black', padding: '1rem', margin: '1rem 0'}}>
                    <p>{produto.nome}</p>
                    <ul>
                        {produto.propriedades.map(propriedade => <li key={propriedade}>{propriedade}</li>)}
                    </ul>
                </section>
            ))}
        </main>
    )
}

export default Produtos