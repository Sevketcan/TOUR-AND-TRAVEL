import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "ustars",
    name: "TOUR AND TRAVEL",
    chainId: "galileo-4",
    createdDate: "2024-12-23T06:44:18.819Z",
    modifiedDate: "2024-12-23T06:44:18.819Z",
    id: "andromeda",
    collections: [
        {
            marketplace: "andr1wcpaymvxj4yzxusv6rv0z9nmsk552wuz4mswudd25kr6k9mq2taqqk58yu",
            cw721: "andr1d5s3y869na6qr4wvsl8ap9e77w6q8sr8d7a7rq48ly2ygetvq8zqhm2ff4",
            name: "Tour And Travels",
            id: "embeddables-marketplace-1",
            type: ICollectionType.MARKETPLACE,
            featured: "HTL"
        },
    ],
};

export default CONFIG;
