import { connectToDatabase } from "@utils/database";
import About from "@model/about";
export const GET = async () => {
  try {
    await connectToDatabase();
    const about = await About.find({});
    return new Response(JSON.stringify(about), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch", { status: 500 });
  }
};
