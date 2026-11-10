/* @ds-bundle: {"format":4,"namespace":"AppKit","components":[{"name":"Icon"},{"name":"IconTile"},{"name":"Avatar"},{"name":"Badge"},{"name":"Chip"},{"name":"Button"},{"name":"IconButton"},{"name":"PagerArrows"},{"name":"SearchField"},{"name":"SelectField"},{"name":"SideNav"},{"name":"MenuList"},{"name":"TopNav"},{"name":"Announcement"},{"name":"PageHeader"},{"name":"PillTabs"},{"name":"IconDock"},{"name":"PhoneFrame"},{"name":"SectionHeader"},{"name":"ListItem"},{"name":"InfoPill"},{"name":"Card"},{"name":"UserChip"},{"name":"ClockBar"},{"name":"LogoStrip"},{"name":"DotField"},{"name":"FlowCanvas"},{"name":"FlowStart"},{"name":"FlowNode"},{"name":"FlowCondition"},{"name":"FlowConnector"},{"name":"StatCard"},{"name":"TickBar"},{"name":"StackedBar"},{"name":"Legend"},{"name":"Donut"},{"name":"KeyValueStat"},{"name":"TimelineMarker"},{"name":"EventPill"},{"name":"PanelTitle"},{"name":"CommentItem"},{"name":"CommentThread"},{"name":"Composer"},{"name":"FileTile"},{"name":"PersonRow"},{"name":"ActionRow"},{"name":"FilePreview"}]} */
(function () {
var R = window.React, h = R.createElement, REG = {};
function reg(n, f) { REG[n] = f; return f; }
function cx() { return Array.prototype.filter.call(arguments, Boolean).join(' '); }
function circ(x, y, r) { return 'M' + (x - r) + ' ' + y + 'a' + r + ' ' + r + ' 0 1 0 ' + (2 * r) + ' 0a' + r + ' ' + r + ' 0 1 0 ' + (-2 * r) + ' 0'; }
function sty(p, extra) { return Object.assign({}, extra || {}, p.style || {}); }
function lcg(s) { return function () { s = (s * 1664525 + 1013904223) % 4294967296; return s / 4294967296; }; }
function arr(n) { var a = [], i; for (i = 0; i < n; i++) a.push(i); return a; }
var TONES = { accent: 'var(--accent)', amber: 'var(--chart-2)', teal: 'var(--chart-3)', off: 'var(--chart-off)', ink: 'var(--ink)', mid: 'var(--tile)', paper: 'var(--paper-2)', night: 'var(--night)', faint: 'var(--ink-3)', highlight: 'var(--highlight)', light: 'var(--on-night)' };
function tn(t, d) { return TONES[t] || t || TONES[d || 'accent']; }

var ICONS = {};
ICONS.home = 'M4 11 12 4l8 7v8a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1z';
ICONS.folder = 'M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z';
ICONS.agent = 'M12 4v3M8 7h8a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3zM9.5 12v1.5M14.5 12v1.5M3 12v3M21 12v3';
ICONS.template = 'M4 5h16v14H4zM4 10h16M10 10v9';
ICONS.plug = 'M9 3v5M15 3v5M7 8h10v3a5 5 0 0 1-10 0zM12 16v5';
ICONS.runs = 'M4 5h16v14H4zM7 14l3-3 2 2 4-4';
ICONS.analytics = 'M4 4v16h16M8 15l3-4 3 2 4-6';
ICONS.settings = circ(12, 12, 3) + 'M19.4 13a7.6 7.6 0 0 0 0-2l2-1.5-2-3.4-2.3 1a7 7 0 0 0-1.7-1L15 3.5h-4l-.4 2.6a7 7 0 0 0-1.7 1l-2.3-1-2 3.4 2 1.5a7.6 7.6 0 0 0 0 2l-2 1.5 2 3.4 2.3-1a7 7 0 0 0 1.7 1l.4 2.6h4l.4-2.6a7 7 0 0 0 1.7-1l2.3 1 2-3.4z';
ICONS.search = circ(11, 11, 7) + 'M20 20l-4-4';
ICONS.star = 'M12 3.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L12 16.9 6.7 19.6l1-5.8L3.5 9.7l5.9-.9z';
ICONS.chat = 'M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-8l-4 3.5V16H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM9 10.5h.01M12 10.5h.01M15 10.5h.01';
ICONS.link = 'M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1';
ICONS.clock = circ(12, 12, 8) + 'M12 8v4.5l3 1.5';
ICONS.bolt = 'M13 3 6 13.5h5L10 21l8-11h-5.2z';
ICONS.sort = 'M4 6h8M4 11h6M4 16h4M16 6v12m-3-3 3 3 3-3';
ICONS.extract = 'M7 3h7l5 5v13H7zM14 3v5h5M10 14h6M10 17h4';
ICONS.sparkle = 'M12 3c.5 3.6 2.4 5.5 6 6-3.6.5-5.5 2.4-6 6-.5-3.6-2.4-5.5-6-6 3.6-.5 5.5-2.4 6-6zM18 15c.2 1.5 1 2.3 2.5 2.5-1.5.2-2.3 1-2.5 2.5-.2-1.5-1-2.3-2.5-2.5 1.5-.2 2.3-1 2.5-2.5z';
ICONS.summarize = 'M5 7h14M5 12h14M5 17h9';
ICONS.send = 'M4 12 20 4l-6 16-3-7z';
ICONS.check = 'M5 12.5l4.5 4.5L19 7.5';
ICONS.down = 'M6 9l6 6 6-6';
ICONS.up = 'M6 15l6-6 6 6';
ICONS.left = 'M15 6l-6 6 6 6';
ICONS.right = 'M9 6l6 6-6 6';
ICONS.arrow = 'M5 12h14m-5-5 5 5-5 5';
ICONS.arrowUR = 'M7 17 17 7M9 7h8v8';
ICONS.arrowUp = 'M12 19V5m-6 6 6-6 6 6';
ICONS.branch = circ(7, 5, 1.8) + circ(7, 19, 1.8) + circ(17, 9, 1.8) + 'M7 6.8v10.4M7 14c0-3 2-5 5-5h3.2';
ICONS.play = 'M8 5.5v13l10-6.5z';
ICONS.info = circ(12, 12, 8) + 'M12 11v5M12 8h.01';
ICONS.reply = 'M10 7 5 12l5 5M5 12h9a5 5 0 0 1 5 5v1';
ICONS.share = 'M12 15V4M8 8l4-4 4 4M5 13v6h14v-6';
ICONS.edit = 'M4 20h4L19 9l-4-4L4 16zM13.5 6.5l4 4';
ICONS.trash = 'M5 7h14M10 7V4h4v3M7 7l1 13h8l1-13M10 11v6M14 11v6';
ICONS.pill = 'M9 4.5l10.5 10.5a3.5 3.5 0 0 1-5 5L4 9.5a3.5 3.5 0 0 1 5-5zM8.5 9.5l5 5';
ICONS.flask = 'M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3M8 15h8';
ICONS.visits = 'M9 4h6v3H9zM7 5.5H6a1 1 0 0 0-1 1V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6.5a1 1 0 0 0-1-1h-1M9 12h6M9 16h4';
ICONS.sun = circ(12, 12, 4) + 'M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2';
ICONS.doc = 'M7 3h7l5 5v13H7zM14 3v5h5';
ICONS.bell = 'M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15zM10 20a2 2 0 0 0 4 0';
ICONS.menu = 'M4 7h16M4 12h10M4 17h16';
ICONS.close = 'M6 6l12 12M18 6 6 18';
ICONS.plus = 'M12 5v14M5 12h14';
ICONS.filter = 'M4 7h9M17 7h3M4 17h3M11 17h9M15 5v4M9 15v4';
ICONS.toggle = 'M8 8h8a4 4 0 0 1 0 8H8a4 4 0 0 1 0-8z' + circ(16, 12, 1.6);
ICONS.user = circ(12, 8, 3.5) + 'M5 20a7 7 0 0 1 14 0';
ICONS.models = 'M5 5h4v4H5zM15 5h4v4h-4zM5 15h4v4H5zM15 15h4v4h-4zM10 7h4M7 10v4M17 10v4M10 17h4';
ICONS.workflows = 'M3 10h4v4H3zM13 4h5v4h-5zM13 16h5v4h-5zM7 12h3V6h3M10 12v6h3';
ICONS.metrics = 'M5 20V11M10 20V6M15 20V13M20 20V9';
ICONS.attach = 'M20 12l-7.5 7.5a5 5 0 0 1-7-7L13 5a3.5 3.5 0 0 1 5 5l-7.5 7.5a2 2 0 0 1-3-3L14 8';
ICONS.mic = 'M12 4a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V7a3 3 0 0 0-3-3zM6 12a6 6 0 0 0 12 0M12 18v3';
ICONS.smile = circ(12, 12, 8) + 'M8.5 14a4 4 0 0 0 7 0M9 10h.01M15 10h.01';
ICONS.warning = 'M12 4 3 20h18zM12 10v5M12 17.5h.01';
ICONS.pie = 'M12 3v9h9a9 9 0 1 1-9-9zM15 3.5A9 9 0 0 1 20.5 9H15z';
ICONS.activity = 'M3 12h4l3-7 4 14 3-7h4';
ICONS.training = 'M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18';
ICONS.cube = 'M12 3l8 4.5v9L12 21l-8-4.5v-9zM12 12l8-4.5M12 12v9M12 12 4 7.5';
ICONS.card = 'M4 7h16v10H4zM4 11h16M7 15h3';
ICONS.order = 'M5 4h14v16H5zM9 9h6M9 13h6M9 17h3';
ICONS.mail = 'M4 6h16v12H4zM4 7l8 6 8-6';
ICONS.square = 'M5 5h14v14H5zM11 11h2v2h-2z';
ICONS.download = 'M12 4v11M8 11l4 4 4-4M5 19h14';
ICONS.more = 'M5 12h.01M12 12h.01M19 12h.01';
ICONS.nodes = 'M4 5h5v5H4zM15 14h5v5h-5zM9 7.5h2a3 3 0 0 1 3 3V14';
ICONS.logo = 'M12 3l7.8 4.5v9L12 21l-7.8-4.5v-9zM12 8l3.5 2v4L12 16l-3.5-2v-4z';
ICONS.file = 'M7 3h7l5 5v13H7zM14 3v5h5M10 13h6M10 17h6';
ICONS.triangle = 'M12 6l7 12H5z';
ICONS.triangleDown = 'M12 18 5 6h14z';

reg('Icon', function Icon(p) {
  var s = p.size || 20, d = ICONS[p.name] || ICONS.square;
  return h('svg', { width: s, height: s, viewBox: '0 0 24 24', className: cx('ak-icon', p.className), fill: p.filled ? 'currentColor' : 'none', stroke: 'currentColor', strokeWidth: p.stroke || 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, style: p.style }, h('path', { d: d }));
});
function I(name, size, stroke) { return h(REG.Icon, { name: name, size: size, stroke: stroke }); }

reg('IconTile', function IconTile(p) {
  var s = p.size || 32;
  return h('span', { className: cx('ak-tile', 'ak-tile-' + (p.tone || 'neutral'), p.className), style: sty(p, { width: s, height: s, borderRadius: p.round ? '50%' : undefined }) }, I(p.icon, p.iconSize || Math.round(s * 0.5)));
});
reg('Avatar', function Avatar(p) {
  var s = p.size || 24;
  return h('span', { className: cx('ak-avatar', p.round && 'is-round', 'ak-avatar-' + (p.tone || 'neutral'), p.className), style: sty(p, { width: s, height: s, fontSize: Math.round(s * 0.42) }) }, p.label);
});
reg('Badge', function Badge(p) {
  return h('span', { className: cx('ak-badge', 'ak-badge-' + (p.tone || 'neutral'), p.className), style: p.style }, p.children);
});
reg('Chip', function Chip(p) {
  return h('span', { className: cx('ak-chip', 'ak-chip-' + (p.tone || 'neutral'), p.size === 'sm' && 'is-sm', p.className), style: p.style },
    p.dot && h('i', { className: 'ak-chip-dot' }), p.icon && I(p.icon, 14), p.children);
});
reg('Button', function Button(p) {
  var sm = p.size === 'sm';
  return h('button', { type: 'button', className: cx('ak-btn', 'ak-btn-' + (p.variant || 'primary'), sm && 'ak-btn-sm', p.className), style: p.style },
    p.icon && I(p.icon, sm ? 14 : 16), p.children, p.iconRight && I(p.iconRight, sm ? 14 : 16));
});
reg('IconButton', function IconButton(p) {
  var s = p.size || 36;
  return h('button', { type: 'button', 'aria-label': p.label || p.icon, className: cx('ak-ibtn', 'ak-ibtn-' + (p.variant || 'outline'), p.className), style: sty(p, { width: s, height: s }) }, I(p.icon, p.iconSize || Math.round(s * 0.5)));
});
reg('PagerArrows', function PagerArrows(p) {
  return h('span', { className: cx('ak-pager', p.className), style: p.style }, h('i', null, I('left', 12, 2)), h('i', null, I('right', 12, 2)));
});
reg('SearchField', function SearchField(p) {
  return h('div', { className: cx('ak-field', p.className), style: p.style }, I(p.icon || 'search', 18), h('span', { className: p.value ? 'has-value' : '' }, p.value || p.placeholder || 'Buscar'));
});
reg('SelectField', function SelectField(p) {
  return h('div', { className: cx('ak-select', p.className), style: p.style }, p.icon !== false && I(p.icon || 'folder', 18), h('span', null, p.value), I('down', 16));
});

reg('SideNav', function SideNav(p) {
  var items = p.items || [], foot = p.footer || [];
  function item(it, i) {
    return h('div', { key: i, className: cx('ak-sidenav-item', it.active && 'is-active') }, I(it.icon, 22), h('span', null, it.label));
  }
  return h('nav', { className: cx('ak-sidenav', p.className), style: p.style },
    h('div', { className: 'ak-sidenav-logo' }, I(p.logo || 'logo', 20)),
    items.map(item), h('div', { className: 'ak-sidenav-spacer' }), foot.map(item),
    p.user && h(REG.Avatar, { label: p.user, size: 32, round: true, className: 'ak-sidenav-user' }));
});
reg('MenuList', function MenuList(p) {
  return h('nav', { className: cx('ak-menu', p.className), style: p.style },
    h('div', { className: 'ak-menu-head' },
      p.logo && h('div', { className: 'ak-menu-logo' }, I(p.logo, 30)),
      h('div', { className: 'ak-menu-title' }, p.title),
      p.subtitle && h('div', { className: 'ak-menu-sub' }, p.subtitle)),
    (p.items || []).map(function (it, i) {
      return h('div', { key: i, className: cx('ak-menu-item', it.active && 'is-active') }, I(it.icon, 26), h('span', null, it.label));
    }));
});
reg('TopNav', function TopNav(p) {
  return h('header', { className: cx('ak-topnav', p.className), style: p.style },
    h('div', { className: 'ak-topnav-brand' }, I(p.logo || 'logo', 22), h('span', null, p.brand)),
    h('nav', { className: 'ak-topnav-links' }, (p.links || []).map(function (l, i) {
      var o = typeof l === 'string' ? { label: l } : l;
      return h('span', { key: i, className: cx('ak-topnav-link', o.active && 'is-active') }, o.label, o.menu && I('down', 14));
    })),
    p.action);
});
reg('Announcement', function Announcement(p) {
  return h('div', { className: cx('ak-announce', p.className), style: p.style }, p.badge && h(REG.Badge, { tone: 'new' }, p.badge), h('span', null, p.children));
});
reg('PageHeader', function PageHeader(p) {
  var cr = p.crumbs || [];
  return h('div', { className: cx('ak-phead', p.className), style: p.style },
    p.back !== false && h(REG.IconButton, { icon: 'left', variant: 'outline', label: 'Volver' }),
    h('div', { className: 'ak-phead-main' },
      cr.length > 0 && h('div', { className: 'ak-phead-crumbs' }, cr.map(function (c, i) { return h(R.Fragment, { key: i }, i > 0 && h('b', null, '·'), h('span', null, c)); })),
      h('div', { className: 'ak-phead-title' }, p.title)),
    p.status && h(REG.Chip, { tone: p.status.tone || 'amber', dot: true }, p.status.label));
});
reg('PillTabs', function PillTabs(p) {
  var sm = p.size === 'sm';
  return h('div', { className: cx('ak-ptabs', sm && 'is-sm', p.className), style: p.style }, (p.items || []).map(function (it, i) {
    var o = typeof it === 'string' ? { label: it } : it;
    return h('span', { key: i, className: cx('ak-ptab', p.active === i && 'is-active') }, o.icon && I(o.icon, sm ? 14 : 18), o.label);
  }));
});
reg('IconDock', function IconDock(p) {
  return h('div', { className: cx('ak-dock', p.className), style: p.style }, (p.items || []).map(function (it, i) {
    return h('div', { key: i, className: 'ak-dock-slot' },
      it.tooltip && h('span', { className: 'ak-dock-tip' }, it.tooltip),
      h('span', { className: cx('ak-dock-btn', it.active && 'is-active') }, I(it.icon, 22)));
  }));
});
var SIGNAL = h('svg', { width: 18, height: 12, viewBox: '0 0 18 12', fill: 'currentColor', 'aria-hidden': true }, arr(4).map(function (i) { return h('rect', { key: i, x: i * 5, y: 9 - i * 3, width: 3, height: 3 + i * 3, rx: 0.8 }); }));
var WIFI = h('svg', { width: 18, height: 12, viewBox: '0 0 18 12', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', 'aria-hidden': true }, h('path', { d: 'M1 4.5a11 11 0 0 1 16 0M4 7.5a7 7 0 0 1 10 0M7 10.5a3 3 0 0 1 4 0' }));
var BATTERY = h('svg', { width: 27, height: 12, viewBox: '0 0 27 12', 'aria-hidden': true }, h('rect', { x: 0.5, y: 0.5, width: 22, height: 11, rx: 3, fill: 'none', stroke: 'currentColor', opacity: 0.5 }), h('rect', { x: 2, y: 2, width: 19, height: 8, rx: 1.8, fill: 'currentColor' }), h('rect', { x: 24, y: 4, width: 2, height: 4, rx: 1, fill: 'currentColor', opacity: 0.5 }));
reg('PhoneFrame', function PhoneFrame(p) {
  return h('div', { className: cx('ak-phone', p.className), style: sty(p, { width: p.width || 340 }) },
    h('div', { className: 'ak-phone-bar' }, h('span', null, p.time || '9:41'), h('span', { className: 'ak-phone-icons' }, SIGNAL, WIFI, BATTERY)),
    h('div', { className: 'ak-phone-body' }, p.children),
    p.tabs && h('div', { className: 'ak-phone-tabs' }, p.tabs.map(function (t, i) { return h('div', { key: i, className: cx('ak-phone-tab', t.active && 'is-active') }, I(t.icon, 22), h('span', null, t.label)); })));
});

reg('SectionHeader', function SectionHeader(p) {
  return h('div', { className: cx('ak-sechead', p.className), style: p.style }, h('span', null, p.title), p.count != null && h('em', null, p.count), I(p.open ? 'up' : 'down', 16));
});
reg('ListItem', function ListItem(p) {
  return h('div', { className: cx('ak-litem', p.className), style: p.style },
    h(REG.IconTile, { icon: p.icon, tone: p.tone || 'neutral', size: 36 }),
    h('div', { className: 'ak-litem-t' }, h('b', null, p.title), p.subtitle && h('small', null, p.subtitle)),
    p.starred != null && h('span', { className: cx('ak-litem-star', p.starred && 'is-on') }, h(REG.Icon, { name: 'star', size: 16, filled: p.starred })));
});
reg('InfoPill', function InfoPill(p) {
  return h('div', { className: cx('ak-ipill', p.className), style: p.style }, p.icon && I(p.icon, 16), (p.items || []).map(function (t, i) { return h('span', { key: i }, t); }));
});
reg('Card', function Card(p) {
  return h('div', { className: cx('ak-card', 'ak-card-' + (p.tone || 'surface'), p.className), style: p.style },
    (p.title || p.icon || p.action) && h('div', { className: 'ak-card-head' }, p.icon && I(p.icon, 18), h('b', null, p.title), p.action),
    p.children);
});
reg('UserChip', function UserChip(p) {
  return h('span', { className: cx('ak-uchip', p.className), style: p.style }, p.online && h('i', null), p.name);
});
reg('ClockBar', function ClockBar(p) {
  return h('div', { className: cx('ak-clock', p.className), style: p.style },
    h('span', { className: 'ak-clock-logo' }, I(p.logo || 'logo', 16)),
    h('span', { className: 'ak-clock-date' }, h('b', null, p.date), h('small', null, p.sub)),
    h('span', { className: 'ak-clock-time' }, p.time),
    h('i', { className: 'ak-clock-sep' }),
    p.user && h(REG.UserChip, { name: p.user, online: true }),
    h('span', { className: 'ak-clock-pills' }, (p.pills || []).map(function (x, i) { return h(REG.Chip, { key: i, tone: x.tone || 'dark' }, x.label); })));
});
reg('LogoStrip', function LogoStrip(p) {
  return h('div', { className: cx('ak-logos', p.className), style: p.style }, (p.items || []).map(function (n, i) {
    return h('span', { key: i, className: 'ak-logos-i' }, I('logo', 20), n);
  }));
});

reg('DotField', function DotField(p) {
  var st = { '--dot-gap': (p.gap || 20) + 'px', padding: p.padding === undefined ? 24 : p.padding };
  return h('div', { className: cx('ak-dots', 'ak-dots-' + (p.tone || 'sunken'), p.className), style: sty(p, st) }, p.children);
});
reg('FlowCanvas', function FlowCanvas(p) {
  return h('div', { className: cx('ak-canvas', p.className), style: p.style }, p.children);
});
reg('FlowStart', function FlowStart(p) {
  return h('span', { className: cx('ak-fstart', p.className), style: p.style }, I('play', 14), p.children || 'Start');
});
reg('FlowNode', function FlowNode(p) {
  return h('div', { className: cx('ak-fnode', p.selected && 'is-selected', p.className), style: sty(p, { width: p.width || 196 }) },
    h('div', { className: 'ak-fnode-head' },
      h(REG.IconTile, { icon: p.icon, tone: p.iconTone || 'neutral', size: 28 }),
      h('div', { className: 'ak-fnode-t' }, h('b', null, p.title), p.subtitle && h('small', null, p.subtitle)),
      p.badge && h(REG.Badge, { tone: 'green' }, p.badge)),
    p.body && h('p', { className: 'ak-fnode-body' }, p.body));
});
reg('FlowCondition', function FlowCondition(p) {
  return h('span', { className: cx('ak-fcond', p.className), style: p.style }, I(p.icon || 'branch', 16), p.children);
});
reg('FlowConnector', function FlowConnector(p) {
  return h('div', { className: cx('ak-fconn', p.branch && 'has-branch', p.className), style: sty(p, { height: p.height || 44 }) },
    p.label && h('span', { className: 'ak-fconn-label' }, p.label),
    p.branch && h('span', { className: 'ak-fconn-branch', style: { width: p.branch.width || 160 } }, h('b', null, p.branch.label)));
});

reg('StatCard', function StatCard(p) {
  return h('div', { className: cx('ak-stat', p.className), style: p.style },
    h('div', { className: 'ak-stat-head' },
      h('span', { className: 'ak-stat-title' }, p.title, p.info !== false && I('info', 14)),
      p.action ? h(REG.Button, { variant: 'outline', size: 'sm' }, p.action) : p.headRight),
    p.value != null && h('div', { className: 'ak-stat-value' },
      h('span', null, p.value),
      p.delta && h('em', { className: p.deltaTone === 'down' ? 'is-down' : 'is-up' }, p.delta),
      p.deltaLabel && h('small', null, p.deltaLabel)),
    p.children,
    p.footer && h('div', { className: 'ak-stat-foot' }, p.footer));
});
reg('TickBar', function TickBar(p) {
  var n = p.ticks || 32, on = Math.round((p.value || 0) / 100 * n);
  return h('div', { className: cx('ak-ticks', p.className), style: sty(p, { height: p.height || 28 }), role: 'img', 'aria-label': (p.value || 0) + '%' },
    arr(n).map(function (i) { return h('i', { key: i, className: i < on ? 'is-on' : '' }); }));
});
reg('StackedBar', function StackedBar(p) {
  return h('div', { className: cx('ak-stack', p.className), style: sty(p, { height: p.height || 10 }) },
    (p.segments || []).map(function (s, i) { return h('i', { key: i, style: { flex: s.value, background: tn(s.tone) } }); }));
});
reg('Legend', function Legend(p) {
  return h('div', { className: cx('ak-legend', p.layout === 'column' && 'is-col', p.className), style: p.style }, (p.items || []).map(function (x, i) {
    return h('div', { key: i, className: 'ak-legend-i' },
      h('i', { style: { background: tn(x.tone) } }), h('span', { className: 'ak-legend-l' }, x.label),
      x.value && h('span', { className: 'ak-legend-v' }, x.value),
      x.pct && h('span', { className: 'ak-legend-p' }, h('b', null, '·'), x.pct));
  }));
});
reg('Donut', function Donut(p) {
  var segs = p.segments || [], size = p.size || 120, th = p.thickness || 14, r = (size - th) / 2, c = 2 * Math.PI * r, total = 0, off = 0, gap = p.gap == null ? 3 : p.gap;
  segs.forEach(function (s) { total += s.value; });
  var els = [h('circle', { key: 't', cx: size / 2, cy: size / 2, r: r, fill: 'none', stroke: 'var(--chart-off)', strokeWidth: th })];
  segs.forEach(function (s, k) {
    var len = Math.max(0, s.value / total * c - gap);
    els.push(h('circle', { key: k, cx: size / 2, cy: size / 2, r: r, fill: 'none', stroke: tn(s.tone), strokeWidth: th, strokeDasharray: len + ' ' + (c - len), strokeDashoffset: -off, transform: 'rotate(-90 ' + size / 2 + ' ' + size / 2 + ')' }));
    off += s.value / total * c;
  });
  return h('div', { className: cx('ak-donut', p.className), style: sty(p, { width: size, height: size }) },
    h('svg', { width: size, height: size, viewBox: '0 0 ' + size + ' ' + size, role: 'img', 'aria-label': p.title || 'Gráfico de anillo' }, els),
    p.center && h('div', { className: 'ak-donut-c' }, p.center));
});
reg('KeyValueStat', function KeyValueStat(p) {
  return h('div', { className: cx('ak-kv', p.className), style: p.style },
    h('small', null, p.label),
    h('div', { className: 'ak-kv-v' }, h('b', null, p.value), p.unit && h('span', null, p.unit)),
    p.sub && h('small', null, p.sub));
});
reg('TimelineMarker', function TimelineMarker(p) {
  return h('div', { className: cx('ak-tmark', p.className), style: sty(p, { height: p.height }) },
    p.lineTop !== false && h('i', { className: 'ak-tmark-line' }),
    h('span', { className: cx('ak-tmark-dot', 'ak-tmark-' + (p.tone || 'highlight')) }, I(p.icon || 'visits', 18)),
    p.lineBottom !== false && h('i', { className: 'ak-tmark-line' }));
});
reg('EventPill', function EventPill(p) {
  return h('span', { className: cx('ak-epill', p.className), style: p.style }, h('span', { className: 'ak-epill-ic' }, I(p.icon || 'pill', 16)), p.label, p.mult && h('em', null, p.mult));
});

reg('PanelTitle', function PanelTitle(p) {
  return h('div', { className: cx('ak-ptitle', p.className), style: p.style }, p.icon && I(p.icon, 16), h('span', null, p.children));
});
reg('CommentItem', function CommentItem(p) {
  return h('div', { className: cx('ak-comment', p.plain && 'is-plain', p.className), style: p.style },
    h('div', { className: 'ak-comment-head' },
      h(REG.Avatar, { label: p.initial || (p.name || '?').charAt(0), size: 24 }),
      h('div', { className: 'ak-comment-who' }, h('b', null, p.name), h('small', null, p.time)),
      p.reply !== false && h('span', { className: 'ak-comment-reply' }, I('reply', 14))),
    h('p', { className: 'ak-comment-text' }, p.children));
});
reg('CommentThread', function CommentThread(p) {
  var kids = React.Children.toArray(p.children), root = kids[0], replies = kids.slice(1);
  return h('div', { className: cx('ak-thread', p.className), style: p.style }, root,
    replies.length > 0 && h('div', { className: 'ak-thread-replies' }, replies.map(function (c, i) { return h('div', { key: i, className: 'ak-thread-reply' }, c); })));
});
reg('Composer', function Composer(p) {
  var tools = p.tools || ['attach', 'doc', 'mic'];
  return h('div', { className: cx('ak-composer', p.className), style: p.style },
    h('div', { className: 'ak-composer-tools' }, tools.map(function (t, i) { return h('span', { key: i }, I(t, 14)); }), h('i', null), I('smile', 14)),
    h('div', { className: 'ak-composer-row' }, h('span', { className: 'ak-composer-ph' }, p.placeholder || 'Escribe tu comentario'), h(REG.Button, { variant: 'soft', size: 'sm' }, p.send || 'Enviar')));
});
reg('FileTile', function FileTile(p) {
  var w = p.size || 108;
  return h('svg', { className: cx('ak-filetile', p.className), width: w, height: w * 1.1, viewBox: '0 0 100 110', role: 'img', 'aria-label': 'Archivo ' + (p.label || ''), style: p.style },
    h('path', { d: 'M14 2h48l36 36v58a12 12 0 0 1-12 12H14A12 12 0 0 1 2 96V14A12 12 0 0 1 14 2z', fill: 'var(--tile)' }),
    h('path', { d: 'M62 2v24a12 12 0 0 0 12 12h24', fill: 'none', stroke: 'var(--on-tile)', strokeOpacity: 0.5, strokeWidth: 2 }),
    h('text', { x: 50, y: 74, textAnchor: 'middle', fill: 'var(--on-tile)', fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 20, letterSpacing: 1 }, p.label || 'PDF'));
});
reg('PersonRow', function PersonRow(p) {
  return h('div', { className: cx('ak-person', p.className), style: p.style }, h(REG.Avatar, { label: p.initial || (p.name || '?').charAt(0), size: 24 }), h('span', null, p.name, p.you && h('em', null, ' (Tú)')));
});
reg('ActionRow', function ActionRow(p) {
  var it = p.items || [];
  return h('div', { className: cx('ak-actions', p.className), style: sty(p, { gridTemplateColumns: 'repeat(' + it.length + ',1fr)' }) }, it.map(function (a, i) {
    return h('span', { key: i, className: 'ak-action' }, I(a.icon, 18), h('b', null, a.label));
  }));
});
reg('FilePreview', function FilePreview(p) {
  return h('div', { className: cx('ak-fprev', p.className), style: p.style },
    h(REG.PanelTitle, { icon: 'file' }, 'Vista previa'),
    h('div', { className: 'ak-fprev-tile' }, h(REG.FileTile, { label: p.type || 'PDF' })),
    h('div', { className: 'ak-fprev-name' }, h('b', null, p.name), h('small', null, p.meta)),
    p.description && h('div', { className: 'ak-fprev-desc' }, h('b', null, 'Descripción'), h('p', null, p.description)),
    (p.people || []).length > 0 && h('div', { className: 'ak-fprev-people' }, h('b', null, 'Compartido con'), p.people.map(function (x, i) { return h(REG.PersonRow, { key: i, name: x.name, you: x.you }); })),
    p.actions && h(REG.ActionRow, { items: p.actions }));
});


var OUT = {}; ["Icon","IconTile","Avatar","Badge","Chip","Button","IconButton","PagerArrows","SearchField","SelectField","SideNav","MenuList","TopNav","Announcement","PageHeader","PillTabs","IconDock","PhoneFrame","SectionHeader","ListItem","InfoPill","Card","UserChip","ClockBar","LogoStrip","DotField","FlowCanvas","FlowStart","FlowNode","FlowCondition","FlowConnector","StatCard","TickBar","StackedBar","Legend","Donut","KeyValueStat","TimelineMarker","EventPill","PanelTitle","CommentItem","CommentThread","Composer","FileTile","PersonRow","ActionRow","FilePreview"].forEach(function (n) { OUT[n] = REG[n]; });
window.AppKit = OUT;
})();
