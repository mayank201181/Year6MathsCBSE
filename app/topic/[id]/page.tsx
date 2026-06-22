import { notFound } from "next/navigation";
import Link from "next/link";
import { getTopic, TOPICS } from "@/lib/topics";
import { getExtras } from "@/lib/extras";
import GuideView from "@/components/GuideView";

export function generateStaticParams() {
  return TOPICS.map((t) => ({ id: t.id }));
}

export default async function TopicPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const topic = getTopic(id);
  if (!topic) notFound();
  const extras = getExtras(id);

  return (
    <div className="space-y-6">
      <GuideView topic={topic} extras={extras} />

      <div className="grid sm:grid-cols-2 gap-3">
        <Link href={`/topic/${topic.id}/quiz`} className="bg-violet-600 text-white rounded-2xl p-4 font-black text-center">
          ✏️ Practice all questions
        </Link>
        <Link href={`/topic/${topic.id}/challenge`} className="bg-rose-500 text-white rounded-2xl p-4 font-black text-center">
          ⏱️ Timed Challenge
        </Link>
      </div>
    </div>
  );
}
