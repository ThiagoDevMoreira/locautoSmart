export type AccountExecutionTiming = 'imediata' | 'futura';
export type AccountImpact = 'credito' | 'debito';
export type AccountNature =
    | 'caixa_geral'
    | 'caixa_local'
    | 'conta_corrente'
    | 'contas_a_receber'
    | 'contas_a_pagar'
    | 'credor'
    | 'cliente'
    | 'credor_generico'
    | 'cliente_generico';

/*
store_group: grupo de lojas de uma mesma organização/empresa.
store: loja individual.
abstract_user: representa uma entidade abstrata como fornecedor / cliente / sistema...
user: representa um usuario do sistema.
custumer: representa um cliente do negócio ao qual o sistema serve.
*/
export type TitularCategory =
    | 'store_group'
    | 'store'
    | 'abstract_user'
    | 'user'
    | 'custumer';
