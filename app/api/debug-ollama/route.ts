import { generateText } from 'ai';
import { scira } from '@/ai/providers';

export async function GET() {
  try {
    const result = await generateText({
      model: scira.languageModel('scira-ollama-qwen3-1.7b'),
      prompt: 'Reply with only the word OK.',
    });
    return Response.json({ ok: true, text: result.text });
  } catch (err) {
    const e = err as Error & { cause?: unknown };
    return Response.json(
      {
        ok: false,
        name: e?.name,
        message: e?.message,
        cause: e?.cause ? String(e.cause) : undefined,
        stack: e?.stack,
      },
      { status: 500 },
    );
  }
}
