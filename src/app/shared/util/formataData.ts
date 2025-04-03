export function converterDataISOParaData(isoString: string): string {
    return isoString.split("T")[0];
}