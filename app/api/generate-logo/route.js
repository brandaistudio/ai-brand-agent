import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req) {
  const { brandName } = await req.json();
  const prompt = `Generate 4 logo image URLs for brand name: ${brandName}. Output as JSON: { "logos": ["url1","url2"] }`;

  const res = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [{ role: 'user', content: prompt }]
  });

  try {
    return new Response(res.choices[0].message.content, { status: 200 });
  } catch {
    return new Response(JSON.stringify({ logos: [] }), { status: 200 });
  }
}