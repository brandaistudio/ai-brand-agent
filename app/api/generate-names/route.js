import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req) {
  const { brandIndustry, targetAudience, keywords } = await req.json();
  const prompt = `
    Generate 5 creative brand names for an industry: ${brandIndustry}, audience: ${targetAudience}, keywords: ${keywords || 'none'}.
    Output as JSON array: { "names": ["Name1", "Name2", ...] }
  `;

  const res = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [{ role: 'user', content: prompt }]
  });

  try {
    return new Response(res.choices[0].message.content, { status: 200 });
  } catch {
    return new Response(JSON.stringify({ names: [] }), { status: 200 });
  }
}