import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"


export default async function Page({ params }) {
  const shorturl = (await params).url
  const client = await clientPromise;
  const db = client.db("SHORT-LINKS");
  const collection = db.collection("url");
    
  const doc =  await collection.findOne({ shorturl: shorturl })
    if (doc) {
        redirect(doc.shorturl)
    }
    else {
        redirect(`${process.env.NEXT_PUBLIC_HOST}`)
    }

  return <div>My Post : {url}</div>
}