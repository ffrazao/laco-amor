import { Endereco } from '../endereco/endereco';

export class Pessoa {
    id: number;
    tipo: string;
    cpf: string;
    cnpj: string;
    nome: string;
    contato1: string;
    contato2: string;
    contato3: string;
    enderecoList: Endereco[];
}
