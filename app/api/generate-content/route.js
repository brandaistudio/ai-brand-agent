import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req) {
  const { brandName, industry, audience, language } = await req.json();

  const prompt = `
    Generate a brand content for "${brandName}".
    Industry: ${industry}, Audience: ${audience}, Language: ${language}.
    Include: bio, 3 slogans, marketing tips.
    Output as JSON: { "bio": "", "slogans": [], "tips": [] }
  `;

  const res = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [{ role: 'user', content: prompt }]
  });

  try {
    return new Response(res.choices[0].message.content, { status: 200 });
  } catch {
    return new Response(JSON.stringify({ bio:'', slogans:[], tips:[] }), { status: 200 });
  }
}