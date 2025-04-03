import { Injectable } from '@angular/core';
import FileSaver from 'file-saver';
import JSZip from 'jszip';

@Injectable({
  providedIn: 'root'
})
export class ZipdownloadService {

  async baixarECompactarArquivos(urls: string[], zipFileName: string): Promise<void> {
    const zip = new JSZip();

    for (const url of urls) {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Erro ao baixar: ${url}`);

        const blob = await response.blob();
        const nomeArquivo = url.split('/').pop()?.split('?')[0] || 'arquivo-desconhecido';

        zip.file(nomeArquivo, blob);
      } catch (error) {
        console.error('Erro ao baixar o arquivo:', error);
      }
    }

    zip.generateAsync({ type: 'blob' }).then((content) => {
      FileSaver.saveAs(content, zipFileName);
    });
  }
}
