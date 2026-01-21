import { ECOSYSTEM_LINKS, SITE_CONFIG } from '@/lib/constants';
import { sortByRef, getRefParam } from '@/lib/utils';
import LinkButton from '@/components/LinkButton';
import RefTracker from '@/components/RefTracker';

interface PageProps {
  searchParams: Promise<{ ref?: string }>;
}

export default async function BioPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const ref = getRefParam(params.ref);
  const sortedLinks = sortByRef(ECOSYSTEM_LINKS, ref);

  return (
    <>
      <RefTracker refParam={ref} />

      <main className="relative min-h-screen flex flex-col items-center px-4 py-16 md:py-20">
        <div className="relative z-10 w-full max-w-2xl">

          {/* Hero Section */}
          <div className="text-center mb-16 fade-in-up">

            {/* Avatar with Glow */}
            <div className="relative mx-auto w-32 h-32 mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full blur-2xl opacity-40 animate-pulse" />
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 p-1">
                <div className="w-full h-full rounded-full bg-black/90 flex items-center justify-center overflow-hidden border border-blue-500/20">
                  <img
                    src={SITE_CONFIG.avatar}
                    alt={SITE_CONFIG.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Name with Gradient */}
            <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
              <span className="text-gradient">{SITE_CONFIG.name}</span>
            </h1>

            {/* Tagline */}
            <p className="text-lg md:text-xl text-gray-400 mb-3 font-medium">
              {SITE_CONFIG.tagline}
            </p>

            {/* Location */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/5">
              <span className="text-sm text-gray-400">{SITE_CONFIG.location}</span>
            </div>
          </div>

          {/* Link Categories */}
          <div className="space-y-12">
            {sortedLinks.map((category, categoryIndex) => (
              <div
                key={category.id}
                className={`fade-in-delay-${categoryIndex + 1}`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{category.title.split(' ')[0]}</span>
                    <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold">
                      {category.subtitle}
                    </span>
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>

                {/* Links Grid */}
                <div className="grid gap-3">
                  {category.items.map((link) => (
                    <LinkButton
                      key={link.id}
                      link={link}
                      category={category.title}
                      refParam={ref}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <footer className="mt-20 text-center fade-in-delay-3">
            <div className="inline-flex items-center gap-2 text-xs text-gray-600">
              <span>©</span>
              <span>{new Date().getFullYear()}</span>
              <span className="text-gray-700">•</span>
              <span className="text-gradient font-medium">{SITE_CONFIG.name}</span>
            </div>
          </footer>

        </div>

        {/* Background Accent Blurs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
        </div>
      </main>
    </>
  );
}
