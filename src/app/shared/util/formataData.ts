export function converterDataISOParaData(isoString: string): string {
    return isoString.split("T")[0];
}

export function formatarData(data: string) {
    const [ano, mes, dia] = data.split('-');
    return `${dia}/${mes}/${ano}`;
}
