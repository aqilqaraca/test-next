// import { MongoClient } from "mongodb"

// export const getStaticProps = async ()=>{
//   const client = await MongoClient.connect("mongodb+srv://aqil875:aqil123@cluster0.po3ei.mongodb.net/news?retryWrites=true&w=majority")
//         const db = client.db()
//         const newsCollection = db.collection('news')
//   const users = await newsCollection.find().toArray()
//   client.close()
//   return {
//     props : {
//       users : users.map(user=>({
//         name : user.data.name,
//         surname : user.data.surname,
//         id : user._id.toString(),
//       }))
//     }
//   }
// }
export const getStaticProps = async ()=>{
  let newArr = []
  const res = await fetch("https://test-a7414-default-rtdb.firebaseio.com/testimonial.json")
  const data = await res.json()
  for(let key in data){
    newArr.push(data[key])
  }
  return {
    props : {
      users : newArr
    }
  }
}
const HomePage = ({users}) => {
  // const sendData = ()=>{
  //   fetch("/api/newdata",{
  //     method : 'POST',
  //     body : JSON.stringify({name : "Aqil", surname : "Qaraca", nese : "Nese"}),
  //     headers : {
  //       'Content-Type' : 'application/json'
  //     }
  //   }).then(res=>console.log(res)).catch(err=>console.log(err))
  // }
  const sendData = ()=>{
    fetch("https://test-a7414-default-rtdb.firebaseio.com/testimonial.json",{
      method : 'POST',
      body : JSON.stringify({name : "Aqil", surname : "Qaraca",id : Date.now()})
    }).then(res=>console.log(res)).catch(err=>console.log(err))
  }
  return (
    <div>
      <button onClick={sendData}>Send data</button>
      <ul>
        {users.map(user=>(
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default HomePage