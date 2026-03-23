/* ═══════════════════════════════════════════
   browse.js — Ume Design System SPA
   Vanilla JS — zero framework, zero build
   ═══════════════════════════════════════════ */

(function () {
  'use strict';

  // ═══ FUNCTIONAL GROUPS ═══
  var GROUPS = [
    { id: 'form', label: 'Form' },
    { id: 'data-display', label: 'Data Display' },
    { id: 'feedback', label: 'Feedback' },
    { id: 'navigation', label: 'Navigation' },
    { id: 'overlay', label: 'Overlay' },
    { id: 'layout', label: 'Layout' }
  ];

  // ═══ COMPONENT REGISTRY ═══
  var REGISTRY = [
    {
      id: 'button', name: 'Button', group: 'form', atomic: 'atom', status: 'done', shadcn: 'button',
      description: 'Primary action trigger. 7 variants from standard CTAs to brand-specific glow and gradient-border effects.',
      usage: 'Primary for main CTAs, Secondary for supporting actions, Ghost for inline/tertiary actions, Destructive for irreversible operations, Brand for key conversion moments.',
      a11y: 'Min-height 44px (WCAG touch target). Focus-visible with purple outline 2px + offset 2px. Always use type="button" to prevent accidental submit.',
      controls: [
        { name: 'variant', type: 'select', options: ['primary', 'secondary', 'tertiary', 'destructive', 'ghost', 'brand', 'gradient-border'], 'default': 'primary' },
        { name: 'size', type: 'select', options: ['sm', 'md', 'lg'], 'default': 'md' },
        { name: 'disabled', type: 'toggle', 'default': false },
        { name: 'icon', type: 'toggle', 'default': false }
      ],
      presets: [
        { label: 'Primary CTA', state: { variant: 'primary', size: 'md', disabled: false, icon: false } },
        { label: 'With icon', state: { variant: 'primary', size: 'md', disabled: false, icon: true } },
        { label: 'Brand highlight', state: { variant: 'brand', size: 'lg', disabled: false, icon: true } },
        { label: 'Destructive', state: { variant: 'destructive', size: 'md', disabled: false, icon: false } },
        { label: 'Disabled', state: { variant: 'primary', size: 'md', disabled: true, icon: false } }
      ],
      template: '<button type="button" class="btn btn-{{variant}} btn-{{size}}"{{#if disabled}} disabled{{/if}}>{{#if icon}}<span class="material-symbols-rounded">add</span>{{/if}}Button</button>'
    },
    {
      id: 'input', name: 'Input', group: 'form', atomic: 'atom', status: 'done', shadcn: 'input',
      description: 'Form input for user data entry. Supports text fields, search with icon, select dropdowns, and textarea for long-form content.',
      usage: 'Text for general data, Search with icon for queries, Select for finite options, Textarea for descriptions and notes.',
      a11y: 'Always associate label with input (htmlFor/id). Error state requires aria-invalid="true" and aria-describedby pointing to the error message.',
      controls: [
        { name: 'type', type: 'select', options: ['text', 'search', 'select', 'textarea'], 'default': 'text' },
        { name: 'state', type: 'select', options: ['default', 'filled', 'error', 'disabled'], 'default': 'default' }
      ],
      presets: [
        { label: 'Empty default', state: { type: 'text', state: 'default' } },
        { label: 'With value', state: { type: 'text', state: 'filled' } },
        { label: 'Error', state: { type: 'text', state: 'error' } },
        { label: 'Search', state: { type: 'search', state: 'default' } },
        { label: 'Textarea', state: { type: 'textarea', state: 'default' } }
      ],
      template: '<div class="input-group">{{#eq type "search"}}<label class="input-label">Search</label><div class="search-wrap"><span class="material-symbols-rounded">search</span><input class="input-field" type="text" placeholder="Search partner..."></div>{{/eq}}{{#eq type "select"}}<label class="input-label">Category</label><select class="input-field select-field"><option>Select an option</option><option>Design</option><option>Engineering</option></select>{{/eq}}{{#eq type "textarea"}}<label class="input-label">Description</label><textarea class="input-field textarea-field" placeholder="Describe the issue..."></textarea>{{/eq}}{{#eq type "text"}}<label class="input-label">Name</label><input class="input-field{{#eq state "error"}} input-error{{/eq}}" type="text"{{#eq state "default"}} placeholder="Type here..."{{/eq}}{{#eq state "filled"}} value="John Smith"{{/eq}}{{#eq state "error"}} value="invalid@email" aria-invalid="true"{{/eq}}{{#eq state "disabled"}} value="Unavailable" disabled{{/eq}}>{{#eq state "default"}}<span class="input-hint">Helper text</span>{{/eq}}{{#eq state "error"}}<span class="input-error-msg">Invalid email</span>{{/eq}}{{/eq}}</div>'
    },
    {
      id: 'checkbox', name: 'Checkbox', group: 'form', atomic: 'atom', status: 'done', shadcn: 'checkbox',
      description: 'Selection control for toggling options on or off. Use in forms for boolean choices or multi-select lists.',
      usage: 'Use standalone for single toggles (terms acceptance) or in groups for multi-select options. Always pair with a visible label.',
      a11y: 'Use native <input type="checkbox"> with associated <label>. Support keyboard toggle via Space key. Use aria-checked for custom implementations.',
      controls: [
        { name: 'checked', type: 'toggle', 'default': true },
        { name: 'disabled', type: 'toggle', 'default': false }
      ],
      presets: [
        { label: 'Checked', state: { checked: true, disabled: false } },
        { label: 'Unchecked', state: { checked: false, disabled: false } },
        { label: 'Disabled', state: { checked: true, disabled: true } }
      ],
      template: '<div class="check-row{{#if disabled}} disabled{{/if}}"><div class="check-box{{#if checked}} checked{{/if}}"></div><span class="check-label">Accept terms</span></div>'
    },
    {
      id: 'radio', name: 'Radio', group: 'form', atomic: 'atom', status: 'done', shadcn: 'radio-group',
      description: 'Exclusive selection from a set of options. Only one option can be active at a time within a group.',
      usage: 'Use when the user must choose exactly one option from 2-5 choices. For more options, prefer a Select dropdown.',
      a11y: 'Group radios with role="radiogroup". Use arrow keys for navigation within group. Each radio needs aria-checked.',
      controls: [
        { name: 'selected', type: 'select', options: ['first', 'second', 'third'], 'default': 'first' },
        { name: 'disabled', type: 'toggle', 'default': false }
      ],
      presets: [
        { label: 'First selected', state: { selected: 'first', disabled: false } },
        { label: 'Second selected', state: { selected: 'second', disabled: false } },
        { label: 'Disabled', state: { selected: 'first', disabled: true } }
      ],
      template: '<div style="display:flex;flex-direction:column;gap:12px;"><div class="check-row{{#if disabled}} disabled{{/if}}"><div class="radio-circle{{#eq selected "first"}} checked{{/eq}}"></div><span class="check-label">Option A</span></div><div class="check-row{{#if disabled}} disabled{{/if}}"><div class="radio-circle{{#eq selected "second"}} checked{{/eq}}"></div><span class="check-label">Option B</span></div><div class="check-row{{#if disabled}} disabled{{/if}}"><div class="radio-circle{{#eq selected "third"}} checked{{/eq}}"></div><span class="check-label">Option C</span></div></div>'
    },
    {
      id: 'switch', name: 'Switch', group: 'form', atomic: 'atom', status: 'done', shadcn: 'switch',
      description: 'Toggle control for binary settings that take effect immediately. Visual feedback confirms the current state.',
      usage: 'Use for settings that apply instantly (dark mode, notifications). For form submissions, prefer Checkbox.',
      a11y: 'Use role="switch" with aria-checked. Must be keyboard-operable via Space key. Label must describe the setting, not the state.',
      controls: [
        { name: 'on', type: 'toggle', 'default': true },
        { name: 'disabled', type: 'toggle', 'default': false }
      ],
      presets: [
        { label: 'On', state: { on: true, disabled: false } },
        { label: 'Off', state: { on: false, disabled: false } },
        { label: 'Disabled', state: { on: true, disabled: true } }
      ],
      template: '<div class="check-row{{#if disabled}} disabled{{/if}}"><div class="switch{{#if on}} on{{/if}}"></div><span class="check-label">Dark mode</span></div>'
    },
    {
      id: 'slider', name: 'Slider', group: 'form', atomic: 'atom', status: 'wip', shadcn: 'slider',
      description: 'Range control with draggable thumb.',
      staticHtml: '<div style="width:100%;max-width:300px;"><input type="range" class="ume-range" min="0" max="100" value="65"></div>'
    },
    {
      id: 'file-upload', name: 'File Upload', group: 'form', atomic: 'molecule', status: 'wip',
      description: 'Drag-and-drop upload area with dashed border.',
      staticHtml: '<div class="file-upload" style="max-width:400px;"><span class="material-symbols-rounded">cloud_upload</span><div class="file-upload-title">Drag files here</div><div class="file-upload-desc">or click to select (PDF, JPG, PNG up to 10MB)</div></div>'
    },
    {
      id: 'badge', name: 'Badge', group: 'data-display', atomic: 'atom', status: 'done', shadcn: 'badge',
      description: 'Compact status indicator for communicating state or categorizing items with visual emphasis.',
      usage: 'Success for approved/active, Error for denied/inactive, Warning for pending, Info for review, Brand for special highlights.',
      a11y: 'Badges are decorative — the text already conveys meaning. Do not use badge as the sole status indicator without accompanying text.',
      controls: [
        { name: 'variant', type: 'select', options: ['success', 'error', 'warning', 'info', 'purple', 'neutral', 'brand'], 'default': 'success' }
      ],
      presets: [
        { label: 'Approved', state: { variant: 'success' } },
        { label: 'Denied', state: { variant: 'error' } },
        { label: 'Pending', state: { variant: 'warning' } },
        { label: 'Under review', state: { variant: 'info' } },
        { label: 'Highlight', state: { variant: 'brand' } }
      ],
      template: '<span class="badge badge-{{variant}}">{{#eq variant "success"}}Approved{{/eq}}{{#eq variant "error"}}Denied{{/eq}}{{#eq variant "warning"}}Pending{{/eq}}{{#eq variant "info"}}Under review{{/eq}}{{#eq variant "purple"}}New{{/eq}}{{#eq variant "neutral"}}Draft{{/eq}}{{#eq variant "brand"}}★ Highlight{{/eq}}</span>'
    },
    {
      id: 'tag', name: 'Tag', group: 'data-display', atomic: 'atom', status: 'wip',
      description: 'Removable tag for categorization. Border-radius 6px.',
      staticHtml: '<div style="display:flex;gap:8px;flex-wrap:wrap;"><div class="tag">Design<span class="remove">\u00d7</span></div><div class="tag">Frontend<span class="remove">\u00d7</span></div><div class="tag">Ume<span class="remove">\u00d7</span></div></div>'
    },
    {
      id: 'avatar', name: 'Avatar', group: 'data-display', atomic: 'atom', status: 'wip', shadcn: 'avatar',
      description: 'Avatar component to display user photo or initials.',
      staticHtml: '<div style="display:flex;gap:16px;align-items:flex-end;"><div class="avatar avatar-sm">WB</div><div class="avatar avatar-md">WB</div><div class="avatar avatar-lg">WB</div><div class="avatar avatar-xl">WB</div></div>'
    },
    {
      id: 'avatar-group', name: 'Avatar Group', group: 'data-display', atomic: 'molecule', status: 'wip',
      description: 'Overlapping avatar group with counter.',
      staticHtml: '<div class="avatar-stack"><div class="avatar avatar-md" style="background:var(--ume-verde-escuro);">AB</div><div class="avatar avatar-md" style="background:var(--ume-verde-medio);">CD</div><div class="avatar avatar-md" style="background:var(--ume-roxo);">EF</div><div class="avatar avatar-md" style="background:var(--ume-verde-claro);color:var(--ume-cinza-escuro);">+5</div></div>'
    },
    {
      id: 'card', name: 'Card', group: 'data-display', atomic: 'molecule', status: 'done', shadcn: 'card',
      description: 'Versatile content container with 10 variants ranging from standard to brand-specific glass and gradient effects.',
      usage: 'Default for standard content, Elevated for floating panels, Glass for brand moments over gradients, Gradient-border for premium highlights.',
      a11y: 'Interactive cards must be focusable. Use role="article" for independent content cards.',
      controls: [
        { name: 'variant', type: 'select', options: ['default', 'elevated', 'ghost', 'dark', 'accent', 'mint', 'glass', 'gradient-border', 'gradient-top', 'glow'], 'default': 'default' }
      ],
      presets: [
        { label: 'Default', state: { variant: 'default' } },
        { label: 'Elevated', state: { variant: 'elevated' } },
        { label: 'Glass', state: { variant: 'glass' } },
        { label: 'Gradient border', state: { variant: 'gradient-border' } },
        { label: 'Glow', state: { variant: 'glow' } }
      ],
      template: '<div class="card card-{{variant}}" style="max-width: 360px; width: 100%;"><h4>Card title</h4><p>Sample content to demonstrate the {{variant}} card variant.</p></div>'
    },
    {
      id: 'metric-card', name: 'Metric Card', group: 'data-display', atomic: 'molecule', status: 'wip',
      description: 'Metric card with highlighted value. Glow variant uses Dark Green with green shadow.',
      staticHtml: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;max-width:400px;"><div class="metric-card"><div class="metric-value">R$ 2.4M</div><div class="metric-label">Monthly volume</div><div class="metric-detail">+18% vs previous month</div></div><div class="metric-card-glow"><div class="metric-value">1,247</div><div class="metric-label">Active partners</div><div class="metric-detail">98.2% approval</div></div></div>'
    },
    {
      id: 'data-table', name: 'Data Table', group: 'data-display', atomic: 'organism', status: 'wip', shadcn: 'table',
      description: 'Data table with fixed header, subtle green hover state, and border-radius 16px.',
      staticHtml: '<div class="table-wrap" style="max-width:560px;"><table><thead><tr><th>Name</th><th>Status</th><th>Amount</th></tr></thead><tbody><tr><td style="font-weight:500;">John Smith</td><td><span class="badge badge-success">Approved</span></td><td>R$ 5,000</td></tr><tr><td style="font-weight:500;">Mary Santos</td><td><span class="badge badge-warning">Pending</span></td><td>R$ 3,200</td></tr><tr><td style="font-weight:500;">Carlos Lima</td><td><span class="badge badge-error">Denied</span></td><td>R$ 1,800</td></tr></tbody></table></div>'
    },
    {
      id: 'timeline', name: 'Timeline', group: 'data-display', atomic: 'molecule', status: 'wip',
      description: 'Vertical timeline with connected dots.',
      staticHtml: '<div class="timeline" style="max-width:400px;"><div class="timeline-item"><div class="timeline-dot-wrap"><div class="timeline-dot"></div><div class="timeline-line"></div></div><div class="timeline-content"><h5>Limit increased</h5><p>From R$ 30K to R$ 50K</p><div class="time">Today, 10:30</div></div></div><div class="timeline-item"><div class="timeline-dot-wrap"><div class="timeline-dot" style="background:var(--border-strong);"></div><div class="timeline-line"></div></div><div class="timeline-content"><h5>Sale completed</h5><p>R$ 1,250 — Mary S.</p><div class="time">Today, 09:15</div></div></div><div class="timeline-item"><div class="timeline-dot-wrap"><div class="timeline-dot" style="background:var(--border-strong);"></div></div><div class="timeline-content"><h5>Registration approved</h5><p>Documentation validated</p><div class="time">12 Mar, 16:45</div></div></div></div>'
    },
    {
      id: 'alert', name: 'Alert', group: 'feedback', atomic: 'molecule', status: 'done', shadcn: 'alert',
      description: 'Contextual feedback message with icon, title and description. Communicates status without interrupting the flow.',
      usage: 'Success for confirmations, Error for failures, Warning for caution, Info for neutral contextual information.',
      a11y: 'Use role="alert" for urgent messages (error, warning). For info/success, use role="status".',
      controls: [
        { name: 'variant', type: 'select', options: ['success', 'error', 'warning', 'info'], 'default': 'success' }
      ],
      presets: [
        { label: 'Success', state: { variant: 'success' } },
        { label: 'Error', state: { variant: 'error' } },
        { label: 'Warning', state: { variant: 'warning' } },
        { label: 'Info', state: { variant: 'info' } }
      ],
      template: '<div class="alert alert-{{variant}}" style="max-width: 560px; width: 100%;"><span class="material-symbols-rounded">{{#eq variant "success"}}check_circle{{/eq}}{{#eq variant "error"}}error{{/eq}}{{#eq variant "warning"}}warning{{/eq}}{{#eq variant "info"}}info{{/eq}}</span><div class="alert-content"><h5>{{#eq variant "success"}}Credit approved{{/eq}}{{#eq variant "error"}}Processing failed{{/eq}}{{#eq variant "warning"}}Warning{{/eq}}{{#eq variant "info"}}Information{{/eq}}</h5><p>{{#eq variant "success"}}The R$ 5,000 credit has been successfully approved.{{/eq}}{{#eq variant "error"}}Unable to process the request. Please try again.{{/eq}}{{#eq variant "warning"}}The credit limit is approaching the maximum allowed.{{/eq}}{{#eq variant "info"}}New credit conditions available starting tomorrow.{{/eq}}</p></div></div>'
    },
    {
      id: 'toast', name: 'Toast', group: 'feedback', atomic: 'molecule', status: 'done', shadcn: 'sonner',
      description: 'Temporary notification that appears briefly to confirm an action or communicate a status change.',
      usage: 'Use for non-critical confirmations (saved, copied, sent). For errors that need user action, prefer Alert. Auto-dismiss after 4-5 seconds.',
      a11y: 'Use role="status" for info/success, role="alert" for errors. Ensure toast is announced by screen readers. Provide a dismiss button for accessibility.',
      controls: [
        { name: 'variant', type: 'select', options: ['success', 'error', 'warning', 'info'], 'default': 'success' },
        { name: 'closable', type: 'toggle', 'default': true }
      ],
      presets: [
        { label: 'Success', state: { variant: 'success', closable: true } },
        { label: 'Error', state: { variant: 'error', closable: true } },
        { label: 'Info', state: { variant: 'info', closable: false } }
      ],
      template: '<div class="toast"><span class="material-symbols-rounded" style="color:{{#eq variant "success"}}var(--feedback-success-text){{/eq}}{{#eq variant "error"}}var(--feedback-error-text){{/eq}}{{#eq variant "warning"}}var(--feedback-warning-text){{/eq}}{{#eq variant "info"}}var(--feedback-info-text){{/eq}};">{{#eq variant "success"}}check_circle{{/eq}}{{#eq variant "error"}}error{{/eq}}{{#eq variant "warning"}}warning{{/eq}}{{#eq variant "info"}}info{{/eq}}</span><div class="toast-content"><div class="title">{{#eq variant "success"}}Saved successfully{{/eq}}{{#eq variant "error"}}Something went wrong{{/eq}}{{#eq variant "warning"}}Attention needed{{/eq}}{{#eq variant "info"}}New update available{{/eq}}</div><div class="desc">{{#eq variant "success"}}Your changes have been saved.{{/eq}}{{#eq variant "error"}}Please try again later.{{/eq}}{{#eq variant "warning"}}Review before proceeding.{{/eq}}{{#eq variant "info"}}Check what changed.{{/eq}}</div></div>{{#if closable}}<span class="material-symbols-rounded toast-close">close</span>{{/if}}</div>'
    },
    {
      id: 'progress-bar', name: 'Progress Bar', group: 'feedback', atomic: 'atom', status: 'done', shadcn: 'progress',
      description: 'Linear indicator showing completion status of a task or process. Three color variants for different contexts.',
      usage: 'Green for positive progress (uploads, completions), Purple for neutral processes (loading), Gradient for brand-highlighted progress.',
      a11y: 'Use role="progressbar" with aria-valuenow, aria-valuemin="0", aria-valuemax="100". Include aria-label describing what is progressing.',
      controls: [
        { name: 'variant', type: 'select', options: ['green', 'purple', 'gradient'], 'default': 'green' },
        { name: 'value', type: 'select', options: ['25', '50', '75', '100'], 'default': '75' }
      ],
      presets: [
        { label: 'Quarter', state: { variant: 'green', value: '25' } },
        { label: 'Half', state: { variant: 'purple', value: '50' } },
        { label: 'Almost done', state: { variant: 'gradient', value: '75' } },
        { label: 'Complete', state: { variant: 'green', value: '100' } }
      ],
      template: '<div class="progress-bar" style="max-width:400px;width:100%;"><div class="progress-fill progress-fill-{{variant}}" style="width:{{value}}%;"></div></div>'
    },
    {
      id: 'skeleton', name: 'Skeleton', group: 'feedback', atomic: 'atom', status: 'wip', shadcn: 'skeleton',
      description: 'Animated placeholder for loading content.',
      staticHtml: '<div style="display:flex;flex-direction:column;gap:12px;width:260px;"><div class="skeleton" style="height:12px;width:100%;"></div><div class="skeleton" style="height:12px;width:80%;"></div><div class="skeleton" style="height:12px;width:60%;"></div></div>'
    },
    {
      id: 'tabs', name: 'Tabs', group: 'navigation', atomic: 'molecule', status: 'done', shadcn: 'tabs',
      description: 'Content organizer for switching between related views within the same context without page navigation.',
      usage: 'Use to organize related content into navigable sections within a page or card. Keep tab count between 3-5 for usability.',
      a11y: 'Use role="tablist" on the container, role="tab" on each tab, and aria-selected="true" on the active tab.',
      controls: [
        { name: 'active', type: 'select', options: ['0', '1', '2', '3'], 'default': '0' },
        { name: 'count', type: 'select', options: ['3', '4', '5'], 'default': '4' }
      ],
      presets: [
        { label: '3 tabs', state: { active: '0', count: '3' } },
        { label: '4 tabs', state: { active: '0', count: '4' } },
        { label: 'Second active', state: { active: '1', count: '4' } }
      ],
      template: '<div class="tabs" style="max-width: 560px; width: 100%;"><div class="tab{{#eq active "0"}} active{{/eq}}">Overview</div><div class="tab{{#eq active "1"}} active{{/eq}}">Sales</div><div class="tab{{#eq active "2"}} active{{/eq}}">Partners</div>{{#eq count "4"}}<div class="tab{{#eq active "3"}} active{{/eq}}">Settings</div>{{/eq}}{{#eq count "5"}}<div class="tab{{#eq active "3"}} active{{/eq}}">Settings</div><div class="tab">Reports</div>{{/eq}}</div>'
    },
    {
      id: 'breadcrumb', name: 'Breadcrumb', group: 'navigation', atomic: 'molecule', status: 'done', shadcn: 'breadcrumb',
      description: 'Hierarchical path indicator showing the user their current position within the navigation structure.',
      usage: 'Use on detail pages and forms to show context. Keep breadcrumb depth under 4 levels. Last item is the current page (not a link).',
      a11y: 'Wrap in <nav aria-label="Breadcrumb">. Use <ol> for semantic list. Current page uses aria-current="page". Separator is decorative (aria-hidden).',
      controls: [
        { name: 'levels', type: 'select', options: ['2', '3', '4'], 'default': '3' }
      ],
      presets: [
        { label: '2 levels', state: { levels: '2' } },
        { label: '3 levels', state: { levels: '3' } },
        { label: '4 levels', state: { levels: '4' } }
      ],
      template: '<div class="breadcrumb"><a>Home</a><span class="sep">/</span>{{#eq levels "2"}}<span class="current">Partners</span>{{/eq}}{{#eq levels "3"}}<a>Partners</a><span class="sep">/</span><span class="current">Details</span>{{/eq}}{{#eq levels "4"}}<a>Partners</a><span class="sep">/</span><a>Loja Central</a><span class="sep">/</span><span class="current">Sales</span>{{/eq}}</div>'
    },
    {
      id: 'pagination', name: 'Pagination', group: 'navigation', atomic: 'molecule', status: 'done', shadcn: 'pagination',
      description: 'Page navigation controls for browsing through paginated content. Highlights the current page.',
      usage: 'Use for data tables and lists with 20+ items. Show 3-5 page numbers around the current page. Include prev/next arrows.',
      a11y: 'Use nav element with aria-label="Pagination". Current page uses aria-current="page". Prev/next buttons need aria-label.',
      controls: [
        { name: 'active', type: 'select', options: ['1', '2', '3'], 'default': '1' },
        { name: 'pages', type: 'select', options: ['3', '5'], 'default': '3' }
      ],
      presets: [
        { label: 'First page', state: { active: '1', pages: '3' } },
        { label: 'Middle page', state: { active: '2', pages: '5' } },
        { label: 'Last page', state: { active: '3', pages: '3' } }
      ],
      template: '<div class="pagination"><div class="page-btn"><span class="material-symbols-rounded" style="font-size:18px;">chevron_left</span></div><div class="page-btn{{#eq active "1"}} active{{/eq}}">1</div><div class="page-btn{{#eq active "2"}} active{{/eq}}">2</div><div class="page-btn{{#eq active "3"}} active{{/eq}}">3</div>{{#eq pages "5"}}<div class="page-btn">4</div><div class="page-btn">5</div>{{/eq}}<div class="page-btn"><span class="material-symbols-rounded" style="font-size:18px;">chevron_right</span></div></div>'
    },
    {
      id: 'filter-chips', name: 'Filter Chips', group: 'navigation', atomic: 'molecule', status: 'wip',
      description: 'Filter chips for quick category selection.',
      staticHtml: '<div class="filter-bar"><div class="filter-chip active">All</div><div class="filter-chip">Active</div><div class="filter-chip">Pending</div><div class="filter-chip">Inactive</div></div>'
    },
    {
      id: 'modal', name: 'Modal', group: 'overlay', atomic: 'molecule', status: 'done', shadcn: 'dialog',
      description: 'Dialog overlay for confirmations, forms, or focused content that requires user attention before continuing.',
      usage: 'Use for destructive confirmations, complex forms, or content that needs isolation. Avoid for simple notifications (use Toast).',
      a11y: 'Trap focus inside modal when open. Close on Escape key. Use aria-modal="true" and aria-labelledby for the title. Return focus to trigger on close.',
      controls: [
        { name: 'variant', type: 'select', options: ['confirmation', 'info'], 'default': 'confirmation' },
        { name: 'actions', type: 'toggle', 'default': true }
      ],
      presets: [
        { label: 'Confirmation', state: { variant: 'confirmation', actions: true } },
        { label: 'Info only', state: { variant: 'info', actions: false } }
      ],
      template: '<div class="modal-overlay"><div class="modal"><h3>{{#eq variant "confirmation"}}Confirm action{{/eq}}{{#eq variant "info"}}Information{{/eq}}</h3><p>{{#eq variant "confirmation"}}Are you sure you want to continue? This action cannot be undone.{{/eq}}{{#eq variant "info"}}Your session will expire in 5 minutes. Save your work to avoid losing changes.{{/eq}}</p>{{#if actions}}<div class="modal-actions"><button type="button" class="btn btn-ghost btn-sm">Cancel</button><button type="button" class="btn btn-primary btn-sm">Confirm</button></div>{{/if}}</div></div>'
    },
    {
      id: 'tooltip', name: 'Tooltip', group: 'overlay', atomic: 'atom', status: 'done', shadcn: 'tooltip',
      description: 'Contextual hint that appears on hover or focus to provide additional information about an element.',
      usage: 'Use for icon-only buttons, truncated text, or supplementary context. Keep text under 80 characters. Never put critical info in tooltips.',
      a11y: 'Use aria-describedby to link tooltip to trigger. Tooltip must be accessible via keyboard focus (not just hover). Dismiss on Escape.',
      controls: [
        { name: 'position', type: 'select', options: ['top', 'bottom'], 'default': 'top' }
      ],
      presets: [
        { label: 'Top', state: { position: 'top' } },
        { label: 'Bottom', state: { position: 'bottom' } }
      ],
      template: '<div class="tooltip-demo"><button type="button" class="btn btn-secondary btn-sm">Hover me</button><div class="tooltip{{#eq position "bottom"}} tooltip-bottom{{/eq}}">Tooltip text</div></div>'
    },
    {
      id: 'stepper', name: 'Stepper', group: 'layout', atomic: 'organism', status: 'wip',
      description: 'Multi-step progress indicator.',
      staticHtml: '<div class="stepper"><div class="step-dot completed">\u2713</div><div class="step-line completed"></div><div class="step-dot completed">\u2713</div><div class="step-line"></div><div class="step-dot active">3</div><div class="step-line"></div><div class="step-dot">4</div></div>'
    },
    {
      id: 'app-shell', name: 'App Shell', group: 'layout', atomic: 'organism', status: 'wip',
      description: 'Layout base com sidebar + topbar + content area.',
      staticHtml: '<div style="display:flex;border:1px solid var(--border-default);border-radius:12px;overflow:hidden;min-height:200px;"><div style="width:200px;background:var(--ume-verde-escuro);padding:16px;"><div style="color:var(--ume-verde-claro);font-family:var(--font-display);font-size:14px;font-weight:500;margin-bottom:16px;">Ume</div><div style="display:flex;flex-direction:column;gap:4px;"><div style="padding:6px 8px;border-radius:6px;background:rgba(9,207,124,0.12);color:var(--ume-verde-claro);font-size:12px;">Dashboard</div><div style="padding:6px 8px;color:rgba(255,255,255,0.6);font-size:12px;">Partners</div></div></div><div style="flex:1;"><div style="padding:12px 16px;border-bottom:1px solid var(--border-default);font-size:12px;color:var(--text-muted);">Dashboard</div><div style="padding:16px;background:var(--surface-subtle);min-height:150px;font-size:13px;color:var(--text-secondary);">Content area</div></div></div>'
    },
    {
      id: 'empty-state', name: 'Empty State', group: 'layout', atomic: 'organism', status: 'wip',
      description: 'Empty state with icon, text, and CTA.',
      staticHtml: '<div class="empty-state"><div class="icon-circle"><span class="material-symbols-rounded">inbox</span></div><h3>No results</h3><p>We could not find any items matching the applied filters.</p><button type="button" class="btn btn-secondary btn-sm">Clear filters</button></div>'
    },
    {
      id: 'loading-state', name: 'Loading State', group: 'layout', atomic: 'organism', status: 'wip',
      description: 'Loading state with animated beacon.',
      staticHtml: '<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;padding:48px;"><div class="loading-beacon"></div><div style="font-size:14px;color:var(--text-muted);">Loading...</div></div>'
    }
  ];

  // ═══ FOUNDATIONS ═══
  var FOUNDATIONS = [
    { id: 'cores', name: 'Colors' },
    { id: 'tipografia', name: 'Typography' },
    { id: 'espacamento', name: 'Spacing & Grid' },
    { id: 'breakpoints', name: 'Breakpoints' },
    { id: 'border-radius', name: 'Border Radius' },
    { id: 'elevacao', name: 'Elevation' },
    { id: 'motion', name: 'Motion' },
    { id: 'iconografia', name: 'Iconography' }
  ];

  // ═══ PATTERNS ═══
  var PATTERNS = [
    { id: 'dashboard', name: 'Dashboard', description: 'Main page with metrics, table, and progressive stagger on cards.' },
    { id: 'list', name: 'List / Table', description: 'Listing with search, filters, paginated table, and actions.' },
    { id: 'detail', name: 'Detail View', description: 'Detail with tabs, timeline, and card with gradient top accent.' },
    { id: 'form', name: 'Form', description: 'Registration form with fields grouped into sections.' },
    { id: 'empty-state', name: 'Empty State', description: 'When there is no data. Icon + clear CTA.' },
    { id: 'loading', name: 'Loading', description: 'Shimmer with subtle green tone during loading.' }
  ];

  // ═══ CHANGELOG ═══
  var CHANGELOG = [
    {
      version: '2.3.0', date: '19 Mar 2026', changes: [
        'Complete restructuring — SPA with global sidebar',
        'Navigation by functional grouping (Form, Data Display, Feedback, etc.)',
        '15 new components added to the browser',
        '6 page patterns integrated',
        'Foundations integrated into the sidebar',
        'Global search in the sidebar'
      ]
    },
    {
      version: '2.2.0', date: '19 Mar 2026', changes: [
        'Interactive component playground',
        'Vanilla JS engine with controls, presets, and code panel',
        'Deep linking via URL hash'
      ]
    },
    {
      version: '2.1.0', date: '12 Mar 2026', changes: [
        'Component Canvas with 20 cells',
        'New components: Range, File Upload, Progress, Stepper, Tags, Avatar Group'
      ]
    },
    {
      version: '2.0.0', date: '1 Mar 2026', changes: [
        'Full Design System launch',
        'Foundations, Components, Patterns',
        'Deployed on Vercel'
      ]
    }
  ];

  // ═══ TEMPLATE ENGINE ═══

  function renderTemplate(template, state) {
    var result = processBlocks(template, state);
    result = result.replace(/\{\{(\w+)\}\}/g, function (_, key) {
      return state[key] !== undefined ? String(state[key]) : '';
    });
    return result.trim();
  }

  function processBlocks(str, state) {
    var result = '';
    var i = 0;
    while (i < str.length) {
      if (str.substr(i, 2) === '{{' && str.charAt(i + 2) === '#') {
        var blockResult = parseBlock(str, i, state);
        result += blockResult.content;
        i = blockResult.end;
      } else {
        result += str.charAt(i);
        i++;
      }
    }
    return result;
  }

  function parseBlock(str, start, state) {
    var tagEnd = str.indexOf('}}', start);
    if (tagEnd === -1) return { content: str.substr(start), end: str.length };
    var tagContent = str.substring(start + 3, tagEnd);
    var parts = tagContent.match(/^(\w+)\s+(.*)/);
    if (!parts) return { content: '', end: tagEnd + 2 };
    var blockType = parts[1];
    var blockArgs = parts[2].trim();
    var closingTag = '{{/' + blockType + '}}';
    var openPrefix = '{{#' + blockType;
    var bodyStart = tagEnd + 2;
    var depth = 1;
    var pos = bodyStart;
    while (pos < str.length && depth > 0) {
      if (str.substr(pos, openPrefix.length) === openPrefix) {
        depth++;
        var nextClose = str.indexOf('}}', pos);
        pos = nextClose !== -1 ? nextClose + 2 : pos + openPrefix.length;
      } else if (str.substr(pos, closingTag.length) === closingTag) {
        depth--;
        if (depth === 0) break;
        pos += closingTag.length;
      } else { pos++; }
    }
    var body = str.substring(bodyStart, pos);
    var blockEnd = pos + closingTag.length;
    var show = false;
    if (blockType === 'if') { show = !!state[blockArgs]; }
    else if (blockType === 'unless') { show = !state[blockArgs]; }
    else if (blockType === 'eq') {
      var eqMatch = blockArgs.match(/^(\w+)\s+"([^"]+)"$/);
      if (eqMatch) { show = String(state[eqMatch[1]]) === eqMatch[2]; }
    }
    return { content: show ? processBlocks(body, state) : '', end: blockEnd };
  }

  function formatHtml(html) {
    return html.replace(/\s+/g, ' ').replace(/>\s+</g, '>\n<').replace(/\s+>/g, '>').replace(/<\//g, '\n</').replace(/\n\n+/g, '\n').trim();
  }

  function highlightHtml(html) {
    var e = escapeHtml(html);
    e = e.replace(/(&lt;\/?)([\w-]+)/g, '$1<span class="hl-tag">$2</span>');
    e = e.replace(/\s([\w-]+)(=)/g, ' <span class="hl-attr">$1</span>$2');
    e = e.replace(/(&quot;)(.*?)(&quot;)/g, '<span class="hl-str">$1$2$3</span>');
    return e;
  }

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  // ═══ DOM ═══

  var sidebarNav = document.getElementById('sidebar-nav');
  var searchInput = document.getElementById('sidebar-search');
  var sidebar = document.getElementById('sidebar');
  var hamburger = document.getElementById('hamburger');
  var overlay = document.getElementById('overlay');
  var content = document.getElementById('content');

  // ═══ ACCORDION STATE ═══

  function isAccordionOpen(key) {
    try { var s = JSON.parse(localStorage.getItem('ume-accordions') || '{}'); return s[key] !== false; }
    catch (e) { return true; }
  }

  function saveAccordionState(key, open) {
    try { var s = JSON.parse(localStorage.getItem('ume-accordions') || '{}'); s[key] = open; localStorage.setItem('ume-accordions', JSON.stringify(s)); }
    catch (e) { }
  }

  // ═══ SIDEBAR ═══

  function renderSidebar(filter) {
    var html = '';
    var h = window.location.hash;

    // Overview
    if (!filter || 'overview'.indexOf(filter) !== -1) {
      var oa = !h || h === '#' || h === '#/' || h === '#/overview';
      html += '<a href="#/overview" class="browse-nav-top-item' + (oa ? ' active' : '') + '"><span class="material-symbols-rounded">home</span>Overview</a>';
    }

    // Foundations
    var fi = FOUNDATIONS.filter(function (f) { return !filter || f.name.toLowerCase().indexOf(filter) !== -1; });
    if (fi.length) {
      var fo = !filter && isAccordionOpen('foundations');
      var fa = fi.some(function (f) { return h === '#/foundations/' + f.id; });
      html += '<div class="browse-accordion' + (fo || fa || filter ? ' open' : '') + '" data-accordion="foundations">';
      html += '<button type="button" class="browse-accordion-trigger" aria-expanded="' + (fo || fa || !!filter) + '"><span class="material-symbols-rounded" style="font-size:16px;margin-right:6px;">layers</span>FOUNDATIONS<span class="material-symbols-rounded">expand_more</span></button>';
      html += '<div class="browse-accordion-body"><div>';
      fi.forEach(function (f) {
        html += '<a href="#/foundations/' + f.id + '" class="browse-nav-item' + (h === '#/foundations/' + f.id ? ' active' : '') + '">' + f.name + '</a>';
      });
      html += '</div></div></div>';
    }

    // Components
    var ci = REGISTRY.filter(function (c) { return !filter || c.name.toLowerCase().indexOf(filter) !== -1; });
    if (ci.length) {
      var co = !filter && isAccordionOpen('components');
      var ca = ci.some(function (c) { return h === '#/components/' + c.id; });
      html += '<div class="browse-accordion' + (co || ca || filter ? ' open' : '') + '" data-accordion="components">';
      html += '<button type="button" class="browse-accordion-trigger" aria-expanded="' + (co || ca || !!filter) + '"><span class="material-symbols-rounded" style="font-size:16px;margin-right:6px;">widgets</span>COMPONENTS<span class="material-symbols-rounded">expand_more</span></button>';
      html += '<div class="browse-accordion-body"><div>';
      GROUPS.forEach(function (g) {
        var gc = ci.filter(function (c) { return c.group === g.id; });
        if (!gc.length) return;
        html += '<div class="browse-nav-separator">' + g.label + '</div>';
        gc.forEach(function (c) {
          html += '<a href="#/components/' + c.id + '" class="browse-nav-item' + (h === '#/components/' + c.id ? ' active' : '') + '"><span class="browse-nav-dot ' + c.status + '"></span>' + c.name + (c.status === 'wip' ? '<span class="badge badge-neutral" class="sidebar-soon-badge">Soon</span>' : '') + '</a>';
        });
      });
      html += '</div></div></div>';
    }

    // Patterns
    var pi = PATTERNS.filter(function (p) { return !filter || p.name.toLowerCase().indexOf(filter) !== -1; });
    if (pi.length) {
      var po = !filter && isAccordionOpen('patterns');
      var pa = pi.some(function (p) { return h === '#/patterns/' + p.id; });
      html += '<div class="browse-accordion' + (po || pa || filter ? ' open' : '') + '" data-accordion="patterns">';
      html += '<button type="button" class="browse-accordion-trigger" aria-expanded="' + (po || pa || !!filter) + '"><span class="material-symbols-rounded" style="font-size:16px;margin-right:6px;">dashboard</span>PATTERNS<span class="material-symbols-rounded">expand_more</span></button>';
      html += '<div class="browse-accordion-body"><div>';
      pi.forEach(function (p) {
        html += '<a href="#/patterns/' + p.id + '" class="browse-nav-item' + (h === '#/patterns/' + p.id ? ' active' : '') + '">' + p.name + '</a>';
      });
      html += '</div></div></div>';
    }

    sidebarNav.innerHTML = html;

    sidebarNav.querySelectorAll('.browse-accordion-trigger').forEach(function (t) {
      t.addEventListener('click', function (e) {
        e.preventDefault();
        var acc = this.parentElement;
        var open = acc.classList.toggle('open');
        this.setAttribute('aria-expanded', String(open));
        saveAccordionState(acc.dataset.accordion, open);
      });
    });
  }

  searchInput.addEventListener('input', function () {
    renderSidebar(this.value.toLowerCase().trim());
  });

  // ═══ MOBILE DRAWER ═══

  function openDrawer() {
    sidebar.classList.add('open');
    overlay.style.display = 'block';
    requestAnimationFrame(function () { overlay.classList.add('visible'); });
  }

  function closeDrawer() {
    sidebar.classList.remove('open');
    overlay.classList.remove('visible');
    setTimeout(function () { overlay.style.display = 'none'; }, 200);
  }

  hamburger.addEventListener('click', openDrawer);
  overlay.addEventListener('click', closeDrawer);
  sidebarNav.addEventListener('click', function (e) {
    if ((e.target.closest('.browse-nav-item') || e.target.closest('.browse-nav-top-item')) && window.innerWidth < 768) closeDrawer();
  });

  // ═══ DARK MODE ═══

  var themeToggle = document.getElementById('sidebar-theme-toggle');
  var themeIcon = themeToggle.querySelector('.material-symbols-rounded');
  try { if (localStorage.getItem('ume-theme') === 'dark') { document.documentElement.classList.add('dark'); themeIcon.textContent = 'light_mode'; } } catch (e) { }

  themeToggle.addEventListener('click', function () {
    var isDark = document.documentElement.classList.toggle('dark');
    themeIcon.textContent = isDark ? 'light_mode' : 'dark_mode';
    try { localStorage.setItem('ume-theme', isDark ? 'dark' : 'light'); } catch (e) { }
  });

  // ═══ ROUTER ═══

  function parseRoute() {
    var hash = window.location.hash.slice(1);
    if (!hash || hash === '/') return { section: 'overview' };
    var p = hash.split('/').filter(Boolean);
    if (p[0] === 'overview') return { section: 'overview' };
    if (p[0] === 'changelog') return { section: 'changelog' };
    if (p[0] === 'foundations' && p[1]) return { section: 'foundations', id: p[1] };
    if (p[0] === 'components' && p[1]) return { section: 'components', id: p[1] };
    if (p[0] === 'patterns' && p[1]) return { section: 'patterns', id: p[1] };
    return { section: 'overview' };
  }

  function findComp(id) {
    for (var i = 0; i < REGISTRY.length; i++) { if (REGISTRY[i].id === id) return REGISTRY[i]; }
    return null;
  }

  var changelogLink = document.getElementById('sidebar-changelog-link');

  var isFirstLoad = true;

  function navigate() {
    var r = parseRoute();
    renderSidebar(searchInput.value.toLowerCase().trim());

    // Highlight changelog link in footer
    if (changelogLink) {
      if (r.section === 'changelog') {
        changelogLink.classList.add('active');
      } else {
        changelogLink.classList.remove('active');
      }
    }

    function renderRoute() {
      if (r.section === 'overview') renderOverview();
      else if (r.section === 'foundations') renderFoundation(r.id);
      else if (r.section === 'components') {
        var c = findComp(r.id);
        if (c) renderPage(c);
        else { window.location.hash = '#/overview'; return; }
      }
      else if (r.section === 'patterns') renderPattern(r.id);
      else if (r.section === 'changelog') renderChangelog();

      window.scrollTo(0, 0);
      setTimeout(function () {
        var h1 = content.querySelector('h1');
        if (h1) { h1.setAttribute('tabindex', '-1'); h1.focus(); }
      }, 50);
    }

    // Skip transition on first load
    if (isFirstLoad) {
      isFirstLoad = false;
      renderRoute();
      return;
    }

    // Page transition: fade out → swap → fade in
    content.classList.add('content-transitioning');
    setTimeout(function () {
      renderRoute();
      content.classList.remove('content-transitioning');
    }, 180);
  }

  window.addEventListener('hashchange', navigate);

  // ═══ OVERVIEW ═══

  function renderOverview() {
    content.innerHTML =
      '<div class="overview-hero">' +
      '<h1 class="overview-title hero-animate" style="animation-delay:0ms">Ume Design System</h1>' +
      '<p class="overview-subtitle hero-animate" style="animation-delay:80ms">Design tokens, components and page patterns for Ume platforms.</p>' +
      '<div class="overview-sections hero-animate" style="animation-delay:160ms">' +
      '<a href="#/foundations/cores" class="overview-section-card">' +
      '<span class="material-symbols-rounded overview-section-icon">layers</span>' +
      '<div class="overview-section-name">Foundations</div>' +
      '<div class="overview-section-desc">Colors, typography, spacing, elevation, motion and iconography.</div>' +
      '</a>' +
      '<a href="#/components/button" class="overview-section-card">' +
      '<span class="material-symbols-rounded overview-section-icon">widgets</span>' +
      '<div class="overview-section-name">Components</div>' +
      '<div class="overview-section-desc">Components organized by function.</div>' +
      '</a>' +
      '<a href="#/patterns/dashboard" class="overview-section-card">' +
      '<span class="material-symbols-rounded overview-section-icon">dashboard</span>' +
      '<div class="overview-section-name">Patterns</div>' +
      '<div class="overview-section-desc">Full page compositions.</div>' +
      '</a>' +
      '</div>' +
      '<div class="overview-links hero-animate" style="animation-delay:240ms">' +
      '<a class="overview-link" href="https://github.com/wallyborba/ume-design-system" target="_blank" rel="noopener"><span class="material-symbols-rounded">code</span>GitHub</a>' +
      '<a class="overview-link overview-link--disabled"><span class="material-symbols-rounded">design_services</span>Figma<span class="overview-soon-badge">Soon</span></a>' +
      '</div>' +
      '<div class="overview-contributors hero-animate" style="animation-delay:320ms">' +
      '<h2 class="overview-contributors-title">Contributors</h2>' +
      '<div class="overview-contributor">' +
      '<img class="overview-contributor-avatar" src="assets/avatar-wally.jpeg" alt="Wally Borba">' +
      '<div><div class="overview-contributor-name">Wally Borba</div>' +
      '<div class="overview-contributor-role">Product (Designer & AI Builder)</div></div>' +
      '</div>' +
      '</div>' +
      '</div>';
  }

  // ═══ FOUNDATIONS ═══

  function renderFoundation(id) {
    var fdn = null;
    for (var i = 0; i < FOUNDATIONS.length; i++) { if (FOUNDATIONS[i].id === id) { fdn = FOUNDATIONS[i]; break; } }
    var tpl = document.getElementById('fdn-' + id);
    if (tpl) {
      content.innerHTML = tpl.innerHTML;
    } else {
      content.innerHTML = '<div class="browse-page-header"><div class="browse-page-overline">Foundations</div>' +
        '<h1 class="browse-page-title">' + (fdn ? escapeHtml(fdn.name) : id) + '</h1>' +
        '<p class="browse-page-desc">Content in preparation.</p></div>';
    }
  }

  // ═══ PATTERNS ═══

  function renderPattern(id) {
    var tpl = document.getElementById('ptn-' + id);
    var pat = null;
    for (var i = 0; i < PATTERNS.length; i++) { if (PATTERNS[i].id === id) { pat = PATTERNS[i]; break; } }
    if (tpl && pat) {
      content.innerHTML = '<div class="browse-page-header"><div class="browse-page-overline">Patterns</div>' +
        '<h1 class="browse-page-title">' + escapeHtml(pat.name) + '</h1>' +
        '<p class="browse-page-desc">' + escapeHtml(pat.description) + '</p></div>' +
        '<div class="pattern-frame">' + tpl.innerHTML + '</div>';
    } else {
      content.innerHTML = '<div class="browse-page-header"><div class="browse-page-overline">Patterns</div>' +
        '<h1 class="browse-page-title">' + (pat ? escapeHtml(pat.name) : id) + '</h1>' +
        '<p class="browse-page-desc">Content in preparation.</p></div>';
    }
  }

  // ═══ CHANGELOG ═══

  function renderChangelog() {
    var html = '<div class="browse-page-header"><div class="browse-page-overline">Changelog</div><h1 class="browse-page-title">Version History</h1></div>';
    CHANGELOG.forEach(function (e) {
      html += '<div class="changelog-entry"><div class="changelog-version">' + escapeHtml(e.version) + '</div><div class="changelog-date">' + escapeHtml(e.date) + '</div><ul class="changelog-list">';
      e.changes.forEach(function (c) { html += '<li>' + escapeHtml(c) + '</li>'; });
      html += '</ul></div>';
    });
    content.innerHTML = html;
  }

  // ═══ COMPONENT PAGE ═══

  function renderPage(comp) {
    var html = '<div class="browse-page-header">';
    html += '<div class="browse-page-overline">Components</div>';
    html += '<h1 class="browse-page-title">' + escapeHtml(comp.name);
    if (comp.shadcn) html += ' <span class="browse-page-shadcn">shadcn/' + escapeHtml(comp.shadcn) + '</span>';
    if (comp.atomic) html += ' <span class="browse-page-shadcn">' + escapeHtml(comp.atomic) + '</span>';
    if (comp.status === 'wip') html += ' <span class="browse-wip-badge"><span class="material-symbols-rounded" style="font-size:14px;">schedule</span> Coming soon</span>';
    html += '</h1>';
    if (comp.description) html += '<p class="browse-page-desc">' + escapeHtml(comp.description) + '</p>';
    html += '</div>';

    if (comp.status === 'done') {
      html += '<div class="playground" data-component="' + comp.id + '"><script type="application/json">' + JSON.stringify({ title: comp.name, description: comp.description, usage: comp.usage, shadcn: comp.shadcn, a11y: comp.a11y, controls: comp.controls, presets: comp.presets, template: comp.template }) + '<\/script></div>';
      html += renderGallery(comp);
      if (comp.controls && comp.controls.length) html += renderPropsTable(comp);
      if (comp.usage) html += '<div class="browse-usage"><h2 class="browse-usage-title">Usage Guidelines</h2><p class="browse-usage-text">' + escapeHtml(comp.usage) + '</p></div>';
      if (comp.a11y) html += '<div class="browse-a11y"><h2 class="browse-a11y-title">Accessibility</h2><div class="browse-a11y-box"><span class="material-symbols-rounded">accessibility_new</span><p class="browse-a11y-text">' + escapeHtml(comp.a11y) + '</p></div></div>';
    } else if (comp.staticHtml) {
      html += '<div class="browse-wip-preview">' + comp.staticHtml + '</div>';
    }

    content.innerHTML = html;
    if (comp.status === 'done') initPlaygrounds();
  }

  function renderGallery(comp) {
    if (!comp.controls || !comp.controls.length) return '';
    var mc = null;
    for (var i = 0; i < comp.controls.length; i++) { if (comp.controls[i].type === 'select') { mc = comp.controls[i]; break; } }
    if (!mc) return '';
    var html = '<div class="browse-gallery"><h2 class="browse-gallery-title">All Variants</h2><div class="browse-gallery-grid">';
    mc.options.forEach(function (opt) {
      var st = {};
      comp.controls.forEach(function (c) { st[c.name] = c['default'] !== undefined ? c['default'] : (c.options ? c.options[0] : false); });
      st[mc.name] = opt;
      var dark = ['dark', 'accent', 'glow'].indexOf(opt) !== -1;
      var grad = opt === 'glass';
      html += '<div class="browse-gallery-item' + (grad ? ' needs-gradient' : dark ? ' needs-dark' : '') + '">' + renderTemplate(comp.template, st) + '<span class="browse-gallery-label">' + escapeHtml(opt) + '</span></div>';
    });
    return html + '</div></div>';
  }

  function renderPropsTable(comp) {
    var html = '<div class="browse-props"><h2 class="browse-props-title">Properties</h2><table class="browse-props-table"><thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Options</th></tr></thead><tbody>';
    comp.controls.forEach(function (c) {
      html += '<tr><td>' + escapeHtml(c.name) + '</td><td><code>' + escapeHtml(c.type) + '</code></td><td><code>' + escapeHtml(String(c['default'])) + '</code></td><td>' + (c.options ? c.options.map(function (o) { return '<code>' + escapeHtml(o) + '</code>'; }).join(' ') : '\u2014') + '</td></tr>';
    });
    return html + '</tbody></table></div>';
  }

  // ═══ PLAYGROUND ═══

  function initPlaygrounds() {
    content.querySelectorAll('.playground').forEach(function (el) {
      var s = el.querySelector('script[type="application/json"]');
      if (!s) return;
      try { initPlayground(el, JSON.parse(s.textContent)); }
      catch (e) { console.error('Playground JSON error:', e); }
    });
  }

  function initPlayground(el, config) {
    var state = {};
    (config.controls || []).forEach(function (c) {
      state[c.name] = c['default'] !== undefined ? c['default'] : (c.options ? c.options[0] : false);
    });
    var localDark = false;

    // Title bar (full width, top)
    var titleBar = document.createElement('div'); titleBar.className = 'pg-titlebar';
    var titleEl = document.createElement('div'); titleEl.className = 'pg-title'; titleEl.textContent = 'Preview';
    titleBar.appendChild(titleEl);
    el.appendChild(titleBar);

    // Body: preview + side panel
    var body = document.createElement('div'); body.className = 'pg-body';

    // Preview area (left)
    var previewWrap = document.createElement('div'); previewWrap.className = 'pg-preview-wrap';
    var preview = document.createElement('div'); preview.className = 'pg-preview';
    var darkBtn = document.createElement('button'); darkBtn.type = 'button'; darkBtn.className = 'pg-dark-toggle'; darkBtn.setAttribute('aria-label', 'Toggle dark preview');
    darkBtn.innerHTML = '<span class="material-symbols-rounded">dark_mode</span>';
    darkBtn.addEventListener('click', function () { localDark = !localDark; this.querySelector('.material-symbols-rounded').textContent = localDark ? 'light_mode' : 'dark_mode'; render(); });
    previewWrap.appendChild(darkBtn);
    previewWrap.appendChild(preview);
    body.appendChild(previewWrap);

    // Side panel (right)
    var sidePanel = document.createElement('div'); sidePanel.className = 'pg-side-panel';

    // Controls section
    var controlsSection = document.createElement('div'); controlsSection.className = 'pg-side-controls';
    var controlsHeader = document.createElement('div'); controlsHeader.className = 'pg-side-header'; controlsHeader.textContent = 'Controls';
    controlsSection.appendChild(controlsHeader);

    var controlsWrap = document.createElement('div'); controlsWrap.className = 'pg-controls';
    (config.controls || []).forEach(function (ctrl) {
      var group = document.createElement('div'); group.className = 'pg-control-group';
      var label = document.createElement('span'); label.className = 'pg-control-label'; label.textContent = ctrl.name; group.appendChild(label);
      if (ctrl.type === 'select') {
        var sel = document.createElement('select'); sel.className = 'pg-select'; sel.setAttribute('aria-label', ctrl.name);
        ctrl.options.forEach(function (o) { var op = document.createElement('option'); op.value = o; op.textContent = o; if (o === state[ctrl.name]) op.selected = true; sel.appendChild(op); });
        sel.addEventListener('change', function () { state[ctrl.name] = this.value; clearPresets(); render(); });
        group.appendChild(sel);
      } else if (ctrl.type === 'toggle') {
        var tog = document.createElement('button'); tog.type = 'button'; tog.className = 'pg-toggle';
        tog.setAttribute('role', 'switch'); tog.setAttribute('aria-checked', String(!!state[ctrl.name])); tog.setAttribute('aria-label', ctrl.name);
        tog.addEventListener('click', function () { state[ctrl.name] = !state[ctrl.name]; this.setAttribute('aria-checked', String(state[ctrl.name])); clearPresets(); render(); });
        group.appendChild(tog);
      }
      controlsWrap.appendChild(group);
    });
    controlsSection.appendChild(controlsWrap);
    sidePanel.appendChild(controlsSection);

    // Presets section (inside side panel, below controls)
    var pb = null;
    if (config.presets && config.presets.length) {
      var presetsSection = document.createElement('div'); presetsSection.className = 'pg-side-presets';
      var presetsHeader = document.createElement('div'); presetsHeader.className = 'pg-side-header'; presetsHeader.textContent = 'Presets';
      presetsSection.appendChild(presetsHeader);
      pb = document.createElement('div'); pb.className = 'pg-presets';
      config.presets.forEach(function (preset) {
        var btn = document.createElement('button'); btn.type = 'button'; btn.className = 'pg-preset'; btn.textContent = preset.label;
        btn.addEventListener('click', function () {
          Object.keys(preset.state).forEach(function (k) { state[k] = preset.state[k]; });
          updateUI(); pb.querySelectorAll('.pg-preset').forEach(function (b) { b.classList.remove('active'); }); btn.classList.add('active'); render();
        });
        pb.appendChild(btn);
      });
      presetsSection.appendChild(pb);
      sidePanel.appendChild(presetsSection);
    }

    body.appendChild(sidePanel);
    el.appendChild(body);

    // Code panel (full width, bottom)
    var ct = document.createElement('button'); ct.type = 'button'; ct.className = 'pg-code-toggle'; ct.setAttribute('aria-expanded', 'false');
    ct.innerHTML = '<span class="material-symbols-rounded">expand_more</span> HTML Code'; el.appendChild(ct);
    var cp = document.createElement('div'); cp.className = 'pg-code-panel';
    var pre = document.createElement('pre'); var code = document.createElement('code'); pre.appendChild(code); cp.appendChild(pre);
    var copyBtn = document.createElement('button'); copyBtn.type = 'button'; copyBtn.className = 'pg-copy-btn';
    copyBtn.innerHTML = '<span class="material-symbols-rounded">content_copy</span> Copy'; cp.appendChild(copyBtn);
    el.appendChild(cp);

    ct.addEventListener('click', function () { var exp = cp.classList.toggle('open'); this.setAttribute('aria-expanded', String(exp)); });
    copyBtn.addEventListener('click', function () {
      navigator.clipboard.writeText(getCode()).then(function () {
        copyBtn.innerHTML = '<span class="material-symbols-rounded">check</span> Copied!'; copyBtn.classList.add('copied');
        setTimeout(function () { copyBtn.innerHTML = '<span class="material-symbols-rounded">content_copy</span> Copy'; copyBtn.classList.remove('copied'); }, 2000);
      });
    });

    function render() {
      preview.innerHTML = renderTemplate(config.template, state);
      var nd = localDark, ng = localDark && state.variant === 'glass';
      preview.classList.toggle('pg-dark', nd && !ng);
      preview.classList.toggle('pg-gradient', ng);
      code.innerHTML = highlightHtml(getCode());
    }
    function getCode() { return formatHtml(renderTemplate(config.template, state)); }
    function updateUI() {
      var sels = controlsWrap.querySelectorAll('.pg-select'), togs = controlsWrap.querySelectorAll('.pg-toggle'), si = 0, ti = 0;
      (config.controls || []).forEach(function (c) {
        if (c.type === 'select') { sels[si].value = state[c.name]; si++; }
        else if (c.type === 'toggle') { togs[ti].setAttribute('aria-checked', String(!!state[c.name])); ti++; }
      });
    }
    function clearPresets() { el.querySelectorAll('.pg-preset').forEach(function (b) { b.classList.remove('active'); }); }
    render();
  }

  // ═══ INIT ═══
  navigate();
})();
