import instance from "@/libs/instance";

async function getForum(slug: string) {
    return await instance.get(`/forums/${slug}`).then(res => {
        console.log(res.data)
        return res.data
    }).catch(err => {
        console.log(err.response)
    })
}

export default async function Page({params}: { params: { slug: string } }) {
    const forum = await getForum(params.slug) as ForumInterface
    return (
        <div

            className={`p-3 border mb-4 bg-white dark:bg-primary border-gray-200 dark:border-gray-700 dark:shadow-slate-900   shadow-lg mx-3 rounded-lg`}>
            <h1 className={`text-2xl font-semibold `}>{forum.title}</h1>
            <div className={`flex items-center space-x-4 text-xs font-light border-b border-violet-900 mt-1 pb-1`}>
                <span>10 Agustus 2023</span>
                <span>Dilihat 2000 kali</span>
                <span>Dijawab 100 orang</span>
            </div>
            <div className={`mt-4`}>
                <p>
                    {forum.question}
                </p>
            </div>
        </div>
    );
};