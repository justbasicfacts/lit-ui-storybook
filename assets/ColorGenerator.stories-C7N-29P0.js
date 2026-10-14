import{b as _,d as $,j as e,T as R}from"./iframe-BOtHSW94.js";import"./index-BSSMaTAd.js";import{C as u}from"./card-HAj1jThK.js";import{C as g}from"./card-content-KILzrGcc.js";import{S as d}from"./stack-PU_AZfnY.js";import{T as i}from"./typography-Cc_iDT_f.js";import{S as G}from"./simple-grid-Bbjl2L_P.js";import{A as C}from"./alert-B8J9cNSX.js";import{B as A}from"./box-D-9l6TQW.js";import{B as T}from"./button-DCboYVE-.js";import{C as B}from"./chip-BHAFYJtc.js";import{I as N}from"./input-CKsM46XL.js";import{S as D}from"./select-CDUCOcWe.js";import{F as L}from"./form-control-label-DJF4rCz6.js";import{S as V}from"./switch-CcBHdBOE.js";import"./preload-helper-Bs85Y4nq.js";const p=(n,a,t)=>Math.min(Math.max(n,a),t);function M(n){const a=n.trim();let t=0,o=0,s=0;if(a.startsWith("#")){const x=a.slice(1),h=x.length===3?x.split("").map(I=>I+I).join(""):x;t=Number.parseInt(h.slice(0,2),16)/255,o=Number.parseInt(h.slice(2,4),16)/255,s=Number.parseInt(h.slice(4,6),16)/255}else[t,o,s]=a.replace(/^rgba?\(/,"").replace(/\).*$/,"").split(",").map(h=>Number.parseFloat(h)).map(h=>Number.isFinite(h)?h/255:0);const r=Math.max(t,o,s),l=Math.min(t,o,s),m=(r+l)/2,c=r-l;if(c===0)return{h:0,s:0,l:Math.round(m*100)};const f=c/(1-Math.abs(2*m-1));let y;return r===t?y=(o-s)/c%6:r===o?y=(s-t)/c+2:y=(t-o)/c+4,{h:Math.round((y*60%360+360)%360),s:Math.round(f*100),l:Math.round(m*100)}}const S=n=>Math.round(p(n,0,255)).toString(16).padStart(2,"0");function U({h:n,s:a,l:t}){const o=p(a,0,100)/100,s=p(t,0,100)/100,r=l=>{const m=(l+n/30)%12,c=o*Math.min(s,1-s);return s-c*Math.max(-1,Math.min(m-3,9-m,1))};return`#${S(r(0)*255)}${S(r(8)*255)}${S(r(4)*255)}`}function F(n,a=10,t=6){const{h:o,s,l:r}=M(n),l=p(t,0,a-1);return Array.from({length:a},(m,c)=>{const f=c-l,y=p(r-f*7,(n.startsWith("#"),6),97),x=f<0?p(s*(.55+.05*(l+f)),0,100):s;return c===l?n:U({h:o,s:x,l:y})})}function k(n,a=6){const t=F(n,10,a),o=t[p(a,0,t.length-1)];return{main:o,light:t[p(a-3,0,t.length-1)],dark:t[p(a+2,0,t.length-1)],contrastText:z(o)}}function z(n){const{l:a}=M(n);return a>62?"rgba(0, 0, 0, 0.87)":"#ffffff"}const{useArgs:H}=__STORYBOOK_MODULE_PREVIEW_API__,pe={title:"Theming/Colour generator",parameters:{layout:"fullscreen"}},E=["primary","secondary","error","warning","info","success"],K=n=>{const a=n.surface==="dark",t={[n.slot]:k(n.base,n.mainShade)};return a&&(t.text={primary:"#ffffff",secondary:"rgba(255, 255, 255, 0.7)",muted:"rgba(255, 255, 255, 0.82)"},t.background={paper:"#1e1e1e",default:"#121212",surface:"#1e1e1e",muted:"#1a1a1a"},t.divider="rgba(255, 255, 255, 0.12)"),{palette:t,shape:{borderRadius:n.radius}}};function w({title:n,lead:a,children:t}){return e.jsx(A,{padding:"32px 32px 64px",children:e.jsx(A,{style:{maxWidth:1120,margin:"0 auto"},children:e.jsxs(d,{spacing:3,children:[e.jsxs(d,{spacing:1,children:[e.jsx(i,{variant:"h4",component:"h1",children:n}),e.jsx(i,{variant:"body1",color:"text.secondary",component:"p",children:a})]}),t]})})})}function O({base:n,mainShade:a,onPick:t}){const o=F(n,10,a);return e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(10, minmax(0, 1fr))",gap:4},children:o.map((s,r)=>e.jsxs("div",{style:{display:"grid",gap:4},children:[e.jsx("button",{type:"button",onClick:t?()=>t(r):void 0,title:s,"aria-label":`shade ${r}, ${s}`,style:{height:64,background:s,border:r===a?"2px solid var(--ui-color-text, rgba(0,0,0,0.87))":"1px solid rgba(0, 0, 0, 0.08)",borderRadius:6,cursor:t?"pointer":"default",padding:0}}),e.jsx(i,{variant:"caption",color:"text.secondary",component:"p",children:r}),e.jsx(i,{variant:"caption",component:"p",children:s})]},r))})}const P=["info","success","warning","error"],Y=n=>P.includes(n);function W({slot:n="primary"}){const a=Y(n)?n:"info";return e.jsxs(d,{spacing:2,children:[e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"},children:[e.jsx(T,{size:"sm",children:"Primary"}),e.jsx(T,{size:"sm",variant:"outline",children:"Outline"}),e.jsx(T,{size:"sm",variant:"ghost",children:"Ghost"}),e.jsx(B,{label:"Chip",variant:"outlined",nowrap:!0})]}),e.jsxs("div",{style:{display:"grid",gap:16,gridTemplateColumns:"1fr 1fr"},children:[e.jsx(N,{label:"Team name",value:"Design system"}),e.jsx(D,{label:"Environment",options:["Preview","Staging","Production"],value:"Preview"})]}),e.jsx(d,{spacing:1,children:e.jsx(L,{label:"Email me on release",controlPosition:"start",children:e.jsx(V,{slot:"control",checked:!0})})}),e.jsx(C,{severity:a,title:"Generated",children:"Every colour here came from one base value."})]})}const b={args:{base:"#0f766e",mainShade:6,slot:"primary",surface:"light",radius:8},argTypes:{base:{control:"color",description:"The base colour everything is built from"},mainShade:{control:{type:"range",min:0,max:9,step:1},description:"Which step becomes the main colour"},slot:{control:"select",options:E,description:"Which palette slot it fills"},surface:{control:"inline-radio",options:["light","dark"]},radius:{control:{type:"range",min:0,max:24,step:1}}},render:n=>{const[,a]=H(),t=K(n),o=k(n.base,n.mainShade),s=_($(t));return e.jsxs(w,{title:"Colour generator",lead:"Pick a base colour and the ten step scale, the light and dark slots and the contrast text follow from it. Click a shade to make it the main colour, or drive it from the panel.",children:[e.jsx(u,{children:e.jsx(g,{children:e.jsxs(d,{spacing:2,children:[e.jsx(O,{base:n.base,mainShade:n.mainShade,onPick:r=>a({mainShade:r})}),e.jsxs(i,{variant:"caption",color:"text.secondary",component:"p",children:[n.base," · ",t.palette?.[n.slot]?n.slot:""," filled from shade"," ",n.mainShade]})]})})}),e.jsxs("div",{style:{display:"grid",gap:16,gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 340px), 1fr))",alignItems:"start"},children:[e.jsx(u,{children:e.jsx(g,{children:e.jsx(R,{theme:t,padding:20,children:e.jsx(W,{slot:n.slot})})})}),e.jsx(u,{children:e.jsx(g,{children:e.jsxs(d,{spacing:2,children:[e.jsx(i,{variant:"subtitle2",component:"p",children:"The slots it fills"}),[["main",o.main],["light",o.light??""],["dark",o.dark??""],["contrastText",o.contrastText??""]].map(([r,l])=>e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",justifyContent:"space-between"},children:[e.jsxs(i,{variant:"body2",component:"p",children:[n.slot,".",r]}),e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx(i,{variant:"caption",color:"text.secondary",component:"p",children:l}),e.jsx("div",{style:{width:22,height:22,background:l,border:"1px solid var(--ui-color-divider)",borderRadius:4}})]})]},r)),e.jsxs(i,{variant:"caption",color:"text.secondary",component:"p",children:[Object.keys(s).length," custom properties resolved from this theme."]}),e.jsx(i,{variant:"subtitle2",component:"p",children:"Tones"}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 1fr))",gap:8},children:E.map(r=>{const l=r===n.slot;return e.jsxs("div",{style:{display:"grid",gap:4},children:[e.jsx("div",{style:{height:28,background:`var(--ui-color-${r})`,border:l?"2px solid var(--ui-color-text, rgba(0,0,0,0.87))":"1px solid var(--ui-color-divider)",borderRadius:4,opacity:l?1:.45}}),e.jsxs(i,{variant:"caption",component:"p",children:[r,l?" ·":""]})]},r)})}),e.jsx(i,{variant:"caption",color:"text.secondary",component:"p",children:"Only the marked tone is filled from your base, so anything reading another tone (an info alert reads info, an error alert reads error) stays where it was until you fill that tone too."})]})})})]}),e.jsx(u,{children:e.jsx(g,{children:e.jsxs(d,{spacing:1.5,children:[e.jsx(i,{variant:"subtitle2",component:"p",children:"Use it in an app"}),e.jsxs(i,{variant:"body2",component:"p",children:["import ","{ tone, createTheme, setTheme }"," from '@justbasicfacts/tokens';"]}),e.jsxs(i,{variant:"body2",component:"p",children:["setTheme(createTheme(","{"," palette: ","{"," ",n.slot,": tone('",n.base,"',"," ",n.mainShade,") ","}"," ","}","));"]}),e.jsx(i,{variant:"caption",color:"text.secondary",component:"p",children:"shades() gives you the scale on its own when you want to lay the steps out yourself."})]})})})]})}},v={render:()=>e.jsx(w,{title:"One base, ten steps",lead:"The same function applied to a few brand colours. Shade 0 is the lightest tint and 9 the darkest shade, with the base sitting at the shade you nominate.",children:e.jsx(u,{children:e.jsx(g,{children:e.jsx(d,{spacing:3,children:["#1976d2","#0f766e","#f59e0b","#d32f2f","#7c3aed"].map(n=>e.jsxs(d,{spacing:1,children:[e.jsx(i,{variant:"subtitle2",component:"p",children:n}),e.jsx(O,{base:n,mainShade:6})]},n))})})})})},j={render:()=>{const n={primary:"#7c3aed",secondary:"#0ea5e9",error:"#dc2626",warning:"#f59e0b",info:"#2563eb",success:"#15803d"},a={palette:Object.fromEntries(Object.entries(n).map(([t,o])=>[t,k(o)])),shape:{borderRadius:10}};return e.jsxs(w,{title:"A whole theme from three colours",lead:"Three base colours become three tones, and the components pick them up with no per-component CSS.",children:[e.jsx(G,{cols:2,spacing:3,children:Object.entries(n).map(([t,o])=>e.jsx(u,{children:e.jsxs(g,{children:[e.jsx(i,{variant:"subtitle2",component:"p",children:t}),e.jsx(O,{base:o,mainShade:6})]})},t))}),e.jsx(u,{children:e.jsx(g,{children:e.jsx(R,{theme:a,padding:20,children:e.jsx(W,{})})})}),e.jsx(d,{spacing:2,children:P.map(t=>e.jsxs(C,{severity:t,title:`${t} alert`,children:["Follows the theme because the ",t," tone is filled too."]},t))}),e.jsx(C,{severity:"info",title:"Where the contrast text comes from",children:"contrastText is chosen from the base's luminance, so a pale brand colour gets dark text on it without anyone deciding per colour."})]})}},he=["Generator","ShadeScale","InATheme"];b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    base: '#0f766e',
    mainShade: 6,
    slot: 'primary',
    surface: 'light',
    radius: 8
  },
  argTypes: {
    base: {
      control: 'color',
      description: 'The base colour everything is built from'
    },
    mainShade: {
      control: {
        type: 'range',
        min: 0,
        max: 9,
        step: 1
      },
      description: 'Which step becomes the main colour'
    },
    slot: {
      control: 'select',
      options: SLOTS,
      description: 'Which palette slot it fills'
    },
    surface: {
      control: 'inline-radio',
      options: ['light', 'dark']
    },
    radius: {
      control: {
        type: 'range',
        min: 0,
        max: 24,
        step: 1
      }
    }
  },
  render: args => {
    const [, updateArgs] = useArgs<GeneratorArgs>();
    const theme = generatedTheme(args);
    const derived = tone(args.base, args.mainShade);
    const vars = toCssVars(createTheme(theme));
    return <Frame title="Colour generator" lead="Pick a base colour and the ten step scale, the light and dark slots and the contrast text follow from it. Click a shade to make it the main colour, or drive it from the panel.">
        <Card>
          <CardContent>
            <Stack spacing={2}>
              <ShadeRow base={args.base} mainShade={args.mainShade} onPick={index => updateArgs({
              mainShade: index
            })} />
              <Typography variant="caption" color="text.secondary" component="p">
                {args.base} · {theme.palette?.[args.slot] ? args.slot : ''} filled from shade{' '}
                {args.mainShade}
              </Typography>
            </Stack>
          </CardContent>
        </Card>

        <div style={{
        display: 'grid',
        gap: 16,
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
        alignItems: 'start'
      }}>
          <Card>
            <CardContent>
              <ThemeScope theme={theme} padding={20}>
                <DemoPanel slot={args.slot} />
              </ThemeScope>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Stack spacing={2}>
                <Typography variant="subtitle2" component="p">
                  The slots it fills
                </Typography>
                {([['main', derived.main], ['light', derived.light ?? ''], ['dark', derived.dark ?? ''], ['contrastText', derived.contrastText ?? '']] as const).map(([name, value]) => <div key={name} style={{
                display: 'flex',
                gap: 8,
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                    <Typography variant="body2" component="p">
                      {args.slot}.{name}
                    </Typography>
                    <div style={{
                  display: 'flex',
                  gap: 8,
                  alignItems: 'center'
                }}>
                      <Typography variant="caption" color="text.secondary" component="p">
                        {value}
                      </Typography>
                      <div style={{
                    width: 22,
                    height: 22,
                    background: value,
                    border: '1px solid var(--ui-color-divider)',
                    borderRadius: 4
                  }} />
                    </div>
                  </div>)}
                <Typography variant="caption" color="text.secondary" component="p">
                  {Object.keys(vars).length} custom properties resolved from this theme.
                </Typography>
                <Typography variant="subtitle2" component="p">
                  Tones
                </Typography>
                <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                gap: 8
              }}>
                  {SLOTS.map(toneName => {
                  const filled = toneName === args.slot;
                  return <div key={toneName} style={{
                    display: 'grid',
                    gap: 4
                  }}>
                        <div style={{
                      height: 28,
                      background: \`var(--ui-color-\${toneName})\`,
                      border: filled ? '2px solid var(--ui-color-text, rgba(0,0,0,0.87))' : '1px solid var(--ui-color-divider)',
                      borderRadius: 4,
                      opacity: filled ? 1 : 0.45
                    }} />
                        <Typography variant="caption" component="p">
                          {toneName}
                          {filled ? ' ·' : ''}
                        </Typography>
                      </div>;
                })}
                </div>
                <Typography variant="caption" color="text.secondary" component="p">
                  Only the marked tone is filled from your base, so anything reading
                  another tone (an info alert reads info, an error alert reads error)
                  stays where it was until you fill that tone too.
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent>
            <Stack spacing={1.5}>
              <Typography variant="subtitle2" component="p">
                Use it in an app
              </Typography>
              <Typography variant="body2" component="p">
                import {'{ tone, createTheme, setTheme }'} from '@justbasicfacts/tokens';
              </Typography>
              <Typography variant="body2" component="p">
                setTheme(createTheme({'{'} palette: {'{'} {args.slot}: tone('{args.base}',{' '}
                {args.mainShade}) {'}'} {'}'}));
              </Typography>
              <Typography variant="caption" color="text.secondary" component="p">
                shades() gives you the scale on its own when you want to lay the steps out
                yourself.
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Frame>;
  }
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Frame title="One base, ten steps" lead="The same function applied to a few brand colours. Shade 0 is the lightest tint and 9 the darkest shade, with the base sitting at the shade you nominate.">
      <Card>
        <CardContent>
          <Stack spacing={3}>
            {['#1976d2', '#0f766e', '#f59e0b', '#d32f2f', '#7c3aed'].map(base => <Stack key={base} spacing={1}>
                <Typography variant="subtitle2" component="p">
                  {base}
                </Typography>
                <ShadeRow base={base} mainShade={6} />
              </Stack>)}
          </Stack>
        </CardContent>
      </Card>
    </Frame>
}`,...v.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    /* Every tone, each from its own base: this is what it takes for an alert to
       follow the theme as well as a button does. */
    const bases = {
      primary: '#7c3aed',
      secondary: '#0ea5e9',
      error: '#dc2626',
      warning: '#f59e0b',
      info: '#2563eb',
      success: '#15803d'
    } as const;
    const theme: UiTheme = {
      palette: Object.fromEntries(Object.entries(bases).map(([slot, base]) => [slot, tone(base)])),
      shape: {
        borderRadius: 10
      }
    };
    return <Frame title="A whole theme from three colours" lead="Three base colours become three tones, and the components pick them up with no per-component CSS.">
        <SimpleGrid cols={2} spacing={3}>
          {Object.entries(bases).map(([slot, base]) => <Card key={slot}>
              <CardContent>
                <Typography variant="subtitle2" component="p">
                  {slot}
                </Typography>
                <ShadeRow base={base} mainShade={6} />
              </CardContent>
            </Card>)}
        </SimpleGrid>

        <Card>
          <CardContent>
            <ThemeScope theme={theme} padding={20}>
              <DemoPanel />
            </ThemeScope>
          </CardContent>
        </Card>

        <Stack spacing={2}>
          {SEVERITIES.map(severity => <Alert key={severity} severity={severity} title={\`\${severity} alert\`}>
              Follows the theme because the {severity} tone is filled too.
            </Alert>)}
        </Stack>

        <Alert severity="info" title="Where the contrast text comes from">
          contrastText is chosen from the base's luminance, so a pale brand colour gets dark
          text on it without anyone deciding per colour.
        </Alert>
      </Frame>;
  }
}`,...j.parameters?.docs?.source}}};export{b as Generator,j as InATheme,v as ShadeScale,he as __namedExportsOrder,pe as default};
