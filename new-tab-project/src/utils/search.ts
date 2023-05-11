export function getSiteIco(params:string) {
    const url=params.slice(0,params.indexOf('com')+3);
    return `${url}/favicon.ico`
}
 
export function getFormatSearch(word:string,url:string){
    const start=url.slice(0,url.indexOf('%s'));
    const end=url.slice(url.indexOf('%s')+2,url.length);
    return `${start+word+end}`;
}
