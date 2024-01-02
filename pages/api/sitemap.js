import db from "../../config/db";
import Blog from '../../models/blog';
import data from '../../data/stores'


export default async function handler(
  req,
  res
) {
  try{
    await db();
    const blog = await Blog.find({site:process.env.SITE_ID}).select('slug -_id');
    const store=data.map(item=>({slug:item.slug})).slice(0,100)
    res.status(200).json({blog,store})
  }catch(err){

    res.status(500).json({message:err.message});
  }
}
