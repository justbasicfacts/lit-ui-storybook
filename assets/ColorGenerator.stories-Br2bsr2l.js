import{b as _,d as N,j as e,T as A}from"./iframe-jabNMnJM.js";import"./index-BSSMaTAd.js";import{C as u}from"./card-Ddvd0lC-.js";import{C as g}from"./card-content-BcTxhoUw.js";import{S as m}from"./stack-CWQp5F73.js";import{T as r}from"./typography-BHphbC37.js";import{S as G}from"./simple-grid-D97cLMuN.js";import{A as R}from"./alert-Dsb91PAK.js";import{B as E}from"./box-C0icfqyG.js";import{B as C}from"./button-CzMEWmm5.js";import{C as B}from"./chip-CfRj5tpg.js";import{I as L}from"./input-ByO0Wy0v.js";import{S as D}from"./select-Bt87rh1v.js";import{F as U}from"./form-control-label-bDcJ_HzR.js";import{S as V}from"./switch-CZP3sXel.js";import"./preload-helper-Bs85Y4nq.js";const p=(n,a,t)=>Math.min(Math.max(n,a),t);function M(n){const a=n.trim();let t=0,o=0,s=0;if(a.startsWith("#")){const f=a.slice(1),h=f.length===3?f.split("").map(I=>I+I).join(""):f;t=Number.parseInt(h.slice(0,2),16)/255,o=Number.parseInt(h.slice(2,4),16)/255,s=Number.parseInt(h.slice(4,6),16)/255}else[t,o,s]=a.replace(/^rgba?\(/,"").replace(/\).*$/,"").split(",").map(h=>Number.parseFloat(h)).map(h=>Number.isFinite(h)?h/255:0);const i=Math.max(t,o,s),l=Math.min(t,o,s),c=(i+l)/2,d=i-l;if(d===0)return{h:0,s:0,l:Math.round(c*100)};const b=d/(1-Math.abs(2*c-1));let y;return i===t?y=(o-s)/d%6:i===o?y=(s-t)/d+2:y=(t-o)/d+4,{h:Math.round((y*60%360+360)%360),s:Math.round(b*100),l:Math.round(c*100)}}const w=n=>Math.round(p(n,0,255)).toString(16).padStart(2,"0");function z({h:n,s:a,l:t}){const o=p(a,0,100)/100,s=p(t,0,100)/100,i=l=>{const c=(l+n/30)%12,d=o*Math.min(s,1-s);return s-d*Math.max(-1,Math.min(c-3,9-c,1))};return`#${w(i(0)*255)}${w(i(8)*255)}${w(i(4)*255)}`}function P(n,a=10,t=6){const{h:o,s,l:i}=M(n),l=p(t,0,a-1);return Array.from({length:a},(c,d)=>{const b=d-l,y=p(i-b*7,(n.startsWith("#"),6),97),f=b<0?p(s*(.55+.05*(l+b)),0,100):s;return d===l?n:z({h:o,s:f,l:y})})}function x(n,a=6){const t=P(n,10,a),o=t[p(a,0,t.length-1)];return{main:o,light:t[p(a-3,0,t.length-1)],dark:t[p(a+2,0,t.length-1)],contrastText:H(o)}}function H(n){const{l:a}=M(n);return a>62?"rgba(0, 0, 0, 0.87)":"#ffffff"}const{useArgs:K}=__STORYBOOK_MODULE_PREVIEW_API__,ue={title:"Theming/Colour generator",parameters:{layout:"fullscreen"}},v=["primary","secondary","error","warning","info","success"],Y=["info","success","warning","error"],k=(n,a,t)=>Math.min(Math.max(n,a),t),q={primary:0,info:-1,success:1,secondary:2,warning:-2,error:3},$=(n,a)=>k(a+q[n],0,9),J=n=>{const a={};if(n.colours==="all")for(const t of v)a[t]=x(n.base,$(t,n.mainShade));else a[n.slot]=x(n.base,n.mainShade);return n.surface==="dark"&&(a.text={primary:"#ffffff",secondary:"rgba(255, 255, 255, 0.7)",muted:"rgba(255, 255, 255, 0.82)"},a.background={paper:"#1e1e1e",default:"#121212",surface:"#1e1e1e",muted:"#1a1a1a"},a.divider="rgba(255, 255, 255, 0.12)"),{palette:a,shape:{borderRadius:n.radius}}},Q=n=>n.colours==="all"?[...v]:[n.slot];function F({title:n,lead:a,children:t}){return e.jsx(E,{padding:"32px 32px 64px",children:e.jsx(E,{style:{maxWidth:1120,margin:"0 auto"},children:e.jsxs(m,{spacing:3,children:[e.jsxs(m,{spacing:1,children:[e.jsx(r,{variant:"h4",component:"h1",children:n}),e.jsx(r,{variant:"body1",color:"text.secondary",component:"p",children:a})]}),t]})})})}function O({base:n,mainShade:a,onPick:t}){const o=P(n,10,a);return e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(10, minmax(0, 1fr))",gap:4},children:o.map((s,i)=>e.jsxs("div",{style:{display:"grid",gap:4},children:[e.jsx("button",{type:"button",onClick:t?()=>t(i):void 0,title:s,"aria-label":`shade ${i}, ${s}`,style:{height:64,background:s,border:i===a?"2px solid var(--ui-color-text, rgba(0,0,0,0.87))":"1px solid rgba(0, 0, 0, 0.08)",borderRadius:6,cursor:t?"pointer":"default",padding:0}}),e.jsx(r,{variant:"caption",color:"text.secondary",component:"p",children:i}),e.jsx(r,{variant:"caption",component:"p",children:s})]},i))})}function W({filled:n}){const a=Y.filter(t=>n.includes(t));return e.jsxs(m,{spacing:2,children:[e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"},children:[e.jsx(C,{size:"sm",children:"Primary"}),e.jsx(C,{size:"sm",variant:"outline",children:"Outline"}),e.jsx(C,{size:"sm",variant:"ghost",children:"Ghost"}),e.jsx(B,{label:"Chip",variant:"outlined",nowrap:!0})]}),e.jsxs("div",{style:{display:"grid",gap:16,gridTemplateColumns:"1fr 1fr"},children:[e.jsx(L,{label:"Team name",value:"Design system"}),e.jsx(D,{label:"Environment",options:["Preview","Staging","Production"],value:"Preview"})]}),e.jsx(U,{label:"Email me on release",controlPosition:"start",children:e.jsx(V,{slot:"control",checked:!0})}),a.map(t=>e.jsx(R,{severity:t,title:`${t} alert`,children:t==="info"?"Every colour here came from one base value.":`Reads the ${t} tone.`},t)),a.length===0&&e.jsx(r,{variant:"caption",color:"text.secondary",component:"p",children:"An alert reads its own severity (info, success, warning, error), so none of them follow while one tone is filled. Switch the colours control to all and the base fills every tone."})]})}const T={args:{base:"#0f766e",mainShade:6,slot:"primary",colours:"all",surface:"light",radius:8},argTypes:{base:{control:"color",description:"The base colour everything is built from"},mainShade:{control:{type:"range",min:0,max:9,step:1},description:"Which step becomes the main colour"},slot:{control:"select",options:v,description:"The tone to fill in one mode"},colours:{control:"inline-radio",options:["all","one"],description:"Fill every tone from the base, or just one"},surface:{control:"inline-radio",options:["light","dark"]},radius:{control:{type:"range",min:0,max:24,step:1}}},render:n=>{const[,a]=K(),t=J(n),o=x(n.base,n.mainShade),s=_(N(t)),i=Q(n);return e.jsxs(F,{title:"Colour generator",lead:"Pick a base colour and the ten step scale follows. In all colours mode one colour fills the whole palette as a family of tints and shades, so every component moves with it, alerts included. One colour mode fills a single tone, and the panel only shows what that tone reaches.",children:[e.jsx(u,{children:e.jsx(g,{children:e.jsxs(m,{spacing:2,children:[e.jsx(O,{base:n.base,mainShade:n.mainShade,onPick:l=>a({mainShade:l})}),e.jsxs(r,{variant:"caption",color:"text.secondary",component:"p",children:[n.base," · ",n.colours==="all"?"every tone":n.slot," filled from shade ",n.mainShade]})]})})}),e.jsxs("div",{style:{display:"grid",gap:16,gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 340px), 1fr))",alignItems:"start"},children:[e.jsx(u,{children:e.jsx(g,{children:e.jsx(A,{theme:t,padding:20,children:e.jsx(W,{filled:i})})})}),e.jsx(u,{children:e.jsx(g,{children:e.jsxs(m,{spacing:2,children:[e.jsx(r,{variant:"subtitle2",component:"p",children:"Tones"}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 1fr))",gap:8},children:v.map(l=>{const c=i.includes(l),d=c?x(n.base,$(l,n.mainShade)).main:"";return e.jsxs("div",{style:{display:"grid",gap:4},children:[e.jsx("div",{style:{height:30,background:c?d:"var(--ui-color-disabled, rgba(0,0,0,0.12))",border:"1px solid var(--ui-color-divider)",borderRadius:4}}),e.jsx(r,{variant:"caption",component:"p",children:l}),e.jsx(r,{variant:"caption",color:"text.secondary",component:"p",children:c?`shade ${$(l,n.mainShade)}`:"not filled"})]},l)})}),e.jsx(r,{variant:"subtitle2",component:"p",children:"The slots it fills"}),[["main",o.main],["light",o.light??""],["dark",o.dark??""],["contrastText",o.contrastText??""]].map(([l,c])=>e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",justifyContent:"space-between"},children:[e.jsxs(r,{variant:"body2",component:"p",children:[n.slot,".",l]}),e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx(r,{variant:"caption",color:"text.secondary",component:"p",children:c}),e.jsx("div",{style:{width:22,height:22,background:c,border:"1px solid var(--ui-color-divider)",borderRadius:4}})]})]},l)),e.jsxs(r,{variant:"caption",color:"text.secondary",component:"p",children:[Object.keys(s).length," custom properties resolved from this theme."]})]})})})]}),e.jsx(u,{children:e.jsx(g,{children:e.jsxs(m,{spacing:1.5,children:[e.jsx(r,{variant:"subtitle2",component:"p",children:"Use it in an app"}),e.jsxs(r,{variant:"body2",component:"p",children:["import ","{ tone, createTheme, setTheme }"," from '@justbasicfacts/tokens';"]}),n.colours==="all"?e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"body2",component:"p",children:"/* every tone, one shade apart, from the base */"}),e.jsx(r,{variant:"body2",component:"p",children:`setTheme(createTheme({ palette: { primary: tone('${n.base}', ${n.mainShade}), info: tone('${n.base}', ${k(n.mainShade-1,0,9)}), success: tone('${n.base}', ${k(n.mainShade+1,0,9)}) } }));`})]}):e.jsx(r,{variant:"body2",component:"p",children:`setTheme(createTheme({ palette: { ${n.slot}: tone('${n.base}', ${n.mainShade}) } }));`}),e.jsx(r,{variant:"caption",color:"text.secondary",component:"p",children:"tone() gives main, light, dark and contrastText for each one, so a component has everything it needs from a single base value."})]})})})]})}},j={render:()=>e.jsx(F,{title:"One base, ten steps",lead:"The same function applied to a few brand colours. Shade 0 is the lightest tint and 9 the darkest shade, with the base sitting at the shade you nominate.",children:e.jsx(u,{children:e.jsx(g,{children:e.jsx(m,{spacing:3,children:["#1976d2","#0f766e","#f59e0b","#d32f2f","#7c3aed"].map(n=>e.jsxs(m,{spacing:1,children:[e.jsx(r,{variant:"subtitle2",component:"p",children:n}),e.jsx(O,{base:n,mainShade:6})]},n))})})})})},S={render:()=>{const n={primary:"#7c3aed",secondary:"#0ea5e9",error:"#dc2626",warning:"#f59e0b",info:"#2563eb",success:"#15803d"},a={palette:Object.fromEntries(Object.entries(n).map(([t,o])=>[t,x(o)])),shape:{borderRadius:10}};return e.jsxs(F,{title:"A whole theme from six colours",lead:"When the tones should keep their meaning, give each one its own base. Every severity is filled here, which is why the alerts below follow.",children:[e.jsx(G,{cols:2,spacing:3,children:Object.entries(n).map(([t,o])=>e.jsx(u,{children:e.jsxs(g,{children:[e.jsx(r,{variant:"subtitle2",component:"p",children:t}),e.jsx(O,{base:o,mainShade:6})]})},t))}),e.jsx(u,{children:e.jsx(g,{children:e.jsx(A,{theme:a,padding:20,children:e.jsx(W,{filled:[...v]})})})}),e.jsx(R,{severity:"info",title:"Where the contrast text comes from",children:"contrastText is chosen from the base's luminance, so a pale brand colour gets dark text on it without anyone deciding per colour."})]})}},ge=["Generator","ShadeScale","InATheme"];T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    base: '#0f766e',
    mainShade: 6,
    slot: 'primary',
    colours: 'all',
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
      description: 'The tone to fill in one mode'
    },
    colours: {
      control: 'inline-radio',
      options: ['all', 'one'],
      description: 'Fill every tone from the base, or just one'
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
    const filled = filledTones(args);
    return <Frame title="Colour generator" lead="Pick a base colour and the ten step scale follows. In all colours mode one colour fills the whole palette as a family of tints and shades, so every component moves with it, alerts included. One colour mode fills a single tone, and the panel only shows what that tone reaches.">
        <Card>
          <CardContent>
            <Stack spacing={2}>
              <ShadeRow base={args.base} mainShade={args.mainShade} onPick={index => updateArgs({
              mainShade: index
            })} />
              <Typography variant="caption" color="text.secondary" component="p">
                {args.base} · {args.colours === 'all' ? 'every tone' : args.slot} filled from
                shade {args.mainShade}
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
                <DemoPanel filled={filled} />
              </ThemeScope>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Stack spacing={2}>
                <Typography variant="subtitle2" component="p">
                  Tones
                </Typography>
                <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                gap: 8
              }}>
                  {SLOTS.map(toneName => {
                  const isFilled = filled.includes(toneName);
                  const value = isFilled ? tone(args.base, shadeFor(toneName, args.mainShade)).main : '';
                  return <div key={toneName} style={{
                    display: 'grid',
                    gap: 4
                  }}>
                        <div style={{
                      height: 30,
                      background: isFilled ? value : 'var(--ui-color-disabled, rgba(0,0,0,0.12))',
                      border: '1px solid var(--ui-color-divider)',
                      borderRadius: 4
                    }} />
                        <Typography variant="caption" component="p">
                          {toneName}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" component="p">
                          {isFilled ? \`shade \${shadeFor(toneName, args.mainShade)}\` : 'not filled'}
                        </Typography>
                      </div>;
                })}
                </div>
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
              {args.colours === 'all' ? <>
                  <Typography variant="body2" component="p">
                    /* every tone, one shade apart, from the base */
                  </Typography>
                  <Typography variant="body2" component="p">
                    {\`setTheme(createTheme({ palette: { primary: tone('\${args.base}', \${args.mainShade}), info: tone('\${args.base}', \${clamp(args.mainShade - 1, 0, 9)}), success: tone('\${args.base}', \${clamp(args.mainShade + 1, 0, 9)}) } }));\`}
                  </Typography>
                </> : <Typography variant="body2" component="p">
                  {\`setTheme(createTheme({ palette: { \${args.slot}: tone('\${args.base}', \${args.mainShade}) } }));\`}
                </Typography>}
              <Typography variant="caption" color="text.secondary" component="p">
                tone() gives main, light, dark and contrastText for each one, so a component
                has everything it needs from a single base value.
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Frame>;
  }
}`,...T.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    /* Each tone from its own base: the semantic palette a product usually wants. */
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
    return <Frame title="A whole theme from six colours" lead="When the tones should keep their meaning, give each one its own base. Every severity is filled here, which is why the alerts below follow.">
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
              <DemoPanel filled={[...SLOTS]} />
            </ThemeScope>
          </CardContent>
        </Card>

        <Alert severity="info" title="Where the contrast text comes from">
          contrastText is chosen from the base's luminance, so a pale brand colour gets dark
          text on it without anyone deciding per colour.
        </Alert>
      </Frame>;
  }
}`,...S.parameters?.docs?.source}}};export{T as Generator,S as InATheme,j as ShadeScale,ge as __namedExportsOrder,ue as default};
