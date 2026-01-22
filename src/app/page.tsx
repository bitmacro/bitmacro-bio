import { ECOSYSTEM_LINKS, SITE_CONFIG } from '@/lib/constants';
import { sortByRef, getRefParam } from '@/lib/utils';
import LinkButton from '@/components/LinkButton';
import RefTracker from '@/components/RefTracker';
import Image from 'next/image';
import SocialIconsSection from '@/components/SocialIconsSection';

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

      <main>
        {/* Hero Section */}
        <div className="hero-section">
          <div className="logo-container">
            <Image
              src={SITE_CONFIG.avatar}
              alt={SITE_CONFIG.name}
              width={80}
              height={80}
              priority
            />
          </div>
          <h1 className="site-name">{SITE_CONFIG.name}</h1>
          <p className="site-tagline">{SITE_CONFIG.tagline}</p>
          <p className="site-location">{SITE_CONFIG.location}</p>
        </div>

        {/* Social Icons */}
        <SocialIconsSection />

        {/* Links */}
        <div className="container">
          {sortedLinks.map((category) => (
            <div key={category.id} className="category-section">
              <h2 className="category-header">{category.subtitle}</h2>
              <div>
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
        <footer className="footer">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}.</p>
        </footer>
      </main>
    </>
  );
}
