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

      <main style={{ padding: '40px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '32px', marginBottom: '10px' }}>{SITE_CONFIG.name}</h1>
          <p style={{ fontSize: '18px', color: '#666', marginBottom: '5px' }}>{SITE_CONFIG.tagline}</p>
          <p style={{ fontSize: '14px', color: '#999' }}>{SITE_CONFIG.location}</p>
        </div>

        <div>
          {sortedLinks.map((category) => (
            <div key={category.id} style={{ marginBottom: '40px' }}>
              <h2 style={{ fontSize: '14px', color: '#999', marginBottom: '15px', textTransform: 'uppercase' }}>
                {category.subtitle}
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
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

        <footer style={{ textAlign: 'center', marginTop: '60px', color: '#999', fontSize: '12px' }}>
          © {new Date().getFullYear()} {SITE_CONFIG.name}
        </footer>
      </main>
    </>
  );
}
