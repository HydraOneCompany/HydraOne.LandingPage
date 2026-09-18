/**
 * Hydra Systems - Interactive Core Script
 * Enterprise Software Development & Architecture Consulting
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initCodeShowcase();
  initConsultationModal();
  initCardGlowEffects();
  initMobileMenu();
  initOfferingToggle();
});

/* ==========================================================================
   Offering & Pricing Toggle (Produtos Dev vs Consultoria Especializada)
   ========================================================================== */
function initOfferingToggle() {
  const toggleBtns = document.querySelectorAll('.offering-btn');
  const panels = document.querySelectorAll('.pricing-panel');

  if (!toggleBtns.length || !panels.length) return;

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-target');

      toggleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      panels.forEach(panel => {
        if (panel.id === target) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });
    });
  });
}


/* ==========================================================================
   1. Navbar Scroll Styler
   ========================================================================== */
function initNavbarScroll() {
  const header = document.querySelector('.header-wrapper');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 24) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ==========================================================================
   2. Code Showcase Multi-Language Switcher & Copy
   ========================================================================== */
const CODE_SNIPPETS = {
  typescript: {
    filename: 'app/api/saas/subscription/route.ts',
    status: 'Next.js 15 App Router • TypeScript • Stripe Billing',
    code: `<span class="code-line"><span class="line-number">1</span><span class="line-code"><span class="syn-kw">import</span> { <span class="syn-type">NextResponse</span> } <span class="syn-kw">from</span> <span class="syn-str">'next/server'</span>;</span></span>
<span class="code-line"><span class="line-number">2</span><span class="line-code"><span class="syn-kw">import</span> { <span class="syn-prop">auth</span> } <span class="syn-kw">from</span> <span class="syn-str">'@/lib/auth'</span>;</span></span>
<span class="code-line"><span class="line-number">3</span><span class="line-code"><span class="syn-kw">import</span> { <span class="syn-prop">prisma</span> } <span class="syn-kw">from</span> <span class="syn-str">'@/lib/prisma'</span>;</span></span>
<span class="code-line"><span class="line-number">4</span><span class="line-code"><span class="syn-kw">import</span> { <span class="syn-prop">stripe</span> } <span class="syn-kw">from</span> <span class="syn-str">'@/lib/stripe'</span>;</span></span>
<span class="code-line"><span class="line-number">5</span><span class="line-code"></span></span>
<span class="code-line"><span class="line-number">6</span><span class="line-code"><span class="syn-comment">// End-to-end SaaS Multi-Tenant Provisioning</span></span></span>
<span class="code-line"><span class="line-number">7</span><span class="line-code"><span class="syn-kw">export async function</span> <span class="syn-fn">POST</span>(<span class="syn-prop">req</span>: <span class="syn-type">Request</span>) {</span></span>
<span class="code-line"><span class="line-number">8</span><span class="line-code">  <span class="syn-kw">const</span> <span class="syn-prop">session</span> = <span class="syn-kw">await</span> <span class="syn-fn">auth</span>();</span></span>
<span class="code-line"><span class="line-number">9</span><span class="line-code">  <span class="syn-kw">if</span> (!<span class="syn-prop">session</span>?.<span class="syn-prop">tenantId</span>) <span class="syn-kw">return new</span> <span class="syn-fn">NextResponse</span>(<span class="syn-str">'Unauthorized'</span>, { <span class="syn-prop">status</span>: <span class="syn-num">401</span> });</span></span>
<span class="code-line"><span class="line-number">10</span><span class="line-code"></span></span>
<span class="code-line"><span class="line-number">11</span><span class="line-code">  <span class="syn-kw">const</span> { <span class="syn-prop">planId</span> } = <span class="syn-kw">await</span> <span class="syn-prop">req</span>.<span class="syn-fn">json</span>();</span></span>
<span class="code-line"><span class="line-number">12</span><span class="line-code">  <span class="syn-kw">const</span> <span class="syn-prop">checkout</span> = <span class="syn-kw">await</span> <span class="syn-prop">stripe</span>.<span class="syn-prop">checkout</span>.<span class="syn-prop">sessions</span>.<span class="syn-fn">create</span>({</span></span>
<span class="code-line"><span class="line-number">13</span><span class="line-code">    <span class="syn-prop">customer</span>: <span class="syn-prop">session</span>.<span class="syn-prop">user</span>.<span class="syn-prop">stripeCustomerId</span>,</span></span>
<span class="code-line"><span class="line-number">14</span><span class="line-code">    <span class="syn-prop">mode</span>: <span class="syn-str">'subscription'</span>,</span></span>
<span class="code-line"><span class="line-number">15</span><span class="line-code">    <span class="syn-prop">line_items</span>: [{ <span class="syn-prop">price</span>: <span class="syn-prop">planId</span>, <span class="syn-prop">quantity</span>: <span class="syn-num">1</span> }],</span></span>
<span class="code-line"><span class="line-number">16</span><span class="line-code">    <span class="syn-prop">metadata</span>: { <span class="syn-prop">tenantId</span>: <span class="syn-prop">session</span>.<span class="syn-prop">tenantId</span> }</span></span>
<span class="code-line"><span class="line-number">17</span><span class="line-code">  });</span></span>
<span class="code-line"><span class="line-number">18</span><span class="line-code">  <span class="syn-kw">return</span> <span class="syn-type">NextResponse</span>.<span class="syn-fn">json</span>({ <span class="syn-prop">url</span>: <span class="syn-prop">checkout</span>.<span class="syn-prop">url</span> });</span></span>
<span class="code-line"><span class="line-number">19</span><span class="line-code">}</span></span>`
  },
  go: {
    filename: 'services/webhook_dispatcher.go',
    status: 'Go 1.22 • 50k req/s • Zero Allocations',
    code: `<span class="code-line"><span class="line-number">1</span><span class="line-code"><span class="syn-kw">package</span> services</span></span>
<span class="code-line"><span class="line-number">2</span><span class="line-code"></span></span>
<span class="code-line"><span class="line-number">3</span><span class="line-code"><span class="syn-kw">import</span> (</span></span>
<span class="code-line"><span class="line-number">4</span><span class="line-code">    <span class="syn-str">"context"</span></span></span>
<span class="code-line"><span class="line-number">5</span><span class="line-code">    <span class="syn-str">"github.com/hydra/core/pipeline"</span></span></span>
<span class="code-line"><span class="line-number">6</span><span class="line-code">)</span></span>
<span class="code-line"><span class="line-number">7</span><span class="line-code"></span></span>
<span class="code-line"><span class="line-number">8</span><span class="line-code"><span class="syn-comment">// Dispatch webhooks with exponential retries and concurrency control</span></span></span>
<span class="code-line"><span class="line-number">9</span><span class="line-code"><span class="syn-kw">func</span> <span class="syn-fn">DispatchSaaSWebhooks</span>(<span class="syn-prop">ctx</span> <span class="syn-type">context.Context</span>, <span class="syn-prop">event</span> *<span class="syn-type">pipeline.Event</span>) <span class="syn-type">error</span> {</span></span>
<span class="code-line"><span class="line-number">10</span><span class="line-code">    <span class="syn-prop">workerPool</span> := <span class="syn-prop">pipeline</span>.<span class="syn-fn">NewPool</span>(<span class="syn-num">128</span>)</span></span>
<span class="code-line"><span class="line-number">11</span><span class="line-code">    <span class="syn-kw">defer</span> <span class="syn-prop">workerPool</span>.<span class="syn-fn">Release</span>()</span></span>
<span class="code-line"><span class="line-number">12</span><span class="line-code">    <span class="syn-kw">return</span> <span class="syn-prop">workerPool</span>.<span class="syn-fn">Submit</span>(<span class="syn-kw">func</span>() {</span></span>
<span class="code-line"><span class="line-number">13</span><span class="line-code">        <span class="syn-prop">pipeline</span>.<span class="syn-fn">SendWithHMACSignature</span>(<span class="syn-prop">event</span>.<span class="syn-prop">Payload</span>, <span class="syn-prop">event</span>.<span class="syn-prop">TargetURL</span>)</span></span>
<span class="code-line"><span class="line-number">14</span><span class="line-code">    })</span></span>
<span class="code-line"><span class="line-number">15</span><span class="line-code">}</span></span>`
  },
  python: {
    filename: 'workers/ai_assistant.py',
    status: 'Python 3.12 • FastAPI + LangChain • Streaming',
    code: `<span class="code-line"><span class="line-number">1</span><span class="line-code"><span class="syn-kw">from</span> fastapi <span class="syn-kw">import</span> FastAPI, Depends</span></span>
<span class="code-line"><span class="line-number">2</span><span class="line-code"><span class="syn-kw">from</span> hydra_rag <span class="syn-kw">import</span> VectorIndexer, SemanticStream</span></span>
<span class="code-line"><span class="line-number">3</span><span class="line-code"></span></span>
<span class="code-line"><span class="line-number">4</span><span class="line-code"><span class="syn-prop">app</span> = <span class="syn-type">FastAPI</span>(<span class="syn-prop">title</span>=<span class="syn-str">"Hydra SaaS AI Copilot Engine"</span>)</span></span>
<span class="code-line"><span class="line-number">5</span><span class="line-code"></span></span>
<span class="code-line"><span class="line-number">6</span><span class="line-code"><span class="syn-comment">// Embedded intelligent RAG pipeline for internal systems</span></span></span>
<span class="code-line"><span class="line-number">7</span><span class="line-code"><span class="syn-kw">@app.post</span>(<span class="syn-str">"/api/v1/ai/generate"</span>)</span></span>
<span class="code-line"><span class="line-number">8</span><span class="line-code"><span class="syn-kw">async def</span> <span class="syn-fn">generate_insights</span>(<span class="syn-prop">tenant_id</span>: <span class="syn-type">str</span>, <span class="syn-prop">prompt</span>: <span class="syn-type">str</span>):</span></span>
<span class="code-line"><span class="line-number">9</span><span class="line-code">    <span class="syn-prop">indexer</span> = <span class="syn-kw">await</span> <span class="syn-type">VectorIndexer</span>.<span class="syn-fn">for_tenant</span>(<span class="syn-prop">tenant_id</span>)</span></span>
<span class="code-line"><span class="line-number">10</span><span class="line-code">    <span class="syn-prop">stream</span> = <span class="syn-kw">await</span> <span class="syn-prop">indexer</span>.<span class="syn-fn">stream_query</span>(<span class="syn-prop">prompt</span>, <span class="syn-prop">model</span>=<span class="syn-str">"claude-3-5-sonnet"</span>)</span></span>
<span class="code-line"><span class="line-number">11</span><span class="line-code">    <span class="syn-kw">return</span> <span class="syn-type">SemanticStream</span>(<span class="syn-prop">stream</span>)</span></span>`
  },
  rust: {
    filename: 'crates/auth-engine/src/lib.rs',
    status: 'Rust 1.78 • Zero-Copy JWT • Sub-millisecond',
    code: `<span class="code-line"><span class="line-number">1</span><span class="line-code"><span class="syn-kw">use</span> actix_web::{web, HttpResponse};</span></span>
<span class="code-line"><span class="line-number">2</span><span class="line-code"><span class="syn-kw">use</span> hydra_security::{<span class="syn-type">TokenVerifier</span>, <span class="syn-type">TenantContext</span>};</span></span>
<span class="code-line"><span class="line-number">3</span><span class="line-code"></span></span>
<span class="code-line"><span class="line-number">4</span><span class="line-code"><span class="syn-kw">pub async fn</span> <span class="syn-fn">authorize_request</span>(</span></span>
<span class="code-line"><span class="line-number">5</span><span class="line-code">    <span class="syn-prop">token</span>: <span class="syn-type">web::Header</span>&lt;<span class="syn-type">Authorization</span>&gt;,</span></span>
<span class="code-line"><span class="line-number">6</span><span class="line-code">) -&gt; <span class="syn-type">Result</span>&lt;<span class="syn-type">TenantContext</span>, <span class="syn-type">HttpResponse</span>&gt; {</span></span>
<span class="code-line"><span class="line-number">7</span><span class="line-code">    <span class="syn-comment">// Verify token in memory in &lt; 0.05ms without hitting database</span></span></span>
<span class="code-line"><span class="line-number">8</span><span class="line-code">    <span class="syn-type">TokenVerifier</span>::<span class="syn-fn">verify_ed25519</span>(&amp;<span class="syn-prop">token</span>)</span></span>
<span class="code-line"><span class="line-number">9</span><span class="line-code">        .<span class="syn-fn">map</span>(|<span class="syn-prop">claims</span>| <span class="syn-type">TenantContext</span>::<span class="syn-fn">from</span>(<span class="syn-prop">claims</span>))</span></span>
<span class="code-line"><span class="line-number">10</span><span class="line-code">        .<span class="syn-fn">map_err</span>(|_| <span class="syn-type">HttpResponse</span>::<span class="syn-fn">Unauthorized</span>().<span class="syn-fn">finish</span>())</span></span>
<span class="code-line"><span class="line-number">11</span><span class="line-code">}</span></span>`
  },
  csharp: {
    filename: 'Controllers/EnterpriseSyncController.cs',
    status: 'C# .NET 8 • ERP & CRM Custom Integrations',
    code: `<span class="code-line"><span class="line-number">1</span><span class="line-code"><span class="syn-kw">namespace</span> Hydra.Enterprise.Controllers;</span></span>
<span class="code-line"><span class="line-number">2</span><span class="line-code"></span></span>
<span class="code-line"><span class="line-number">3</span><span class="line-code">[<span class="syn-type">ApiController</span>, <span class="syn-type">Route</span>(<span class="syn-str">"api/sync/erp"</span>)]</span></span>
<span class="code-line"><span class="line-number">4</span><span class="line-code"><span class="syn-kw">public class</span> <span class="syn-type">EnterpriseSyncController</span> : <span class="syn-type">ControllerBase</span> {</span></span>
<span class="code-line"><span class="line-number">5</span><span class="line-code">    [<span class="syn-type">HttpPost</span>]</span></span>
<span class="code-line"><span class="line-number">6</span><span class="line-code">    <span class="syn-kw">public async</span> <span class="syn-type">Task</span>&lt;<span class="syn-type">IActionResult</span>&gt; <span class="syn-fn">SyncLedgerAsync</span>([<span class="syn-type">FromBody</span>] <span class="syn-type">LedgerBatch</span> <span class="syn-prop">batch</span>) {</span></span>
<span class="code-line"><span class="line-number">7</span><span class="line-code">        <span class="syn-kw">await</span> <span class="syn-prop">_syncEngine</span>.<span class="syn-fn">ProcessBatchWithRollbackAsync</span>(<span class="syn-prop">batch</span>);</span></span>
<span class="code-line"><span class="line-number">8</span><span class="line-code">        <span class="syn-kw">return</span> <span class="syn-fn">Ok</span>(<span class="syn-kw">new</span> { <span class="syn-prop">synced</span> = <span class="syn-prop">batch</span>.<span class="syn-prop">Items</span>.<span class="syn-prop">Count</span>, <span class="syn-prop">status</span> = <span class="syn-str">"Committed"</span> });</span></span>
<span class="code-line"><span class="line-number">9</span><span class="line-code">    }</span></span>
<span class="code-line"><span class="line-number">10</span><span class="line-code">}</span></span>`
  },
  java: {
    filename: 'src/main/java/com/hydra/saas/AuditLogService.java',
    status: 'Java 21 • Spring Boot 3 • Virtual Threads',
    code: `<span class="code-line"><span class="line-number">1</span><span class="line-code"><span class="syn-kw">package</span> com.hydra.saas.audit;</span></span>
<span class="code-line"><span class="line-number">2</span><span class="line-code"></span></span>
<span class="code-line"><span class="line-number">3</span><span class="line-code"><span class="syn-kw">@Service</span></span></span>
<span class="code-line"><span class="line-number">4</span><span class="line-code"><span class="syn-kw">public class</span> <span class="syn-type">AuditLogService</span> {</span></span>
<span class="code-line"><span class="line-number">5</span><span class="line-code">    <span class="syn-kw">public void</span> <span class="syn-fn">recordSecurityEvent</span>(<span class="syn-type">UUID</span> <span class="syn-prop">tenantId</span>, <span class="syn-type">String</span> <span class="syn-prop">action</span>) {</span></span>
<span class="code-line"><span class="line-number">6</span><span class="line-code">        <span class="syn-type">Thread</span>.<span class="syn-fn">startVirtualThread</span>(() -&gt; {</span></span>
<span class="code-line"><span class="line-number">7</span><span class="line-code">            <span class="syn-prop">ledgerRepository</span>.<span class="syn-fn">appendImmutableLog</span>(<span class="syn-prop">tenantId</span>, <span class="syn-prop">action</span>, <span class="syn-type">Instant</span>.<span class="syn-fn">now</span>());</span></span>
<span class="code-line"><span class="line-number">8</span><span class="line-code">        });</span></span>
<span class="code-line"><span class="line-number">9</span><span class="line-code">    }</span></span>
<span class="code-line"><span class="line-number">10</span><span class="line-code">}</span></span>`
  }
};

function initCodeShowcase() {
  const tabs = document.querySelectorAll('.tab-btn');
  const codeBody = document.querySelector('#code-content');
  const filenameEl = document.querySelector('#code-filename');
  const statusEl = document.querySelector('#code-status-text');
  const copyBtn = document.querySelector('#btn-copy');

  if (!tabs.length || !codeBody) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const lang = tab.getAttribute('data-lang');
      if (!CODE_SNIPPETS[lang]) return;

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const data = CODE_SNIPPETS[lang];
      if (filenameEl) filenameEl.textContent = data.filename;
      if (statusEl) statusEl.textContent = data.status;

      // Smooth transition
      codeBody.style.opacity = '0.3';
      setTimeout(() => {
        codeBody.innerHTML = `<pre><code>${data.code}</code></pre>`;
        codeBody.style.opacity = '1';
      }, 120);
    });
  });

  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const textToCopy = codeBody.innerText;
      try {
        await navigator.clipboard.writeText(textToCopy);
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = `
          <svg viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span style="color:#10b981">Copiado!</span>
        `;
        setTimeout(() => {
          copyBtn.innerHTML = originalText;
        }, 2200);
      } catch (err) {
        console.error('Falha ao copiar:', err);
      }
    });
  }
}

/* ==========================================================================
   3. Card Glow Interactive Light Following (Linear / $100k Style)
   ========================================================================== */
function initCardGlowEffects() {
  const glowCards = document.querySelectorAll('.feature-card, .step-card, .testimonial-card');

  glowCards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/* ==========================================================================
   4. Consultation Booking Modal (Lead Capture)
   ========================================================================== */
function initConsultationModal() {
  const modal = document.querySelector('#consultation-modal');
  const openButtons = document.querySelectorAll('[data-action="open-consultation"]');
  const closeButton = document.querySelector('#modal-close-btn');
  const form = document.querySelector('#consultation-form');
  const feedback = document.querySelector('#modal-success-feedback');

  if (!modal) return;

  const openModal = () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(() => {
      if (feedback && form) {
        feedback.classList.remove('active');
        form.style.display = 'block';
        form.reset();
      }
    }, 300);
  };

  openButtons.forEach(btn => btn.addEventListener('click', e => {
    e.preventDefault();
    openModal();
  }));

  if (closeButton) {
    closeButton.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', e => {
    if (e.target === modal) {
      closeModal();
    }
  });

  window.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Enviando diagnóstico...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        form.style.display = 'none';
        if (feedback) feedback.classList.add('active');
      }, 1000);
    });
  }
}

/* ==========================================================================
   5. Mobile Navigation Menu
   ========================================================================== */
function initMobileMenu() {
  const toggle = document.querySelector('#mobile-menu-toggle');
  const menu = document.querySelector('#mobile-menu-drawer');

  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  // Close menu when clicking outside or clicking any nav link
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
    });
  });
}
