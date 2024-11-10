
import clientPromise from "@/lib/mongodb"

export async function POST(request) {
  const body = await request.json()
  const client = await clientPromise;
  const db = client.db("SHORT-LINKS");
  const collection = db.collection("url");

//check for shorten-link
const doc =  await collection.findOne({ shortUrl: body.shortUrl })
if (doc.shortUrl === body.shortUrl) {
  return Response.json({ success: false, error: true, message: 'Short URL already exists' })
}

const result = await collection.insertOne({ url: body.url, shortUrl: body.shortUrl })

    return Response.json({ success: true, error:false, message: 'Finished Generating URL' })
  }