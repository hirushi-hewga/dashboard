import { Card, CardActions, CardContent, CardMedia, Button, Typography, Pagination, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from "axios"
import { defaultNewsImageUrl } from '../../settings/urls';

const NewsPage = () => {
    const [news, setNews] = useState({ totalResults: 0, articles: [] })
    const [pagination, setPagination] = useState({ page: 1, total: 1 })

    const apiKey = "fdefd44336da416dbb261b21c19ad9b6"
    const lang = "uk"
    const searchParam = "ukraine"
    const pageSize = 20
    const url = `https://newsapi.org/v2/everything?apiKey=${apiKey}&q=${searchParam}&language=${lang}&pageSize=${pageSize}&page=${pagination.page}`
    
    const newRequest = async () => {
        const responce = await axios.get(url)
        setNews(responce.data)
        setPagination({...pagination, total: Math.ceil(responce.data.totalResults / pageSize)})
    }

    const pageChangeHandler = (event, value) => {
        setPagination({...pagination, page: value})
        console.log(value);
        
    }

    useEffect(() => {
        newRequest()
    }, [pagination.page])

    return (
        <>
            <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "10px", marginTop: "10px"}}>
                {news.articles.map(article => (
                    <a key={article.publishedAt} href={article.url} style={{textDecoration: "none"}}>
                        <Card sx={{ maxWidth: 345, height: "100%" }}>
                            <CardMedia
                              sx={{ height: 140 }}
                              image={article.urlToImage}
                              title={article.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                  {article.title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                  {article.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </a>
                ))}
            </div>
            <Box style={{ display: "flex"}}>
                <Pagination onChange={pageChangeHandler} sx={{m: "10px auto"}} count={pagination.total} />
            </Box>
        </>
    );
}

export default NewsPage