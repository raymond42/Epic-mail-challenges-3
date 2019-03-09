import express from 'express';

const app = express();


app.use((req, res) =>{
    res.send('hello there');
    res.end();
});

app.listen(process.env.PORT || 3000, () => {console.log('App is listening on 3000...')});

export default app;