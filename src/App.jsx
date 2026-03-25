import React, { useMemo, useState } from "react";

const iconPaths = {
  menu: [
    "M4 7h16",
    "M4 12h16",
    "M4 17h16",
  ],
  globe: [
    "M12 3a9 9 0 100 18a9 9 0 000-18Z",
    "M3 12h18",
    "M12 3c2.8 2.7 4.2 5.7 4.2 9S14.8 18.3 12 21",
    "M12 3C9.2 5.7 7.8 8.7 7.8 12s1.4 6.3 4.2 9",
  ],
  book: [
    "M5 5.5A2.5 2.5 0 017.5 3H19v16H7.5A2.5 2.5 0 005 21V5.5Z",
    "M5 5.5V21",
    "M9 7h7",
    "M9 11h7",
  ],
  chart: [
    "M5 19V9",
    "M10 19V5",
    "M15 19v-7",
    "M20 19v-11",
    "M3 19h18",
  ],
  layers: [
    "M12 4l8 4-8 4-8-4 8-4Z",
    "M4 12l8 4 8-4",
    "M4 16l8 4 8-4",
  ],
  warning: [
    "M12 4l8 15H4l8-15Z",
    "M12 9v4",
    "M12 16h.01",
  ],
  check: [
    "M5 12l4 4 10-10",
  ],
  compass: [
    "M12 3a9 9 0 100 18a9 9 0 000-18Z",
    "M15.8 8.2l-2.1 5.5-5.5 2.1 2.1-5.5 5.5-2.1Z",
  ],
  building: [
    "M5 20V6l7-3 7 3v14",
    "M9 10h.01",
    "M15 10h.01",
    "M9 14h.01",
    "M15 14h.01",
    "M10 20v-3h4v3",
  ],
  box: [
    "M4 8l8-4 8 4-8 4-8-4Z",
    "M4 8v8l8 4 8-4V8",
    "M12 12v8",
  ],
  spark: [
    "M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z",
  ],
  refresh: [
    "M20 6v5h-5",
    "M4 18v-5h5",
    "M19 11a7 7 0 00-12-3",
    "M5 13a7 7 0 0012 3",
  ],
  arrowRight: [
    "M5 12h14",
    "M13 6l6 6-6 6",
  ],
  target: [
    "M12 4a8 8 0 100 16a8 8 0 000-16Z",
    "M12 8a4 4 0 100 8a4 4 0 000-8Z",
    "M12 12h.01",
  ],
  money: [
    "M4 7h16v10H4z",
    "M12 10a2 2 0 100 4a2 2 0 000-4Z",
    "M7 10h.01",
    "M17 14h.01",
  ],
  phone: [
    "M9 3h6a2 2 0 012 2v14a2 2 0 01-2 2H9a2 2 0 01-2-2V5a2 2 0 012-2Z",
    "M11 18h2",
  ],
  people: [
    "M8.5 11a2.5 2.5 0 100-5 2.5 2.5 0 000 5Z",
    "M15.5 10a2 2 0 100-4 2 2 0 000 4Z",
    "M3.5 18a4 4 0 018 0",
    "M13 18a3.5 3.5 0 017 0",
  ],
};

function Icon({ name, className = "h-5 w-5", strokeWidth = 1.8 }) {
  const paths = iconPaths[name] || [];
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}

function T({ mode, en, zh, enClassName = "", zhClassName = "" }) {
  if (mode === "zh") return <span className={zhClassName}>{zh}</span>;
  if (mode === "sync") {
    return (
      <span className="flex flex-col gap-1.5">
        <span className={enClassName}>{en}</span>
        <span className={zhClassName}>{zh}</span>
      </span>
    );
  }
  return <span className={enClassName}>{en}</span>;
}

function EvidenceBadge({ type, mode }) {
  const map = {
    fact: {
      en: "Direct fact",
      zh: "直接事實",
      className: "bg-stone-900 text-stone-50 border-stone-900",
    },
    estimate: {
      en: "Estimated exhibit",
      zh: "估算圖表",
      className: "bg-amber-100 text-amber-900 border-amber-300",
    },
    interpretation: {
      en: "Interpretation",
      zh: "分析判讀",
      className: "bg-emerald-100 text-emerald-900 border-emerald-300",
    },
  };
  const item = map[type];
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold tracking-wide ${item.className}`}>
      <T mode={mode} en={item.en} zh={item.zh} />
    </span>
  );
}

function BrandToken({ label, tone = "stone" }) {
  const tones = {
    stone: "bg-stone-200 text-stone-800 border-stone-300",
    plum: "bg-[#EAE3F4] text-[#5A4673] border-[#D4C6E8]",
    moss: "bg-[#E7EFE4] text-[#40563F] border-[#C9D9C4]",
    amber: "bg-[#F8E7C6] text-[#7A5424] border-[#E8CC93]",
    blue: "bg-[#E4EDF7] text-[#395677] border-[#C5D6EA]",
    rose: "bg-[#F7E6E6] text-[#7E4B4B] border-[#E9C9C9]",
  };
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${tones[tone]}`}>
      {label}
    </span>
  );
}

function Section({ id, mode, icon, eyebrowEn, eyebrowZh, titleEn, titleZh, subtitleEn, subtitleZh, children }) {
  return (
    <section id={id} className="scroll-mt-28 rounded-[28px] border border-stone-200 bg-white/80 p-5 shadow-sm shadow-stone-200/50 backdrop-blur md:p-8">
      <div className="mb-6 flex items-start gap-4">
        <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-stone-200 bg-[#FCFAF2] text-stone-700">
          <Icon name={icon} className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-500">
            <T mode={mode} en={eyebrowEn} zh={eyebrowZh} />
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-stone-900 md:text-3xl">
            <T mode={mode} en={titleEn} zh={titleZh} />
          </h2>
          {(subtitleEn || subtitleZh) && (
            <p className="mt-2 max-w-4xl text-sm leading-7 text-stone-600 md:text-[15px]">
              <T mode={mode} en={subtitleEn} zh={subtitleZh} />
            </p>
          )}
        </div>
      </div>
      {children}
    </section>
  );
}

function MetricCard({ mode, labelEn, labelZh, value, noteEn, noteZh }) {
  return (
    <div className="rounded-3xl border border-stone-200 bg-[#FFFEFC] p-4 md:p-5">
      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
        <T mode={mode} en={labelEn} zh={labelZh} />
      </div>
      <div className="mt-3 text-2xl font-semibold tracking-tight text-stone-900 md:text-3xl">{value}</div>
      {(noteEn || noteZh) && (
        <div className="mt-2 text-sm leading-6 text-stone-600">
          <T mode={mode} en={noteEn} zh={noteZh} />
        </div>
      )}
    </div>
  );
}

function TextBlock({ mode, evidence, en, zh }) {
  return (
    <div className="rounded-3xl border border-stone-200 bg-stone-50/70 p-4 md:p-5">
      <div className="mb-3"><EvidenceBadge type={evidence} mode={mode} /></div>
      <p className="text-sm leading-7 text-stone-700 md:text-[15px]">
        <T mode={mode} en={en} zh={zh} />
      </p>
    </div>
  );
}

function MiniBar({ mode, labelEn, labelZh, value, max = 100, noteEn, noteZh, tone = "stone" }) {
  const tones = {
    stone: "bg-stone-700",
    plum: "bg-[#6E5A87]",
    moss: "bg-[#5E7B5C]",
    amber: "bg-[#A8772A]",
    blue: "bg-[#58779B]",
    rose: "bg-[#A16565]",
  };
  const width = `${Math.max(4, (value / max) * 100)}%`;
  return (
    <div className="space-y-2">
      <div className="flex items-end justify-between gap-4">
        <div className="min-w-0 text-sm font-medium text-stone-700">
          <T mode={mode} en={labelEn} zh={labelZh} />
        </div>
        <div className="shrink-0 text-sm font-semibold text-stone-900">{value}%</div>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-stone-200">
        <div className={`h-full rounded-full ${tones[tone]}`} style={{ width }} />
      </div>
      {(noteEn || noteZh) && <div className="text-xs leading-5 text-stone-500"><T mode={mode} en={noteEn} zh={noteZh} /></div>}
    </div>
  );
}

function SalesTrend({ mode, data }) {
  const max = Math.max(...data.map((d) => d.value));
  return (
    <div className="rounded-3xl border border-stone-200 bg-white p-4 md:p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <div className="text-sm font-semibold text-stone-900">
            <T mode={mode} en="Estimated Greater China sales" zh="大中華區估算銷售額" />
          </div>
          <div className="text-xs leading-5 text-stone-500">
            <T
              mode={mode}
              en="Estimated exhibit values, USD millions, interpreted directionally rather than as exact audited line items."
              zh="依圖表估算之數值，單位為百萬美元。較適合用來看方向，不宜視為逐年完全精確之審計科目。"
            />
          </div>
        </div>
        <EvidenceBadge type="estimate" mode={mode} />
      </div>
      <div className="grid grid-cols-7 items-end gap-2 md:gap-3">
        {data.map((d, i) => (
          <div key={d.year} className="flex flex-col items-center gap-2">
            <div className="text-[11px] font-semibold text-stone-600 md:text-xs">{d.value.toLocaleString()}</div>
            <div className="flex h-44 w-full items-end rounded-2xl bg-stone-100 p-1 md:h-56">
              <div
                className={`w-full rounded-xl ${i === data.length - 1 ? "bg-[#6E5A87]" : "bg-stone-500"}`}
                style={{ height: `${(d.value / max) * 100}%` }}
              />
            </div>
            <div className="text-xs font-medium text-stone-700">{d.year}</div>
            <div className={`text-[11px] font-semibold ${d.growth.startsWith("minus") ? "text-rose-700" : "text-emerald-700"}`}>
              {d.growthLabel}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ChannelShift({ mode, before, after }) {
  const max = Math.max(...before.map((d) => d.value), ...after.map((d) => d.value));
  return (
    <div className="rounded-3xl border border-stone-200 bg-white p-4 md:p-6">
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <div className="text-sm font-semibold text-stone-900">
          <T mode={mode} en="Urban FMCG channel mix" zh="中國都市 FMCG 通路結構" />
        </div>
        <BrandToken label="2012" tone="stone" />
        <BrandToken label="2021 Q1-Q3" tone="plum" />
      </div>
      <div className="space-y-4">
        {before.map((b) => {
          const a = after.find((x) => x.key === b.key);
          return (
            <div key={b.key} className="rounded-2xl bg-stone-50 p-3 md:p-4">
              <div className="mb-2 flex items-center justify-between gap-3">
                <div className="text-sm font-medium text-stone-800">
                  <T mode={mode} en={b.labelEn} zh={b.labelZh} />
                </div>
                <div className="text-xs text-stone-500">{b.value}% → {a.value}%</div>
              </div>
              <div className="space-y-2">
                <div>
                  <div className="mb-1 flex items-center justify-between text-[11px] font-medium text-stone-500">
                    <span>2012</span>
                    <span>{b.value}%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-stone-200">
                    <div className="h-full rounded-full bg-stone-700" style={{ width: `${(b.value / max) * 100}%` }} />
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex items-center justify-between text-[11px] font-medium text-stone-500">
                    <span>2021</span>
                    <span>{a.value}%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-stone-200">
                    <div className="h-full rounded-full bg-[#6E5A87]" style={{ width: `${(a.value / max) * 100}%` }} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-3 text-xs leading-6 text-amber-900">
        <T
          mode={mode}
          en="Exhibit caution: cigarette exclusions and definition changes mean the long-run comparison should be read directionally. The trend is reliable. Exact cross-period continuity is not perfect."
          zh="圖表使用上需保留：由於資料曾排除香菸，且部分分類定義有變動，長期比較較適合看方向，不宜把每一段數字視為完全無縫銜接。"
        />
      </div>
    </div>
  );
}

function Timeline({ mode, items }) {
  return (
    <div className="relative rounded-3xl border border-stone-200 bg-white p-4 md:p-6">
      <div className="absolute left-6 top-8 bottom-8 hidden w-px bg-stone-200 md:block" />
      <div className="space-y-5">
        {items.map((item, index) => (
          <div key={index} className="relative md:pl-8">
            <div className="absolute left-0 top-1 hidden h-3.5 w-3.5 rounded-full border-2 border-white bg-stone-700 shadow md:block" />
            <div className="rounded-2xl bg-stone-50 p-4">
              <div className="mb-1 text-sm font-semibold text-stone-900">{item.year}</div>
              <div className="text-sm leading-7 text-stone-700">
                <T mode={mode} en={item.en} zh={item.zh} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ComparisonTable({ mode, rows }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white">
      <div className="grid grid-cols-1 border-b border-stone-200 bg-stone-50 md:grid-cols-[1.1fr_1fr_1fr]">
        <div className="px-4 py-3 text-sm font-semibold text-stone-900"><T mode={mode} en="Strategic area" zh="策略面向" /></div>
        <div className="px-4 py-3 text-sm font-semibold text-stone-900"><T mode={mode} en="What P&G misread" zh="P&G 誤判之處" /></div>
        <div className="px-4 py-3 text-sm font-semibold text-stone-900"><T mode={mode} en="How P&G responded" zh="P&G 如何修正" /></div>
      </div>
      {rows.map((row, idx) => (
        <div key={idx} className="grid grid-cols-1 border-b border-stone-100 last:border-b-0 md:grid-cols-[1.1fr_1fr_1fr]">
          <div className="px-4 py-4 text-sm font-semibold text-stone-800">{mode === "zh" ? row.areaZh : mode === "sync" ? <div className="space-y-1"><div>{row.areaEn}</div><div className="text-stone-600">{row.areaZh}</div></div> : row.areaEn}</div>
          <div className="px-4 py-4 text-sm leading-7 text-stone-700">{mode === "zh" ? row.leftZh : mode === "sync" ? <div className="space-y-1"><div>{row.leftEn}</div><div className="text-stone-600">{row.leftZh}</div></div> : row.leftEn}</div>
          <div className="px-4 py-4 text-sm leading-7 text-stone-700">{mode === "zh" ? row.rightZh : mode === "sync" ? <div className="space-y-1"><div>{row.rightEn}</div><div className="text-stone-600">{row.rightZh}</div></div> : row.rightEn}</div>
        </div>
      ))}
    </div>
  );
}

function Navigation({ mode, sections }) {
  return (
    <div className="sticky top-16 z-20 mb-6 overflow-x-auto rounded-2xl border border-stone-200 bg-white/85 px-3 py-3 shadow-sm shadow-stone-200/60 backdrop-blur">
      <div className="flex min-w-max gap-2">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-[#FCFAF2] px-3 py-2 text-xs font-medium text-stone-700 transition hover:border-stone-300 hover:bg-white"
          >
            <Icon name={s.icon} className="h-3.5 w-3.5" />
            <T mode={mode} en={s.en} zh={s.zh} />
          </a>
        ))}
      </div>
    </div>
  );
}

function LanguageControl({ mode, setMode, open, setOpen }) {
  const items = [
    { key: "en", label: "EN" },
    { key: "zh", label: "中文" },
    { key: "sync", label: "EN + 中文" },
  ];
  return (
    <div className="fixed right-4 top-4 z-50 md:right-6 md:top-6">
      <div className="rounded-2xl border border-stone-200 bg-white/92 p-2 shadow-lg shadow-stone-300/30 backdrop-blur">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-stone-700 transition hover:bg-stone-100"
          aria-label="Language settings"
        >
          <Icon name="globe" className="h-4 w-4" />
          <span className="hidden sm:inline">Language</span>
          <Icon name="menu" className="h-4 w-4 text-stone-500" />
        </button>
        {open && (
          <div className="mt-2 grid gap-1">
            {items.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => {
                  setMode(item.key);
                  setOpen(false);
                }}
                className={`rounded-xl px-3 py-2 text-left text-sm font-medium transition ${mode === item.key ? "bg-stone-900 text-stone-50" : "text-stone-700 hover:bg-stone-100"}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function PGChina2022Infrastructure() {
  const [mode, setMode] = useState("en");
  const [langOpen, setLangOpen] = useState(false);

  const sectionLinks = [
    { id: "overview", icon: "compass", en: "Overview", zh: "總覽" },
    { id: "timeline", icon: "layers", en: "Timeline", zh: "時間線" },
    { id: "market", icon: "chart", en: "Market shift", zh: "市場變化" },
    { id: "misread", icon: "warning", en: "Misread and response", zh: "誤判與修正" },
    { id: "strength", icon: "building", en: "Strength and tension", zh: "優勢與張力" },
    { id: "finance", icon: "money", en: "Financial context", zh: "財務脈絡" },
    { id: "judgment", icon: "target", en: "Final judgment", zh: "最終判斷" },
  ];

  const salesTrendData = [
    { year: 2015, value: 5660, growth: "minus", growthLabel: "base" },
    { year: 2016, value: 5224, growth: "minus", growthLabel: "-7.7%" },
    { year: 2017, value: 5205, growth: "minus", growthLabel: "-0.4%" },
    { year: 2018, value: 6015, growth: "plus", growthLabel: "+15.6%" },
    { year: 2019, value: 6092, growth: "plus", growthLabel: "+1.3%" },
    { year: 2020, value: 6386, growth: "plus", growthLabel: "+4.8%" },
    { year: 2021, value: 7612, growth: "plus", growthLabel: "+19.2%" },
  ];

  const channel2012 = [
    { key: "ecommerce", labelEn: "E-commerce", labelZh: "電子商務", value: 2.1 },
    { key: "supermarkets", labelEn: "Supermarkets and minimarkets", labelZh: "超市與迷你超市", value: 36.6 },
    { key: "hypermarkets", labelEn: "Hypermarkets", labelZh: "大賣場", value: 24.1 },
    { key: "grocery", labelEn: "Grocery", labelZh: "雜貨通路", value: 10.0 },
  ];

  const channel2021 = [
    { key: "ecommerce", value: 30.2 },
    { key: "supermarkets", value: 31.5 },
    { key: "hypermarkets", value: 15.7 },
    { key: "grocery", value: 3.8 },
  ];

  const timelineItems = [
    {
      year: "1985",
      en: "P&G began China market studies in Beijing and Shanghai, even before product sales started.",
      zh: "P&G 先在北京與上海做市場研究，甚至早於正式銷售前就開始理解市場。",
    },
    {
      year: "1988",
      en: "Entry came through a joint venture with Hutchison Whampoa, first with Head & Shoulders rather than detergent.",
      zh: "1988 年透過與和記黃埔的合資進入市場，首發產品不是洗衣精，而是海飛絲洗髮精。",
    },
    {
      year: "1991 to 2009",
      en: "China sales climbed from USD 50 million to USD 5 billion, while P&G built factories, distribution, and category leadership.",
      zh: "1991 至 2009 年間，中國市場銷售額自 5,000 萬美元升至 50 億美元，同時建立工廠、配銷與品類領導地位。",
    },
    {
      year: "2010",
      en: "P&G already had broad manufacturing and R&D presence in China, including its largest factory globally in Tianjin.",
      zh: "到 2010 年，P&G 已在中國建立完整製造與研發佈局，其中天津工廠更是其全球最大工廠。",
    },
    {
      year: "Late 2010s",
      en: "China premiumized and digitized much faster than P&G expected. The old middle-market formula became less reliable.",
      zh: "2010 年代後期，中國市場高端化與數位化速度遠超 P&G 原先預期，原本鎖定中段市場的公式開始失靈。",
    },
    {
      year: "2016 onward",
      en: "P&G pushed premium products, stronger e-commerce execution, online advertising, KOL work, and more localized offerings.",
      zh: "2016 年後，P&G 開始強化高端產品、電商能力、線上廣告、KOL 合作，以及更在地化的產品。",
    },
    {
      year: "2022",
      en: "The case no longer reads like a retreat. It reads like a corrected incumbent still facing a structurally harder market.",
      zh: "到 2022 年，這已不是一個撤退中的故事，而是一家完成修正、但仍面對更高競爭難度市場的龍頭企業。",
    },
  ];

  const compareRows = [
    {
      areaEn: "Demand ladder",
      areaZh: "需求價格帶",
      leftEn: "P&G assumed the expanding middle class would prefer cheaper offerings. China moved up much faster into premium and super-premium tiers.",
      leftZh: "P&G 原先假設擴張中的中產階級會偏好更便宜的產品，但中國市場更快地往高端與超高端價格帶移動。",
      rightEn: "P&G added premium diapers, premium toothpastes, upgraded detergents, and more support behind Olay and SK-II.",
      rightZh: "P&G 後續補上高端紙尿褲、高端牙膏、升級型洗劑，並加強對 Olay 與 SK-II 的資源投入。",
    },
    {
      areaEn: "Channel system",
      areaZh: "通路系統",
      leftEn: "P&G had leaned on supermarkets, hypermarkets, and television while China shifted toward e-commerce, short video, and live streaming.",
      leftZh: "P&G 過度依賴超市、大賣場與電視媒體，但中國消費者已大量轉向電商、短影音與直播。",
      rightEn: "The company moved advertising online, worked with KOLs, built stronger e-commerce capability, and deepened omni-channel cooperation with JD.",
      rightZh: "公司轉向線上投放、與 KOL 合作、提升電商能力，並與京東在全通路、數據與供應鏈上深化合作。",
    },
    {
      areaEn: "Local relevance",
      areaZh: "在地文化適配",
      leftEn: "Classic foreign brand strength no longer guaranteed advantage once consumers wanted products that felt more culturally specific.",
      leftZh: "當消費者開始偏好更有在地文化感的品牌時，傳統外商品牌光環已無法自動轉化為優勢。",
      rightEn: "P&G revived Oriental Therapy and leaned more deliberately into localized product ideas and local partnerships.",
      rightZh: "P&G 重啟 Oriental Therapy，並更有意識地朝向在地化產品概念與本地合作前進。",
    },
  ];

  const leadingCategories = [
    {
      titleEn: "Hair care",
      titleZh: "護髮",
      market: "USD 11.6B",
      share: 41.5,
      noteEn: "P&G led far ahead of Beiersdorf 9.8%, Unilever 8.1%, and Henkel 5.2% in 2020.",
      noteZh: "2020 年 P&G 市占約 41.5%，明顯領先 Beiersdorf 9.8%、Unilever 8.1%、Henkel 5.2%。",
      tone: "plum",
    },
    {
      titleEn: "Personal hygiene",
      titleZh: "個人衛生",
      market: "USD 4.2B",
      share: 21.0,
      noteEn: "P&G remained the category leader in 2020.",
      noteZh: "2020 年仍由 P&G 領先。",
      tone: "moss",
    },
    {
      titleEn: "Baby personal care",
      titleZh: "嬰兒個人護理",
      market: "USD 10.3B",
      share: 24.8,
      noteEn: "Leadership remained, but share slipped from 26.5% in 2014 as Kimberly-Clark and Unicharm gained.",
      noteZh: "雖仍居首位，但相較 2014 年 26.5% 已下滑，金佰利與尤妮佳持續追近。",
      tone: "amber",
    },
  ];

  const penetrationData = [
    { labelEn: "Yili", labelZh: "伊利", value: 92.5, tone: "stone" },
    { labelEn: "P&G", labelZh: "P&G", value: 91.4, tone: "plum" },
    { labelEn: "Unilever", labelZh: "聯合利華", value: 79.6, tone: "moss" },
  ];

  const geoMix = [
    { labelEn: "North America", labelZh: "北美", value: 47, tone: "stone" },
    { labelEn: "Europe", labelZh: "歐洲", value: 22, tone: "blue" },
    { labelEn: "Greater China", labelZh: "大中華區", value: 10, tone: "plum" },
    { labelEn: "Asia-Pacific ex Greater China", labelZh: "亞太，不含大中華區", value: 9, tone: "moss" },
    { labelEn: "Latin America", labelZh: "拉丁美洲", value: 6, tone: "amber" },
    { labelEn: "India, Middle East, Africa", labelZh: "印度、中東、非洲", value: 6, tone: "rose" },
  ];

  const productMix = [
    { labelEn: "Fabric and Home Care", labelZh: "織品與家居護理", value: 34, tone: "stone" },
    { labelEn: "Baby, Feminine, Family Care", labelZh: "嬰兒、女性、家庭護理", value: 25, tone: "plum" },
    { labelEn: "Beauty", labelZh: "美妝", value: 19, tone: "rose" },
    { labelEn: "Health Care", labelZh: "健康護理", value: 13, tone: "moss" },
    { labelEn: "Grooming", labelZh: "男性理容", value: 9, tone: "amber" },
  ];

  const memo = useMemo(() => ({
    plainEnglish: "This is not a survival story. It is a fit story. P&G still had scale, brands, reach, and operating strength in China. The real issue was whether the model that made P&G powerful for decades still fit a market that had become more premium, more digital, more fragmented, and more locally demanding.",
    plainChinese: "這不是一個生存危機故事，而是一個策略適配問題。P&G 在中國仍有規模、品牌、滲透率與營運能力。真正的核心是：那一套讓 P&G 在過去數十年成功的模式，是否仍適合一個更高端、更數位、更碎片化，也更要求在地感的中國市場。",
  }), []);

  return (
    <div className="min-h-screen bg-[#FCFAF2] text-stone-900">
      <LanguageControl mode={mode} setMode={setMode} open={langOpen} setOpen={setLangOpen} />

      <div className="mx-auto max-w-7xl px-4 pb-20 pt-20 sm:px-6 lg:px-8 lg:pt-24">
        <header className="relative overflow-hidden rounded-[32px] border border-stone-200 bg-white/85 p-6 shadow-sm shadow-stone-200/50 backdrop-blur md:p-10">
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#F1ECE1] to-transparent" />
          <div className="relative">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <BrandToken label="P&G" tone="stone" />
              <BrandToken label="China" tone="plum" />
              <BrandToken label="2022 Case" tone="moss" />
              <BrandToken label="Bilingual" tone="amber" />
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr] lg:gap-10">
              <div>
                <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                  <T mode={mode} en="Visual strategy infrastructure" zh="視覺化策略基礎架構" />
                </div>
                <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-stone-950 md:text-5xl lg:text-6xl">
                  <T
                    mode={mode}
                    en="P&G in China, 2022"
                    zh="P&G in China, 2022"
                  />
                </h1>
                <p className="mt-5 max-w-4xl text-base leading-8 text-stone-700 md:text-lg">
                  <T
                    mode={mode}
                    en="A reader-first reconstruction of the case: what changed in China, where P&G misread the shift, what it corrected, and why the strategic question still remained open in 2022."
                    zh="以一般讀者為中心重建本案例：中國市場究竟變了甚麼、P&G 誤判在何處、後來如何修正，以及為何到 2022 年核心策略問題仍未完全結束。"
                  />
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <MetricCard
                    mode={mode}
                    labelEn="Global sales, 2021"
                    labelZh="2021 全球銷售"
                    value="USD 76.1B"
                    noteEn="After narrowing the portfolio to 65 brands."
                    noteZh="在品牌組合縮減至 65 個後。"
                  />
                  <MetricCard
                    mode={mode}
                    labelEn="Greater China share"
                    labelZh="大中華區占比"
                    value="10%"
                    noteEn="Of global sales in 2021."
                    noteZh="2021 年占全球銷售比重。"
                  />
                  <MetricCard
                    mode={mode}
                    labelEn="Urban e-commerce share"
                    labelZh="都市電商占比"
                    value="30.2%"
                    noteEn="Up from 2.1% in 2012."
                    noteZh="相較 2012 年的 2.1% 大幅提升。"
                  />
                </div>
              </div>

              <div className="rounded-[28px] border border-stone-200 bg-[#FFFEFC] p-5 md:p-6">
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-stone-900">
                  <Icon name="book" className="h-4 w-4" />
                  <T mode={mode} en="How this page is structured" zh="本頁閱讀方式" />
                </div>
                <div className="space-y-3 text-sm leading-7 text-stone-700">
                  <div className="rounded-2xl bg-stone-50 p-3"><EvidenceBadge type="fact" mode={mode} /> <span className="ml-2"><T mode={mode} en="Stated directly in the case or exhibit." zh="案例或圖表中直接載明。" /></span></div>
                  <div className="rounded-2xl bg-stone-50 p-3"><EvidenceBadge type="estimate" mode={mode} /> <span className="ml-2"><T mode={mode} en="Calculated or exhibit-based. Useful, but should be treated carefully." zh="根據圖表推算或整理而來，有價值，但需要保留使用。" /></span></div>
                  <div className="rounded-2xl bg-stone-50 p-3"><EvidenceBadge type="interpretation" mode={mode} /> <span className="ml-2"><T mode={mode} en="Grounded analysis rather than raw case wording." zh="基於案例內容所作的分析判讀，不是原文逐字重述。" /></span></div>
                </div>
                <div className="mt-4 rounded-2xl border border-stone-200 bg-[#FCFAF2] p-4 text-sm leading-7 text-stone-700">
                  <T
                    mode={mode}
                    en="The English layer is the default reading mode. A compact control at the top right opens Chinese-only and parallel bilingual views."
                    zh="本頁預設以英文為主閱讀。右上角以低干擾方式收納語言切換，可切換為純中文或中英同步對照。"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="mt-6">
          <Navigation mode={mode} sections={sectionLinks} />
        </div>

        <div className="space-y-6">
          <Section
            id="overview"
            mode={mode}
            icon="compass"
            eyebrowEn="Case thesis"
            eyebrowZh="案例主旨"
            titleEn="The cleanest reading of the case"
            titleZh="最乾淨也最穩的案例讀法"
            subtitleEn="The page starts with the big picture first, then moves into evidence, market shift, strategic misread, correction, and unresolved tension."
            subtitleZh="先從大局進入，再逐步展開事實、環境變化、誤判、修正，以及最後仍未消失的策略張力。"
          >
            <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
              <TextBlock
                mode={mode}
                evidence="interpretation"
                en={memo.plainEnglish}
                zh={memo.plainChinese}
              />
              <div className="rounded-3xl border border-stone-200 bg-white p-5">
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-stone-900">
                  <Icon name="target" className="h-4 w-4" />
                  <T mode={mode} en="Core issue in one line" zh="一句話抓核心" />
                </div>
                <p className="text-sm leading-7 text-stone-700">
                  <T
                    mode={mode}
                    en="P&G was still powerful in China. The question was whether its historical system still matched the market it was now facing."
                    zh="P&G 在中國仍然很強，但真正的問題是：它過去成功的系統，是否仍適配眼前這個已經變了的市場。"
                  />
                </p>
                <div className="mt-4 grid gap-2">
                  <div className="rounded-2xl bg-stone-50 p-3 text-sm text-stone-700"><strong className="text-stone-900"><T mode={mode} en="Not primarily about" zh="不是主要在講" /></strong> <T mode={mode} en="survival, collapse, or simple execution failure." zh="生存危機、全面崩潰，或單純執行差。" /></div>
                  <div className="rounded-2xl bg-stone-50 p-3 text-sm text-stone-700"><strong className="text-stone-900"><T mode={mode} en="Primarily about" zh="主要在講" /></strong> <T mode={mode} en="strategic fit under premiumization, digitization, and local fragmentation." zh="在高端化、數位化與本地碎片化之下的策略適配。" /></div>
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-4 lg:grid-cols-2">
              <div className="rounded-3xl border border-stone-200 bg-white p-5 md:p-6">
                <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-stone-900">
                  <Icon name="globe" className="h-4 w-4" />
                  <T mode={mode} en="Why China mattered inside P&G" zh="為何中國對 P&G 特別重要" />
                </div>
                <div className="space-y-4">
                  {geoMix.map((item) => (
                    <MiniBar
                      key={item.labelEn}
                      mode={mode}
                      labelEn={item.labelEn}
                      labelZh={item.labelZh}
                      value={item.value}
                      tone={item.tone}
                    />
                  ))}
                </div>
                <div className="mt-4 rounded-2xl bg-stone-50 p-4 text-sm leading-7 text-stone-700">
                  <T
                    mode={mode}
                    en="China was not a side market. In 2021 it represented 10% of sales, and the case also frames China as strategically important because P&G had lower emerging-market exposure than some major peers."
                    zh="中國並不是附帶市場。2021 年其占全球銷售 10%，而且相較部分主要競爭者，P&G 在新興市場的整體暴露本就較低，因此中國對其成長敘事更關鍵。"
                  />
                </div>
              </div>

              <div className="rounded-3xl border border-stone-200 bg-white p-5 md:p-6">
                <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-stone-900">
                  <Icon name="box" className="h-4 w-4" />
                  <T mode={mode} en="P&G product mix, 2021" zh="P&G 2021 產品結構" />
                </div>
                <div className="space-y-4">
                  {productMix.map((item) => (
                    <MiniBar
                      key={item.labelEn}
                      mode={mode}
                      labelEn={item.labelEn}
                      labelZh={item.labelZh}
                      value={item.value}
                      tone={item.tone}
                    />
                  ))}
                </div>
                <div className="mt-4 rounded-2xl bg-stone-50 p-4 text-sm leading-7 text-stone-700">
                  <T
                    mode={mode}
                    en="This helps explain why China mattered operationally too. The company was not entering as a niche beauty house. It was bringing a full consumer system with large category exposure."
                    zh="這也說明中國對 P&G 不只是財務重要，更是營運級的重要。它不是以單一高端美妝品牌姿態進入，而是帶著完整的大眾消費品體系進場。"
                  />
                </div>
              </div>
            </div>
          </Section>

          <Section
            id="timeline"
            mode={mode}
            icon="layers"
            eyebrowEn="Build, misfit, correction"
            eyebrowZh="建立、失配、修正"
            titleEn="From category builder to strategic lag, then back to correction"
            titleZh="從品類建立者，到策略落後，再到重新修正"
            subtitleEn="The timeline matters because the case becomes much clearer once the sequence is visible."
            subtitleZh="這條時間線非常重要。當順序被看清楚後，整個案例就會明朗很多。"
          >
            <Timeline mode={mode} items={timelineItems} />

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <MetricCard mode={mode} labelEn="China sales, 1991" labelZh="1991 中國銷售" value="USD 50M" noteEn="Early stage" noteZh="初期規模" />
              <MetricCard mode={mode} labelEn="China sales, 2009" labelZh="2009 中國銷售" value="USD 5B" noteEn="Built through category creation and national expansion" noteZh="透過品類建立與全國擴張而成" />
              <MetricCard mode={mode} labelEn="Urban household reach" labelZh="都市家庭滲透" value="91.4%" noteEn="P&G still reached 172 million urban households in 2021" noteZh="2021 年仍觸及 1.72 億個都市家庭" />
            </div>

            <div className="mt-5 rounded-3xl border border-stone-200 bg-white p-5 md:p-6">
              <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-stone-900">
                <Icon name="building" className="h-4 w-4" />
                <T mode={mode} en="What P&G originally built in China" zh="P&G 最初在中國建立了甚麼" />
              </div>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-2xl bg-stone-50 p-4 text-sm leading-7 text-stone-700"><strong className="text-stone-900"><T mode={mode} en="Category formation" zh="品類建立" /></strong><br /><T mode={mode} en="The case credits P&G with pioneering packaged shampoo, disposable diapers, and modern toothpaste in mainland China." zh="案例明確指出，P&G 在大陸地區率先推動了包裝洗髮精、拋棄式紙尿褲與現代牙膏等品類。" /></div>
                <div className="rounded-2xl bg-stone-50 p-4 text-sm leading-7 text-stone-700"><strong className="text-stone-900"><T mode={mode} en="Distribution depth" zh="配銷深度" /></strong><br /><T mode={mode} en="More than 500,000 stores, nearly 150 distribution centers, and expansion well beyond the major coastal cities." zh="超過 50 萬家門市、近 150 個配銷中心，並深入主要沿海城市之外的多層級市場。" /></div>
                <div className="rounded-2xl bg-stone-50 p-4 text-sm leading-7 text-stone-700"><strong className="text-stone-900"><T mode={mode} en="Supplier and operating system" zh="供應商與營運系統" /></strong><br /><T mode={mode} en="P&G trained distributors, built sourcing advantages, and localized equipment assembly to reduce line costs." zh="P&G 不只鋪貨，也訓練經銷商、建立採購優勢，並在上海發展設備組裝能力以降低產線成本。" /></div>
                <div className="rounded-2xl bg-stone-50 p-4 text-sm leading-7 text-stone-700"><strong className="text-stone-900"><T mode={mode} en="National scale" zh="全國規模" /></strong><br /><T mode={mode} en="By 2010, manufacturing, technical, and R&D assets in China were already deep and broad." zh="到 2010 年為止，P&G 在中國的製造、技術與研發資產已相當完整。" /></div>
              </div>
            </div>
          </Section>

          <Section
            id="market"
            mode={mode}
            icon="chart"
            eyebrowEn="Environment shift"
            eyebrowZh="環境變化"
            titleEn="What changed in China"
            titleZh="中國市場究竟變了甚麼"
            subtitleEn="The case points to three structural shifts: premiumization, channel transformation, and a tougher environment for broad incumbents."
            subtitleZh="案例最重要的市場變化可濃縮為三項：高端化、通路轉型，以及大品牌護城河被重新改寫。"
          >
            <div className="grid gap-4 lg:grid-cols-3">
              <MetricCard mode={mode} labelEn="China FMCG market" labelZh="中國 FMCG 市場" value="RMB 1,387B" noteEn="Kantar estimate for 2020, about USD 201B" noteZh="2020 年 Kantar 估計，約 2,010 億美元" />
              <MetricCard mode={mode} labelEn="Urban population" labelZh="都市人口" value="914M" noteEn="By 2021" noteZh="至 2021 年" />
              <MetricCard mode={mode} labelEn="Digital FMCG families" labelZh="數位購買家庭" value="93%" noteEn="Urban families buying FMCG through digital channels" noteZh="透過數位通路購買 FMCG 的都市家庭占比" />
            </div>

            <div className="mt-5 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-4">
                <TextBlock
                  mode={mode}
                  evidence="fact"
                  en="The most important demand-side shift was premiumization. By the late 2010s, roughly half of revenue in several FMCG categories was coming from the top two price tiers, and nearly all growth was concentrated there."
                  zh="需求面最重要的變化是高端化。到 2010 年代後期，多個 FMCG 品類已有約一半營收來自最高兩個價格帶，且幾乎所有成長也集中在那裡。"
                />
                <TextBlock
                  mode={mode}
                  evidence="fact"
                  en="Jon Moeller framed this starkly: premium and super-premium tiers in China moved from around 2% in the 1990s to above 50% by 2016."
                  zh="Jon Moeller 的說法相當直接：1990 年代中國市場中高端與超高端價格帶只占約 2%，到 2016 年已超過 50%。"
                />
                <TextBlock
                  mode={mode}
                  evidence="interpretation"
                  en="That single fact changes the whole reading of the case. A company built to win the broad middle can suddenly find itself positioned in the least attractive part of the market."
                  zh="這一點足以改寫整個案例的閱讀方式。一家原本擅長掌握大眾中段市場的公司，可能忽然發現自己卡在最不吸引人的位置。"
                />
              </div>

              <ChannelShift mode={mode} before={channel2012} after={channel2021} />
            </div>

            <div className="mt-5 rounded-3xl border border-stone-200 bg-white p-5 md:p-6">
              <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-stone-900">
                <Icon name="phone" className="h-4 w-4" />
                <T mode={mode} en="Why channel change mattered strategically" zh="通路變化為何是策略核心" />
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl bg-stone-50 p-4 text-sm leading-7 text-stone-700"><strong className="text-stone-900"><T mode={mode} en="Lower entry barriers" zh="降低進入門檻" /></strong><br /><T mode={mode} en="Digital shelves gave niche brands much more visibility than older offline systems did." zh="數位貨架讓小眾品牌獲得遠比傳統線下通路更高的可見度。" /></div>
                <div className="rounded-2xl bg-stone-50 p-4 text-sm leading-7 text-stone-700"><strong className="text-stone-900"><T mode={mode} en="Faster trend cycles" zh="趨勢週期更快" /></strong><br /><T mode={mode} en="Short video, live commerce, and social recommendation rewarded speed, novelty, and sharper stories." zh="短影音、直播電商與社群推薦更獎勵速度、新鮮感與更尖銳的品牌敘事。" /></div>
                <div className="rounded-2xl bg-stone-50 p-4 text-sm leading-7 text-stone-700"><strong className="text-stone-900"><T mode={mode} en="Weaker incumbent protection" zh="既有龍頭保護力減弱" /></strong><br /><T mode={mode} en="Scale still mattered, but it no longer guaranteed the same kind of control over reach and attention." zh="規模仍然重要，但已不再像過去那樣，自動保障觸及率與注意力優勢。" /></div>
              </div>
            </div>
          </Section>

          <Section
            id="misread"
            mode={mode}
            icon="warning"
            eyebrowEn="Strategic gap"
            eyebrowZh="策略落差"
            titleEn="Where P&G misread the market, and how it corrected"
            titleZh="P&G 在哪裡看錯，又如何補救"
            subtitleEn="The case is unusually direct here. P&G traded down while the Chinese consumer moved up."
            subtitleZh="案例在這裡其實相當直接：P&G 往下走，但中國消費者往上走。"
          >
            <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="space-y-4">
                <TextBlock
                  mode={mode}
                  evidence="fact"
                  en="The diaper example makes the misread visible. Chinese demand shifted toward premium imported underpants-style products, especially from Japan, while P&G held back because of cost and price concerns. Pampers share fell from 28.8% in 2013 to 24.3% in 2014."
                  zh="紙尿褲是最清楚的案例。中國需求轉向高端進口、褲型設計，尤其偏好日本產品，但 P&G 因成本與售價考量未能及時跟上，導致幫寶適市占率自 2013 年 28.8% 降至 2014 年 24.3%。"
                />
                <TextBlock
                  mode={mode}
                  evidence="fact"
                  en="A.G. Lafley summarized the mistake bluntly: P&G was stuck in the middle of the market. David Taylor later described the company as having treated China too much like a developing market instead of the most discerning market in the world."
                  zh="A.G. Lafley 的總結很直接：P&G 卡在市場中段。David Taylor 後來也承認，公司過去太把中國當成開發中國家市場，而不是世界上最挑剔的市場。"
                />
                <TextBlock
                  mode={mode}
                  evidence="interpretation"
                  en="This matters because it was not only a pricing error. It was a mental-model error about who the Chinese consumer had become."
                  zh="這點之所以重要，在於它不只是定價判斷失誤，而是對中國消費者已經變成甚麼樣子，整體認知模型都落後了。"
                />
              </div>
              <ComparisonTable mode={mode} rows={compareRows} />
            </div>

            <div className="mt-5 rounded-3xl border border-stone-200 bg-white p-5 md:p-6">
              <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-stone-900">
                <Icon name="refresh" className="h-4 w-4" />
                <T mode={mode} en="The correction after 2016" zh="2016 年後的修正" />
              </div>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-2xl bg-stone-50 p-4 text-sm leading-7 text-stone-700"><BrandToken label="Premium" tone="plum" /><div className="mt-3"><T mode={mode} en="Premium diapers, detergent pods, new premium toothpastes, upgraded detergents." zh="高端紙尿褲、洗衣膠囊、新高端牙膏、升級型洗劑。" /></div></div>
                <div className="rounded-2xl bg-stone-50 p-4 text-sm leading-7 text-stone-700"><BrandToken label="Digital" tone="moss" /><div className="mt-3"><T mode={mode} en="More online advertising, lower reliance on television, stronger e-commerce execution, and over USD 1 billion in China e-commerce by 2018." zh="增加線上廣告、降低對電視依賴、強化電商執行力，至 2018 年在中國電商營收已超過 10 億美元。" /></div></div>
                <div className="rounded-2xl bg-stone-50 p-4 text-sm leading-7 text-stone-700"><BrandToken label="Local" tone="amber" /><div className="mt-3"><T mode={mode} en="Localized offerings such as the revival of Oriental Therapy, positioned around Chinese herbal references." zh="推出更在地化產品，例如重啟以中草本概念包裝的 Oriental Therapy。" /></div></div>
                <div className="rounded-2xl bg-stone-50 p-4 text-sm leading-7 text-stone-700"><BrandToken label="Partner" tone="blue" /><div className="mt-3"><T mode={mode} en="JD Super cooperation on data, promotions, omni-channel, supply chain efficiency, and recycling programs." zh="與京東超市合作數據、促銷、全通路、供應鏈效率與回收計畫。" /></div></div>
              </div>
            </div>
          </Section>

          <Section
            id="strength"
            mode={mode}
            icon="building"
            eyebrowEn="What still held"
            eyebrowZh="仍然成立的優勢"
            titleEn="Why the case is strategically interesting: P&G was still strong"
            titleZh="這個案例真正有意思之處：P&G 其實仍然很強"
            subtitleEn="A weak company falling behind is not surprising. A powerful company losing automatic fit is much more interesting."
            subtitleZh="一家弱公司落後並不稀奇。一家本來很強的公司卻失去自動適配能力，才真正值得分析。"
          >
            <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-3xl border border-stone-200 bg-white p-5 md:p-6">
                <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-stone-900">
                  <Icon name="spark" className="h-4 w-4" />
                  <T mode={mode} en="Category leadership snapshots" zh="品類領導地位截面" />
                </div>
                <div className="space-y-5">
                  {leadingCategories.map((item) => (
                    <div key={item.titleEn} className="rounded-2xl bg-stone-50 p-4">
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <div className="text-sm font-semibold text-stone-900"><T mode={mode} en={item.titleEn} zh={item.titleZh} /></div>
                        <BrandToken label={item.market} tone={item.tone} />
                      </div>
                      <MiniBar mode={mode} labelEn="P&G share" labelZh="P&G 市占" value={item.share} noteEn={item.noteEn} noteZh={item.noteZh} tone={item.tone} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-3xl border border-stone-200 bg-white p-5 md:p-6">
                  <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-stone-900">
                    <Icon name="people" className="h-4 w-4" />
                    <T mode={mode} en="Urban household penetration, 2021" zh="2021 年都市家庭滲透率" />
                  </div>
                  <div className="space-y-4">
                    {penetrationData.map((item) => (
                      <MiniBar key={item.labelEn} mode={mode} labelEn={item.labelEn} labelZh={item.labelZh} value={item.value} tone={item.tone} />
                    ))}
                  </div>
                  <div className="mt-4 rounded-2xl bg-stone-50 p-4 text-sm leading-7 text-stone-700">
                    <T
                      mode={mode}
                      en="P&G still reached 172 million urban households. That scale is real. It just no longer guaranteed uncontested dominance."
                      zh="P&G 仍觸及 1.72 億個都市家庭。這種規模是真實優勢，只是它已不再等於無可爭議的壟斷性優勢。"
                    />
                  </div>
                </div>

                <div className="rounded-3xl border border-stone-200 bg-white p-5 md:p-6">
                  <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-stone-900">
                    <Icon name="warning" className="h-4 w-4" />
                    <T mode={mode} en="Why observers were still uneasy" zh="為何外部觀察者仍感到不安" />
                  </div>
                  <div className="space-y-4 text-sm leading-7 text-stone-700">
                    <div className="rounded-2xl bg-stone-50 p-4"><strong className="text-stone-900">Bernhard Wessels</strong><br /><T mode={mode} en="China had come full circle. Foreignness alone no longer conferred the same advantage. Consumers increasingly wanted brands that felt connected to Chinese culture while still carrying modern credibility." zh="中國市場像是走完一圈。外商品牌身分本身已不再自動構成優勢。消費者愈來愈想要帶有中國文化連結、但同時保有現代可信度的品牌。" /></div>
                    <div className="rounded-2xl bg-stone-50 p-4"><strong className="text-stone-900">Frank Lavin</strong><br /><T mode={mode} en="In the e-commerce era, scale no longer meant scope in the old sense. A USD 20 million toothpaste brand could sit on the same digital shelf as a USD 1 billion brand." zh="在電商時代，規模已不再像過去那樣自然轉化為廣度優勢。一個 2,000 萬美元的牙膏品牌，也可能與 10 億美元品牌出現在同一個數位貨架上。" /></div>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section
            id="finance"
            mode={mode}
            icon="money"
            eyebrowEn="Numbers that matter"
            eyebrowZh="真正重要的數字"
            titleEn="Financial context: enough to support the narrative, not enough to overstate it"
            titleZh="財務脈絡：足以支撐敘事，但不宜過度延伸"
            subtitleEn="The financial data helps confirm the broad pattern. It does not justify claiming every annual move came from one managerial choice."
            subtitleZh="財務資料足以支持大方向，但不表示每一個年度變化都能直接歸因於單一管理動作。"
          >
            <div className="grid gap-4 md:grid-cols-3">
              <MetricCard mode={mode} labelEn="Revenue, 2009" labelZh="2009 營收" value="USD 76,694M" noteEn="Global" noteZh="全球" />
              <MetricCard mode={mode} labelEn="Revenue, 2021" labelZh="2021 營收" value="USD 76,118M" noteEn="Global, broadly flat versus 2009" noteZh="全球，相較 2009 大致持平" />
              <MetricCard mode={mode} labelEn="Return on equity, 2021" labelZh="2021 股東權益報酬率" value="30.1%" noteEn="Exhibit 2 end-of-period strength" noteZh="圖表 2 顯示期末表現偏強" />
            </div>

            <div className="mt-5 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
              <SalesTrend mode={mode} data={salesTrendData} />
              <div className="space-y-4">
                <TextBlock
                  mode={mode}
                  evidence="estimate"
                  en="Estimated Greater China sales show a dip in 2016 and 2017, then a stronger recovery from 2018 onward, culminating in an estimated USD 7.612 billion in 2021."
                  zh="圖表估算的大中華區銷售額顯示，2016 與 2017 年有下滑，2018 年後逐步回升，至 2021 年約達 76.12 億美元。"
                />
                <TextBlock
                  mode={mode}
                  evidence="fact"
                  en="By the year ending June 30, 2021, China accounted for roughly 10% of P&G global sales and about 30% of the prior year's global sales growth."
                  zh="截至 2021 年 6 月 30 日年度，中國約占 P&G 全球銷售 10%，且貢獻前一年度全球銷售成長的 30%。"
                />
                <TextBlock
                  mode={mode}
                  evidence="interpretation"
                  en="That pattern is consistent with a company that misread an inflection point, then recovered materially after strategic correction."
                  zh="這樣的走勢，與一家公司先在轉折點看錯，之後又透過策略修正而明顯回穩的敘事是吻合的。"
                />
              </div>
            </div>
          </Section>

          <Section
            id="judgment"
            mode={mode}
            icon="target"
            eyebrowEn="Synthesis"
            eyebrowZh="綜合判斷"
            titleEn="Final judgment"
            titleZh="最終判斷"
            subtitleEn="The strongest answer is not that P&G was weak, nor that it was simply fine. It was powerful, corrected, and still structurally challenged."
            subtitleZh="最穩的結論不是 P&G 很弱，也不是一切都沒問題，而是：它仍然強大，確實完成修正，但所處市場也已在結構上變得更難。"
          >
            <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-3xl border border-stone-200 bg-white p-5 md:p-6">
                <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-stone-900">
                  <Icon name="check" className="h-4 w-4" />
                  <T mode={mode} en="The clean final reading" zh="最乾淨的最終讀法" />
                </div>
                <div className="space-y-4 text-sm leading-7 text-stone-700 md:text-[15px]">
                  <p><T mode={mode} en="P&G entered early, built categories, built infrastructure, trained the system, and became one of the defining foreign FMCG companies in China. Then China changed. It premiumized faster than P&G expected, digitized faster than P&G's traditional model could absorb, and opened more space for niche and local brands with stronger cultural fit or digital agility." zh="P&G 很早就進入中國，建立品類、建立基礎設施、訓練整個系統，也成為最具代表性的外商 FMCG 企業之一。後來變的是中國市場本身。它高端化的速度比 P&G 預期更快，數位化的速度也比 P&G 傳統模式更容易承接的還快，並且給了小眾品牌與本地品牌更大的生存與擴張空間。" /></p>
                  <p><T mode={mode} en="P&G corrected meaningfully through premiumization, e-commerce, localization, and renewed investment. By 2022 it was still large, highly penetrated, and strong in multiple categories. But the case leaves the key question open for a reason: can a company built to dominate the broad middle continue to lead in a market where digital competition weakens incumbent protection and the most compelling brands often feel more local, more specific, and more current?" zh="P&G 後來確實透過高端化、電商、在地化與重新投資做出明顯修正。到 2022 年，它仍然規模龐大、滲透率極高，也仍在多個品類維持強勢。但案例之所以沒有把答案寫死，是因為那個核心問題仍然存在：一個原本靠掌握廣泛中段市場而成功的公司，是否仍能持續領先一個數位競爭削弱既有保護、而且最有吸引力的品牌往往更在地、更聚焦、更符合當下語境的市場？" /></p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-3xl border border-stone-200 bg-white p-5 md:p-6">
                  <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-stone-900">
                    <Icon name="arrowRight" className="h-4 w-4" />
                    <T mode={mode} en="One-paragraph discussion version" zh="課堂或討論可直接使用的一段版" />
                  </div>
                  <p className="text-sm leading-7 text-stone-700">
                    <T
                      mode={mode}
                      en="P&G in China is a case about a very strong company confronting a market that no longer rewarded its old formula as automatically as before. It entered early, created categories, built distribution and supplier systems, and became a dominant foreign FMCG player. But China later became more premium, more digital, more fragmented, and more locally demanding. P&G initially misread that shift, especially in diapers, premiumization, and channels, then corrected through premium products, stronger e-commerce, local product development, and broader investment. By 2022 it remained large, highly penetrated, and strong in several categories. The unresolved issue is whether those corrections are enough in a market where scale still matters, but no longer protects incumbents the way it once did."
                      zh="P&G in China 這個案例最值得記住的地方在於：它描述的不是一家弱公司，而是一家原本非常強的公司，如何面對一個不再自動獎勵其舊公式的市場。P&G 早期進入中國，建立品類、配銷與供應鏈系統，也成為外商 FMCG 龍頭之一。但後來中國市場變得更高端、更數位、更碎片，也更要求在地適配。P&G 起初在紙尿褲、高端化與通路變化上判斷落後，之後再透過高端產品、強化電商、本地化產品開發與更廣泛投資進行修正。到 2022 年，它仍然規模大、滲透率高，也在多個品類保持強勢。真正未完的問題是：在一個規模仍重要、但已不再像過去那樣保護龍頭的市場中，這些修正是否足夠。"
                    />
                  </p>
                </div>

                <div className="rounded-3xl border border-stone-200 bg-white p-5 md:p-6">
                  <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-stone-900">
                    <Icon name="book" className="h-4 w-4" />
                    <T mode={mode} en="What was worth preserving and adding" zh="本次重建特別保留與補強之處" />
                  </div>
                  <div className="space-y-3 text-sm leading-7 text-stone-700">
                    <div className="rounded-2xl bg-stone-50 p-3"><T mode={mode} en="The evidence hierarchy is explicit, so readers can separate raw fact from exhibit calculation and interpretation." zh="明確標示證據層級，讓讀者可以區分原始事實、圖表估算與分析判讀。" /></div>
                    <div className="rounded-2xl bg-stone-50 p-3"><T mode={mode} en="The channel-data caution is retained, so the visual does not overclaim precision where the exhibit itself warns against it." zh="保留通路圖表的使用保留，避免視覺化過度宣稱圖表本身其實不支持的精確性。" /></div>
                    <div className="rounded-2xl bg-stone-50 p-3"><T mode={mode} en="The page keeps what many summaries miss: P&G's original nation-building role in categories, distribution, and supplier training. Without that, the later mismatch looks too shallow." zh="保留許多摘要容易忽略的重點：P&G 早期對品類、配銷與供應商系統的建立作用。少了這一層，後面的失配就會顯得太表面。" /></div>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}
