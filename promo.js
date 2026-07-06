/* KECAK MOTOR - template halaman promo (JANGAN diedit untuk update bulanan;
   semua angka ada di data.js) */
(function () {
  const D = window.KECAK_DATA;
  const U = D.units[window.UNIT_ID];
  if (!U) { document.body.innerHTML = "Unit tidak ditemukan"; return; }

  const rupiah = n => "Rp " + Math.round(n).toLocaleString("id-ID");
  const net = g => Math.round(g / (1 + D.ppnRate));
  const params = new URLSearchParams(location.search);
  const src = { loc: params.get("loc") || "", sales: params.get("sales") || "", co: params.get("co") || "" };
  const company = (D.companies && D.companies[src.co]) || null;
  const qs = location.search || "";

  const segs = D.segments.filter(s => s.id === "umum" || (U.segDiscGross[s.id] || 0) > 0);
  let initSeg = segs[0];
  if (company) { const m = segs.find(s => s.id === company.segment); if (m) initSeg = m; }
  let state = { variant: U.variants[0], segment: initSeg, dpPct: 0.10, tenor: D.credit.tenors[1] };

  const baseGrossFor = v => (v.discGross != null ? v.discGross : U.baseDiscGross);
  const baseNet = () => net(baseGrossFor(state.variant));
  const extraNet = () => net(U.segDiscGross[state.segment.id] || 0);
  const segmentApplies = () => extraNet() > 0 && extraNet() >= baseNet();
  const totalDiscount = () => Math.max(baseNet(), extraNet());
  const netPrice = () => state.variant.otr - totalDiscount();
  const daysLeft = () => Math.ceil((new Date(D.periodEnd + "T23:59:59") - new Date()) / 86400000);
  const salesPerson = () => (D.salespeople && D.salespeople[src.sales]) || null;
  const routeToSales = () => !!salesPerson() && !src.loc && !src.co;

  function track(event) {
    try {
      const k = "kecak_stats";
      const s = JSON.parse(localStorage.getItem(k) || "{}");
      const key = event + "|" + window.UNIT_ID + "|" + (src.co || src.loc || "direct") + "|" + (src.sales || "-");
      s[key] = (s[key] || 0) + 1;
      localStorage.setItem(k, JSON.stringify(s));
      if (D.trackEndpoint) navigator.sendBeacon(D.trackEndpoint, JSON.stringify({
        event, unit: window.UNIT_ID, loc: src.loc, co: src.co, sales: src.sales,
        variant: state.variant.id, segment: state.segment.id, t: Date.now()
      }));
    } catch (e) {}
  }

  /* ---------- styles ---------- */
  const css = document.createElement("style");
  css.textContent = `
  :root{--red:#E4002B;--red-deep:#B00021;--ink:#16161a;--ink-2:#1f1f26;--ink-3:#2a2a33;--paper:#f7f5f0;--grey:#9b9ba6;--green:#17b26a;--amber:#f79009;--radius:16px;}
  *{margin:0;padding:0;box-sizing:border-box;-webkit-tap-highlight-color:transparent;}
  body{font-family:'Plus Jakarta Sans',sans-serif;background:var(--ink);color:var(--paper);min-height:100vh;padding-bottom:96px;
    background-image:radial-gradient(ellipse 80% 40% at 50% -5%,rgba(228,0,43,.28),transparent 60%);}
  .wrap{max-width:480px;margin:0 auto;padding:0 18px;}
  header{padding:18px 0 6px;display:flex;align-items:center;justify-content:space-between;}
  .brand{font-family:'Archivo',sans-serif;font-weight:900;font-size:17px;letter-spacing:.04em;text-transform:uppercase;color:var(--paper);text-decoration:none;}
  .brand em{color:var(--red);font-style:normal;}
  .updated{font-size:11px;color:var(--grey);text-align:right;line-height:1.4;}
  .updated b{color:var(--paper);font-weight:600;}
  .loc-chip{display:inline-flex;align-items:center;gap:6px;background:var(--ink-3);border:1px solid rgba(255,255,255,.08);border-radius:999px;padding:4px 12px;font-size:11px;color:var(--grey);margin-top:8px;}
  .loc-chip .dot{width:6px;height:6px;border-radius:50%;background:var(--green);}
  .hero{padding:20px 0 4px;}
  .month-tag{display:inline-block;background:var(--red);color:#fff;font-family:'Archivo',sans-serif;font-weight:700;font-size:12px;letter-spacing:.14em;text-transform:uppercase;padding:5px 12px;border-radius:4px;transform:rotate(-1.5deg);}
  h1{font-family:'Archivo',sans-serif;font-weight:900;font-style:italic;font-size:clamp(34px,10vw,50px);line-height:.95;text-transform:uppercase;margin:14px 0 4px;}
  h1 .thin{display:block;font-size:.42em;font-style:normal;font-weight:700;color:var(--grey);letter-spacing:.08em;}
  .countdown{font-size:13px;color:var(--amber);font-weight:600;margin-top:6px;}
  .variants{display:flex;flex-wrap:wrap;gap:8px;margin:18px 0 0;}
  .variant-btn{flex:1 1 30%;min-width:100px;padding:12px 4px;border-radius:12px;border:1.5px solid rgba(255,255,255,.12);background:var(--ink-2);color:var(--grey);font-family:inherit;font-weight:700;font-size:13px;cursor:pointer;}
  .variant-btn.active{border-color:var(--red);color:#fff;background:linear-gradient(160deg,rgba(228,0,43,.22),rgba(228,0,43,.06));}
  .variant-btn small{display:block;font-weight:500;font-size:10.5px;margin-top:2px;opacity:.75;}
  .price-card{margin-top:14px;background:var(--paper);color:var(--ink);border-radius:var(--radius);padding:20px;}
  .price-label{font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#8a8a93;}
  .price-old{font-size:15px;color:#8a8a93;text-decoration:line-through;margin-top:8px;}
  .price-now{font-family:'Archivo',sans-serif;font-weight:900;font-size:clamp(28px,8.5vw,36px);color:var(--red-deep);line-height:1.05;}
  .price-save{display:inline-block;margin-top:8px;background:#17b26a1a;color:#0e7a48;font-size:12.5px;font-weight:700;padding:4px 10px;border-radius:6px;}
  .credit-note{font-size:11.5px;color:var(--amber);margin-top:10px;font-weight:600;}
  section{margin-top:30px;}
  .sec-title{font-family:'Archivo',sans-serif;font-weight:900;text-transform:uppercase;font-size:15px;letter-spacing:.05em;display:flex;align-items:center;gap:10px;}
  .sec-title::after{content:"";flex:1;height:1px;background:linear-gradient(90deg,rgba(255,255,255,.18),transparent);}
  .sec-sub{font-size:12.5px;color:var(--grey);margin-top:4px;line-height:1.5;}
  .seg-grid{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px;}
  .seg-chip{border:1.5px solid rgba(255,255,255,.14);background:var(--ink-2);color:var(--paper);border-radius:999px;padding:9px 14px;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;}
  .seg-chip.active{background:var(--red);border-color:var(--red);color:#fff;}
  .seg-note{font-size:12px;color:var(--amber);margin-top:10px;min-height:16px;}
  .promo-list{margin-top:14px;display:flex;flex-direction:column;gap:10px;}
  .promo-row{display:flex;justify-content:space-between;align-items:flex-start;gap:12px;background:var(--ink-2);border:1px solid rgba(255,255,255,.07);border-radius:12px;padding:13px 15px;}
  .promo-row .t{font-size:13.5px;font-weight:600;line-height:1.35;}
  .promo-row .d{font-size:11.5px;color:var(--grey);margin-top:2px;}
  .promo-row .v{font-size:13.5px;font-weight:800;color:var(--green);white-space:nowrap;}
  .promo-row.total{background:linear-gradient(160deg,rgba(228,0,43,.28),rgba(228,0,43,.08));border-color:rgba(228,0,43,.5);}
  .promo-row.total .v{color:#fff;font-size:15px;}
  .sim-card{background:var(--ink-2);border:1px solid rgba(255,255,255,.08);border-radius:var(--radius);padding:18px;margin-top:14px;}
  .sim-row-label{display:flex;justify-content:space-between;font-size:12.5px;color:var(--grey);font-weight:600;margin-bottom:8px;}
  .sim-row-label b{color:var(--paper);font-size:14px;}
  input[type=range]{width:100%;appearance:none;height:6px;border-radius:3px;background:linear-gradient(90deg,var(--red) var(--fill,30%),var(--ink-3) var(--fill,30%));outline:none;margin:6px 0 18px;}
  input[type=range]::-webkit-slider-thumb{appearance:none;width:26px;height:26px;border-radius:50%;background:#fff;border:6px solid var(--red);cursor:pointer;}
  .tenor-grid{display:flex;gap:7px;}
  .tenor-btn{flex:1;padding:10px 0;border-radius:10px;border:1.5px solid rgba(255,255,255,.12);background:var(--ink-3);color:var(--grey);font-weight:700;font-size:13px;cursor:pointer;font-family:inherit;}
  .tenor-btn.active{border-color:var(--red);background:var(--red);color:#fff;}
  .tenor-btn small{display:block;font-size:9px;font-weight:500;}
  .sim-result{text-align:center;margin-top:18px;padding-top:16px;border-top:1px dashed rgba(255,255,255,.15);}
  .sim-result .lbl{font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--grey);font-weight:700;}
  .sim-result .num{font-family:'Archivo',sans-serif;font-weight:900;font-size:34px;color:#fff;margin-top:4px;}
  .sim-result .num span{font-size:15px;font-weight:700;color:var(--grey);}
  .perhari{font-size:12px;color:var(--green);font-weight:700;margin-top:5px;}
  .disclaimer{font-size:10.5px;color:var(--grey);line-height:1.5;margin-top:12px;text-align:center;}
  .other-units{display:block;text-align:center;margin-top:28px;color:var(--grey);font-size:13px;font-weight:600;text-decoration:none;border:1.5px dashed rgba(255,255,255,.2);border-radius:12px;padding:13px;}
  footer{margin-top:26px;padding-bottom:8px;text-align:center;font-size:10.5px;color:#55555f;line-height:1.6;}
  .cta-bar{position:fixed;left:0;right:0;bottom:0;z-index:50;background:linear-gradient(transparent,rgba(22,22,26,.95) 35%);padding:20px 18px 16px;}
  .wa-btn{display:flex;align-items:center;justify-content:center;gap:10px;max-width:444px;margin:0 auto;padding:16px;background:#25D366;color:#062e17;border:none;border-radius:14px;font-family:inherit;font-weight:800;font-size:16px;cursor:pointer;text-decoration:none;box-shadow:0 6px 24px rgba(37,211,102,.35);}
  .wa-btn svg{width:22px;height:22px;}
  .expired{position:fixed;inset:0;z-index:100;background:rgba(22,22,26,.97);display:none;align-items:center;justify-content:center;text-align:center;padding:30px;}
  .expired.show{display:flex;}
  .expired h2{font-family:'Archivo',sans-serif;font-weight:900;text-transform:uppercase;font-size:26px;margin-bottom:10px;}
  .expired p{color:var(--grey);font-size:14px;line-height:1.6;}
  .expired .wa-btn{margin-top:22px;}`;
  document.head.appendChild(css);

  /* ---------- skeleton ---------- */
  const nameParts = U.name.split(" ");
  const brandWord = nameParts.shift();
  document.title = U.name + " - Promo " + D.monthLabel + " | " + D.dealer;
  document.body.innerHTML = `
  <div class="wrap">
    <header>
      <a class="brand" href="../${qs}" style="display:flex;align-items:center;gap:9px;"><img src="../logo-icon.png" alt="Kecak Motor" style="height:30px;width:auto;"><span>Kecak <em>Motor</em></span></a>
      <div class="updated">Terakhir diperbarui<br><b id="lastUpdated"></b></div>
    </header>
    <div class="loc-chip"><span class="dot"></span><span id="locLabel"></span></div>
    <div class="hero">
      <span class="month-tag">Promo ${D.monthLabel}</span>
      <h1><span class="thin">${brandWord}</span>${nameParts.join(" ")}</h1>
      <div class="countdown" id="countdown"></div>
      <div class="variants" id="variants"></div>
      <div class="price-card">
        <div class="price-label">Harga OTR Bali setelah promo</div>
        <div class="price-old" id="priceOld"></div>
        <div class="price-now" id="priceNow"></div>
        <div class="price-save" id="priceSave"></div>
        <div class="credit-note" id="creditNote" style="display:none"></div>
      </div>
    </div>
    <section id="segSection">
      <div class="sec-title">Kamu termasuk yang mana?</div>
      <div class="sec-sub">Ada diskon khusus untuk segmen tertentu. Pilih yang sesuai.</div>
      <div class="seg-grid" id="segGrid"></div>
      <div class="seg-note" id="segNote"></div>
    </section>
    <section>
      <div class="sec-title">Rincian promo bulan ini</div>
      <div class="promo-list" id="promoList"></div>
    </section>
    <section>
      <div class="sec-title">Simulasi Kredit</div>
      <div class="sec-sub">Geser DP dan pilih tenor - langsung kelihatan cicilan per bulannya.</div>
      <div class="sim-card">
        <div class="sim-row-label"><span>Uang muka (DP)</span><b id="dpLabel"></b></div>
        <input type="range" id="dpRange" min="10" max="60" value="20" step="1">
        <div class="sim-row-label"><span>Tenor</span></div>
        <div class="tenor-grid" id="tenorGrid"></div>
        <div class="sim-result"><div class="lbl">Estimasi cicilan</div><div class="num" id="cicilan"></div><div class="perhari" id="perhari"></div></div>
        <div class="disclaimer">*Estimasi perhitungan, bukan penawaran resmi leasing. Angka pasti dikonfirmasi tim kami via WhatsApp.</div>
      </div>
    </section>
    <a class="other-units" href="../${qs}">Lihat unit lain &rsaquo;</a>
    <footer>Halaman promo resmi <b>${D.dealer}</b> - Program berlaku 1-31 ${D.monthLabel}<br>Hadiah &amp; bonus berlaku selama persediaan masih ada.</footer>
  </div>
  <div class="cta-bar"><a class="wa-btn" id="waBtn" target="_blank" rel="noopener">
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.83 14.12c-.25.7-1.45 1.33-2.02 1.42-.52.08-1.17.11-1.89-.12-.44-.14-1-.32-1.71-.63-3.02-1.3-4.99-4.34-5.14-4.54-.15-.2-1.23-1.63-1.23-3.12 0-1.48.78-2.21 1.05-2.51.28-.3.6-.38.8-.38h.58c.18 0 .43-.07.67.51.25.6.85 2.08.92 2.23.08.15.13.33.03.53-.1.2-.15.33-.3.5-.15.18-.32.4-.45.53-.15.15-.31.31-.13.61.18.3.79 1.31 1.7 2.12 1.17 1.04 2.16 1.37 2.46 1.52.3.15.48.13.65-.08.18-.2.75-.88.95-1.18.2-.3.4-.25.68-.15.28.1 1.75.83 2.05.98.3.15.5.22.58.35.07.13.07.72-.18 1.41z"/></svg>
    <span id="waBtnText"></span></a></div>
  <div class="expired" id="expiredOverlay"><div>
    <h2>Promo bulan ini sudah berakhir</h2>
    <p>Program promo baru biasanya terbit di awal bulan.<br>Chat kami untuk info promo terbaru!</p>
    <a class="wa-btn" id="waBtnExpired" target="_blank" rel="noopener">Tanya promo terbaru</a>
  </div></div>`;

  /* ---------- render ---------- */
  function renderVariants() {
    const el = document.getElementById("variants"); el.innerHTML = "";
    U.variants.forEach(v => {
      const b = document.createElement("button");
      b.className = "variant-btn" + (v.id === state.variant.id ? " active" : "");
      b.innerHTML = v.label + "<small>" + rupiah(v.otr) + "</small>";
      b.onclick = () => { state.variant = v; renderAll(); track("variant_" + v.id); };
      el.appendChild(b);
    });
  }
  function renderPrice() {
    const disc = totalDiscount();
    document.getElementById("priceOld").textContent = disc > 0 ? rupiah(state.variant.otr) : "";
    document.getElementById("priceNow").textContent = rupiah(netPrice());
    const sv = document.getElementById("priceSave");
    if (disc > 0) { sv.style.display=""; sv.textContent = "Hemat " + rupiah(disc) + (segmentApplies() ? " (diskon khusus " + state.segment.label + ")" : ""); }
    else { sv.style.display="none"; }
    const cn = document.getElementById("creditNote");
    if (U.creditOnly && !segmentApplies() && baseNet() > 0) { cn.style.display=""; cn.textContent = "Diskon khusus pembelian credit"; }
    else cn.style.display = "none";
  }
  function renderSegments() {
    const sec = document.getElementById("segSection");
    if (segs.length <= 1) { sec.style.display = "none"; return; }
    const el = document.getElementById("segGrid"); el.innerHTML = "";
    segs.forEach(s => {
      const b = document.createElement("button");
      b.className = "seg-chip" + (s.id === state.segment.id ? " active" : "");
      b.textContent = s.label;
      b.onclick = () => { state.segment = s; renderAll(); track("segment_" + s.id); };
      el.appendChild(b);
    });
    document.getElementById("segNote").textContent = state.segment.note || "";
  }
  function renderPromos() {
    const el = document.getElementById("promoList"); el.innerHTML = "";
    const rows = [];
    const bg = baseGrossFor(state.variant);
    if (segmentApplies()) {
      rows.push({ t: "Diskon khusus: " + state.segment.label,
        d: (state.segment.note ? state.segment.note + " - " : "") + "Menggantikan diskon umum (tidak digabung)",
        v: D.showSegmentAmounts ? "- " + rupiah(extraNet()) : "Spesial" });
    } else if (bg > 0) {
      rows.push({ t: "Diskon " + D.monthLabel.split(" ")[0] + " (semua pembeli)",
        d: U.baseNote || ("Berlaku 1-31 " + D.monthLabel.split(" ")[0]), v: "- " + rupiah(net(bg)) });
      const ex = extraNet();
      if (ex > 0 && ex <= net(bg)) rows.push({ t: "Info: diskon " + state.segment.label,
        d: "Tidak digabung - kamu otomatis dapat yang terbesar (diskon umum)", v: rupiah(ex) });
    }
    (U.gifts || []).filter(g => g.stock).forEach(g => rows.push({ t: "Bonus: " + g.label, d: g.desc, v: g.value > 0 ? "senilai " + rupiah(g.value) : "Gratis" }));
    if (!rows.length) rows.push({ t: "Harga spesial - hubungi kami", d: "Promo unit ini bisa berubah sewaktu-waktu", v: "" });
    rows.forEach(r => {
      const dv = document.createElement("div"); dv.className = "promo-row";
      dv.innerHTML = '<div><div class="t">' + r.t + '</div><div class="d">' + (r.d || "") + '</div></div><div class="v">' + r.v + "</div>";
      el.appendChild(dv);
    });
    const giftValue = (U.gifts || []).filter(g => g.stock).reduce((a, g) => a + g.value, 0);
    if (totalDiscount() + giftValue > 0) {
      const tot = document.createElement("div"); tot.className = "promo-row total";
      tot.innerHTML = '<div><div class="t">Total keuntungan kamu</div><div class="d">Diskon harga + nilai bonus</div></div><div class="v">' + rupiah(totalDiscount() + giftValue) + "</div>";
      el.appendChild(tot);
    }
  }
  function renderSim() {
    const dpEl = document.getElementById("dpRange");
    dpEl.style.setProperty("--fill", ((state.dpPct * 100 - 10) / 50 * 100) + "%");
    const dpAmt = netPrice() * state.dpPct;
    document.getElementById("dpLabel").textContent = rupiah(dpAmt) + " (" + Math.round(state.dpPct * 100) + "%)";
    const tg = document.getElementById("tenorGrid"); tg.innerHTML = "";
    D.credit.tenors.forEach(t => {
      const b = document.createElement("button");
      b.className = "tenor-btn" + (t === state.tenor ? " active" : "");
      b.innerHTML = t + "<small>bulan</small>";
      b.onclick = () => { state.tenor = t; renderAll(); track("tenor_" + t); };
      tg.appendChild(b);
    });
    const pokok = netPrice() - dpAmt;
    const cicilan = (pokok + pokok * D.credit.flatMonthly * state.tenor) / state.tenor;
    document.getElementById("cicilan").innerHTML = rupiah(cicilan) + " <span>/bln</span>";
    document.getElementById("perhari").textContent = "setara " + rupiah(Math.round(cicilan/30/1000)*1000) + " per hari";
  }
  function waLink(customMsg) {
    const sp = salesPerson();
    const target = routeToSales() ? sp.wa : D.waNumber;
    let msg = customMsg;
    if (!msg) {
      msg = "Halo " + D.dealer + ", saya tertarik " + U.name + " " + state.variant.label + " promo " + D.monthLabel + ".";
      if (company) msg += "\nSaya karyawan " + company.name + ".";
      else if (segmentApplies()) msg += "\nSaya termasuk: " + state.segment.label + ".";
      if (src.sales) msg += "\n(Sales: " + (sp ? sp.name : src.sales) + ")";
    }
    return "https://wa.me/" + target + "?text=" + encodeURIComponent(msg);
  }
  function renderCTA() {
    const btn = document.getElementById("waBtn");
    btn.href = waLink(); btn.onclick = () => track("wa_click");
    document.getElementById("waBtnText").textContent = routeToSales() ? "Chat " + salesPerson().name + " via WhatsApp" : "Tanya via WhatsApp";
    const btnE = document.getElementById("waBtnExpired");
    btnE.href = waLink("Halo " + D.dealer + ", promo " + U.name + " bulan ini apa saja?" + (src.loc ? " (Scan dari: " + src.loc + ")" : ""));
    btnE.onclick = () => track("wa_click_expired");
  }
  function renderStatic() {
    document.getElementById("lastUpdated").textContent = new Date(D.lastUpdated).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
    let chip = "Poster resmi " + D.dealer;
    if (src.loc) chip = "Poster resmi - " + src.loc.replace(/-/g, " ");
    if (company) chip = "Khusus karyawan " + company.name;
    if (routeToSales()) chip = "Dilayani oleh " + salesPerson().name + " - " + D.dealer;
    document.getElementById("locLabel").textContent = chip;
    const dl = daysLeft(), cd = document.getElementById("countdown");
    if (dl > 7) cd.textContent = "Berlaku sampai 31 " + D.monthLabel;
    else if (dl > 0) cd.textContent = "Buruan! Promo berakhir " + dl + " hari lagi";
    if (dl <= 0) document.getElementById("expiredOverlay").classList.add("show");
  }
  function renderAll() { renderVariants(); renderPrice(); renderSegments(); renderPromos(); renderSim(); renderCTA(); }

  document.getElementById("dpRange").addEventListener("input", e => { state.dpPct = e.target.value / 100; renderAll(); });
  renderStatic(); renderAll(); track("scan");
})();
