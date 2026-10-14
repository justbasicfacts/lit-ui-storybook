import{b as B,d as D,j as n,T as F,m as U}from"./iframe-7KbjxAZ3.js";import"./index-3LxRijqB.js";import{C as f}from"./card-DQaNZuYq.js";import{C as x}from"./card-content-BIWjcw17.js";import{S as y}from"./stack-D2bZ1H4L.js";import{T as d}from"./typography-CCEeJc5Q.js";import{S as W}from"./simple-grid-CmqCt0bi.js";import{B as A}from"./box-Ve276Sxv.js";import{B as k}from"./button-DuSI2I0o.js";import{C as H}from"./chip-DBjL4wOv.js";import{I as L}from"./input-BLmN42na.js";import{S as V}from"./select-Cc8Go7HH.js";import{F as z}from"./form-control-label-DnwDC989.js";import{S as N}from"./switch-D0kuUCd_.js";import{A as K}from"./alert-CgXMELKr.js";import"./preload-helper-Bs85Y4nq.js";const g=(e,a,t)=>Math.min(Math.max(e,a),t);function I(e){const a=e.trim();let t=0,r=0,o=0;if(a.startsWith("#")){const b=a.slice(1),u=b.length===3?b.split("").map(R=>R+R).join(""):b;t=Number.parseInt(u.slice(0,2),16)/255,r=Number.parseInt(u.slice(2,4),16)/255,o=Number.parseInt(u.slice(4,6),16)/255}else[t,r,o]=a.replace(/^rgba?\(/,"").replace(/\).*$/,"").split(",").map(u=>Number.parseFloat(u)).map(u=>Number.isFinite(u)?u/255:0);const s=Math.max(t,r,o),l=Math.min(t,r,o),i=(s+l)/2,c=s-l;if(c===0)return{h:0,s:0,l:Math.round(i*100)};const p=c/(1-Math.abs(2*i-1));let m;return s===t?m=(r-o)/c%6:s===r?m=(o-t)/c+2:m=(t-r)/c+4,{h:Math.round((m*60%360+360)%360),s:Math.round(p*100),l:Math.round(i*100)}}const w=e=>Math.round(g(e,0,255)).toString(16).padStart(2,"0");function $({h:e,s:a,l:t}){const r=g(a,0,100)/100,o=g(t,0,100)/100,s=l=>{const i=(l+e/30)%12,c=r*Math.min(o,1-o);return o-c*Math.max(-1,Math.min(i-3,9-i,1))};return`#${w(s(0)*255)}${w(s(8)*255)}${w(s(4)*255)}`}function P(e,a=10,t=6){const{h:r,s:o,l:s}=I(e),l=a-1,i=g(t,0,l);return Array.from({length:a},(c,p)=>{if(p===i)return e;if(p<i){const b=(i-p)/(i||1);return $({h:r,s:g(o*(1-.35*b),0,100),l:s+(97-s)*b})}const m=(p-i)/(l-i||1);return $({h:r,s:o,l:s+(10-s)*m})})}function h(e,a=6){const t=P(e,10,a),r=t[g(a,0,t.length-1)];return{main:r,light:t[g(a-3,0,t.length-1)],dark:t[g(a+2,0,t.length-1)],contrastText:Y(r)}}function Y(e){const{l:a}=I(e);return a>62?"rgba(0, 0, 0, 0.87)":"#ffffff"}const{useArgs:q}=__STORYBOOK_MODULE_PREVIEW_API__,xe={title:"Theming/Colour generator",parameters:{layout:"fullscreen"}},C=["primary","secondary","error","warning","info","success"],J=["primary","secondary"],Q=["info","success","warning","error"],X=[5,35,143,200],Z=(e,a,t)=>Math.min(Math.max(e,a),t),ee=[0,-2,2,-4,4,-6,6,-8,-1,1,-3,3,-5,5,-7,7],E=(e,a=C)=>{const t=new Set,r={};for(const o of a){let s=ee.map(l=>Z(e+l,0,9)).find(l=>!t.has(l));s===void 0&&(s=Array.from({length:10},(i,c)=>c).filter(i=>!t.has(i)).sort((i,c)=>Math.abs(e-i)-Math.abs(e-c))[0]),t.add(s),r[o]=s}return r},_=e=>{const{h:a,s:t,l:r}=I(e),o=c=>Math.min(...X.map(p=>{const m=Math.abs(((c-p)%360+360)%360);return Math.min(m,360-m)})),s=[30,-30,60,-60,90,-90,150,-150].map(c=>((a+c)%360+360)%360),i=s.find(c=>o(c)>=30)??s.sort((c,p)=>o(p)-o(c))[0];return $({h:i,s:t,l:r})},S=e=>{if(e.colours==="brand"){const a=E(e.mainShade);return Object.fromEntries(C.map(t=>[t,a[t]]))}if(e.colours==="semantic"){const a=E(e.mainShade,J);return{primary:a.primary,secondary:a.secondary}}return{[e.slot]:e.mainShade}},ne=e=>{const a={},t=S(e);if(t.primary!==void 0&&(a.primary=h(e.base,t.primary)),t.secondary!==void 0){const r=e.colours==="semantic"?_(e.base):e.base;a.secondary=h(r,t.secondary)}return t.info!==void 0&&(a.info=h(e.base,t.info)),t.success!==void 0&&(a.success=h(e.base,t.success)),t.warning!==void 0&&(a.warning=h(e.base,t.warning)),t.error!==void 0&&(a.error=h(e.base,t.error)),e.surface==="dark"&&(a.text={primary:"#ffffff",secondary:"rgba(255, 255, 255, 0.7)",muted:"rgba(255, 255, 255, 0.82)"},a.background={paper:"#1e1e1e",default:"#121212",surface:"#1e1e1e",muted:"#1a1a1a"},a.divider="rgba(255, 255, 255, 0.12)"),{palette:a,shape:{borderRadius:e.radius}}};function M({title:e,lead:a,children:t}){return n.jsx(A,{padding:"32px 32px 64px",children:n.jsx(A,{style:{maxWidth:1120,margin:"0 auto"},children:n.jsxs(y,{spacing:3,children:[n.jsxs(y,{spacing:1,children:[n.jsx(d,{variant:"h4",component:"h1",children:e}),n.jsx(d,{variant:"body1",color:"text.secondary",component:"p",children:a})]}),t]})})})}function O({base:e,mainShade:a,onPick:t}){const r=P(e,10,a);return n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(10, minmax(0, 1fr))",gap:4},children:r.map((o,s)=>n.jsxs("div",{style:{display:"grid",gap:4},children:[n.jsx("button",{type:"button",onClick:t?()=>t(s):void 0,title:o,"aria-label":`shade ${s}, ${o}`,style:{height:64,background:o,border:s===a?"2px solid var(--ui-color-text, rgba(0,0,0,0.87))":"1px solid rgba(0, 0, 0, 0.08)",borderRadius:6,cursor:t?"pointer":"default",padding:0}}),n.jsx(d,{variant:"caption",color:"text.secondary",component:"p",children:s}),n.jsx(d,{variant:"caption",component:"p",children:o})]},s))})}function G(){return n.jsxs(y,{spacing:2,children:[n.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"},children:[n.jsx(k,{size:"sm",children:"Primary"}),n.jsx(k,{size:"sm",variant:"outline",children:"Outline"}),n.jsx(k,{size:"sm",variant:"ghost",children:"Ghost"}),n.jsx(H,{label:"Chip",variant:"outlined",nowrap:!0})]}),n.jsxs("div",{style:{display:"grid",gap:16,gridTemplateColumns:"1fr 1fr"},children:[n.jsx(L,{label:"Team name",value:"Design system"}),n.jsx(V,{label:"Environment",options:["Preview","Staging","Production"],value:"Preview"})]}),n.jsx(z,{label:"Email me on release",controlPosition:"start",children:n.jsx(N,{slot:"control",checked:!0})}),Q.map(e=>n.jsx(K,{severity:e,title:`${e} alert`,children:e==="info"?"Every colour here came from one base value.":`Reads the ${e} tone.`},e))]})}function te({args:e}){const a=S(e);return n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 1fr))",gap:10},children:C.map(t=>{const r=a[t],o=r!==void 0,s=o?h(e.colours==="semantic"&&t==="secondary"?_(e.base):e.base,r).main:U.palette?.[t]?.main??"";return n.jsxs("div",{style:{display:"grid",gap:4},children:[n.jsx("div",{style:{height:40,background:s,border:o?"2px solid var(--ui-color-text, rgba(0,0,0,0.87))":"1px solid var(--ui-color-divider)",borderRadius:4}}),n.jsx(d,{variant:"caption",component:"p",children:t}),n.jsx(d,{variant:"caption",color:"text.secondary",component:"p",children:o?`generated · shade ${r}`:"theme default"}),n.jsx(d,{variant:"caption",color:"text.secondary",component:"p",children:s})]},t)})})}const T={args:{base:"#0f766e",mainShade:6,slot:"primary",colours:"semantic",surface:"light",radius:8},argTypes:{base:{control:"color",description:"The base colour everything is built from"},mainShade:{control:{type:"range",min:0,max:9,step:1},description:"Which step becomes the main colour"},colours:{control:"inline-radio",options:["semantic","brand","single"],description:"How much of the palette your colour fills"},slot:{control:"select",options:C,description:"The tone to fill in single mode"},surface:{control:"inline-radio",options:["light","dark"]},radius:{control:{type:"range",min:0,max:24,step:1}}},render:e=>{const[,a]=q(),t=ne(e),r=h(e.base,e.mainShade),o=B(D(t));return n.jsxs(M,{title:"Colour generator",lead:"Pick a base colour and the ten step scale follows. In semantic mode your colour becomes the brand tone and the status tones keep their meaning, so alerts still read as info, success, warning and error. In brand mode every tone is generated from your colour instead, which is monochrome on purpose.",children:[n.jsx(f,{children:n.jsx(x,{children:n.jsxs(y,{spacing:2,children:[n.jsx(O,{base:e.base,mainShade:e.mainShade,onPick:s=>a({mainShade:s})}),n.jsxs(d,{variant:"caption",color:"text.secondary",component:"p",children:[e.base," · shade ",e.mainShade," becomes main"]})]})})}),n.jsxs("div",{style:{display:"grid",gap:16,gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 340px), 1fr))",alignItems:"start"},children:[n.jsx(f,{children:n.jsx(x,{children:n.jsx(F,{theme:t,padding:20,children:n.jsx(G,{})})})}),n.jsx(f,{children:n.jsx(x,{children:n.jsxs(y,{spacing:2,children:[n.jsx(d,{variant:"subtitle2",component:"p",children:"Tones"}),n.jsx(te,{args:e}),n.jsx(d,{variant:"subtitle2",component:"p",children:"The brand tone"}),[["main",r.main],["light",r.light??""],["dark",r.dark??""],["contrastText",r.contrastText??""]].map(([s,l])=>n.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",justifyContent:"space-between"},children:[n.jsxs(d,{variant:"body2",component:"p",children:[e.slot,".",s]}),n.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[n.jsx(d,{variant:"caption",color:"text.secondary",component:"p",children:l}),n.jsx("div",{style:{width:22,height:22,background:l,border:"1px solid var(--ui-color-divider)",borderRadius:4}})]})]},s)),n.jsxs(d,{variant:"caption",color:"text.secondary",component:"p",children:[Object.keys(o).length," custom properties resolved from this theme."]})]})})})]}),n.jsx(f,{children:n.jsx(x,{children:n.jsxs(y,{spacing:1.5,children:[n.jsx(d,{variant:"subtitle2",component:"p",children:"Use it in an app"}),n.jsxs(d,{variant:"body2",component:"p",children:["import ","{ tone, createTheme, setTheme }"," from '@justbasicfacts/tokens';"]}),n.jsx(d,{variant:"body2",component:"p",children:e.colours==="brand"?`setTheme(createTheme({ palette: { primary: tone('${e.base}', ${S(e).primary??e.mainShade}), info: tone('${e.base}', ${S(e).info??e.mainShade}) } }));`:e.colours==="semantic"?`setTheme(createTheme({ palette: { primary: tone('${e.base}', ${e.mainShade}) } }));`:`setTheme(createTheme({ palette: { ${e.slot}: tone('${e.base}', ${e.mainShade}) } }));`}),n.jsx(d,{variant:"caption",color:"text.secondary",component:"p",children:e.colours==="semantic"?"Fill only what your brand owns: everything else keeps the meaning the theme gave it.":"Fill as many tones as you like, each one a shade of a colour you choose."})]})})})]})}},v={render:()=>n.jsx(M,{title:"One base, ten steps",lead:"The same function applied to a few brand colours. Shade 0 is the lightest tint and 9 the darkest shade, with the base sitting at the shade you nominate.",children:n.jsx(f,{children:n.jsx(x,{children:n.jsx(y,{spacing:3,children:["#1976d2","#0f766e","#f59e0b","#d32f2f","#7c3aed"].map(e=>n.jsxs(y,{spacing:1,children:[n.jsx(d,{variant:"subtitle2",component:"p",children:e}),n.jsx(O,{base:e,mainShade:6})]},e))})})})})},j={render:()=>{const e={primary:"#7c3aed",secondary:"#0ea5e9",error:"#dc2626",warning:"#f59e0b",info:"#2563eb",success:"#15803d"},a={palette:Object.fromEntries(Object.entries(e).map(([t,r])=>[t,h(r)])),shape:{borderRadius:10}};return n.jsxs(M,{title:"A whole theme from six colours",lead:"The semantic palette written out: each tone keeps its own hue and gets the light, dark and contrast slots a component needs. This is the shape semantic mode produces, with the status hues left alone.",children:[n.jsx(W,{cols:2,spacing:3,children:Object.entries(e).map(([t,r])=>n.jsx(f,{children:n.jsxs(x,{children:[n.jsxs(d,{variant:"subtitle2",component:"p",children:[t," · ",r]}),n.jsx(O,{base:r,mainShade:6})]})},t))}),n.jsx(f,{children:n.jsx(x,{children:n.jsx(F,{theme:a,padding:20,children:n.jsx(G,{})})})})]})}},Te=["Generator","ShadeScale","InATheme"];T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    base: '#0f766e',
    mainShade: 6,
    slot: 'primary',
    colours: 'semantic',
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
    colours: {
      control: 'inline-radio',
      options: ['semantic', 'brand', 'single'],
      description: 'How much of the palette your colour fills'
    },
    slot: {
      control: 'select',
      options: SLOTS,
      description: 'The tone to fill in single mode'
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
    return <Frame title="Colour generator" lead="Pick a base colour and the ten step scale follows. In semantic mode your colour becomes the brand tone and the status tones keep their meaning, so alerts still read as info, success, warning and error. In brand mode every tone is generated from your colour instead, which is monochrome on purpose.">
        <Card>
          <CardContent>
            <Stack spacing={2}>
              <ShadeRow base={args.base} mainShade={args.mainShade} onPick={index => updateArgs({
              mainShade: index
            })} />
              <Typography variant="caption" color="text.secondary" component="p">
                {args.base} · shade {args.mainShade} becomes main
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
                <DemoPanel />
              </ThemeScope>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Stack spacing={2}>
                <Typography variant="subtitle2" component="p">
                  Tones
                </Typography>
                <ToneGrid args={args} />
                <Typography variant="subtitle2" component="p">
                  The brand tone
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
                {args.colours === 'brand' ? \`setTheme(createTheme({ palette: { primary: tone('\${args.base}', \${generatedTones(args).primary ?? args.mainShade}), info: tone('\${args.base}', \${generatedTones(args).info ?? args.mainShade}) } }));\` : args.colours === 'semantic' ? \`setTheme(createTheme({ palette: { primary: tone('\${args.base}', \${args.mainShade}) } }));\` : \`setTheme(createTheme({ palette: { \${args.slot}: tone('\${args.base}', \${args.mainShade}) } }));\`}
              </Typography>
              <Typography variant="caption" color="text.secondary" component="p">
                {args.colours === 'semantic' ? 'Fill only what your brand owns: everything else keeps the meaning the theme gave it.' : 'Fill as many tones as you like, each one a shade of a colour you choose.'}
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Frame>;
  }
}`,...T.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
    const bases: Record<Slot, string> = {
      primary: '#7c3aed',
      secondary: '#0ea5e9',
      error: '#dc2626',
      warning: '#f59e0b',
      info: '#2563eb',
      success: '#15803d'
    };
    const theme: UiTheme = {
      palette: Object.fromEntries(Object.entries(bases).map(([slot, base]) => [slot, tone(base)])),
      shape: {
        borderRadius: 10
      }
    };
    return <Frame title="A whole theme from six colours" lead="The semantic palette written out: each tone keeps its own hue and gets the light, dark and contrast slots a component needs. This is the shape semantic mode produces, with the status hues left alone.">
        <SimpleGrid cols={2} spacing={3}>
          {Object.entries(bases).map(([slot, base]) => <Card key={slot}>
              <CardContent>
                <Typography variant="subtitle2" component="p">
                  {slot} · {base}
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
      </Frame>;
  }
}`,...j.parameters?.docs?.source}}};export{T as Generator,j as InATheme,v as ShadeScale,Te as __namedExportsOrder,xe as default};
