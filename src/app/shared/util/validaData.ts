export function DataMaiorQueHoje(data: string): boolean {
    const dataInformada = new Date(`${data}T00:00:00`);
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    return dataInformada.getTime() > hoje.getTime();
}