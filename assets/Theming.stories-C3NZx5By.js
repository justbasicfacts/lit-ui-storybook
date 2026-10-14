import{t as g,j as e,c as W,s as P,T as O,e as _,z as E,a as S,i as F,u as V}from"./iframe-J_BAxJ5R.js";import"./index-BSSMaTAd.js";import{C as p}from"./card-BOtFdmXA.js";import{C as h}from"./card-header-Bbuh16D-.js";import{T as H,a as $,b as z,c as w,d as x,e as A}from"./table-cell-Cr1pjICq.js";import{C as y}from"./card-content-CAGkXbtk.js";import{S as m}from"./stack-Dzh-gSRJ.js";import{T as a}from"./typography-BW8KVc--.js";import{B as c}from"./box-psbhOlH3.js";import{D}from"./divider-CGu1ocB9.js";import{B as M}from"./button-sr3Pg0vu.js";import{C as N}from"./chip-Dqb1xFG4.js";import"./preload-helper-Bs85Y4nq.js";const oe={title:"Theming/Overview",parameters:{layout:"fullscreen"}},R=["primary","secondary","error","warning","info","success"],U=[["","main"],["-dark","dark"],["-light","light"],["-contrast","contrastText"]],L=["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","overline","button"],I={display:"grid",gap:16,gridTemplateColumns:"repeat(auto-fill, minmax(150px, 1fr))"},G={display:"grid",gap:16,gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 460px), 1fr))"},u=l=>F(l.theme)?S[l.theme]:S.light;function b({title:l,lead:o,children:d}){const r=V();return e.jsx(c,{padding:r?"32px 32px 64px":"16px 16px 48px",children:e.jsx(c,{style:{maxWidth:1120,margin:"0 auto"},children:e.jsxs(m,{spacing:3,children:[e.jsxs(m,{spacing:1,children:[e.jsx(a,{variant:"h4",component:"h1",children:l}),e.jsx(a,{variant:"body1",color:"text.secondary",component:"p",children:o})]}),d]})})})}function B({label:l,value:o}){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,minWidth:0},children:[e.jsx("div",{style:{height:64,background:o,border:"1px solid var(--ui-color-divider, rgba(0, 0, 0, 0.12))",borderRadius:"var(--ui-radius, 4px)"}}),e.jsx(a,{variant:"caption",component:"p",children:l}),e.jsx(a,{variant:"caption",color:"text.secondary",component:"p",children:o})]})}const v={render:(l,o)=>{const{label:d,theme:r}=u(o.globals),s=g(r);return e.jsxs(b,{title:"Theming",lead:"Every component reads its design values from --ui-* custom properties with a fallback, so one theme object restyles the whole library and nothing is rebuilt.",children:[e.jsxs(p,{children:[e.jsx(h,{title:"The contract",subheader:"A theme is a plain object of the values you care about"}),e.jsx(y,{children:e.jsxs(m,{spacing:2,children:[e.jsx(a,{variant:"body1",component:"p",children:"Anything you leave out keeps the default, and the resolved values are written as custom properties on the element you pass in. That is what lets one page show two themes at once."}),e.jsxs(c,{border:"1px solid var(--ui-color-divider, rgba(0, 0, 0, 0.12))",radius:"8px",padding:"16px",bgcolor:"background.muted",children:[e.jsxs(a,{variant:"body2",component:"p",children:["import ","{ createTheme, setTheme }"," from '@justbasicfacts/tokens';"]}),e.jsxs(a,{variant:"body2",component:"p",children:["setTheme(createTheme(","{"," palette: ","{"," primary: ","{"," main: '#0f766e' ","}"," ","}",", shape: ","{"," borderRadius: 12 ","}"," ","}","));"]})]}),e.jsx(a,{variant:"body2",color:"text.secondary",component:"p",children:"The shape matches MUI's theme, so an existing MUI theme object can be passed straight to setTheme (also exported as setMuiTheme)."})]})})]}),e.jsxs(p,{children:[e.jsx(h,{title:"The active preset",subheader:d}),e.jsxs(y,{children:[e.jsx("div",{style:{display:"flex",gap:32,flexWrap:"wrap"},children:[["colour variables",W(s).length],["scale variables",P(s).length],["layer variables",Object.keys(s).filter(t=>t.startsWith("--ui-zindex-")).length]].map(([t,n])=>e.jsxs(m,{spacing:.25,children:[e.jsx(a,{variant:"h5",component:"p",children:n}),e.jsx(a,{variant:"overline",color:"text.secondary",component:"p",children:t})]},t))}),e.jsx(c,{padding:"16px 0 0",children:e.jsx(a,{variant:"caption",color:"text.secondary",component:"p",children:"Switch the theme in the toolbar to see the whole gallery, these numbers included, follow it."})})]})]})]})}},T={render:(l,o)=>{const{theme:d}=u(o.globals),r=g(d),s=W(r).filter(([t])=>!R.some(n=>t.startsWith(`--ui-color-${n}`)));return e.jsxs(b,{title:"Palette",lead:"Six tones, each with a main value and optional dark, light and contrast shades, plus the text, background and action colours the components read.",children:[e.jsxs(p,{children:[e.jsx(h,{title:"Tones",subheader:"--ui-color-{tone} and its shades"}),e.jsx(y,{children:e.jsx(m,{spacing:3,children:R.map(t=>e.jsxs(m,{spacing:1,children:[e.jsx(a,{variant:"subtitle2",component:"h3",children:t}),e.jsx("div",{style:I,children:U.map(([n,i])=>{const k=r[`--ui-color-${t}${n}`];return k?e.jsx(B,{label:`${t}.${i}`,value:k},i):null})})]},t))})})]}),e.jsxs(p,{children:[e.jsx(h,{title:"Text, background and states",subheader:"The rest of the palette"}),e.jsx(y,{children:e.jsx("div",{style:I,children:s.map(([t,n])=>e.jsx(B,{label:t.replace("--ui-color-",""),value:n},t))})})]})]})}},j={render:(l,o)=>{const{theme:d}=u(o.globals),r=g(d),s=r["--ui-font"]??"component default",t=r["--ui-font-heading"]??s;return e.jsxs(b,{title:"Type scale",lead:"Thirteen variants. Each maps to a semantic tag unless you pass component, which is what keeps a heading outline honest when the value is not a title.",children:[e.jsxs(p,{children:[e.jsx(h,{title:"Families",subheader:"typography.fontFamily and typography.headingFamily"}),e.jsx(y,{children:e.jsxs(m,{spacing:1.5,children:[e.jsxs(m,{spacing:.25,children:[e.jsx(a,{variant:"overline",color:"text.secondary",component:"p",children:"Body"}),e.jsx(a,{variant:"body2",component:"p",children:s})]}),e.jsxs(m,{spacing:.25,children:[e.jsx(a,{variant:"overline",color:"text.secondary",component:"p",children:"Heading"}),e.jsx(a,{variant:"body2",component:"p",children:t})]})]})})]}),e.jsxs(p,{children:[e.jsx(h,{title:"Variants",subheader:"Sample, and the line height the theme sets"}),e.jsx(y,{children:e.jsx(m,{spacing:2,children:L.map((n,i)=>e.jsxs(c,{children:[i>0?e.jsx(D,{}):null,e.jsxs("div",{style:{display:"flex",gap:24,padding:"12px 0",alignItems:"baseline"},children:[e.jsxs(c,{style:{flex:"0 0 132px"},children:[e.jsx(a,{variant:"body2",component:"p",children:n}),e.jsx(a,{variant:"caption",color:"text.secondary",component:"p",children:r[`--ui-line-height-${n}`]??"default"})]}),e.jsx(a,{variant:n,component:"p",style:{minWidth:0},children:"The quick brown fox jumps over the lazy dog"})]})]},n))})})]})]})}},C={render:(l,o)=>{const{theme:d}=u(o.globals),r=g(d),s=Number.parseInt(r["--ui-spacing"]??"8",10)||8,t=e.jsxs(c,{display:"flex",gap:"8px",style:{flexWrap:"wrap",alignItems:"center"},children:[e.jsx(M,{size:"sm",children:"Save"}),e.jsx(N,{label:"Outlined",variant:"outlined",nowrap:!0})]});return e.jsx(b,{title:"Shape, spacing and elevation",lead:"Radius, the spacing unit, elevation shadows and the layer stack are theme slots too. Radius is the fastest one to feel.",children:e.jsxs("div",{style:G,children:[e.jsxs(p,{children:[e.jsx(h,{title:"Radius",subheader:"shape.borderRadius"}),e.jsx(y,{children:e.jsx(m,{spacing:1.5,children:[0,4,12,24].map(n=>e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",minWidth:0},children:[e.jsx(c,{style:{flex:"0 0 40px"},children:e.jsx(a,{variant:"caption",color:"text.secondary",component:"p",children:n})}),e.jsx(O,{theme:{shape:{borderRadius:n}},style:{flex:1,minWidth:0,padding:8},children:t})]},n))})})]}),e.jsxs(p,{children:[e.jsx(h,{title:"Spacing",subheader:`spacing = ${s}px`}),e.jsx(y,{children:e.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:20},children:[1,2,3,4,6].map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,alignItems:"center"},children:[e.jsx("div",{style:{width:n*s,height:n*s,background:"var(--ui-color-primary)",borderRadius:4}}),e.jsxs(a,{variant:"caption",component:"p",children:[n,"×"]}),e.jsxs(a,{variant:"caption",color:"text.secondary",component:"p",children:[n*s,"px"]})]},n))})})]}),e.jsxs(p,{children:[e.jsx(h,{title:"Elevation",subheader:"shadows[n], MUI-shaped defaults"}),e.jsx(y,{children:e.jsx(c,{display:"flex",gap:"16px",style:{flexWrap:"wrap"},children:_.map(n=>e.jsx(c,{style:{width:92},children:e.jsx(c,{bgcolor:"background.paper",elevation:n,radius:"8px",padding:"16px",children:e.jsx(a,{variant:"caption",component:"p",children:n})})},n))})})]}),e.jsxs(p,{children:[e.jsx(h,{title:"Layers",subheader:"zIndex, keyed like MUI"}),e.jsx(H,{children:e.jsxs($,{size:"small",children:[e.jsx(z,{children:e.jsxs(w,{children:[e.jsx(x,{variant:"head",children:"layer"}),e.jsx(x,{variant:"head",align:"right",children:"value"})]})}),e.jsx(A,{children:E.map(n=>e.jsxs(w,{children:[e.jsx(x,{children:n}),e.jsx(x,{align:"right",children:r[`--ui-zindex-${n.toLowerCase()}`]??"default"})]},n))})]})})]})]})})}},f={render:(l,o)=>{const{theme:d,label:r}=u(o.globals),s=g(d),t=Object.entries(s),n=([i])=>i.startsWith("--ui-color-")?"colour":i.startsWith("--ui-shadow-")?"shadow":i.startsWith("--ui-zindex-")?"layer":"scale";return e.jsx(b,{title:"Every variable",lead:`All ${t.length} custom properties the preset "${r}" resolves to. A theme only has to name what it wants to change; everything else stays at the component default.`,children:e.jsxs(p,{children:[e.jsx(h,{title:"Resolved variables",subheader:"What setTheme writes onto the target element"}),e.jsx(H,{children:e.jsxs($,{size:"small",children:[e.jsx(z,{children:e.jsxs(w,{children:[e.jsx(x,{variant:"head",children:"variable"}),e.jsx(x,{variant:"head",children:"group"}),e.jsx(x,{variant:"head",children:"value"})]})}),e.jsx(A,{children:t.map(i=>e.jsxs(w,{children:[e.jsx(x,{children:i[0]}),e.jsx(x,{children:n(i)}),e.jsx(x,{children:i[1]})]},i[0]))})]})})]})})}},ie=["HowItWorks","Palette","TypeScale","Scales","AllTokens"];v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: (_args, context) => {
    const {
      label,
      theme
    } = presetFrom(context.globals);
    const vars = themeVars(theme);
    return <Page title="Theming" lead="Every component reads its design values from --ui-* custom properties with a fallback, so one theme object restyles the whole library and nothing is rebuilt.">
        <Card>
          <CardHeader title="The contract" subheader="A theme is a plain object of the values you care about" />
          <CardContent>
            <Stack spacing={2}>
              <Typography variant="body1" component="p">
                Anything you leave out keeps the default, and the resolved values are
                written as custom properties on the element you pass in. That is what lets
                one page show two themes at once.
              </Typography>
              <Box border="1px solid var(--ui-color-divider, rgba(0, 0, 0, 0.12))" radius="8px" padding="16px" bgcolor="background.muted">
                <Typography variant="body2" component="p">
                  import {'{ createTheme, setTheme }'} from '@justbasicfacts/tokens';
                </Typography>
                <Typography variant="body2" component="p">
                  setTheme(createTheme({'{'} palette: {'{'} primary: {'{'} main: '#0f766e' {'}'} {'}'},
                  shape: {'{'} borderRadius: 12 {'}'} {'}'}));
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" component="p">
                The shape matches MUI's theme, so an existing MUI theme object can be
                passed straight to setTheme (also exported as setMuiTheme).
              </Typography>
            </Stack>
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="The active preset" subheader={label} />
          <CardContent>
            <div style={{
            display: 'flex',
            gap: 32,
            flexWrap: 'wrap'
          }}>
              {[['colour variables', colorVars(vars).length], ['scale variables', scaleVars(vars).length], ['layer variables', Object.keys(vars).filter(n => n.startsWith('--ui-zindex-')).length]].map(([name, value]) => <Stack key={name as string} spacing={0.25}>
                  <Typography variant="h5" component="p">
                    {value as number}
                  </Typography>
                  <Typography variant="overline" color="text.secondary" component="p">
                    {name as string}
                  </Typography>
                </Stack>)}
            </div>
            <Box padding="16px 0 0">
              <Typography variant="caption" color="text.secondary" component="p">
                Switch the theme in the toolbar to see the whole gallery, these numbers
                included, follow it.
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Page>;
  }
}`,...v.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: (_args, context) => {
    const {
      theme
    } = presetFrom(context.globals);
    const vars = themeVars(theme);
    const rest = colorVars(vars).filter(([name]) => !TONES.some(tone => name.startsWith(\`--ui-color-\${tone}\`)));
    return <Page title="Palette" lead="Six tones, each with a main value and optional dark, light and contrast shades, plus the text, background and action colours the components read.">
        <Card>
          <CardHeader title="Tones" subheader="--ui-color-{tone} and its shades" />
          <CardContent>
            <Stack spacing={3}>
              {TONES.map(tone => <Stack key={tone} spacing={1}>
                  <Typography variant="subtitle2" component="h3">
                    {tone}
                  </Typography>
                  <div style={GRID}>
                    {TONE_PARTS.map(([suffix, part]) => {
                  const value = vars[\`--ui-color-\${tone}\${suffix}\`];
                  return value ? <Swatch key={part} label={\`\${tone}.\${part}\`} value={value} /> : null;
                })}
                  </div>
                </Stack>)}
            </Stack>
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="Text, background and states" subheader="The rest of the palette" />
          <CardContent>
            <div style={GRID}>
              {rest.map(([name, value]) => <Swatch key={name} label={name.replace('--ui-color-', '')} value={value} />)}
            </div>
          </CardContent>
        </Card>
      </Page>;
  }
}`,...T.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: (_args, context) => {
    const {
      theme
    } = presetFrom(context.globals);
    const vars = themeVars(theme);
    const family = vars['--ui-font'] ?? 'component default';
    const headingFamily = vars['--ui-font-heading'] ?? family;
    return <Page title="Type scale" lead="Thirteen variants. Each maps to a semantic tag unless you pass component, which is what keeps a heading outline honest when the value is not a title.">
        <Card>
          <CardHeader title="Families" subheader="typography.fontFamily and typography.headingFamily" />
          <CardContent>
            <Stack spacing={1.5}>
              <Stack spacing={0.25}>
                <Typography variant="overline" color="text.secondary" component="p">
                  Body
                </Typography>
                <Typography variant="body2" component="p">
                  {family}
                </Typography>
              </Stack>
              <Stack spacing={0.25}>
                <Typography variant="overline" color="text.secondary" component="p">
                  Heading
                </Typography>
                <Typography variant="body2" component="p">
                  {headingFamily}
                </Typography>
              </Stack>
            </Stack>
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="Variants" subheader="Sample, and the line height the theme sets" />
          <CardContent>
            <Stack spacing={2}>
              {VARIANTS.map((variant, index) => <Box key={variant}>
                  {index > 0 ? <Divider /> : null}
                  <div style={{
                display: 'flex',
                gap: 24,
                padding: '12px 0',
                alignItems: 'baseline'
              }}>
                    <Box style={{
                  flex: '0 0 132px'
                }}>
                      <Typography variant="body2" component="p">
                        {variant}
                      </Typography>
                      <Typography variant="caption" color="text.secondary" component="p">
                        {vars[\`--ui-line-height-\${variant}\`] ?? 'default'}
                      </Typography>
                    </Box>
                    <Typography variant={variant} component="p" style={{
                  minWidth: 0
                }}>
                      The quick brown fox jumps over the lazy dog
                    </Typography>
                  </div>
                </Box>)}
            </Stack>
          </CardContent>
        </Card>
      </Page>;
  }
}`,...j.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: (_args, context) => {
    const {
      theme
    } = presetFrom(context.globals);
    const vars = themeVars(theme);
    const spacing = Number.parseInt(vars['--ui-spacing'] ?? '8', 10) || 8;
    const demo = <Box display="flex" gap="8px" style={{
      flexWrap: 'wrap',
      alignItems: 'center'
    }}>
        <Button size="sm">Save</Button>
        <Chip label="Outlined" variant="outlined" nowrap />
      </Box>;
    return <Page title="Shape, spacing and elevation" lead="Radius, the spacing unit, elevation shadows and the layer stack are theme slots too. Radius is the fastest one to feel.">
        {/* A plain div, not a ui-box: ui-box wraps its children in an inner div,
            which would become the single grid item and collapse the columns. */}
        <div style={CARD_GRID}>
          <Card>
            <CardHeader title="Radius" subheader="shape.borderRadius" />
            <CardContent>
              <Stack spacing={1.5}>
                {[0, 4, 12, 24].map(borderRadius => <div key={borderRadius} style={{
                display: 'flex',
                gap: 12,
                alignItems: 'center',
                minWidth: 0
              }}>
                    <Box style={{
                  flex: '0 0 40px'
                }}>
                      <Typography variant="caption" color="text.secondary" component="p">
                        {borderRadius}
                      </Typography>
                    </Box>
                    <ThemeScope theme={{
                  shape: {
                    borderRadius
                  }
                }} style={{
                  flex: 1,
                  minWidth: 0,
                  padding: 8
                }}>
                      {demo}
                    </ThemeScope>
                  </div>)}
              </Stack>
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="Spacing" subheader={\`spacing = \${spacing}px\`} />
            <CardContent>
              <div style={{
              display: 'flex',
              alignItems: 'flex-end',
              gap: 20
            }}>
                {[1, 2, 3, 4, 6].map(units => <div key={units} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 6,
                alignItems: 'center'
              }}>
                    <div style={{
                  width: units * spacing,
                  height: units * spacing,
                  background: 'var(--ui-color-primary)',
                  borderRadius: 4
                }} />
                    <Typography variant="caption" component="p">
                      {units}×
                    </Typography>
                    <Typography variant="caption" color="text.secondary" component="p">
                      {units * spacing}px
                    </Typography>
                  </div>)}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="Elevation" subheader="shadows[n], MUI-shaped defaults" />
            <CardContent>
              <Box display="flex" gap="16px" style={{
              flexWrap: 'wrap'
            }}>
                {elevationSteps.map(elevation => <Box key={elevation} style={{
                width: 92
              }}>
                    <Box bgcolor="background.paper" elevation={elevation} radius="8px" padding="16px">
                      <Typography variant="caption" component="p">
                        {elevation}
                      </Typography>
                    </Box>
                  </Box>)}
              </Box>
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="Layers" subheader="zIndex, keyed like MUI" />
            <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell variant="head">layer</TableCell>
                      <TableCell variant="head" align="right">
                        value
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {zIndexLayers.map(layer => <TableRow key={layer}>
                        <TableCell>{layer}</TableCell>
                        <TableCell align="right">
                          {vars[\`--ui-zindex-\${layer.toLowerCase()}\`] ?? 'default'}
                        </TableCell>
                      </TableRow>)}
                  </TableBody>
                </Table>
            </TableContainer>
          </Card>
        </div>
      </Page>;
  }
}`,...C.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: (_args, context) => {
    const {
      theme,
      label
    } = presetFrom(context.globals);
    const vars = themeVars(theme);
    const entries = Object.entries(vars);
    const groupOf = ([name]: [string, string]) => name.startsWith('--ui-color-') ? 'colour' : name.startsWith('--ui-shadow-') ? 'shadow' : name.startsWith('--ui-zindex-') ? 'layer' : 'scale';
    return <Page title="Every variable" lead={\`All \${entries.length} custom properties the preset "\${label}" resolves to. A theme only has to name what it wants to change; everything else stays at the component default.\`}>
        <Card>
          <CardHeader title="Resolved variables" subheader="What setTheme writes onto the target element" />
          <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell variant="head">variable</TableCell>
                    <TableCell variant="head">group</TableCell>
                    <TableCell variant="head">value</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {entries.map(entry => <TableRow key={entry[0]}>
                      <TableCell>{entry[0]}</TableCell>
                      <TableCell>{groupOf(entry)}</TableCell>
                      <TableCell>{entry[1]}</TableCell>
                    </TableRow>)}
                </TableBody>
              </Table>
          </TableContainer>
        </Card>
      </Page>;
  }
}`,...f.parameters?.docs?.source}}};export{f as AllTokens,v as HowItWorks,T as Palette,C as Scales,j as TypeScale,ie as __namedExportsOrder,oe as default};
