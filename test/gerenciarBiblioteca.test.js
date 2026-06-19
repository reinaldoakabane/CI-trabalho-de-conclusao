import { buscarTituloDoLivroPorID } from '../src/gerenciarBiblioteca.js';
import assert from 'node:assert';

describe('Testes da Gestão de Biblioteca', function () {
    it('Validar que um título é retornado quando informo um ID válido', function () {
        // Act
        const retornoDaFuncao = buscarTituloDoLivroPorID(5);

        // Assert
        assert.equal(retornoDaFuncao, 'Taking Testing Seriously');
    });

    it('Validar que uma mensagem é apresentada quando o ID não foi encontrado', function () {
        // Act
        const retornoDaFuncao = buscarTituloDoLivroPorID(9999);

        // Assert
        assert.equal(retornoDaFuncao, 'ID não encontrado.');
    });

    it('Validar que um erro será retornado quando o ID não é informado', function () {
        // Act & Assert
        assert.throws(
            function (){ buscarTituloDoLivroPorID() },
            { 
                message: 'O ID precisa ser informado e maior que zero.'
            }
        );
    });

    it('Validar que um erro será retornado quando o ID for nulo', function () {
        // Act & Assert
        assert.throws(
            function (){ buscarTituloDoLivroPorID(null) },
            { 
                message: 'O ID precisa ser informado e maior que zero.'
            }
        );
    });

    it('Validar que ao informar ID igual a 0 um erro será retornado', function () {
        // Act & Assert
        assert.throws(
            function (){ buscarTituloDoLivroPorID(0) },
            { 
                message: 'O ID precisa ser informado e maior que zero.'
            }
        );
    });
});
