import Header from "@/components/Header";
import instance from "@/libs/instance";
import {ListForum} from "@/components/ListForum";

async function getForums(): Promise<ForumInterface[]> {
    return await instance.get('/forums').then(res => {
        return res.data
    }).catch(err => {
        console.log(err.response)
    })
}

export default async function Home() {
    const forums = await getForums()

    return (
        <div className="">
            <Header/>
            {/*<Suspense fallback={'lagi loading'}/>*/}
            <ListForum dataForums={forums}/>
        </div>
    )
}
