import { appendFile, mkdir } from 'fs/promises';
import { join } from 'path';

export const POST = async ({ request }) => {
  const data = await request.formData();
  const email = data.get('email')?.toString().trim().toLowerCase();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(JSON.stringify({ error: 'Ongeldig e-mailadres' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const dir = join(process.cwd(), 'data');
  const file = join(dir, 'subscribers.csv');

  try {
    await mkdir(dir, { recursive: true });
    await appendFile(file, `${new Date().toISOString()},${email}\n`, 'utf-8');
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
