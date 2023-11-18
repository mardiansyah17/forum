import Header from "@/components/Header";
import CardForum from "@/components/CardForum";
import instance from "@/libs/instance";

async function getForums(): Promise<ForumInterface[]> {
    return await instance.get('/forums').then(res => {
        return res.data
    }).catch(err => {
        console.log(err.response.data)
    })
}

export default async function Home() {
    // const forums = await getForums()

    return (
        <div className="">
            <Header/>
            <div
                className="mt-5 overflow-y-auto  h-[72vh] sm:h-[82vh] lg:h-[72vh] scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-indigo-500 scrollbar-track-blue-300 px-2">
                {
                    forums.map((forum, i) => (
                        <CardForum
                            key={`forum-${i}`}
                            data={forum}/>
                    ))

                }
            </div>
        </div>
    )
}
