import './style.css';
import logos from './logos.json';
import * as D from './data.js';
import { mountHero } from './hero.js';

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const arrow = '<svg class="arrow" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13 13 3M5.5 3H13v7.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const ext = 'target="_blank" rel="noopener"';
const kicker = (num, label) => `<p class="kicker reveal"><span>${num}</span> ${esc(label)}</p>`;
const lines = (words) => words.map((w, i) => `<span class="line"><span style="--i:${i}">${w}</span></span>`).join('');

const nav = `
<header class="nav" id="nav">
  <a class="brand" href="#top" aria-label="Mohammed Noufal, home">Noufal<i>.</i></a>
  <nav aria-label="Sections">
    <a href="#work">Work</a><a href="#experience">Experience</a><a href="#wins">Wins</a><a href="#stack">Stack</a><a href="#contact">Contact</a>
  </nav>
  <a class="btn btn-small" href="${D.links.resume}" download>Resume</a>
</header>`;

const hero = `
<section class="hero" id="top">
  <canvas id="portrait" aria-hidden="true"></canvas>
  <div class="hero-inner">
    <p class="hero-role"><i></i>${esc(D.hero.role)}</p>
    <h1 aria-label="${D.hero.first} ${D.hero.last}">${lines([D.hero.first, `${D.hero.last}<em>.</em>`])}</h1>
    <p class="hero-pitch">${esc(D.hero.pitch)}</p>
    <div class="hero-cta">
      <a class="btn btn-light" href="#work">See my work ${arrow}</a>
      <a class="btn btn-ghost" href="${D.links.resume}" download>Download resume</a>
    </div>
    <dl class="hero-facts">
      ${D.hero.facts.map((f) => `<div><dt>${f.n}</dt><dd>${esc(f.label)}</dd></div>`).join('')}
    </dl>
  </div>
  <a class="scroll-cue" href="#about" aria-label="Scroll to about"><span></span></a>
</section>`;

const about = `
<section class="section about" id="about">
  ${kicker('00', 'About')}
  <div class="about-top">
    <figure class="about-photo reveal"><img src="/img/me.jpg" alt="Mohammed Noufal" width="480" height="600" /></figure>
    <p class="about-lead reveal" style="--d:120ms">${esc(D.about.lead)}</p>
  </div>
  <dl class="about-meta">
    ${D.about.meta.map(([k, v], i) => `<div class="reveal" style="--d:${i * 70}ms"><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}
  </dl>
</section>`;

const marquee = `
<div class="marquee" aria-hidden="true"><div class="marquee-track">
  ${[0, 1].map(() => D.marquee.map((m) => `<span>${esc(m)}</span><b></b>`).join('')).join('')}
</div></div>`;

const caseStudy = (p, i) => `
<article class="case reveal ${i % 2 ? 'flip' : ''}">
  <div class="case-media">
    ${p.image
      ? `<div class="shot"><img src="${p.image}" alt="${esc(p.name)} interface" loading="lazy" data-parallax /></div>`
      : `<div class="poster">${p.poster.map((l) => `<span>${esc(l)}</span>`).join('')}<small>${esc(p.name)} / ${esc(p.tagline)}</small></div>`}
  </div>
  <div class="case-body">
    <p class="case-index">0${i + 1}</p>
    <h3>${esc(p.name)}</h3>
    <p class="case-tag">${esc(p.tagline)}</p>
    <p class="case-summary">${esc(p.summary)}</p>
    <ul>${p.points.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
    <p class="tags">${p.stack.map((s) => `<span>${esc(s)}</span>`).join('')}</p>
    <p class="case-links">
      ${p.live ? `<a class="link" href="${p.live}" ${ext}>Live site ${arrow}</a>` : ''}
      ${p.code ? `<a class="link" href="${p.code}" ${ext}>Code ${arrow}</a>` : ''}
    </p>
  </div>
</article>`;

const work = `
<section class="section" id="work">
  ${kicker('01', 'Selected work')}
  <h2 class="reveal">Things I’ve built<br />and shipped.</h2>
  <div class="cases">${D.work.map(caseStudy).join('')}</div>
  <h3 class="sub reveal">More builds</h3>
  <div class="more">
    ${D.more.map((m, i) => `
    <a class="more-card reveal" style="--d:${i * 80}ms" href="${m.href}" ${ext}>
      <div class="shot"><img src="${m.image}" alt="${esc(m.name)} interface" loading="lazy" /></div>
      <p class="more-name">${esc(m.name)} ${arrow}</p>
      <p class="more-line">${esc(m.line)}</p>
    </a>`).join('')}
  </div>
</section>`;

const experience = `
<section class="section" id="experience">
  ${kicker('02', 'Experience')}
  <h2 class="reveal">Four internships,<br />measured in numbers.</h2>
  <div class="jobs">
    ${D.experience.map((e) => `
    <article class="job reveal">
      <div class="job-head">
        <p class="job-when">${esc(e.when)}</p>
        <h3>${esc(e.role)}</h3>
        <p class="job-at">${esc(e.company)} <span>/ ${esc(e.where)}</span></p>
      </div>
      <div class="job-metric"><strong>${esc(e.metric[0])}</strong><span>${esc(e.metric[1])}</span></div>
      <ul>${e.points.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
    </article>`).join('')}
  </div>
</section>`;

const chapter = (c, i) => `
<article class="chapter">
  <figure class="${c.fit === 'contain' ? 'contain' : ''}">
    <img src="${c.image}" alt="${esc(c.alt)}" loading="lazy" style="${c.pos ? `object-position:${c.pos}` : ''}" />
    ${c.inset ? `<img class="inset" src="${c.inset}" alt="${esc(c.insetAlt)}" loading="lazy" />` : ''}
  </figure>
  <div>
    <p class="chapter-num">0${i + 1} / 0${D.story.chapters.length}</p>
    <h3>${esc(c.title)}</h3>
    <p class="chapter-text">${esc(c.text)}</p>
  </div>
</article>`;

const story = `
<section class="story" id="story" aria-label="How a win happens, in photos">
  <div class="story-pin">
    <div class="story-track">
      <div class="story-intro">
        <p class="kicker"><span>03</span> ${esc(D.story.kicker)}</p>
        <h2>${D.story.title.map(esc).join('<br />')}</h2>
        <p class="story-hint">Keep scrolling ${arrow}</p>
      </div>
      ${D.story.chapters.map(chapter).join('')}
    </div>
    <div class="story-bar"><i></i></div>
  </div>
</section>`;

const wins = `
<section class="section wins" id="wins">
  ${kicker('04', 'Wins')}
  <h2 class="reveal">10+ hackathon wins,<br />national and international.</h2>
  <ol class="win-list">
    ${D.wins.map((w) => `
    <li class="reveal">
      <span class="win-place ${w.place === 'Winner' ? 'gold' : ''}">${esc(w.place)}</span>
      <span class="win-event">${esc(w.event)}<small>${esc(w.by)}</small></span>
      <span class="win-built">${esc(w.built)}</span>
    </li>`).join('')}
  </ol>
  <div class="numbers">
    ${D.numbers.map((x, i) => `<div class="reveal" style="--d:${i * 80}ms"><strong data-count="${x.n}" data-suffix="${x.suffix}">${x.n}${x.suffix}</strong><span>${esc(x.label)}</span></div>`).join('')}
  </div>
</section>`;

const chip = ([name, slug, color]) => `<span class="chip">${slug && logos[slug] ? `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${logos[slug]}" fill="${color}"/></svg>` : ''}${esc(name)}</span>`;
const stack = `
<section class="section" id="stack">
  ${kicker('05', 'Stack')}
  <h2 class="reveal">What I build with.</h2>
  <div class="stack">
    ${D.stack.map((g) => `<div class="stack-row reveal"><p>${esc(g.label)}</p><div>${g.items.map(chip).join('')}</div></div>`).join('')}
  </div>
  <h3 class="sub reveal">Certifications</h3>
  <ul class="certs">
    ${D.certifications.map(([n, by], i) => `<li class="reveal" style="--d:${i * 50}ms"><span>${esc(n)}</span><small>${esc(by)}</small></li>`).join('')}
  </ul>
</section>`;

const contact = `
<section class="contact" id="contact">
  <p class="kicker reveal"><span>06</span> Contact</p>
  <h2 class="reveal">Building something<br />with AI? <em>Let’s talk.</em></h2>
  <a class="mail reveal" href="mailto:${D.links.email}">${D.links.email} ${arrow}</a>
  <p class="contact-links reveal">
    <a href="${D.links.linkedin}" ${ext}>LinkedIn ${arrow}</a>
    <a href="${D.links.github}" ${ext}>GitHub ${arrow}</a>
    <a href="${D.links.leetcode}" ${ext}>LeetCode ${arrow}</a>
    <a href="${D.links.resume}" download>Resume ${arrow}</a>
  </p>
  <p class="foot">Mohammed Noufal V / Chennai, India / ${new Date().getFullYear()}</p>
</section>`;

document.getElementById('app').innerHTML = `${nav}<main>${hero}${about}${marquee}${work}${experience}${story}${wins}${stack}</main>${contact}`;

// ---- behaviour
const heroEl = document.getElementById('top');
mountHero(document.getElementById('portrait'), heroEl);
requestAnimationFrame(() => heroEl.classList.add('in'));

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

const io = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (!e.isIntersecting) continue;
    e.target.classList.add('in');
    e.target.querySelectorAll?.('[data-count]').forEach(countUp);
    if (e.target.matches('[data-count]')) countUp(e.target);
    io.unobserve(e.target);
  }
}, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

function countUp(el) {
  if (reduce || el.dataset.done) return;
  el.dataset.done = '1';
  const end = Number(el.dataset.count), suffix = el.dataset.suffix || '', t0 = performance.now(), dur = 1400;
  const tick = (now) => {
    const k = Math.min(1, (now - t0) / dur), eased = 1 - Math.pow(1 - k, 4);
    el.textContent = Math.round(end * eased) + suffix;
    if (k < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

const navEl = document.getElementById('nav');
const parallax = [...document.querySelectorAll('[data-parallax]')];

// The story pins to the screen and moves sideways as you scroll down.
const storyEl = document.getElementById('story');
const trackEl = storyEl.querySelector('.story-track');
const barEl = storyEl.querySelector('.story-bar i');
const wide = matchMedia('(min-width: 900px)');
let storyTravel = 0;
function sizeStory() {
  const pinned = wide.matches && !reduce;
  storyEl.classList.toggle('pinned', pinned);
  storyTravel = pinned ? Math.max(0, trackEl.scrollWidth - innerWidth) : 0;
  storyEl.style.height = pinned ? `${storyTravel + innerHeight}px` : '';
  if (!pinned) trackEl.style.transform = '';
}
sizeStory();
addEventListener('resize', sizeStory);
addEventListener('load', sizeStory);
storyEl.querySelectorAll('img').forEach((img) => img.addEventListener('load', sizeStory, { once: true }));

let ticking = false;
function onScroll() {
  ticking = false;
  navEl.classList.toggle('solid', scrollY > heroEl.offsetHeight - 80);
  const sr = storyEl.getBoundingClientRect();
  navEl.classList.toggle('on-dark', sr.top < 60 && sr.bottom > 60);
  if (storyTravel) {
    const k = Math.min(1, Math.max(0, -sr.top / storyTravel));
    trackEl.style.transform = `translate3d(${(-k * storyTravel).toFixed(1)}px, 0, 0)`;
    barEl.style.transform = `scaleX(${k.toFixed(4)})`;
  }
  if (reduce) return;
  for (const img of parallax) {
    const r = img.parentElement.getBoundingClientRect();
    if (r.bottom < 0 || r.top > innerHeight) continue;
    const k = (r.top + r.height / 2 - innerHeight / 2) / innerHeight; // -0.5 .. 0.5
    img.style.transform = `translate3d(0, ${(k * -7).toFixed(2)}%, 0) scale(1.14)`;
  }
}
addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
onScroll();
