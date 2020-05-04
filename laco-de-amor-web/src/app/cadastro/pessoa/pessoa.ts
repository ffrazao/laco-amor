import { Parceiro } from '../../comum/entidade/modelo/parceiro';
import { Fornecedor } from '../../comum/entidade/modelo/fornecedor';
import { Cliente } from '../../comum/entidade/modelo/cliente';
import { PessoaEndereco } from '../../comum/entidade/modelo/pessoa-endereco';
import { EntidadeId } from '../../comum/entidade/entidade-id';

export class Pessoa implements EntidadeId {

    public id: number;
    public nome: string;
    public parceiro: Parceiro;
    public fornecedor: Fornecedor;
    public cliente: Cliente;
    public tipo: string;
    public cpfCnpj: string;
    public email: string;
    public contato1: string;
    public contato2: string;
    public contato3: string;
    public enderecoList: PessoaEndereco[] = [];

}
