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

      <main className="min-h-screen bg-black text-white px-4 py-12">
        <div className="max-w-2xl mx-auto">

          {/* Hero Section */}
          <div className="text-center mb-12">
            {/* Avatar */}
            <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-2 border-blue-600/30">
              <img
                src={SITE_CONFIG.avatar}
                alt={SITE_CONFIG.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name */}
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-blue-500">
              {SITE_CONFIG.name}
            </h1>

            {/* Tagline */}
            <p className="text-lg text-gray-400 mb-2">
              {SITE_CONFIG.tagline}
            </p>

            {/* Location */}
            <p className="text-sm text-gray-500">
              {SITE_CONFIG.location}
            </p>
          </div>

          {/* Link Categories */}
          <div className="space-y-8">
            {sortedLinks.map((category) => (
              <div key={category.id}>
                {/* Category Header */}
                <div className="mb-4">
                  <h2 className="text-sm uppercase tracking-wider text-gray-500 font-semibold">
                    {category.subtitle}
                  </h2>
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
          <footer className="mt-16 text-center">
            <p className="text-xs text-gray-600">
              © {new Date().getFullYear()} {SITE_CONFIG.name}
            </p>
          </footer>

        </div>
      </main>
    </>
  );
}
