export const formatData = (str:any) => {
    const newstr = new Date(str);
    const y = newstr.getFullYear();
    const m = newstr.getMonth() + 1;
    const d = newstr.getDate();
    const h = newstr.getHours();
    const min = newstr.getMinutes();
    const s = newstr.getSeconds();
    // eslint-disable-next-line prefer-const
    let time:any[]=[y,m,d,h,min,s];
    for (let index = 0; index < time.length; index++) {
        time[index]<10?
        time[index]='0'+time[index]:
        1==1;
    }
    return `${time[3]}:${time[4]}:${time[5]}`;
  };
  
  