import{b as W,d as _,j as e,T as M}from"./iframe-J_BAxJ5R.js";import"./index-BSSMaTAd.js";import{C as u}from"./card-BOtFdmXA.js";import{C as g}from"./card-content-CAGkXbtk.js";import{S as l}from"./stack-Dzh-gSRJ.js";import{T as i}from"./typography-BW8KVc--.js";import{S as E}from"./simple-grid-u3qRkqXg.js";import{A as R}from"./alert-Dr44sBuX.js";import{B as I}from"./box-psbhOlH3.js";import{B as C}from"./button-sr3Pg0vu.js";import{C as G}from"./chip-Dqb1xFG4.js";import{I as B}from"./input-DXkObey3.js";import{S as $}from"./select-d-eSMF9B.js";import{F as D}from"./form-control-label-0zmLYT77.js";import{S as N}from"./switch-DHd6U1sp.js";import"./preload-helper-Bs85Y4nq.js";const p=(n,a,t)=>Math.min(Math.max(n,a),t);function O(n){const a=n.trim();let t=0,r=0,o=0;if(a.startsWith("#")){const x=a.slice(1),h=x.length===3?x.split("").map(A=>A+A).join(""):x;t=Number.parseInt(h.slice(0,2),16)/255,r=Number.parseInt(h.slice(2,4),16)/255,o=Number.parseInt(h.slice(4,6),16)/255}else[t,r,o]=a.replace(/^rgba?\(/,"").replace(/\).*$/,"").split(",").map(h=>Number.parseFloat(h)).map(h=>Number.isFinite(h)?h/255:0);const s=Math.max(t,r,o),c=Math.min(t,r,o),m=(s+c)/2,d=s-c;if(d===0)return{h:0,s:0,l:Math.round(m*100)};const f=d/(1-Math.abs(2*m-1));let y;return s===t?y=(r-o)/d%6:s===r?y=(o-t)/d+2:y=(t-r)/d+4,{h:Math.round((y*60%360+360)%360),s:Math.round(f*100),l:Math.round(m*100)}}const S=n=>Math.round(p(n,0,255)).toString(16).padStart(2,"0");function L({h:n,s:a,l:t}){const r=p(a,0,100)/100,o=p(t,0,100)/100,s=c=>{const m=(c+n/30)%12,d=r*Math.min(o,1-o);return o-d*Math.max(-1,Math.min(m-3,9-m,1))};return`#${S(s(0)*255)}${S(s(8)*255)}${S(s(4)*255)}`}function P(n,a=10,t=6){const{h:r,s:o,l:s}=O(n),c=p(t,0,a-1);return Array.from({length:a},(m,d)=>{const f=d-c,y=p(s-f*7,(n.startsWith("#"),6),97),x=f<0?p(o*(.55+.05*(c+f)),0,100):o;return d===c?n:L({h:r,s:x,l:y})})}function b(n,a=6){const t=P(n,10,a),r=t[p(a,0,t.length-1)];return{main:r,light:t[p(a-3,0,t.length-1)],dark:t[p(a+2,0,t.length-1)],contrastText:U(r)}}function U(n){const{l:a}=O(n);return a>62?"rgba(0, 0, 0, 0.87)":"#ffffff"}const{useArgs:z}=__STORYBOOK_MODULE_PREVIEW_API__,de={title:"Theming/Colour generator",parameters:{layout:"fullscreen"}},V=["primary","secondary","error","warning","info","success"],H=n=>{const a=n.surface==="dark",t={[n.slot]:b(n.base,n.mainShade)};return a&&(t.text={primary:"#ffffff",secondary:"rgba(255, 255, 255, 0.7)",muted:"rgba(255, 255, 255, 0.82)"},t.background={paper:"#1e1e1e",default:"#121212",surface:"#1e1e1e",muted:"#1a1a1a"},t.divider="rgba(255, 255, 255, 0.12)"),{palette:t,shape:{borderRadius:n.radius}}};function k({title:n,lead:a,children:t}){return e.jsx(I,{padding:"32px 32px 64px",children:e.jsx(I,{style:{maxWidth:1120,margin:"0 auto"},children:e.jsxs(l,{spacing:3,children:[e.jsxs(l,{spacing:1,children:[e.jsx(i,{variant:"h4",component:"h1",children:n}),e.jsx(i,{variant:"body1",color:"text.secondary",component:"p",children:a})]}),t]})})})}function w({base:n,mainShade:a,onPick:t}){const r=P(n,10,a);return e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(10, minmax(0, 1fr))",gap:4},children:r.map((o,s)=>e.jsxs("div",{style:{display:"grid",gap:4},children:[e.jsx("button",{type:"button",onClick:t?()=>t(s):void 0,title:o,"aria-label":`shade ${s}, ${o}`,style:{height:64,background:o,border:s===a?"2px solid var(--ui-color-text, rgba(0,0,0,0.87))":"1px solid rgba(0, 0, 0, 0.08)",borderRadius:6,cursor:t?"pointer":"default",padding:0}}),e.jsx(i,{variant:"caption",color:"text.secondary",component:"p",children:s}),e.jsx(i,{variant:"caption",component:"p",children:o})]},s))})}function F(){return e.jsxs(l,{spacing:2,children:[e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"},children:[e.jsx(C,{size:"sm",children:"Primary"}),e.jsx(C,{size:"sm",variant:"outline",children:"Outline"}),e.jsx(C,{size:"sm",variant:"ghost",children:"Ghost"}),e.jsx(G,{label:"Chip",variant:"outlined",nowrap:!0})]}),e.jsxs("div",{style:{display:"grid",gap:16,gridTemplateColumns:"1fr 1fr"},children:[e.jsx(B,{label:"Team name",value:"Design system"}),e.jsx($,{label:"Environment",options:["Preview","Staging","Production"],value:"Preview"})]}),e.jsx(l,{spacing:1,children:e.jsx(D,{label:"Email me on release",controlPosition:"start",children:e.jsx(N,{slot:"control",checked:!0})})}),e.jsx(R,{severity:"info",title:"Generated",children:"Every colour here came from one base value."})]})}const j={args:{base:"#0f766e",mainShade:6,slot:"primary",surface:"light",radius:8},argTypes:{base:{control:"color",description:"The base colour everything is built from"},mainShade:{control:{type:"range",min:0,max:9,step:1},description:"Which step becomes the main colour"},slot:{control:"select",options:V,description:"Which palette slot it fills"},surface:{control:"inline-radio",options:["light","dark"]},radius:{control:{type:"range",min:0,max:24,step:1}}},render:n=>{const[,a]=z(),t=H(n),r=b(n.base,n.mainShade),o=W(_(t));return e.jsxs(k,{title:"Colour generator",lead:"Pick a base colour and the ten step scale, the light and dark slots and the contrast text follow from it. Click a shade to make it the main colour, or drive it from the panel.",children:[e.jsx(u,{children:e.jsx(g,{children:e.jsxs(l,{spacing:2,children:[e.jsx(w,{base:n.base,mainShade:n.mainShade,onPick:s=>a({mainShade:s})}),e.jsxs(i,{variant:"caption",color:"text.secondary",component:"p",children:[n.base," · ",t.palette?.[n.slot]?n.slot:""," filled from shade"," ",n.mainShade]})]})})}),e.jsxs("div",{style:{display:"grid",gap:16,gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 340px), 1fr))",alignItems:"start"},children:[e.jsx(u,{children:e.jsx(g,{children:e.jsx(M,{theme:t,padding:20,children:e.jsx(F,{})})})}),e.jsx(u,{children:e.jsx(g,{children:e.jsxs(l,{spacing:2,children:[e.jsx(i,{variant:"subtitle2",component:"p",children:"The slots it fills"}),[["main",r.main],["light",r.light??""],["dark",r.dark??""],["contrastText",r.contrastText??""]].map(([s,c])=>e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",justifyContent:"space-between"},children:[e.jsxs(i,{variant:"body2",component:"p",children:[n.slot,".",s]}),e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx(i,{variant:"caption",color:"text.secondary",component:"p",children:c}),e.jsx("div",{style:{width:22,height:22,background:c,border:"1px solid var(--ui-color-divider)",borderRadius:4}})]})]},s)),e.jsxs(i,{variant:"caption",color:"text.secondary",component:"p",children:[Object.keys(o).length," custom properties resolved from this theme."]})]})})})]}),e.jsx(u,{children:e.jsx(g,{children:e.jsxs(l,{spacing:1.5,children:[e.jsx(i,{variant:"subtitle2",component:"p",children:"Use it in an app"}),e.jsxs(i,{variant:"body2",component:"p",children:["import ","{ tone, createTheme, setTheme }"," from '@justbasicfacts/tokens';"]}),e.jsxs(i,{variant:"body2",component:"p",children:["setTheme(createTheme(","{"," palette: ","{"," ",n.slot,": tone('",n.base,"',"," ",n.mainShade,") ","}"," ","}","));"]}),e.jsx(i,{variant:"caption",color:"text.secondary",component:"p",children:"shades() gives you the scale on its own when you want to lay the steps out yourself."})]})})})]})}},v={render:()=>e.jsx(k,{title:"One base, ten steps",lead:"The same function applied to a few brand colours. Shade 0 is the lightest tint and 9 the darkest shade, with the base sitting at the shade you nominate.",children:e.jsx(u,{children:e.jsx(g,{children:e.jsx(l,{spacing:3,children:["#1976d2","#0f766e","#f59e0b","#d32f2f","#7c3aed"].map(n=>e.jsxs(l,{spacing:1,children:[e.jsx(i,{variant:"subtitle2",component:"p",children:n}),e.jsx(w,{base:n,mainShade:6})]},n))})})})})},T={render:()=>{const n={palette:{primary:b("#7c3aed"),secondary:b("#0ea5e9"),success:b("#15803d")},shape:{borderRadius:10}};return e.jsxs(k,{title:"A whole theme from three colours",lead:"Three base colours become three tones, and the components pick them up with no per-component CSS.",children:[e.jsx(E,{cols:2,spacing:3,children:["primary","secondary","success"].map(a=>e.jsx(u,{children:e.jsxs(g,{children:[e.jsx(i,{variant:"subtitle2",component:"p",children:a}),e.jsx(w,{base:a==="primary"?"#7c3aed":a==="secondary"?"#0ea5e9":"#15803d",mainShade:6})]})},a))}),e.jsx(u,{children:e.jsx(g,{children:e.jsx(M,{theme:n,padding:20,children:e.jsx(F,{})})})}),e.jsx(R,{severity:"info",title:"Where the contrast text comes from",children:"contrastText is chosen from the base's luminance, so a pale brand colour gets dark text on it without anyone deciding per colour."})]})}},le=["Generator","ShadeScale","InATheme"];j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
                <DemoPanel />
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
}`,...j.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const theme: UiTheme = {
      palette: {
        primary: tone('#7c3aed'),
        secondary: tone('#0ea5e9'),
        success: tone('#15803d')
      },
      shape: {
        borderRadius: 10
      }
    };
    return <Frame title="A whole theme from three colours" lead="Three base colours become three tones, and the components pick them up with no per-component CSS.">
        <SimpleGrid cols={2} spacing={3}>
          {['primary', 'secondary', 'success'].map(slot => <Card key={slot}>
              <CardContent>
                <Typography variant="subtitle2" component="p">
                  {slot}
                </Typography>
                <ShadeRow base={slot === 'primary' ? '#7c3aed' : slot === 'secondary' ? '#0ea5e9' : '#15803d'} mainShade={6} />
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

        <Alert severity="info" title="Where the contrast text comes from">
          contrastText is chosen from the base's luminance, so a pale brand colour gets dark
          text on it without anyone deciding per colour.
        </Alert>
      </Frame>;
  }
}`,...T.parameters?.docs?.source}}};export{j as Generator,T as InATheme,v as ShadeScale,le as __namedExportsOrder,de as default};
