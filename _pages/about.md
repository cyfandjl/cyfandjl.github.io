---
layout: research
permalink: /
title: "Electron Emission and Computational Plasma Physics"
description: "Lan Jin is a University of Michigan PhD candidate studying electron emission, plasma simulation, fusion startup, and scientific machine learning."
redirect_from:
  - /about/
  - /about.html
---
<p class="eyebrow">Plasmas and nuclear fusion</p>
<h1>Electron emission and computational plasma physics</h1>
<p class="home-lead">I am a <strong>Ph.D. candidate at the University of Michigan</strong>, working with <a href="https://ners.engin.umich.edu/people/zhang-peng/">Prof. Peng Zhang</a> in Nuclear Engineering and Radiological Sciences. I study how electrons leave material surfaces, how plasmas form, and how numerical models can explain these processes.</p>
<p class="text-block">My research combines exact quantum and time-dependent Schrödinger-equation models, fluid and particle-in-cell methods, and scientific machine learning. I expect to graduate in summer 2027.</p>
<div class="intro-links"><a href="{{ '/publications/' | relative_url }}">Explore publications <span aria-hidden="true">→</span></a><a href="{{ '/cv/' | relative_url }}">CV and resumes <span aria-hidden="true">→</span></a></div>
<section class="section" id="research" aria-labelledby="research-title">
  <header class="section-heading"><h2 id="research-title">Research directions</h2></header>
  <article class="research-item"><span class="research-number" aria-hidden="true">01</span><div><h3>Quantum electron emission</h3><p>Ultrafast photoemission and RF-assisted field emission, including quantum efficiency, energy-resolved spectra, pulse-shape effects, and carrier-envelope-phase dependence.</p></div></article>
  <article class="research-item"><span class="research-number" aria-hidden="true">02</span><div><h3>Discharge and fusion startup</h3><p>Surface emission and external-circuit coupling in PASCHEN-1D; preionized-plasma modeling in the University of Michigan–Helion HERCULES collaboration, studying early ionization, plasma formation, and edge behavior.</p></div></article>
  <article class="research-item"><span class="research-number" aria-hidden="true">03</span><div><h3>Scientific machine learning</h3><p>Surrogate and interpretable models for computational physics, alongside collaborative physics-guided learning for atmospheric turbulence and Doppler-lidar observations.</p></div></article>
</section>
<section class="section" aria-labelledby="selected-title"><header class="section-heading"><h2 id="selected-title">Selected publications</h2></header>
{% for paper in site.data.lan_publications limit:3 %}<article class="feature-paper"><h3><a href="https://doi.org/{{ paper.doi }}">{{ paper.title | escape }}</a></h3><p>{{ paper.journal }} · {{ paper.year }}</p></article>{% endfor %}
<p style="margin-top:16px"><a class="small-link" href="{{ '/publications/' | relative_url }}">View all publications <span aria-hidden="true">→</span></a></p></section>
<section class="section" aria-labelledby="nuclear-ai-title"><header class="section-heading"><p class="eyebrow">Summer research · June 22 – August 29, 2026</p><h2 id="nuclear-ai-title">AI in the nuclear sector</h2></header><p class="text-block">With Prof. Aditi Verma at the University of Michigan, I investigated AI in nuclear safety, security, and safeguards, including governance, regulation, and historical development. I contributed to survey design for a nuclear-sector AI observatory.</p></section>
<section class="section" aria-labelledby="background-title"><header class="section-heading"><h2 id="background-title">A background across research and manufacturing</h2></header><p class="text-block">Before Michigan, I earned an M.S. in Electrical and Computer Engineering at Michigan State University, and an M.S. in Physical Electronics and a B.S. in Fundamental Science of Mathematics and Physics at Yunnan University. My earlier experience includes ultracold-atom research at the Chinese Academy of Sciences Institute of Physics and TFT-LCD photolithography-mask design at Chuzhou HKC.</p></section>
