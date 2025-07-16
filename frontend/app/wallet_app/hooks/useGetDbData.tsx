import { useEffect } from 'react';

interface Props<T>{
    url: string;
    datas: T[];
    setDatas: React.Dispatch<React.SetStateAction<T[]>>;
}
//汎用性を持たせるためにジェネリクスインターフェースを引数にした
export const useGetDbData = <T,>({ url, datas, setDatas }: Props<T>) => {
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch(url);
                const data: T[] = await response.json();
                console.log(data);
                setDatas(data);
            }catch(error){
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    },[url, setDatas]);
    return datas;
}