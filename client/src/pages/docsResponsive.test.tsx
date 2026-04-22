import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import Layout from '@/components/Layout';
import { LanguageProvider } from '@/contexts/LanguageContext';
import DocsHub from './DocsHub';
import DocPage from './DocPage';

vi.mock('wouter', () => ({
  Link: ({ href, children }: { href: string; children: React.ReactNode }) => <a href={href}>{children}</a>,
  useRoute: () => [true, { slug: 'independent-diagnostics-persona' }],
}));

vi.mock('streamdown', () => ({
  Streamdown: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe('docs mobile responsiveness', () => {
  beforeEach(() => {
    vi.stubGlobal('window', {
      location: { pathname: '/docs/independent-diagnostics-persona' },
    });
    vi.stubGlobal('localStorage', {
      getItem: () => 'de',
      setItem: () => undefined,
    });
  });

  it('uses a mobile-safe main layout without hard-coded desktop offsets', () => {
    const markup = renderToStaticMarkup(
      <LanguageProvider>
        <Layout>
          <div>content</div>
        </Layout>
      </LanguageProvider>,
    );

    expect(markup).not.toContain('margin-left:280px');
    expect(markup).toContain('overflow-x-hidden');
    expect(markup).toContain('lg:pl-[280px]');
  });

  it('renders docs pages with responsive headline sizing and scroll-safe content wrappers', () => {
    const hubMarkup = renderToStaticMarkup(
      <LanguageProvider>
        <DocsHub />
      </LanguageProvider>,
    );
    const docMarkup = renderToStaticMarkup(
      <LanguageProvider>
        <DocPage />
      </LanguageProvider>,
    );

    expect(hubMarkup).toContain('text-4xl sm:text-5xl lg:text-7xl');
    expect(docMarkup).toContain('text-4xl sm:text-5xl lg:text-7xl');
    expect(docMarkup).toContain('overflow-x-auto');
  });
});
