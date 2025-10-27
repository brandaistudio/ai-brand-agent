import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req) {
  const { description, industry, audience } = await req.json();
  const prompt = `Generate 10 creative brand names for a project: ${description}, Industry: ${industry}, Audience: ${audience}`;
  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [{ role: 'user', content: prompt }]
  });
  const names = response.choices[0].message.content.split('\n').filter(Boolean);
  return new Response(JSON.stringify({ names }), { status: 200 });
}
