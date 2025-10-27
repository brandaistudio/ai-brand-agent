import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req) {
  const { brandName, style } = await req.json();
  const prompt = `Design a modern logo for ${brandName} in ${style} style`;
  const response = await openai.images.generate({
    model: 'dall-e-3',
    prompt,
    size: '1024x1024'
  });
  return new Response(JSON.stringify({ url: response.data[0].url }), { status: 200 });
}