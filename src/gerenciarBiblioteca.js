// 1) Criar um vetor com 5 livros contendo as seguintes propriedades: ID, titulo, tema, preco.
const livros = [
    {
        id: 1, 
        titulo: 'The Art of Software Testing', 
        tema: 'Fundamentos e Técnicas', 
        preco: 39.00
    },
    {
        id: 2, 
        titulo: 'Agile Testing', 
        tema: 'Testes Ágeis', 
        preco: 80.00
    },
    {
        id: 3, 
        titulo: 'More Agile Testing', 
        tema: 'Testes Ágeis', 
        preco: 87.00
    },
    {
        id: 4, 
        titulo: 'Explore It!', 
        tema: 'Testes Exploratórios', 
        preco: 49.00
    },
    {
        id: 5, 
        titulo: 'Taking Testing Seriously', 
        tema: 'Testes Baseados no Contexto', 
        preco: 72.00
    }
];


// 2) [Básico] Crie uma função que receba o ID de um livro e 
//             retorne o seu titulo. Exemplo de chamada da função:
//             buscarTituloDoLivroPorID(99) -> 'Titulo do Livro de ID 99'
export function buscarTituloDoLivroPorID(id) {
    if (!id || id <= 0) {
        throw new Error('O ID precisa ser informado e maior que zero.')
    }

    for (let i = 0;i < livros.length; i++) {
        if (livros[i].id == id) {
            return livros[i].titulo;
        }
    }

    return 'ID não encontrado.'
}