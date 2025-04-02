export interface Pessoa {
    id: number;
    nome: string;
    idade: number;
    sexo: string;
    vivo: boolean;
    urlFoto: string;
    ultimaOcorrencia: {
        dtDesaparecimento: string;
        dataLocalizacao: string;
        encontradoVivo: boolean;
        localDesaparecimentoConcat: string;
        ocorrenciaEntrevDesapDTO: {
            informacao: string;
            vestimentasDesaparecido: string;
        };
        listaCartaz: {
            urlCartaz: string;
            tipoCartaz: string;
        }[];
        ocoId: number;
    };
}