import { useRouter } from "next/router"
const NewsDetailPage = ()=>{
    const router = useRouter()
    return (
        <div>NewsDetailPage | {router.query.newsId}</div>
    )
}

export default NewsDetailPage