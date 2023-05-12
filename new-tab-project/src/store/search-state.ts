/* eslint-disable no-dupe-else-if */
/* eslint-disable no-constant-condition */
/*
    const [searchEngines, dispatch] = useReducer(searchReducer, initsearchEngines);
    1.searchReducer:负责接收action并进行处理：
        1.增加搜索引擎：add
        2.删除搜索引擎：delete
        3.将某个引擎设置为默认：crawl
    2.initsearchEngines：searchEngine[]
    3.searchEngines：可以用来访问搜索引擎列表
    4.dispatch:进行操作
*/
import { useReducer } from "react";
import { searchEngine } from "@/types/propSearch";
import { error } from "console";

const defaultEngines=[
    {
        name:'bing',
        url:'https://www.bing.com/search?q=%s&PC=U316&FORM=CHROMN',
    },{
        name:'google',
        url:'{google:baseURL}search?q=%s&{google:RLZ}{google:originalQueryForSuggestion}{google:assistedQueryStats}{google:searchFieldtrialParameter}{google:iOSSearchLanguage}{google:prefetchSource}{google:searchClient}{google:sourceId}{google:contextualSearchVersion}ie={inputEncoding}',
    },{
        name:'bilibili',
        url:'https://search.bilibili.com/all?keyword=%s&from_source=nav_search_new',
    }
];

export function searchReducer(searchEngines:searchEngine[],action:any){
    switch (action.type) {
        case "add":
            return[
                ...searchEngines,
                {
                    name:action['name'],
                    url:action['url']
                }
            ]
        case "delete":
            for (let index = 0; index < searchEngines.length; index++) {
                if (action['name']==searchEngines[index]['name']) {
                    delete searchEngines[index];
                }
            }
            return searchEngines;
        case "crawl":
            // eslint-disable-next-line no-case-declarations
            for (let index = 0; index < searchEngines.length; index++) {
                if (action['name']==searchEngines[index]['name']) {
                    const item=searchEngines[index];
                    delete searchEngines[index];
                    searchEngines.unshift(item);
                }
                return searchEngines;
            }
            throw Error('no this search engine!');
        default:

            throw Error("in enginelist option function,you input a error opt code")
    }
}
export function getInitsearchEngines():searchEngine[]{
    if (1!=1) {
        //此处功能为向服务器发送搜索引擎请求，如果没有返回就查看本地存储
    }else if (1!=1) {
        //如果本地存储也没有，就存入默认引擎列表，并返回默认

    }
    localStorage.setItem('search-engines',defaultEngines.toString());
    return defaultEngines;
}
