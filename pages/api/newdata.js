import {MongoClient} from 'mongodb'

async function newData(req,res){
    if(req.method === 'POST'){
        const data = req.body
        const client = await MongoClient.connect("mongodb+srv://aqil875:aqil123@cluster0.po3ei.mongodb.net/news?retryWrites=true&w=majority")
        const db = client.db()
        const newsCollection = db.collection('news')
        const result = await newsCollection.insertOne({data})
        console.log(result)
        client.close()
        res.status(201).json({message : "News inserted"});
    }
}

export default newData;