import { Pessoa } from "../interface/pessoa.interface";

export const pessoas: Pessoa[] = [
    {
        id: 1,
        nome: "João Silva",
        idade: 30,
        sexo: "MASCULINO",
        vivo: true,
        urlFoto: "https://randomuser.me/api/portraits/men/1.jpg",
        ultimaOcorrencia: {
            dtDesaparecimento: "2025-03-20T15:30:00.000Z",
            dataLocalizacao: "",
            encontradoVivo: true,
            localDesaparecimentoConcat: "São Paulo - SP",
            ocorrenciaEntrevDesapDTO: {
                informacao: "Foi visto pela última vez em um parque.",
                vestimentasDesaparecido: "Camiseta azul e calça jeans"
            },
            listaCartaz: [
                {
                    urlCartaz: "https://www.thecampusqdl.com/uploads/files/pdf_sample_2.pdf",
                    tipoCartaz: "PDF_DESAPARECIDO"
                }
            ],
            ocoId: 101
        },
    },
    {
        id: 2,
        nome: "Ricardo Souza",
        idade: 28,
        sexo: "MASCULINO",
        vivo: true,
        urlFoto: "https://randomuser.me/api/portraits/men/3.jpg",
        ultimaOcorrencia: {
            dtDesaparecimento: "2025-04-05T14:15:00.000Z",
            dataLocalizacao: "",
            encontradoVivo: true,
            localDesaparecimentoConcat: "Belo Horizonte - MG",
            ocorrenciaEntrevDesapDTO: {
                informacao: "Foi visto pegando um ônibus no centro da cidade.",
                vestimentasDesaparecido: "Blusa cinza e bermuda preta"
            },
            listaCartaz: [
                {
                    urlCartaz: "https://www.thecampusqdl.com/uploads/files/pdf_sample_2.pdf",
                    tipoCartaz: "PDF_DESAPARECIDO"
                }
            ], ocoId: 103
        }
    },
    {
        id: 3,
        nome: "Felipe Martins",
        idade: 35,
        sexo: "MASCULINO",
        vivo: false,
        urlFoto: "https://randomuser.me/api/portraits/men/4.jpg",
        ultimaOcorrencia: {
            dtDesaparecimento: "2025-02-18T20:45:00.000Z",
            dataLocalizacao: "",
            encontradoVivo: false,
            localDesaparecimentoConcat: "Curitiba - PR",
            ocorrenciaEntrevDesapDTO: {
                informacao: "Foi visto saindo do trabalho à noite e não retornou para casa.",
                vestimentasDesaparecido: "Jaqueta marrom, calça jeans e tênis pretos"
            },
            listaCartaz: [
                {
                    urlCartaz: "https://www.thecampusqdl.com/uploads/files/pdf_sample_2.pdf",
                    tipoCartaz: "PDF_DESAPARECIDO"
                }
            ],
            ocoId: 104
        }
    },
    {
        id: 6,
        nome: "Fernando Oliveira",
        idade: 32,
        sexo: "MASCULINO",
        vivo: false,
        urlFoto: "https://randomuser.me/api/portraits/men/6.jpg",
        ultimaOcorrencia: {
            dtDesaparecimento: "2025-01-22T19:00:00.000Z",
            dataLocalizacao: "2025-02-05",
            encontradoVivo: false,
            localDesaparecimentoConcat: "Porto Alegre - RS",
            ocorrenciaEntrevDesapDTO: {
                informacao: "Foi visto pela última vez saindo de um restaurante.",
                vestimentasDesaparecido: "Camisa preta, calça social e sapatos marrons"
            },
            listaCartaz: [
                {
                    urlCartaz: "https://www.thecampusqdl.com/uploads/files/pdf_sample_2.pdf",
                    tipoCartaz: "PDF_DESAPARECIDO"
                }
            ],
            ocoId: 106
        }
    },
    {
        id: 7,
        nome: "Mariana Costa",
        idade: 25,
        sexo: "FEMININO",
        vivo: true,
        urlFoto: "https://randomuser.me/api/portraits/women/7.jpg",
        ultimaOcorrencia: {
            dtDesaparecimento: "2025-03-18T14:20:00.000Z",
            dataLocalizacao: "",
            encontradoVivo: true,
            localDesaparecimentoConcat: "Salvador - BA",
            ocorrenciaEntrevDesapDTO: {
                informacao: "Foi vista entrando em um táxi próximo a um shopping.",
                vestimentasDesaparecido: "Vestido floral e sandálias brancas"
            },
            listaCartaz: [
                {
                    urlCartaz: "https://www.thecampusqdl.com/uploads/files/pdf_sample_2.pdf",
                    tipoCartaz: "PDF_DESAPARECIDO"
                }
            ],
            ocoId: 107
        }
    },
    {
        id: 8,
        nome: "Carlos Mendes",
        idade: 45,
        sexo: "MASCULINO",
        vivo: true,
        urlFoto: "https://randomuser.me/api/portraits/men/8.jpg",
        ultimaOcorrencia: {
            dtDesaparecimento: "2025-06-02T21:15:00.000Z",
            dataLocalizacao: "",
            encontradoVivo: true,
            localDesaparecimentoConcat: "Rio de Janeiro - RJ",
            ocorrenciaEntrevDesapDTO: {
                informacao: "Foi visto pela última vez em uma estação de metrô.",
                vestimentasDesaparecido: "Camisa azul, calça bege e mochila preta"
            },
            listaCartaz: [
                {
                    urlCartaz: "https://www.thecampusqdl.com/uploads/files/pdf_sample_2.pdf",
                    tipoCartaz: "PDF_DESAPARECIDO"
                }
            ],
            ocoId: 108
        }
    },
    {
        id: 9,
        nome: "Beatriz Almeida",
        idade: 29,
        sexo: "FEMININO",
        vivo: false,
        urlFoto: "https://randomuser.me/api/portraits/women/9.jpg",
        ultimaOcorrencia: {
            dtDesaparecimento: "2025-04-15T10:45:00.000Z",
            dataLocalizacao: "",
            encontradoVivo: false,
            localDesaparecimentoConcat: "Recife - PE",
            ocorrenciaEntrevDesapDTO: {
                informacao: "Foi vista saindo de um supermercado no bairro central.",
                vestimentasDesaparecido: "Blusa vermelha e calça jeans clara"
            },
            listaCartaz: [
                {
                    urlCartaz: "https://www.thecampusqdl.com/uploads/files/pdf_sample_2.pdf",
                    tipoCartaz: "PDF_DESAPARECIDO"
                }
            ], ocoId: 109
        }
    },
    {
        id: 10,
        nome: "Eduardo Nascimento",
        idade: 37,
        sexo: "MASCULINO",
        vivo: true,
        urlFoto: "https://randomuser.me/api/portraits/men/10.jpg",
        ultimaOcorrencia: {
            dtDesaparecimento: "2025-02-14T16:30:00.000Z",
            dataLocalizacao: "",
            encontradoVivo: true,
            localDesaparecimentoConcat: "Fortaleza - CE",
            ocorrenciaEntrevDesapDTO: {
                informacao: "Foi visto pegando um táxi próximo ao aeroporto.",
                vestimentasDesaparecido: "Camisa verde e bermuda jeans"
            },
            listaCartaz: [
                {
                    urlCartaz: "https://www.thecampusqdl.com/uploads/files/pdf_sample_2.pdf",
                    tipoCartaz: "PDF_DESAPARECIDO"
                }
            ], ocoId: 110
        }
    },
    {
        id: 11,
        nome: "Camila Ribeiro",
        idade: 22,
        sexo: "FEMININO",
        vivo: true,
        urlFoto: "https://randomuser.me/api/portraits/women/11.jpg",
        ultimaOcorrencia: {
            dtDesaparecimento: "2025-07-08T09:00:00.000Z",
            dataLocalizacao: "",
            encontradoVivo: true,
            localDesaparecimentoConcat: "Curitiba - PR",
            ocorrenciaEntrevDesapDTO: {
                informacao: "Foi vista entrando em um carro desconhecido perto da faculdade.",
                vestimentasDesaparecido: "Jaqueta preta e saia azul"
            },
            listaCartaz: [
                {
                    urlCartaz: "https://www.thecampusqdl.com/uploads/files/pdf_sample_2.pdf",
                    tipoCartaz: "PDF_DESAPARECIDO"
                }
            ],
            ocoId: 111
        }
    },
    {
        id: 12,
        nome: "Marcos Oliveira",
        idade: 40,
        sexo: "MASCULINO",
        vivo: false,
        urlFoto: "https://randomuser.me/api/portraits/men/12.jpg",
        ultimaOcorrencia: {
            dtDesaparecimento: "2025-05-10T20:00:00.000Z",
            dataLocalizacao: "2025-05-18",
            encontradoVivo: false,
            localDesaparecimentoConcat: "Salvador - BA",
            ocorrenciaEntrevDesapDTO: {
                informacao: "Foi visto pela última vez saindo de um bar na orla.",
                vestimentasDesaparecido: "Camiseta branca e bermuda azul"
            },
            listaCartaz: [
                {
                    urlCartaz: "https://www.thecampusqdl.com/uploads/files/pdf_sample_2.pdf",
                    tipoCartaz: "PDF_DESAPARECIDO"
                }
            ],
            ocoId: 112
        }
    },
    {
        id: 13,
        nome: "Fernanda Costa",
        idade: 31,
        sexo: "FEMININO",
        vivo: true,
        urlFoto: "https://randomuser.me/api/portraits/women/13.jpg",
        ultimaOcorrencia: {
            dtDesaparecimento: "2025-03-22T07:15:00.000Z",
            dataLocalizacao: "",
            encontradoVivo: true,
            localDesaparecimentoConcat: "Florianópolis - SC",
            ocorrenciaEntrevDesapDTO: {
                informacao: "Foi vista pegando um ônibus para uma cidade vizinha.",
                vestimentasDesaparecido: "Blusa rosa e calça preta"
            },
            listaCartaz: [
                {
                    urlCartaz: "https://www.thecampusqdl.com/uploads/files/pdf_sample_2.pdf",
                    tipoCartaz: "PDF_DESAPARECIDO"
                }
            ],
            ocoId: 113
        }
    },
    {
        id: 14,
        nome: "André Santos",
        idade: 35,
        sexo: "MASCULINO",
        vivo: true,
        urlFoto: "https://randomuser.me/api/portraits/men/14.jpg",
        ultimaOcorrencia: {
            dtDesaparecimento: "2025-06-12T18:45:00.000Z",
            dataLocalizacao: "2025-06-19",
            encontradoVivo: true,
            localDesaparecimentoConcat: "Rio de Janeiro - RJ",
            ocorrenciaEntrevDesapDTO: {
                informacao: "Foi visto entrando em um metrô na estação central.",
                vestimentasDesaparecido: "Camisa azul e calça jeans"
            },
            listaCartaz: [
                {
                    urlCartaz: "https://www.thecampusqdl.com/uploads/files/pdf_sample_2.pdf",
                    tipoCartaz: "PDF_DESAPARECIDO"
                }
            ],
            ocoId: 114
        }
    },
    {
        id: 15,
        nome: "Juliana Ferreira",
        idade: 29,
        sexo: "FEMININO",
        vivo: false,
        urlFoto: "https://randomuser.me/api/portraits/women/15.jpg",
        ultimaOcorrencia: {
            dtDesaparecimento: "2025-08-05T22:10:00.000Z",
            dataLocalizacao: "",
            encontradoVivo: false,
            localDesaparecimentoConcat: "Manaus - AM",
            ocorrenciaEntrevDesapDTO: {
                informacao: "Foi vista pela última vez saindo do trabalho.",
                vestimentasDesaparecido: "Vestido vermelho e bolsa preta"
            },
            listaCartaz: [
                {
                    urlCartaz: "https://www.thecampusqdl.com/uploads/files/pdf_sample_2.pdf",
                    tipoCartaz: "PDF_DESAPARECIDO"
                }
            ], ocoId: 115
        }
    },
    {
        id: 16,
        nome: "Carlos Mendes",
        idade: 42,
        sexo: "MASCULINO",
        vivo: false,
        urlFoto: "https://randomuser.me/api/portraits/men/16.jpg",
        ultimaOcorrencia: {
            dtDesaparecimento: "2025-07-08T12:30:00.000Z",
            dataLocalizacao: "",
            encontradoVivo: false,
            localDesaparecimentoConcat: "Fortaleza - CE",
            ocorrenciaEntrevDesapDTO: {
                informacao: "Foi visto entrando em um táxi próximo ao mercado central.",
                vestimentasDesaparecido: "Camiseta listrada e bermuda bege"
            },
            listaCartaz: [
                {
                    urlCartaz: "https://www.thecampusqdl.com/uploads/files/pdf_sample_2.pdf",
                    tipoCartaz: "PDF_DESAPARECIDO"
                }
            ], ocoId: 116
        }
    },
    {
        id: 17,
        nome: "Patrícia Lima",
        idade: 27,
        sexo: "FEMININO",
        vivo: true,
        urlFoto: "https://randomuser.me/api/portraits/women/17.jpg",
        ultimaOcorrencia: {
            dtDesaparecimento: "2025-09-03T08:45:00.000Z",
            dataLocalizacao: "2025-09-10",
            encontradoVivo: true,
            localDesaparecimentoConcat: "Curitiba - PR",
            ocorrenciaEntrevDesapDTO: {
                informacao: "Foi vista na rodoviária comprando passagem para outra cidade.",
                vestimentasDesaparecido: "Blusa amarela e calça jeans clara"
            },
            listaCartaz: [],
            ocoId: 117
        }
    },
    {
        id: 18,
        nome: "Fernando Oliveira",
        idade: 38,
        sexo: "MASCULINO",
        vivo: true,
        urlFoto: "https://randomuser.me/api/portraits/men/18.jpg",
        ultimaOcorrencia: {
            dtDesaparecimento: "2025-10-15T17:20:00.000Z",
            dataLocalizacao: "",
            encontradoVivo: true,
            localDesaparecimentoConcat: "Salvador - BA",
            ocorrenciaEntrevDesapDTO: {
                informacao: "Foi visto caminhando próximo ao Farol da Barra.",
                vestimentasDesaparecido: "Camiseta branca e shorts azul"
            },
            listaCartaz: [
                {
                    urlCartaz: "https://www.thecampusqdl.com/uploads/files/pdf_sample_2.pdf",
                    tipoCartaz: "PDF_DESAPARECIDO"
                }
            ], 
            ocoId: 118
        }
    },
    {
        id: 19,
        nome: "Mariana Costa",
        idade: 31,
        sexo: "FEMININO",
        vivo: false,
        urlFoto: "https://randomuser.me/api/portraits/women/19.jpg",
        ultimaOcorrencia: {
            dtDesaparecimento: "2025-11-08T21:10:00.000Z",
            dataLocalizacao: "",
            encontradoVivo: false,
            localDesaparecimentoConcat: "Porto Alegre - RS",
            ocorrenciaEntrevDesapDTO: {
                informacao: "Foi vista saindo de um shopping no centro da cidade.",
                vestimentasDesaparecido: "Casaco preto e calça jeans"
            },
            listaCartaz: [
                {
                    urlCartaz: "https://www.thecampusqdl.com/uploads/files/pdf_sample_2.pdf",
                    tipoCartaz: "PDF_DESAPARECIDO"
                }
            ],
            ocoId: 119
        }
    },
    {
        id: 20,
        nome: "Luiz Henrique",
        idade: 45,
        sexo: "MASCULINO",
        vivo: false,
        urlFoto: "https://randomuser.me/api/portraits/men/20.jpg",
        ultimaOcorrencia: {
            dtDesaparecimento: "2025-12-10T14:00:00.000Z",
            dataLocalizacao: "",
            encontradoVivo: false,
            localDesaparecimentoConcat: "Recife - PE",
            ocorrenciaEntrevDesapDTO: {
                informacao: "Foi visto pela última vez entrando em um carro preto.",
                vestimentasDesaparecido: "Camisa azul e calça bege"
            },
            listaCartaz: [
                {
                    urlCartaz: "https://www.thecampusqdl.com/uploads/files/pdf_sample_2.pdf",
                    tipoCartaz: "PDF_DESAPARECIDO"
                }
            ],
            ocoId: 120
        }
    },
    {
        id: 21,
        nome: "Ana Beatriz",
        idade: 29,
        sexo: "FEMININO",
        vivo: true,
        urlFoto: "https://randomuser.me/api/portraits/women/21.jpg",
        ultimaOcorrencia: {
            dtDesaparecimento: "2026-01-05T09:30:00.000Z",
            dataLocalizacao: "",
            encontradoVivo: true,
            localDesaparecimentoConcat: "Florianópolis - SC",
            ocorrenciaEntrevDesapDTO: {
                informacao: "Foi encontrada por familiares após uma semana desaparecida.",
                vestimentasDesaparecido: "Vestido vermelho e sandálias brancas"
            },
            listaCartaz: [
                {
                    urlCartaz: "https://www.thecampusqdl.com/uploads/files/pdf_sample_2.pdf",
                    tipoCartaz: "PDF_DESAPARECIDO"
                }
            ],
            ocoId: 121
        }
    },
    {
        id: 22,
        nome: "Carlos Eduardo",
        idade: 50,
        sexo: "MASCULINO",
        vivo: true,
        urlFoto: "https://randomuser.me/api/portraits/men/22.jpg",
        ultimaOcorrencia: {
            dtDesaparecimento: "2026-02-15T18:45:00.000Z",
            dataLocalizacao: "",
            encontradoVivo: true,
            localDesaparecimentoConcat: "Fortaleza - CE",
            ocorrenciaEntrevDesapDTO: {
                informacao: "Foi visto pela última vez na orla da praia.",
                vestimentasDesaparecido: "Bermuda branca e camiseta verde"
            },
            listaCartaz: [
                {
                    urlCartaz: "https://www.thecampusqdl.com/uploads/files/pdf_sample_2.pdf",
                    tipoCartaz: "PDF_DESAPARECIDO"
                }
            ],
            ocoId: 122
        }
    }
];
