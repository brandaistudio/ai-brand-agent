import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req) {
  try {
    const { brandName, industry, audience, language } = await req.json();

    const prompt = `
      Create a detailed brand content for a company named "${brandName}".
      Industry: ${industry}
      Target Audience: ${audience}
      Language: ${language}
      Include:
      1. A short catchy Bio (1-2 sentences)
      2. 3-5 Slogans
      3. Marketing Tips suitable for a startup brand
      Format the output as JSON with keys: bio, slogans, tips
    `;

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
    });

    const text = response.choices[0].message.content;

    // محاولة تحويل النص الناتج إلى JSON
    let content;
    try {
      content = JSON.parse(text);
    } catch (err) {
      // إذا لم يكن JSON صالحًا، نعيد النص في نصوص بسيطة
      content = {
        bio: text,
        slogans: [],
        tips: []
      };
    }

    return new Response(JSON.stringify(content), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}