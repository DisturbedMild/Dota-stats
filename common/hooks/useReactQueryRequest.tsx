import {useQuery} from "@tanstack/react-query";

import {fetchData} from "@/common/utils/fetchData";

export const useReactQueryRequest = (key: string, url: string) => {
    return useQuery({
        queryKey: [key], queryFn: async () => fetchData(url)
    })
};
