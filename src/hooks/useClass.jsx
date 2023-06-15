import { useQuery } from "@tanstack/react-query";

const useClass = () => {


    const {data: myClass = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['myclass'],
        queryFn: async() => {
            const res = await fetch('https://side-of-server.vercel.app/myclass');
            return res.json();
        }
    })

    return [myClass, loading, refetch]
}

export default useClass;