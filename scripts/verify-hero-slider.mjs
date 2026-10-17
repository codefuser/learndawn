async function verifyHtml() {
  const res = await fetch('http://localhost:3000');
  const html = await res.text();

  const checks = [
    { name: 'Headline 1', text: 'One Mentor. One Dream. One Success.' },
    { name: 'CTA 1', text: 'Explore NEET Programme' },
    { name: 'Headline 2', text: 'Guidance That Understands You.' },
    { name: 'CTA 2', text: 'Discover Our Mentorship' },
    { name: 'Headline 3', text: 'Every Student Deserves Personal Attention.' },
    { name: 'CTA 3', text: 'Explore OnePod Learning' },
    { name: 'Headline 4', text: 'Learn Together. Grow Together.' },
    { name: 'CTA 4', text: 'Join LearnDawn' },
    { name: 'Category 1', text: 'One-to-One Learning' },
    { name: 'Category 2', text: 'Personal Mentorship' },
    { name: 'Category 3', text: 'Individual Academic Support' },
    { name: 'Category 4', text: 'Collaborative Learning' },
    { name: 'Image 1 ref', text: 'one-to-one-learning.webp' },
    { name: 'Image 2 ref', text: 'personal-mentorship.webp' },
    { name: 'Image 3 ref', text: 'academic-support.webp' },
    { name: 'Image 4 ref', text: 'collaborative-learning.webp' },
    { name: 'Carousel Role', text: 'aria-roledescription="carousel"' },
    { name: 'Previous Arrow', text: 'aria-label="Previous slide"' },
    { name: 'Next Arrow', text: 'aria-label="Next slide"' },
    { name: 'Tablist', text: 'role="tablist"' },
  ];

  let passed = 0;
  for (const c of checks) {
    const ok = html.includes(c.text);
    console.log((ok ? '✓ PASS: ' : '✗ FAIL: ') + c.name);
    if (ok) passed++;
  }
  console.log(`\nVerification Summary: ${passed} / ${checks.length} passed.`);
}

verifyHtml().catch(console.error);
