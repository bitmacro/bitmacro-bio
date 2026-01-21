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
      <main className="min-h-screen flex flex-col items-center px-4 py-12">
        <div className="w-full max-w-md">
          
          {/* Header */}
          <div className="text-center mb-10">
            {/* Avatar */}
            <div className="mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 p-1 mb-4">
              <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center overflow-hidden">
                <img
                  src={SITE_CONFIG.avatar}
                  alt="Bitmacro"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Name */}
            <h1 className="text-2xl font-bold text-white mb-1">
              {SITE_CONFIG.name}
            </h1>
            
            {/* Tagline */}
            <p className="text-zinc-400 mb-2">
              {SITE_CONFIG.tagline}
            </p>
            
            {/* Location */}
            <span className="text-sm text-zinc-500">
              {SITE_CONFIG.location}
            </span>
          </div>

          {/* Link Groups */}
          <div className="space-y-8">
            {sortedLinks.map((category) => (
              <div key={category.id}>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px flex-1 bg-zinc-800" />
                  <span className="text-xs uppercase tracking-widest text-zinc-500 font-medium">
                    {category.subtitle}
                  </span>
                  <div className="h-px flex-1 bg-zinc-800" />
                </div>

                {/* Links */}
                <div className="space-y-3">
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
          <footer className="mt-12 text-center">
            <p className="text-xs text-zinc-600">
              © {new Date().getFullYear()} Bitmacro
            </p>
          </footer>

        </div>
      </main>
    </>
  );
}
